import React, { Children, useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Layout } from 'antd';
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import AllArticles from "./components/AllArticles.jsx";
import ArticlePage from "./components/ArticlePage.jsx"
import MyProfile from "./components/MyProfile.jsx"

import {AppstoreOutlined, MailOutlined, SettingOutlined} from "@ant-design/icons";

const { Content, Footer, Sider } = Layout;




const App = () => {

    const [current, setCurrent] = useState('home');
    const [user, setUser] = useState({
        loggedIn: false,
        username: '',
    });
    const onClick = (e) => {
        setCurrent(e.key);
    };


    return (
        <BrowserRouter>
            <Layout style={{ width: '100%'}}>
                <Header current={current} onClick={onClick} />
                <Layout>
                    <Content style={{ padding: '0 50px', marginTop: 64, width: '100%' }}>
                        <Routes>
                            <Route path="/" element={<Home />} user={user} />
                            <Route path="/AllArticles" element={<AllArticles/>} user={user} />
                            <Route path="/ArticlePage/:article_id" element={<ArticlePage />} user={user} />
                            <Route path="/MyProfile" element={<MyProfile />} user={user} setUser={setUser} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </BrowserRouter>
    );
};

export default App
