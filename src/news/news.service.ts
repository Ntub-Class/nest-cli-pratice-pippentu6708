import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    getNews() {
        return "GetNews";
    }
    getIdNews(id: string) {
        return "GetIdNews";
    }
    postNews(body: any) {
        return "PostNews";
    }
    putNews(body: any, id: string) {
        return "PutNews";
    }
    deleteNews(id: string) {
        return "DeleteNews";
    }
}
