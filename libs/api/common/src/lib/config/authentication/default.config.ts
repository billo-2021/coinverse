import * as CryptoJS from 'crypto-js';
import { AuthenticationConfiguration } from '../../models/authentication-configuration.model';

import { readFileSync } from 'fs';
import * as path from 'path';

const readKeyPair = () => {
    let publicKey = '';
    let privateKey = '';

    try {
        publicKey = readFileSync(path.resolve(__dirname, '../../certs/public.pem')).toString();
        privateKey = readFileSync(path.resolve(__dirname, '../../certs/private.pem')).toString();

    }
    catch (error) {
        console.error(error);
    }

    return { public: publicKey, private: privateKey };
}

const keyPair = readKeyPair();

export const config: AuthenticationConfiguration = {
    passwordHash: {
        keySize: 64,
        iterations: 1000,
        hasher: CryptoJS.algo.SHA512
    },
    keyPair: {
        public: keyPair.public,
        private: keyPair.private
    },
    environment: process.env.NODE_ENV || 'developemt'
}