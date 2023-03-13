import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthorDto } from "./dto";

@Injectable({})
export class AuthorsService {
    constructor(private prisma: PrismaService){}

    async addAuthor(dto: AuthorDto){
        const author = await this.prisma.author.create({
            data: {
                firstName: dto.firstName,
                lastName: dto.lastName,
                nickname: dto.nickname
            }
        })
    }
}