import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { BooksService } from './books.service';
import { BookDto } from './dto';

@Controller('book')
export class BooksController {
    constructor(private booksService: BooksService){}

    @Post('add')
    addBook(@Body() dto: BookDto){
        return this.booksService.addBook(dto, +dto.authorId)
    }
}
