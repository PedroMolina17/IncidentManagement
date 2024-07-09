import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';
import { UserGuard } from './user.guard';
import { AdminGuard } from './admin.guard';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '500s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, UserGuard, AdminGuard],
})
export class AuthModule {}
