import { Component } from './component.js';
import { series } from '../models/series.js';

export interface moviesfilmI {
  poster: string;
  name: string;
  creator: string;
  year: number;
  score: number;
  watched: boolean;
}

export class Whatched extends Component {
  template!: string;
  moviesFilm: Array<moviesfilmI>;
  constructor(public selector: string) {
    super();

    this.moviesFilm = series;

    this.manageComponent();
  }

  createTemplate() {
    let template = `<section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list"> `;
    this.moviesFilm.forEach((item: moviesfilmI) => {
      if (item.watched) {
        template += `<li class="serie">
                <img
                  class="serie__poster"
                  src=${item.poster}
                  alt="The Sopranos poster"
                />
                <h4 class="serie__title">${item.name}</h4>
                <p class="serie__info">${item.creator} ${item.year}</p>
                <ul class="score">
                  <li class="score__star">${item.score}
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete">${item.watched}</i>
              </li>`;
      }
    });

    template += `</ul>
          </section>
        </section>`;
    return template;
  }

 manageComponent() {
  
    this.template = this.createTemplate();
    this.renderAdd(this.selector, this.template);
    setTimeout(() => {
      document
        .querySelectorAll('.icon--delete')
        .forEach((item) =>
          item.addEventListener('click', this.handlerEraser.bind(this))
        );
    }, 100);
  }
}
handlerEraser(ev: Event) {
    const deletedID = (ev.target as HTMLElement).id;
    this.series = this.series.filter(
      (item) => item.id !== +(deletedID as string)
    );
    this.storeService.setStorage(this.series);
    this.manageComponent();
  }
