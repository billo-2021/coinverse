import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

import { IdentifiableDto, CountryDto, CurrencyDto } from "./"

export class UserCreateDto {
    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    emailAddress: string;

    @IsNumber()
    @IsNotEmpty()
    roleId: number;

    @IsString()
    @IsNotEmpty()
    phoneNumber: string;

    @IsBoolean()
    @IsNotEmpty()
    enabled: boolean;

    @IsNumber()
    countryId: number;

    @IsNumber()
    preferredCurrencyId: number;
};

export class UserCreateCredentialsDto extends UserCreateDto {
    salt: string;
}

export class UserCredentialsDto implements IdentifiableDto {
    id: number;
    password: string;
    salt: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    userRole: UserRoleDto;
    phoneNumber: string;
    enabled: boolean;
    country: CountryDto;
    preferredCurrency: CurrencyDto;
}

export class UserDto implements IdentifiableDto {
    id: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
    userRole: UserRoleDto;
    phoneNumber: string;
    enabled: boolean;
    country: CountryDto;
    preferredCurrency: CurrencyDto;
}

export class UserRoleCreateDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}

export class UserRoleDto implements IdentifiableDto {
    id: number;
    name: string;
    description: string;
}