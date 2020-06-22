import React from "react";
import { action } from "@storybook/addon-actions";
import { Input } from "./Input";

export default {
  component: Input,
  title: "Input",
};

const Story = () => (
  <>
    <div>
      <label>
        default
        <Input />
      </label>
    </div>

    <div>
      <label>
        disabled
        <Input disabled />
      </label>
    </div>

    <div>
      <label>
        maxLength
        <Input maxLength={8} />
      </label>
    </div>

    <div>
      <label>
        minLength
        <Input minLength={1} />
      </label>
    </div>

    <div>
      <label>
        name
        <Input name="name" />
      </label>
    </div>

    <div>
      <form>
        <label>
          required
          <Input required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>

    <div>
      <label>
        type=text
        <Input type="text" />
      </label>
    </div>

    <div>
      <label>
        type=number
        <Input type="number" />
      </label>
    </div>

    <div>
      <label>
        type=password
        <Input type="password" />
      </label>
    </div>

    <div>
      <label>
        value
        <Input value="value" />
      </label>
    </div>

    <div>
      <label>
        onChange
        <Input onChange={action("onChange")} />
      </label>
    </div>
  </>
);

export const props = () => <Story />;
