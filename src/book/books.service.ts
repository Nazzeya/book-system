import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { BookDto } from "./dto";

@Injectable({})
export class BooksService {
    constructor(private prisma: PrismaService){}

    async addBook(dto: BookDto, id: number) {
        const book = await this.prisma.book.create({
            data: {
                title: dto.title,
                description: dto.description,
                authorId: id,
            }
        })
    }
}