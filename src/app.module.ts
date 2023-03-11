import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './book/books.controller';
import { AuthorsController } from './author/authors.controller';
import { BooksService } from './book/books.service';
import { AuthorsService } from './author/authors.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController, BooksController, AuthorsController],
  providers: [AppService, BooksService, AuthorsService, PrismaService]
})
export class AppModule {}
