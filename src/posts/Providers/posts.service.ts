import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/Providers/users.service";

@Injectable()
export class PostsService {
    constructor(
        private readonly usersService: UsersService
    ) {}
    public findAll(userId: string) {
        const user = this.usersService.findOneById(userId);
        console.log(user);
        return `This action returns all posts for user ${userId}`;
    }
}