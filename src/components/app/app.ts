import { AppController } from '../controller/controller';
import { AppView } from '../view/appView';

export class App {
    // todo: Сейчас автоматически считывает? Как лучше сделать?
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
              // todo: Как узнать тип data?
              this.controller.getNews(e, (data) => this.view.drawNews(data)));
        // todo: Как узнать тип data?
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}
