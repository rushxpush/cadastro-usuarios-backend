import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from '../common/decorators/public.decorator';
import { ValidateDto } from './dto/validate.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.name, signInDto.password);
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('validate')
  validateToken(@Body() validateDto: ValidateDto) {
    return this.authService.validateToken(validateDto);
  }
}
