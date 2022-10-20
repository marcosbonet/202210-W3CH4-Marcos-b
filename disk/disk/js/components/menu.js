import { Component } from './component.js';
export class Menu extends Component {
    constructor(selector) {
        super();
        this.selector = selector;
        this.menuOptions = [
            { path: '', label: 'Inicio' },
            { path: '', label: 'Tareas' },
            { path: '', label: 'Nosotros' },
        ];
        this.manageComponent();
    }
    createTemplate() {
        let template = '<nav><ul>';
        this.menuOptions.forEach((item) => (template += `<li><a href="${item.path}">${item.label} </a></li>
            `));
        template += '</ul></nav>';
        return template;
    }
    manageComponent() {
        this.template = this.createTemplate();
        this.renderOuter(this.selector, this.template);
    }
}
