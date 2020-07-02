import React from "react";
import { Card } from "./Card";

export default {
  component: Card,
  title: "Card",
};

const Story = () => (
  <>
    <section>
      <h1>default</h1>
      <Card>
        <p>Card</p>
      </Card>
    </section>
  </>
);

export const props = () => <Story />;
