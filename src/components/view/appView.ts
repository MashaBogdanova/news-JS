import { News } from './news/news';
import { Sources } from './sources/sources';

export class AppView {
    // todo: Сейчас автоматически считывает? Как лучше сделать?
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }
    // todo: Как узнать тип data
    drawNews(data: any): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }
    // todo: Как узнать тип data
    drawSources(data: any): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}
