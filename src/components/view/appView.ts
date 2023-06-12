import { News } from './news/news';
import { Sources } from './sources/sources';
import { IArticle, INewsRes, ISource, ISourcesRes } from "../app/types";

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: INewsRes): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values as Array<IArticle>);
    }

    drawSources(data: ISourcesRes): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values as Array<ISource>);
    }
}
