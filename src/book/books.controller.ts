import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('book')
export class BooksController {
    constructor(private booksService: BooksService){}

    @Post()
    createBook(){
        return this.booksService.createBook()
    }

    @Get()
    getAllBooks(){
        return this.booksService.getAllBooks()
    }

    @Get()
    getBook(){
        return this.booksService.getBook()
    }

    @Put('update')
    updateBook(){
        return this.booksService.updateBook()
    }

    @Delete('delete')
    deleteBook(){
        return this.booksService.deleteBook()
    }
}
