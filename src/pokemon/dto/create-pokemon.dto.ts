import { Type } from "class-transformer";
import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    @IsInt()
    @IsPositive()
    @Min(1)
    @Type(() => Number)
    no: number;

    @IsString()
    @MinLength(1)
    name: string;
}

