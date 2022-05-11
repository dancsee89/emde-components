class OthersPage extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render = () => {
        this.innerHTML = `
            <div>
                <span>just a span</span>
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
            <p>and dont forget form items - input, select etc</p>
        `;
    }
}

customElements.define('others-page', OthersPage);