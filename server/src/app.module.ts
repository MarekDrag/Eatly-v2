import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 3306,
      username: 'Marek',
      password: 'hej123',
      database: 'test',
      models: [],
    }),
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
