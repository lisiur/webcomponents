import { LitElement, html, svg, css } from 'lit-element'
import { nothing } from 'lit-html'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import { unsafeSVG } from 'lit-html/directives/unsafe-svg'

const prefix = 'w'
export default class Component extends LitElement {
}

export function getComponentTagName(name) {
    return `${prefix}-${name}`
}

export function defineComponent(name, comp) {
    name = getComponentTagName(name)
    if (!customElements.get(name)) {
        customElements.define(name, comp)
    }
}

export {
    html,
    svg,
    css,
    unsafeHTML,
    unsafeSVG,
    nothing,
}
