class HomePage extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <h1>Hello Components!</h1>
        `;
    }
}

customElements.define('home-page', HomePage);