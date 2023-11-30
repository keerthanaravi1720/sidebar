import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import '../App.css';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed} theme="dark">
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item
          key="1"
          className={collapsed ? '' : 'no-hover'}
          style={{
            textAlign: 'right',
            height: 60,
            background: collapsed ? 'none' : 'transparent',
          }}
        >
          <div>
            {!collapsed && <span style={{ float: 'left',  }} className='hover'>letter</span>}
            {/* icon */}
            {collapsed ? (
              <MenuUnfoldOutlined style={{ marginLeft: 'auto' }} onClick={toggleSidebar} />
            ) : (
              <MenuFoldOutlined onClick={toggleSidebar} />
            )}
          </div>
        </Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        {/* Add more Menu.Items as needed */}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
