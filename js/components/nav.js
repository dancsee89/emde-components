import menuItems from "../config.js";

class EmdeNavComponent extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        const menu = menuItems.map(item => `<li><a href="${item.url}">${item.name}</a></li>`).join('');
        this.innerHTML = `
            <nav>
                <ul>
                    ${menu}
                </ul>
            </nav>
        `;
    }
}

customElements.define('emde-nav', EmdeNavComponent);