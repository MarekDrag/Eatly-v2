import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import {
  DeleteObjectCommand,
  DeleteObjectCommandInput,
  PutObjectCommand,
  PutObjectCommandInput,
  PutObjectCommandOutput,
  S3Client,
} from '@aws-sdk/client-s3';

@Injectable()
export class S3Service {
  private region: string;
  private s3: S3Client;

  constructor(private configService: ConfigService) {
    this.region = this.configService.get<string>('S3_REGION');
    this.s3 = new S3Client({
      region: this.region,
      credentials: {
        accessKeyId: this.configService.get<string>('S3_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get<string>('S3_SECRET_ACCESS_KEY'),
      },
    });
  }

  async uploadFile(file: Express.Multer.File, key: string) {
    const bucket = this.configService.get<string>('S3_BUCKET');
    const input: PutObjectCommandInput = {
      Body: file.buffer,
      Bucket: bucket,
      Key: key,
      ContentType: file.mimetype,
      ACL: 'public-read',
    };

    try {
      const response: PutObjectCommandOutput = await this.s3.send(new PutObjectCommand(input));
      if (response.$metadata.httpStatusCode === 200) {
        return `https://${bucket}.s3.${this.region}.amazonaws.com/${key}`;
      }
      throw new Error('Image not saved to s3!');
    } catch (err) {
      throw new Error(`Failed to add file to S3 ${err}`);
    }
  }

  async deleteFile(imgUrl: string) {
    const urlSplitted = imgUrl.split('/');
    const key = urlSplitted[urlSplitted.length - 1];

    const bucket = this.configService.get<string>('S3_BUCKET');
    const input: DeleteObjectCommandInput = {
      Bucket: bucket,
      Key: key,
    };

    try {
      const response = await this.s3.send(new DeleteObjectCommand(input));
      if (response.$metadata.httpStatusCode !== 204) {
        throw new Error('Image not deleted from s3');
      }
    } catch (err) {
      throw new Error(`Failed to delete file from S3 ${err}`);
    }
  }
}
