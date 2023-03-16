import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators';
import { BooksService } from './books.service';
import { BookDto } from './dto';

@Controller('book')
export class BooksController {
    constructor(private booksService: BooksService){}

    @Post('add')
    addBook(@Body() dto: BookDto){
        return this.booksService.addBook(dto)
    }

    @Get('all')
    getBooks(){
        return this.booksService.getBooks()
    }

    @Get(':id')
    getBook(@Param('id') id: number){
        return this.booksService.getBook(id)
    }

    @Put(':id')
    editBook(@Param('id') id: number, @Body() dto: BookDto){
        return this.booksService.editBook(id, dto)
    }

    @Delete(':id')
    deleteBook(@Param('id') id: number){
        return this.booksService.deleteBook(id)
    }
}
