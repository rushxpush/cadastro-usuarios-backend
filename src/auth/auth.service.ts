import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import { ValidateDto } from './dto/validate.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(name: string, password: string) {
    const user = await this.usersService.findByName(name);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user._id, name: user.name };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async validateToken(validateDto: ValidateDto) {
    try {
      await this.jwtService.verifyAsync(validateDto.token, {
        secret: jwtConstants.secret,
      });
      return { validation_status: true };
    } catch {
      return { validation_status: false };
    }
  }
}
