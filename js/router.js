class EmdeRouter extends HTMLElement {
    constructor() {
        super();
        this.setHashChangeListeners();
    }

    loadPageByHash = () => {
        if (window.location.hash) {
            const componentName = window.location.hash.split('#')[1];
            this.innerHTML = `<${componentName}-page></${componentName}-page>`;
            document.title = `${componentName} - Emde Components`;
            return;
        }
        this.innerHTML = `<home-page></home-page>`;
    };

    setHashChangeListeners = () => {
        window.addEventListener('load', this.loadPageByHash);
        window.addEventListener('hashchange', this.loadPageByHash);
    }
}

customElements.define('emde-router', EmdeRouter);