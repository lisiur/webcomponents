import { html } from 'lit-html';
import '../src/packages/button/Button'

export default {
    title: 'Components/Btn',
    parameters: {
        docs: {
            description: {
                component: 'description'
            }
        }
    },
    argTypes: {
        type: {
            control: {
                type: 'inline-radio',
                options: ['default', 'primary', 'ghost', 'dashed', 'link', 'text'],
            }
        },
        shape: {
            control: {
                type: 'inline-radio',
                options: ['default', 'circle', 'round'],
            }
        },
        size: {
            control: {
                type: 'inline-radio',
                options: ['small', 'middle', 'large'],
            }
        },
    }
}

const Template = ({ defaultSlot, size, download, target, block, danger, icon, href, type, shape, loading, disabled }) => {
    return html`
        <w-button
            id="button"
            type="${type}"
            shape="${shape}"
            href="${href}"
            download="${download}"
            target="${target}"
            size="${size}"
            icon="${icon}"
            ?block="${block}"
            ?loading="${loading}"
            ?disabled="${disabled}"
            ?danger="${danger}"
        >
            ${defaultSlot}
        </w-button>
    `
}

export const Default = Template.bind({})
Default.args = {
    defaultSlot: 'button',
    loading: false,
    disabled: false,
    block: false,
    danger: false,
    icon: '',
    size: 'middle',
    type: 'default',
    shape: 'default',
    href: '',
    download: '',
    target: '',
}

