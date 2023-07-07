import type { Meta, StoryObj } from '@storybook/react';
import {Menus} from '../component/Menu/Menu'
import { ReduxStoreProviderDecorator } from './ReduxStoreProviderDecorator';
import {decoratorsRouter} from "stories/RouterDecorator";
const meta: Meta<typeof Menus> = {
  title: 'Example/Menus',
  component: Menus,
  decorators: [ReduxStoreProviderDecorator, decoratorsRouter]
}
export default meta;
type Story = StoryObj<typeof Menus>;



export const MenuIn: Story = {
  args: {}
}
