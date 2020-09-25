import Component, { css, html, nothing } from '../../libs/Component'
import '../loading/Loading'

export default class Button extends Component {

    static get properties() {
        return {
            type: { type: String, reflect: true },
            disabled: { type: Boolean, reflect: true },
            loading: { type: Boolean, reflect: true },
            href: { type: String, reflect: true },
            target: { type: String, reflect: true },
            download: { type: String, reflect: true },
            loadingState: { type: String },
        }
    }

    constructor() {
        super()
        this.disabled = false
        this.href = ''
        this.target = ''
        this.download = ''
        this.loading = false
        this.loadingState = 'initial'
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'loading') {
            if (newVal !== null) {
                super.attributeChangedCallback(name, oldVal, newVal)
                setTimeout(() => {
                    this.loadingState = 'finished'
                })
            } else {
                this.loadingState = 'initial'
                setTimeout(() => {
                    super.attributeChangedCallback(name, oldVal, newVal)
                }, 1000)
            }
        } else {
            super.attributeChangedCallback(name, oldVal, newVal)
        }
    }

    render() {
        if (this.type === 'link') {
            return html`
                <a
                    href="${this.href}"
                    target="${this.target}"
                    download="${this.download}"
                >
                    <slot></slot>
                </a>
            `
        } else {
            return html`
                <button
                    ?disabled=${this.disabled}
                >
                    ${this.loading ? html`<w-loading id="loading" data-state="${this.loadingState}" ></w-loading>` : nothing}
                    <slot></slot>
                </button>
            `
        }
    }

    static get styles() {
        return css`
            :host {
                --Font-size: var(--font-size-default);
                --Line-height: var(--line-height-default);
                --Title-color: var(--title-color);
                --Background-color: var(--background-color);
                --Border-color: var(--border-color);
                --Border-width: 1px;
                --Font-weight: var(--font-weight-default);
                --Padding-h: 12px;
                --Padding-v: 2px;
                --Primary-color: var(--primary-color);
                --Primary-color_hover: var(--primary-color_hover);
                --Primary-color_contrast: var(--primary-color_contrast);
                --Primary-color_select: var(--primary-color_select);
                --Height: calc(var(--Line-height) + var(--Padding-v) * 2 + var(--Border-width) * 2);
            }
            :host([danger]) {
                --Primary-color: var(--danger-color);
                --Primary-color_hover: var(--danger-color_hover);
                --Primary-color_contrast: var(--danger-color_contrast);
                --Primary-color_select: var(--danger-color_select);
                --Border-color: var(--danger-color);
                --Title-color: var(--danger-color);
            }
            :host([size="small"]) {
                --Font-size: var(--font-size-small);
                --Line-height: var(--line-height-small);
                --Padding-h: 4px;
                --Padding-v: 0px;
            }
            :host([size="middle"]) {
                --Font-size: var(--font-size-default);
                --Line-height: var(--line-height-default);
                --Padding-h: 12px;
                --Padding-v: 2px;
            }
            :host([size="large"]) {
                --Font-size: var(--font-size-large);
                --Line-height: var(--line-height-large);
                --Padding-h: 12px;
                --Padding-v: 4px;
            }
            :host {
                display: inline-block;
                box-sizing: border-box;
                user-select: none;
                font-size: var(--Font-size);
                line-height: var(--Line-height);
                vertical-align: inherit;
                height: var(--Height);
            }
            :host([loading]),
            :host([disabled]) {
                cursor: not-allowed;
                opacity: .6;
            }
            :host([disabled]) a,
            :host([disabled]) button {
                pointer-events: none;
            }
            :host([block]) {
                display: block;
                width: 100%;
            }
            :host([block]) button,
            :host([block]) a {
                display: block;
                width: 100%;
            }
            :host a {
                display: inline-block;
                box-sizing: border-box;
                line-height: inherit;
                vertical-align: inherit;
                font-size: inherit;
                text-decoration: none;
                font-family: inherit;
                padding: var(--Padding-v) var(--Padding-h);
                border-width: var(--Border-width);
                border-color: transparent;
                border-style: solid;
                color: var(--Primary-color);
                transition: all .3s cubic-bezier(.645,.045,.355,1);
            }
            :host button {
                box-sizing: border-box;
                padding: var(--Padding-v) var(--Padding-h);
                line-height: inherit;
                font-size: inherit;
                vertical-align: inherit;
                transition: all .3s cubic-bezier(.645,.045,.355,1);
                font-family: inherit;

                color: var(--Title-color);
                background: var(--Background-color);

                cursor: pointer;
                box-shadow: none;
                border-radius: 2px;
                border-style: solid;
                border-width: var(--Border-width);
                border-color: var(--Border-color);
            }
            :host button:focus {
                outline: none;
            }
            :host button:active {
                background: var(--Primary-color_select);
            }
            :host([shape="circle"]) button {
                border-radius: 50%;
            } 
            :host([shape="round"]) button {
                border-radius: var(--Height);
            } 
            :host([type="primary"]) button {
                border-color: var(--Primary-color);
                background: var(--Primary-color);
                color: var(--Primary-color_contrast);
            }
            :host([type="primary"]) button:hover {
                background: var(--Primary-color_hover);
                color: var(--Primary-color_contrast);
            }
            :host([type="dashed"]) button {
                border-style: dashed;
            }
            :host([type="ghost"]) button {
                border-color: #fff;
                background: transparent;
                color: #fff;
            }
            :host([type="ghost"]) button {
                border-color: #fff;
                background: transparent;
                color: #fff;
            }
            :host([type="text"]) button {
                border-color: transparent;
            }
            :host([type="link"]) a:hover {
                color: var(--Primary-color_hover);
            }
            :host(:hover) button,
            :host([type="default"]) button:hover,
            :host([type="dashed"]) button:hover {
                border-color: var(--Primary-color_hover);
                color: var(--Primary-color_hover);
            }
            :host([type="text"]) button:hover {
                border-color: transparent;
            }
            #loading {
                display: inline-block;
                transition: all .3s ease-in-out;
                opacity: 0;
                max-width: 0;
                transform: scaleX(0);
            }
            #loading[data-state="finished"] {
                max-width: 100px;
                opacity: 1;
                transform: scaleX(1);
            }
        `
    }
}

customElements.define('w-button', Button)