class OthersPage extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <div>
                <span>just a span</span>
                <p>
                    <button>Hello Push me</button>
                    <a href="https://google.com" target="_blank">Hello i'm a visited link</a>
                    <a href="https://surethisisnotvisited.com" target="_blank">Hello i'm a link</a>
                </p>
                <p>I'm just a regular p</p>
                <ul>
                    <li>list item 1</li>
                    <li>list item 2</li>
                    <li>list item 3</li>
                </ul>
                <ol>
                    <li>list item 1</li>
                    <li>list item 2</li>
                    <li>list item 3</li>
                </ol>
            </div>
            <section>section</section>
            <table>i need a table too</table>
        `;
    }
}

customElements.define('others-page', OthersPage);