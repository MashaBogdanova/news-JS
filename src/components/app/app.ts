import { AppController } from '../controller/controller';
import { AppView } from '../view/appView';
import { INewsRes, ISourcesRes } from "./types";

export class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        document
            .querySelector('.sources')
            .addEventListener('click', (e: Event) =>
              this.controller.getNews(e, (data: INewsRes) => this.view.drawNews(data)));
        this.controller.getSources((data: ISourcesRes) => this.view.drawSources(data));
    }
}
