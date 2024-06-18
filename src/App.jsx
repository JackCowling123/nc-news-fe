import React, { Children, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import AllArticles from "./components/AllArticles.jsx";
import {AppstoreOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";



const { Content, Footer, Sider } = Layout;




const App = () => {
    const [current, setCurrent] = useState('home');



    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <BrowserRouter>
            <Layout style={{ width: '100%'}}>
                <Header current={current} onClick={onClick} />
                <Layout>
                    <Content style={{ padding: '0 50px', marginTop: 64, width: '100%' }}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/AllArticles" element={<AllArticles />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </BrowserRouter>
    );
};

export default App
