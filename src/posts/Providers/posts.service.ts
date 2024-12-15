import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/Providers/users.service";
import { Repository } from "typeorm";
import { Post } from "../post.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreatePostDto } from "../DTOs/create-posts.dto";

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>,
        private readonly usersService: UsersService
    ) {}
    public async createPost(createPostDto: CreatePostDto)
    {
        let newPost = this.postRepository.create(createPostDto);
        newPost = await this.postRepository.save(newPost);
        return newPost;
    }
    public findAll(userId: string) {
        const user = this.usersService.findOneById(userId);
        console.log(user);
        return `This action returns all posts for user ${userId}`;
    }
}