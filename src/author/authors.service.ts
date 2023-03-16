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

        return author;
    }

    async getAll() {
        const authors = await this.prisma.author.findMany({
            select: {
            id: true,
            nickname: true,
            books: true
            }
        });
        return authors;
    }

    async getAuthor(authorId: number) {
        const author = await this.prisma.author.findUnique({
            where: {
                id: authorId,
            },
            select: {
                nickname: true
            }
        })

        return author;
    }

    async editAuthor(authorId: number, dto: AuthorDto) {
        const author = await this.prisma.author.update({
            where: {
                id: authorId
            },
            data: {
                firstName: dto.firstName,
                lastName: dto.lastName,
                nickname: dto.nickname
            }
        })

        return author;
    }

    async deleteAuthor(authorId: number) {
        await this.prisma.author.delete({
            where: {
                id: authorId
            }
        })

        return this.prisma.author.findMany()
    }
}