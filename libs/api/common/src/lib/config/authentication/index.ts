import { config as defaultConfig } from './default.config';
import { config as developmentConfig } from './develop.config';
import { config as sitConfig } from './sit.config';
import { config as productionConfig } from './production.config';

export const authenticationConfig = ({
    'development': developmentConfig,
    'sit': sitConfig,
    'production': productionConfig
})[process.env.NODE_ENV] ?? defaultConfig;