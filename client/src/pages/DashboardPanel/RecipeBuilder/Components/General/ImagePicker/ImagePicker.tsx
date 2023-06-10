import { ChangeEvent, useState } from 'react';

import { Typography } from '@ui/Typography';

import { EmptyImage, FileInput, FileLabel, FileText, UploadedImage } from './ImagePicker.styles';

export const ImagePicker = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImageUrl(file ? URL.createObjectURL(file) : null);
  };

  return (
    <>
      <FileLabel htmlFor="image">
        <FileText variant="button" color="primary.contrastText">
          Upload Image
        </FileText>
        <FileInput type="file" accept="image/*" id="image" onChange={handleImageUpload} />
      </FileLabel>
      {!imageUrl && (
        <EmptyImage>
          <Typography variant="h6">Image</Typography>
        </EmptyImage>
      )}
      {imageUrl && <UploadedImage src={imageUrl} alt="Uploaded image" />}
    </>
  );
};
