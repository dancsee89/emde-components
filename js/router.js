class EmdeRouter extends HTMLElement {
    constructor() {
        super();
        this.setHashChangeListeners();
    }

    loadPageByHash = () => {
        if (window.location.hash) {
            const componentName = window.location.hash.split('#')[1];
            this.innerHTML = `<${componentName}-page></${componentName}-page>`;
            document.title = `${componentName.charAt(0).toUpperCase() + componentName.slice(1)} - Emde Components`;
            this.updateActiveNavItem(componentName);
            return;
        }
        this.innerHTML = `<home-page></home-page>`;
    };

    setHashChangeListeners = () => {
        window.addEventListener('load', this.loadPageByHash);
        window.addEventListener('hashchange', this.loadPageByHash);
    }

    updateActiveNavItem = (componentName) => {
        document.querySelectorAll('[id|=nav]').forEach(element => {
            if (element.id === `nav-${componentName}`) {
                element.setAttribute('data-active', true);
                return;
            }

            element.setAttribute('data-active', false);
        });
    };
}

customElements.define('emde-router', EmdeRouter);