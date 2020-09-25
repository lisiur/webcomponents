import { defineComponent } from '../../libs/Component'
import BaseIcon from './BaseIcon'
import sprite from './sprite.svg'

export default class Icon extends BaseIcon {
    constructor() {
        super(sprite)
    }
}

defineComponent('icon', Icon)
