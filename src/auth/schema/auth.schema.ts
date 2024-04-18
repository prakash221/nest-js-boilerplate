import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {
    IsString,
    IsEmail,
    IsMongoId,
    MinLength,
} from 'class-validator';

@Schema()
export class Auth {
    @Prop({ required: true, unique: true })
    @IsMongoId({ message: 'Invalid user ID' }) // Assuming userId is a Mongoose ID
    userId: string;

    @Prop({ required: true })
    @IsEmail({}, { message: 'Invalid email format' })
    @MinLength(3, { message: 'Email must be at least 3 characters long' })
    email: string;

    @Prop({ required: true })
    @IsString({ message: 'Password is required and must be a string' })
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    hash: string;

    @Prop({ required: true })
    @IsString({ message: 'Role is required and must be a string' })
    role: string;


    @Prop()
    @IsString({ message: 'Refresh token must be a string' })
    hashedRt?: string

}

export const UserSchema = SchemaFactory.createForClass(Auth);
