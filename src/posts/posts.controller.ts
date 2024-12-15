import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './Providers/posts.service';
import { CreatePostDto } from './DTOs/create-posts.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService){}
    @Get('/:userId?')
    public getPosts(@Param('userId') userId: string) {
        return this.postsService.findAll(userId);
    }
    @Post()
    public createPost(@Body() createPostDto: CreatePostDto)
    {
        return this.postsService.createPost(createPostDto);
    }
}
