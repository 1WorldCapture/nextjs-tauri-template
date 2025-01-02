"use client";

import { Card, Space, Typography, Table } from "antd";
import { Bubble, Sender, Welcome, Conversations } from "@ant-design/x";
import { useState } from "react";

const { Title } = Typography;

export default function Home() {
  const [message, setMessage] = useState("");

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John",
      age: 32,
    },
    {
      key: "2",
      name: "Mike",
      age: 42,
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <Welcome
          title="Welcome to Tauri-Next.js Template"
          description="Intelligent Product Interface Solution Based on Ant Design"
        />

        <Card>
          <Title level={3}>Chat Demo</Title>

          <Space direction="vertical" style={{ width: "100%" }}>
            <Bubble content="Hi! I'm an AI Assistant" />

            <Conversations>
              <Bubble content="I can help answer your questions" />
              <Bubble content="How may I help you?" />
            </Conversations>

            <Sender
              value={message}
              onChange={setMessage}
              onSubmit={(msg) => {
                console.log("Send message:", msg);
                setMessage("");
              }}
            />
          </Space>
        </Card>

        <Card>
          <Title level={3}>Data Display</Title>
          <Table columns={columns} dataSource={data} />
        </Card>
      </Space>
    </div>
  );
}
