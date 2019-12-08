import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { NewsService } from "./news.service";


@Controller('news')
export class NewsController {

    constructor(private readonly newsService: NewsService) { }
    @Get()
    getNews() {
        return this.newsService.getNews();
    }
    @Get(":id")
    getIdNews(@Param("id") id) {
        return this.newsService.getIdNews(id);
    }
    @Post()
    postNews(@Body() body) {
        return this.newsService.postNews(body);
    }
    @Put(":id")
    putNews(@Body() body, @Param("id") id) {
        return this.newsService.putNews(body, id);
    }
    @Delete(":id")
    deleteNews(@Param("id") id) {
        return this.newsService.deleteNews(id);
    }
}
