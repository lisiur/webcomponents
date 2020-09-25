import Component, { html, defineComponent } from '../../libs/Component'
import '../icon/Icon'

export default class Loading extends Component {

    static get properties() {
        return {
        }
    }

    constructor() {
        super()
    }

    render() {
        return html`
            <w-icon name="loading" spin></w-icon>
        `
    }
}

defineComponent('loading', Loading)
