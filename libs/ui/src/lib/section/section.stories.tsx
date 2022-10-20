import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Section } from './section';

export default {
  component: Section,
  title: 'Section',
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
