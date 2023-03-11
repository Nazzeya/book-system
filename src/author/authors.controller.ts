import { Body, Controller, Post } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorDto } from './dto';

@Controller('author')
export class AuthorsController {
    constructor(private authorsService: AuthorsService){}

    @Post('add')
    addAuthor(@Body() dto: AuthorDto){
        return this.authorsService.addAuthor(dto)
    }
}
