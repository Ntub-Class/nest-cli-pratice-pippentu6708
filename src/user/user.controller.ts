import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { UserService } from "./user.service";


@Controller('user')
export class UserController {
    constructor(private readonly userservice: UserService) { }
    @Get()
    getUser() {
        return this.userservice.getUser();
    }
    @Get(":id")
    getIdUser(@Param("id") id) {
        return this.userservice.getIdUser(id);
    }
    @Post()
    postUser(@Body() body) {
        return this.userservice.postUser(body);
    }
    @Put(":id")
    putUser(@Body() body, @Param("id") id) {
        return this.userservice.putUser(body, id);
    }
    @Delete(":id")
    deleteUser(@Param("id") id) {
        return this.userservice.deleteUser(id)
    }
}
