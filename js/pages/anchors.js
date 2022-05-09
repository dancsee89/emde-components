class AnchorsPage extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `Anchors page!`;
    }
}

customElements.define('anchors-page', AnchorsPage);