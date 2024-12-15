import { Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../DTOs/get-users-param.dto";

@Injectable()
export class UsersService {
    public findAll(getUserParamDto : GetUsersParamDto, limit: number) {
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
}