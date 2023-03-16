import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { BookDto } from "./dto";

@Injectable({})
export class BooksService {
    constructor(private prisma: PrismaService){}

    async addBook(dto: BookDto) {
        const book = await this.prisma.book.create({
            data: {
                title: dto.title,
                description: dto.description,
                authorId: +dto.authorId,
            }
        })

        return book;
    }

    async getBooks(){
        const books = await this.prisma.book.findMany({
            select: {
                id: true,
                title: true,
                description: true,
                author: {
                    select: {
                        nickname: true
                    }
                }
            }
        })

        return books;
    }

    async getBook(bookId: number){
        const book = await this.prisma.book.findUnique({
            where: {
                id: +bookId
            },
            select: {
                id: true,
                title: true,
                description: true,
                author: {
                    select: {
                        nickname: true
                    }
                }
            }
        })

        return book;
    }

    async editBook(bookId: number, dto: BookDto){
        const book = await this.prisma.book.update({
            where: {
                id: +bookId
            },
            data: {
                description: dto.description
            }
        })

        return book;
    }

    async deleteBook(bookId: number){
        await this.prisma.book.delete({
            where: {
                id: +bookId
            }
        })

        return this.prisma.book.findMany()
    }
}