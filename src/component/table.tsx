'use client'
import React from 'react';
import { Space, Table, Tag,message } from 'antd';
import type { TableProps } from 'antd';
 import '@ant-design/v5-patch-for-react-19';
 
interface DataType {
  key: string;
  id: string;
  title: string;
  content: string;
  
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    render: (text) => <strong>{text}</strong>,
  },
 
  {
    title: '内容',
    dataIndex: 'content',
    key: 'content',
  },
   
  {
    title: '操作', 
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a onClick={() => handleEdit(record.id)}>编辑</a>
        <a onClick={() => handleDelete(record.id)}>删除</a>
      </Space>
    ),
  },
];

// 删除文章方法
const handleDelete = async (id: string) => {
  try {
    const response = await fetch(`/api/articles/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    if (result.code === 0) {
      message.success('删除成功');
      // 刷新数据
      window.location.reload();
    }
  } catch (error) {
    message.error('删除失败');
  }
};

// 编辑文章方法
const handleEdit = async (id: string) => {
const newTitle = prompt('请输入新的标题');
const newContent = prompt('请输入新的内容');
    if (newTitle && newContent) {
        try {
        const response = await fetch(`/api/articles/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: newTitle, content: newContent }),
        });
        const result = await response.json();
        if (result.code === 0) {
            message.success('修改成功');
            // 刷新数据
            window.location.reload();
        }
        } catch (error) {
        message.error('修改失败');
        }
    }
}

const data: DataType[] = require('../../db.json').posts.map((post: any) => ({
  key: post.id,
  id: post.id,
  title: post.title,
  content: post.content
}));

const App: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;

export default App;