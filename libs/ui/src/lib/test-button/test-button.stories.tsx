import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TestButton } from './test-button';

export default {
  component: TestButton,
  title: 'TestButton',
} as ComponentMeta<typeof TestButton>;

const Template: ComponentStory<typeof TestButton> = (args) => (
  <TestButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
