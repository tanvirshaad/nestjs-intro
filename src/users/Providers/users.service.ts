import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../DTOs/get-users-param.dto";
import { AuthService } from "src/auth/Provider/auth.service";

@Injectable()
export class UsersService {
    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ) {}
    public findAll(getUserParamDto : GetUsersParamDto, limit: number) {
        const auth = this.authService.isAuth();
        console.log(auth);
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