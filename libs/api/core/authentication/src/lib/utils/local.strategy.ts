import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { ApiCoreAuthenticationService } from '../api-core-authentication.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private _authService: ApiCoreAuthenticationService) {
        super({ usernameField: 'email'});
    }

    async validate(email: string, password: string) {
        const user = this._authService.validateUser({email, password});
        if(!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}