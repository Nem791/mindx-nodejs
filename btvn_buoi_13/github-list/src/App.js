
import './App.css';
import { Component } from 'react';
import { Layout, Breadcrumb, List, Avatar } from 'antd';
import HeaderComponent from './components/header';
import newsJson from './news.json';
import Users from './components/users';
import FooterComponent from './components/footer';

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   footerContent: 'Mindx School @2022 Copyright',
    //   news: newsJson,
    //   newFiltered: newsJson
    // }
    this.state = {
      data: []
    }


  }
  // componentDidMount() {
  //   fetch("https://api.github.com/users")
  //     // .then(res => {
  //     //   console.log(res);
  //     //   this.setState({ ...this.state, data: res.data })
  //     // })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  // }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.github.com/users');
      const data = await res.json();
      console.log(data);
      this.setState({ ...this.state.data, data });
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    // return (
    //   // <>
    //   //   {this.state.data.map(d => <div>{d.login}</div>)}
    //   // </>
    //   <List
    //         itemLayout="horizontal"
    //         dataSource={this.state.data}
    //         renderItem={item => (
    //             <List.Item>
    //                 <List.Item.Meta
    //                     avatar={<Avatar src={item.avatar_url} />}
    //                     title={<a href="https://ant.design">{item.login}</a>}
    //                     description={item.html_url}
    //                 />
    //             </List.Item>
    //         )}
    //     />
    // )
    return (
      <Layout className="layout">
        <HeaderComponent filterNews={this.filterNews} />
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Users users={this.state.data} />
          </div>
        </Content>
        <FooterComponent footerContent={this.state.footerContent} />
      </Layout>
    )
  }
}

export default App;
