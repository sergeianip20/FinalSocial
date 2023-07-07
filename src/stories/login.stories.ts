import type { Meta, StoryObj } from '@storybook/react';
import {Login} from '../component/Login/Login'
import {ReduxStoreProviderDecorator} from './ReduxStoreProviderDecorator'
import {decoratorsRouter} from "stories/RouterDecorator";
const meta: Meta<typeof Login> = {
  title: 'Example/Login',
  component: Login,
  decorators: [ReduxStoreProviderDecorator, decoratorsRouter]
} 
export default meta;
type Story = StoryObj<typeof Login>;



export const LoginIn: Story = {
  args: {}
}
