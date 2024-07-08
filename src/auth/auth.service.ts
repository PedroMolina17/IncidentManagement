import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { authDto } from './dto/auth.dto';
import { loginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private UsersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const users = await this.UsersService.findAll({ email });
    if (users.length > 0) {
      const user = users[0];
      if (bcrypt.compareSync(pass, user.password)) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  //   async register(email: string, pass: string) {
  //     const hashedPassword = bcrypt.hashSync(pass, 10);
  //     const user = await this.usersService.createUser(email, hashedPassword);
  //     return user;
  //   }
}
