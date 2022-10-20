import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ContactForm } from './contact-form';

export default {
  component: ContactForm,
  title: 'ContactForm',
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args) => (
  <ContactForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
