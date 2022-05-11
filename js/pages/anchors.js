class AnchorsPage extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render = () => {
        this.innerHTML = `
            <h2>Anchors</h2>
            <p>
                <a href="https://surethisisnotvisited.com" target="_blank">Hello i'm a link</a>
            </p>
            <p>
                <a href="https://google.com" target="_blank">Hello i'm a visited link</a>
            </p>
        `;
    }
}

customElements.define('anchors-page', AnchorsPage);