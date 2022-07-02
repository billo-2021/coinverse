import * as CryptoJS from 'crypto-js';
import { SaltHash } from '../models/salt-hash.model';
import { authenticationConfig } from '../config';

export class PasswordUtil {
    static generatePasswordHash(password: string): SaltHash {
        const salt = CryptoJS.lib.WordArray.random(32).toString();
        const hashedPassword = CryptoJS.PBKDF2(password, salt, authenticationConfig.passwordHash).toString();

        return {
            salt: salt,
            hash: hashedPassword
        }
    }

    static validatePassword(password: string, passwordHash: SaltHash): boolean {
        const verifyHash = CryptoJS.PBKDF2(password, passwordHash.salt, authenticationConfig.passwordHash).toString();

        return passwordHash.hash === verifyHash;
    }
}