import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { ApiCoreAdministrationService } from '@coinverse/api/core/administration';

import { AuthenticationDto } from './dto';

import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PasswordUtil, UserMapper } from '@coinverse/api/common';
import { UserCreateDto, UserDto } from '@coinverse/common';
import { AuthJwtToken } from './models';

@Injectable()
export class ApiCoreAuthenticationService {
    constructor(
        private readonly _adminService: ApiCoreAdministrationService,
        private readonly _jwtService: JwtService
    ) { }

    async validateUser(authDto: AuthenticationDto): Promise<UserDto | null> {
        const user = await this._adminService.getUserCredentialsByEmail(authDto.email);

        if(user) {
            const validPassword = PasswordUtil.validatePassword(authDto.password, {salt: user.salt, hash: user.password });

            if(validPassword) {
                return UserMapper.fromUserCredentialsDtoToUserDto(user);
            }
        }

        return null;
    }

    async singup(userCreateDto: UserCreateDto): Promise<UserDto> {
        const saltHash = 
            PasswordUtil.generatePasswordHash(userCreateDto.password);
        userCreateDto.password = saltHash.hash;
        
        const userCreateCredentialsDto = UserMapper.fromUserCreateDtoToUserCredentialsCreateDto(userCreateDto, saltHash.salt);
        try {
            const user = await this._adminService.createUser(userCreateCredentialsDto);
            return user;
        }
        catch(error) {
            if(error instanceof PrismaClientKnownRequestError) {
                if(error.code === 'P2002') {
                    throw new ForbiddenException('User already exists');
                }
            }
        }
    }

    async signin(userDto: UserDto) {
        return this.generateToken(userDto.id, userDto.emailAddress);
    }

    async generateToken(userId: number, email: string) : Promise<AuthJwtToken> {
        const payload = { sub: userId, email };
        return {
            access_token: this._jwtService.sign(payload),
        };
    }
}
