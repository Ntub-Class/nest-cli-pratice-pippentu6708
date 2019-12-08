import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { StudentService } from './service/student.service';
import bodyParser = require('body-parser');

@Controller('student')
export class StudentController {
    constructor(private readonly StudentService:StudentService) { }
    @Get()
    getStudent() {
        return this.StudentService.getStudent();
    }
    @Get(":id")
    getIdStudent(@Param("id") id) {
        return this.StudentService.getIdStudent(id);
    }
    @Post()
    postStudent(@Body() body) {
        return this.StudentService.postStudent(body);
    }
    @Put(":id")
    putStudent(@Body() body, @Param("id") id) {
        return this.StudentService.putStudent(body, id);
    }
    @Delete(":id")
    deleteStudent(@Param("id") id) {
        return this.StudentService.deleteStudent(id);
    }
}
