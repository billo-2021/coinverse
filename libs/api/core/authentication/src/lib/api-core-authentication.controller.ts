import { UserCreateDto, UserDto } from '@coinverse/common';
import { Controller, Body, Post, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { GetUser, LocalAuthGuard, Public } from './utils';
import { ApiCoreAuthenticationService } from './api-core-authentication.service';

@Controller('authentication')
export class ApiCoreAuthenticationController {
  constructor(
    private _authService: ApiCoreAuthenticationService
  ) { }

  @Public()
  @Post('signup')
  async signup(@Body() userCreateDto: UserCreateDto) {
    const user = await this._authService.singup(userCreateDto);
    return user;
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(@GetUser() userDto: UserDto) {
    console.log({userDto});
    return this._authService.signin(userDto);
  }
}
