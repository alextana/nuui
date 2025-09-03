import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button.tsx";

const meta = {
	component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		variant: "primary",
		label: "Button",
	},
};

export const PrimaryInAlert: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
  render: (args) => (
    <div className="p-4 bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg">
      <Button {...args} />
    </div>
  ),
};