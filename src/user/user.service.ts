import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUser() {
        return "GetUser OK";
    }
    getIdUser(id: string) {
        return "GetIdUser OK";
    }
    postUser(body: any) {
        return "PostUser OK";
    }
    putUser(body: any, id: string) {
        return "PutUser OK";
    }
    deleteUser(id: string) {
        return "DeleteUser OK";
    }
}
