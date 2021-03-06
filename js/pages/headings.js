class HeadingsPage extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render = () => {
        this.innerHTML = `
            <h2>Headings</h2>
            <h1>Heading level 1</h1>
            <h2>Heading level 2</h2>
            <h3>Heading level 3</h3>
            <h4>Heading level 4</h4>
            <h5>Heading level 5</h5>
            <h6>Heading level 6</h6>
        `;
    }
}

customElements.define('headings-page', HeadingsPage);