import * as CryptoJS from 'crypto-js';

export interface AuthenticationConfiguration {
    passwordHash: KDFOption,
    keyPair: {
        public: string,
        private: string
    },
    environment: string
}

type Hasher = {
    blockSize: number,
    reset(): void,
    update(messageUpdate: CryptoJS.lib.WordArray | string): Hasher,
    finalize(messageUpdate?: CryptoJS.lib.WordArray | string): CryptoJS.lib.WordArray
};

type HasherStatic = {
    create(cfg?: object): Hasher;
};

type KDFOption = {
    keySize?: number | undefined;
    hasher?: HasherStatic | undefined;
    iterations?: number | undefined;
}