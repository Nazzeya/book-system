import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Delete, Put } from '@nestjs/common/decorators';
import { AuthorsService } from './authors.service';
import { AuthorDto } from './dto';

@Controller('author')
export class AuthorsController {
    constructor(private authorsService: AuthorsService){}

    @Post('add')
    addAuthor(@Body() dto: AuthorDto){
        return this.authorsService.addAuthor(dto)
    }

    @Get('all')
    getAll() {
        return this.authorsService.getAll();
    }

    @Get(':id')
    getAuthor(@Param('id') id: number){
        return this.authorsService.getAuthor(+id);
    }

    @Put(':id')
    editAuthor(@Param('id') id: number, @Body() dto:AuthorDto){
        return this.authorsService.editAuthor(+id, dto)
    }

    @Delete(':id')
    deleteAuthor(@Param('id') id: number){
        return this.authorsService.deleteAuthor(+id)
    }
}
