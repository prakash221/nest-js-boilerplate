import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {
  userId: string;
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsString({ message: 'Name is required and must be a string' })
  name: string;

  @IsString({ message: 'Address must be a string' })
  address: string;

  @IsString({ message: 'Age must be a number' })
  age: number;
}
