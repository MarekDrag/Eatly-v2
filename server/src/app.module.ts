import { ClassSerializerInterceptor, Module, ValidationPipe } from '@nestjs/common';

import { KnexModule } from 'nestjs-knex';

import postgresConfig from './db/postgresConfig';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [KnexModule.forRoot({ config: postgresConfig }), UsersModule, AuthModule],
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
