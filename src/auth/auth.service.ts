// import { UsersService } from './../users/users.service';
// import { Injectable } from '@nestjs/common';
// import { authDto } from './dto/auth.dto';
// import { loginDto } from './dto/login.dto';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcryptjs';

// @Injectable()
// export class AuthService {
//   constructor(
//     private UsersService: UsersService,
//     private jwtService: JwtService,
//   ) {}

//   async validateUser(validateUser) {
//     const user = await this.UsersService.findOneByEmail(validateUser.email);
//     if (user && (await bcrypt.compare(validateUser.pass, user.password))) {
//       const { password, ...result } = user;
//       return result;
//     }
//     return null;
//   }

//   async login(user: any) {
//     const payload = { username: user.email, sub: user.id };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }
// }
