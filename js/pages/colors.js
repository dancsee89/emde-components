class ColorsPage extends HTMLElement {
    allColors = [
        { variableName: '--color-background', value: '#fdfdfd' },
        { variableName: '--color-background-alpha', value: '#333333cc' },
        { variableName: '--color-text-primary', value: '#333' },
        { variableName: '--color-text-invert', value: '#fdfdfd' },
        { variableName: '--color-blue-primary', value: '#4396fb' },
        { variableName: '--color-blue-secondary', value: '#152c70' },
        { variableName: '--color-white', value: '#fff' },
    ];

    constructor() {
        super();
        this.render();
    }

    render = () => {
        const colorTiles = this.allColors.map(color => `
            <figure>
                <svg width="100" height="100">
                    <circle cx="50" cy="50" r="40" fill="${color.value}" />
                </svg>
                <figcaption>${color.variableName} = ${color.value}</figcaption>
            </figure>
        `).join('');
        this.innerHTML = `
            <h2>Colors</h2>
            <div data-page="colors">
                ${colorTiles}
            </div>
        `;
    }
}

customElements.define('colors-page', ColorsPage);