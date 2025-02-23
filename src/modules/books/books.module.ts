import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../database/entities/user.entity';
import { BookEntity } from '../../database/entities/book.entity';
import { UserRepository } from '../../database/repositories/user.repository';
import { BookRepository } from '../../database/repositories/book.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, BookEntity])],
  providers: [BooksResolver, BooksService, UserRepository, BookRepository],
})
export class BooksModule {}
