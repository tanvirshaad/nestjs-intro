import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './Providers/posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService){}
    @Get('/:userId?')
    public getPosts(@Param('userId') userId: string) {
        return this.postsService.findAll(userId);
    }
}
