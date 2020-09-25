import { html } from 'lit-html';
import '../src/packages/icon/Icon'
import sprite from './assets/sprite.svg'

export default {
    title: 'Components/Icon',
    parameters: {
        docs: {
            description: {
                component: 'description'
            }
        }
    },
    // argTypes: {
    //     type: {
    //         control: {
    //             type: 'string',
    //         }
    //     },
    // }
}

customElements.get('w-icon').sprite = sprite
const Template = ({ name, href, spin }) => html`
<w-icon
    name="${name}"
    href="${href}"
    ?spin="${spin}"
></w-icon>
`

export const Default = Template.bind({})
Default.args = {
    name: 'loading',
    href: '',
    spin: false,
}
