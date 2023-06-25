import { ClassSerializerInterceptor, Module } from '@nestjs/common';

import { KnexModule } from 'nestjs-knex';

import postgresConfig from './db/postgresConfig';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { UsersPasswordModule } from './modules/usersPassword';

@Module({
  imports: [KnexModule.forRoot({ config: postgresConfig }), AuthModule, UsersPasswordModule, UsersModule],
  providers: [
    {
      provide: 'APP_INTERCEPTOR',
      useClass: ClassSerializerInterceptor,
    },
    // {
    //   provide: 'APP_PIPE',
    //   useValue: new ValidationPipe({ transform: true, whitelist: true }),
    // },
  ],
})
export class AppModule {}
