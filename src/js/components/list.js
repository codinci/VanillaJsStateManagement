import Component from "../lib/component.js";
import store from "../store/index.js";

export class List extends Component {

    //Pass our store instance and the HTML element up to the parent component
    constructor(){
        super({
            store,
            element : document.querySelector('.js-items')
        });
    }

    /**
     * React to state changes and render the components HTML
     *
     * @returns {void}
     */
    render() {
        let self = this;

        //If there are no items to show, render a little status instead
        if(store.state.items.length === 0){
            self.element.innerHTML =`<p class= "no-items">You've done nothing yet &#x1</p>`;
            return;
        }

        //Loop the items and generate a list of elements
        self.element.innerHTML = `
            <ul class="app__items">
                ${store.items.state.map(item => {
                    return `
                        <li>${item}<button aria-label="Delete this item> x <button></li>
                    `
                }).join('')}
                </ul>
            `;

        //Find all the buttons in the list and when they are clicked, we dispatch  a
        //'clearItem' action which we pass the current item's index to
        self.element.querySelectorAll('button').forEach((button, index) => {
            button.addEventListener('click', () => {
                store.dispatch('clearItem', {index});
            });
        });
    }
};