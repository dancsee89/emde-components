class ButtonsPage extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render = () => {
        this.innerHTML = `
            <h2>Buttons</h2>
            <p>
                <button>Hello i'm a button</button>
            </p>
        `;
    }
}

customElements.define('buttons-page', ButtonsPage);