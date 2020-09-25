import Component, { svg, css, unsafeSVG } from '../../libs/Component'

export default class BaseIcon extends Component {
    static get properties() {
        return {
            name: { type: String, reflect: true },
            href: { type: String, reflect: true },
            spin: { type: Boolean, reflect: true },
        }
    }

    constructor(sprite = '') {
        super()
        this.name = ''
        this.href = ''
        this.spin = false
        this.sprite = sprite
    }

    get xHref() {
        return this.href || `${this.sprite}#icon-${this.name}`
    }

    render() {
        return svg`
            <svg>
                ${unsafeSVG(`<use href="${this.xHref}"></use>`)}
            </svg>
        `
    }

    static get styles() {
        return css`
            :host svg {
                width: 1em; height: 1em;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
            }
            :host([spin]) svg {
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                0% {
                    transform: rotate(0);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        `
    }

}
