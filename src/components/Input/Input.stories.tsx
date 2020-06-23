import React from "react";
import { action } from "@storybook/addon-actions";
import { Input } from "./Input";

export default {
  component: Input,
  title: "Input",
};

const Story = () => (
  <>
    <section>
      <h1>default</h1>
      <Input ariaLabel="default" />
    </section>

    <section>
      <h1>disabled</h1>
      <Input disabled ariaLabel="disabled" />
    </section>

    <section>
      <h1>maxLength</h1>
      <Input maxLength={8} ariaLabel="maxLength" />
    </section>

    <section>
      <h1>minLength</h1>
      <Input minLength={1} ariaLabel="minLength" />
    </section>

    <section>
      <h1>name</h1>
      <Input name="name" ariaLabel="name" />
    </section>

    <section>
      <h1>required</h1>
      <form>
        <Input required ariaLabel="required" />
        <button type="submit">Submit</button>
      </form>
    </section>

    <section>
      <h1>type=text</h1>
      <Input type="text" ariaLabel="type=text" />
    </section>

    <section>
      <h1>type=number</h1>
      <Input type="number" ariaLabel="type=number" />
    </section>

    <section>
      <h1>type=password</h1>
      <Input type="password" ariaLabel="type=password" />
    </section>

    <section>
      <h1>value</h1>
      <Input value="value" ariaLabel="value" />
    </section>

    <section>
      <h1>onChange</h1>
      <Input onChange={action("onChange")} ariaLabel="onChange" />
    </section>
  </>
);

export const props = () => <Story />;
