class ColorsPage extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `Colors page!`;
    }
}

customElements.define('colors-page', ColorsPage);