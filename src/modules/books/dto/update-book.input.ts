import { CreateBookInput } from './create-book.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateBookInput extends PartialType(CreateBookInput) {
  @IsNumber({}, { message: 'id must be a number' })
  @IsNotEmpty({ message: 'id is required' })
  id: number;
}
