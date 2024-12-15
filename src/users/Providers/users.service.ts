import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../DTOs/get-users-param.dto";
import { AuthService } from "src/auth/Provider/auth.service";
import { Repository } from "typeorm";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../DTOs/create-user.dto";

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>
    ) {}

    public async createUser(createUserDto: CreateUserDto) {
        const existingUser = await this.userRepository.findOne({
            where: {email: createUserDto.email}
        });

        let newUser = this.userRepository.create(createUserDto);
        newUser = await this.userRepository.save(newUser);

        return newUser
    }
    public findAll(getUserParamDto : GetUsersParamDto, limit: number) {
        // const auth = this.authService.isAuth();
        // console.log(auth);
        return [
            {
                id: 1,
                name: "John Doe",
                email: "john@doe.com"
            },
            {
                id: 2,
                name: "Jane Doe",
                email: "jane@dee.com"
            }
        ]
    }

    public findOneById(id: string) {
        return {
            id: 1,
            name: "John Doe",
            email: "john@doe.com"
        }
    }
}