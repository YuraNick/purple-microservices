import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/user.model';
import { UserReposytory } from './repositories/user.repository';

@Module({
  imports: [MongooseModule.forFeature([
    { name: User.name, schema: UserSchema }
  ])],
  providers: [UserReposytory],
})

export class UserModule {}
