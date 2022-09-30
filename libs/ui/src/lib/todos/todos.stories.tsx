import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Todos } from './todos';

export default {
  component: Todos,
  title: 'Todos',
} as ComponentMeta<typeof Todos>;

const Template: ComponentStory<typeof Todos> = (args) => <Todos {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  todos: [{"title": "todo 1 test"}, {"title": "todo 2 test"}]
};
