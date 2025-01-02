"use client";

import { Button } from "antd";
import { Bubble } from "@ant-design/x";

export default function Home() {
  return (
    <div>
      <Button type="primary">Click me</Button>
      <Bubble content="Hello" />
    </div>
  );
}
