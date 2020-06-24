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
      <Button text="Button" />
    </section>
    <section>
      <h1>type</h1>
      <Button text="Button" type="button" />
    </section>
    <section>
      <h1>type</h1>
      <Button text="Button" disabled />
    </section>
    <section>
      <h1>onClick</h1>
      <Button text="Button" onClick={action("onClick")} />
    </section>
  </>
);

export const props = () => <Story />;
