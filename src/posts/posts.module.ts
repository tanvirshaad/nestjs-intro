import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './Providers/posts.service';
import { UsersService } from 'src/users/Providers/users.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [UsersModule],
})
export class PostsModule {}
