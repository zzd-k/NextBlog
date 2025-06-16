'use client'
import React, { useState } from 'react';
import { Card, Input, Button, Modal, Form, message } from 'antd';
import '@ant-design/v5-patch-for-react-19';
import Table from '@/component/table';

// 添加文章的表单类型
interface ArticleForm {
  title: string;
  content: string;
}

const App: React.FC = () => {
  // 控制添加模态框的显示
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 创建表单实例
  const [form] = Form.useForm();

  const [searchQuery, setSearchQuery] = useState('');

  const [refreshKey,setRefreshKey]=useState(0)

  // 处理添加文章
  const handleAdd = async (values: ArticleForm) => {
    try {
      const response = await fetch('/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      const result = await response.json();
      if (result.code === 0) {
        message.success('添加成功');
        setIsModalOpen(false);
        form.resetFields();
        // 刷新页面以更新数据
        window.location.reload();
      }
    } catch (error) {
      message.error('添加失败');
    }
  };

  const handleSearch = () => {
    // 处理搜索逻辑
    setRefreshKey(prev => prev + 1);
  };

  const handleReset = () => {
    setSearchQuery('');
    setRefreshKey(prev => prev + 1);
  };

  return (
    <Card title="Next增删改查实现" variant="borderless" style={{ width: 600, height: 'auto' }}>
       <Input 
        placeholder="请输入内容" 
        style={{ width: 200 }} 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button type="primary" className='ml-6' onClick={handleSearch}>搜索</Button>
      <Button type="primary" className='ml-3' onClick={handleReset}>重置</Button>
      <Button 
        type="default" 
        color="danger" 
        className='float-right'
        onClick={() => setIsModalOpen(true)}
      >
        添加
      </Button>
      <Card>
        <Table />
      </Card>

      {/* 添加文章的模态框 */}
      <Modal
        title="添加文章"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form
          form={form}
          onFinish={handleAdd}
          layout="vertical"
        >
          <Form.Item
            name="title"
            label="标题"
            rules={[{ required: true, message: '请输入标题' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="content"
            label="内容"
            rules={[{ required: true, message: '请输入内容' }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default App;