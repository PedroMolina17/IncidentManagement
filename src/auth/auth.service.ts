import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private UsersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(data: loginDto) {
    const users = await this.UsersService.findAll({ email: data.email });
    if (users.length > 0) {
      const user = users[0];
      if (bcrypt.compareSync(data.password, user.password)) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      email: user.email,
      sub: user.id,
      role: user.type_user_id,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
