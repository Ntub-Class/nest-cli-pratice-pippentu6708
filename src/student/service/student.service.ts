import { Injectable } from '@nestjs/common';


@Injectable()
export class StudentService {
    getStudent() {
        return "GetStudent OK";
    }
    getIdStudent(id: string) {
        return "GetIdStudent OK";
    }
    postStudent(body: any) {
        return "PostStudent OK";
    }
    putStudent(body: any, id: string) {
        return "PutStudent OK"
    }
    deleteStudent(id: string) {
        return "DeleteStudent OK"
    }
}
