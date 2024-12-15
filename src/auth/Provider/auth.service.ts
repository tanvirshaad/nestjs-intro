import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/Providers/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UsersService))
        private readonly usersService: UsersService
    ) {}
    public login(email:string, password: string, id:string) {
        const users = this.usersService.findOneById('1');
        return "sample"
    }
    public isAuth() {
        return true;
    }
}
