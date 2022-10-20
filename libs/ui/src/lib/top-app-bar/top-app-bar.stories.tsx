import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TopAppBar } from './top-app-bar';

export default {
  component: TopAppBar,
  title: 'TopAppBar',
} as ComponentMeta<typeof TopAppBar>;

const Template: ComponentStory<typeof TopAppBar> = (args) => (
  <TopAppBar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
