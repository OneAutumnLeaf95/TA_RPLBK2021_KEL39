import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Typography } from 'antd';

import Shop from './components/shop';
import BestSeller from './components/bestseller'
import AboutUs from './components/aboutus';

const { Header, Content, Footer } = Layout;
const { Text } = Typography;

function App() {
  return (
  <Router>
    <Layout>
      <Header style={{background:'#2E3438'}}>
        <Text style={{Width: '120px', Height: '23px', fontFamily: 'Fantasy', fontSize: '25px', color: '#87CEFA'}}>
          TRADITIONAL DESSERT SHOP
        </Text>
        <div style={{float: 'right'}}>
          <Link to="/" style={{margin:'8px', color: '#FFFFFF'}}>SHOP</Link>
          <Link to="/bestseller" style={{margin:'8px', color: '#FFFFFF'}}>BEST SELLER</Link>
          <Link to="/aboutus" style={{margin:'8px', color: '#FFFFFF'}}>ABOUT US</Link>
        </div>
      </Header>
      <Content style={{textAlign:'center', display: 'inlineblock', background:'#222222'}}>
        <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/bestseller" exact component={BestSeller} />
          <Route path="/aboutus" exact component={AboutUs} />
        </Switch>
      </Content>
      <Footer style={{background:'#E1E6EA', textAlign:'center', width:'100%'}}>
        TUGAS AKHIR PRAKTIKUM RPLBK 2021 - KELOMPOK 39
      </Footer>
    </Layout>
  </Router>
  )
}

export default App;