import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "./Button";

export default {
  component: Button,
  title: "Button",
};

const Story = () => (
  <>
    <section>
      <h1>default</h1>
      <Button>Button</Button>
    </section>
    <section>
      <h1>type</h1>
      <Button type="button">Button</Button>
    </section>
    <section>
      <h1>type</h1>
      <Button disabled>Button</Button>
    </section>
    <section>
      <h1>onClick</h1>
      <Button onClick={action("onClick")}>Button</Button>
    </section>
  </>
);

export const props = () => <Story />;
