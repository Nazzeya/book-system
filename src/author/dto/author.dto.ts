import { IsNotEmpty, IsString } from "class-validator";

export interface AuthorDto {
    firstName: string;
    lastName: string;
}