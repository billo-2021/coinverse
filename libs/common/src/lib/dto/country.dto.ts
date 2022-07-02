import { IsNotEmpty, IsString } from "class-validator";
import { IdentifiableDto } from "./";

export class CountryCreateDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    code: string;

    @IsString()
    @IsNotEmpty()
    phoneCode: string;
}

export class CountryDto implements IdentifiableDto {
    id: number;
    name: string;
    code: string;
    phoneCode: string;
}