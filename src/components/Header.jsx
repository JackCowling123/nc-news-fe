import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import Logo from '../assets/NorthCoders.png'

const { Header: AntHeader } = Layout;

const Header = ({ current, onClick }) => {
    const items = [
        {
            label: <Link to="/">Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to="/AllArticles">Articles</Link>,
            key: 'all articles',
            icon: <UnorderedListOutlined />,
        },
    ];

    return (
        <AntHeader style={{ position: 'fixed', zIndex: 1, width: '100%', background: '#fff' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Menu style={{}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                <img src={Logo} alt="NorthCoders Logo" style={{ height: '64px', float: 'right', marginRight: '24px' }} />
            </div>
        </AntHeader>
    );
};

export default Header;