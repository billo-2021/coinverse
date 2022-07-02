import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

import { authenticationConfig } from '@coinverse/api/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: authenticationConfig.keyPair.private,
            algorithms: ['RS256']
        });
    }

    async validate(payload: { sub: string, email: string }) {
        return { sub: payload.sub, email: payload.email };
    }
}