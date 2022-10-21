import { Component } from './component.js';

export class Main extends Component {
  template: string;
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.renderAdd(this.selector, this.template);
  }
  createTemplate() {
    return `
           <main class="main">
      <section class="series">
        <h2 class="section-title">Series list</h2>
    </main>
        `;
  }
}
