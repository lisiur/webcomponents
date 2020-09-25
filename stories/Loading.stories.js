import { html } from 'lit-html';
import '../src/packages/loading/Loading'

export default {
    title: 'Components/Loading',
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

const Template = ({}) => html`
<w-loading></w-loading>
`

export const Default = Template.bind({})
Default.args = {}
