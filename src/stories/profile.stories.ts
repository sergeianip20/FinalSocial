import type { Meta, StoryObj } from '@storybook/react';
import {Profile} from 'component/profile/Profile'

import { ReduxStoreProviderDecorator } from './ReduxStoreProviderDecorator';
import {decoratorsRouter} from "stories/RouterDecorator";
const meta: Meta<typeof Profile> = {
    title: 'Example/Profile',
    component: Profile,
    decorators: [ReduxStoreProviderDecorator, decoratorsRouter]
}
export default meta;
type Story = StoryObj<typeof Profile>;



export const ProfileIn: Story = {
    args: {}
}