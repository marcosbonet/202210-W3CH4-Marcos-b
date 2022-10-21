import { Component } from './component.js';
import { Whatched } from './menu.js';

export class Header extends Component {
  template: string;
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.renderAdd(this.selector, this.template);
    new Whatched('header>slot');
  }
  createTemplate() {
    return `
         <header>
           
        </header>
        `;
  }
}
