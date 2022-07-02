import { IsNotEmpty, IsNotEmptyObject, IsObject, IsString } from "class-validator";
import { IdentifiableDto } from "./";

export class CurrencyTypeCreateDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}

export class CurrencyCreateDto {
    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsObject()
    @IsNotEmptyObject()
    currencyType: CurrencyTypeCreateDto;
}

export class CurrencyDto implements IdentifiableDto {
    id: number;
    code: string;
    name: string;
    description: string;
    currencyType: CurrencyTypeDto
}

export class CurrencyTypeDto implements IdentifiableDto {
    id: number;
    name: string;
    description: string;
}