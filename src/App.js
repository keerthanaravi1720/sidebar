// App.js
import React from 'react';
import { Layout } from 'antd';
import Sidebar from './pages/Sidebar';
// import Sidebar from './Sidebar';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '16px' }}>Your content goes here</Content>
      </Layout>
    </Layout>
  );
};

export default App;
