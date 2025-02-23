import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { BookRepository } from '../../database/repositories/book.repository';
import { UserRepository } from '../../database/repositories/user.repository';
import { BookEntity } from '../../database/entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    private readonly bookRepository: BookRepository,
    private readonly userRepository: UserRepository,
  ) {}
  async create(createBookInput: CreateBookInput) {
    const exitUser = await this.userRepository.findOneBy({
      id: createBookInput.userId,
    });

    if (!exitUser) {
      throw new BadRequestException('Author not found');
    }

    const exitBook = await this.bookRepository.findOneBy({
      title: createBookInput.title,
      userId: createBookInput.userId,
    });

    if (exitBook) {
      throw new BadRequestException('Book already exists');
    }

    return await this.bookRepository.save(createBookInput);
  }

  async findAll(): Promise<BookEntity[]> {
    return await this.bookRepository.find({ relations: ['author'] });
  }

  async findOne(id: number): Promise<BookEntity> {
    const existBook = await this.bookRepository.findOne({
      where: { id },
      relations: ['author'],
    });
    if (!existBook) {
      throw new BadRequestException('Book not found');
    }
    return existBook;
  }

  async update(updateBookInput: UpdateBookInput) {
    const existingBook = await this.bookRepository.findOneBy({
      id: updateBookInput.id,
    });
    if (!existingBook) {
      throw new BadRequestException('Book not found');
    }

    return this.bookRepository.save({ ...existingBook, ...updateBookInput });
  }

  async remove(id: number) {
    const existingBook = await this.bookRepository.findOneBy({ id });
    if (!existingBook) {
      throw new BadRequestException('Book not found');
    }

    return await this.bookRepository.softDelete(existingBook);
  }
}
