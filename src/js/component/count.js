import Component from "../lib/component.js";
import Store from "../store/store.js";

export default class Count extends Component {
    constructor() {
        super({
            Store,
            element: document.querySelector('.js-count')
        });
    }

    /**
     * React to state changes and render the component's HTML
     *
     * @returns {void}
     */
    render() {
        let suffix = store.state.items.length !== 1 ? 'S' : '';
        let emoji = store.state.items.length > 0 ? '&#x1f64c;' : '&#x1f622;';

        this.element.innerHTML = `
            <small>You've done</small>
            ${store.state.items.length}
            <small>thing${suffix} today${emoji}</small>
        `;
    }
}