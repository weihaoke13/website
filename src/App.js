import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Textfield, Drawer, Navigation, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

class App extends Component {
  render(){
    return(
      <div >
        <Layout fixedHeader>
            <Header className='header-color' title={<Link style={{textDecoration:'none',color:'white'}} to="/">Weihao Ke | Profeilo</Link>}>
                <Navigation>
                    {/* <Link to="/landingpage">Home</Link> */}
                    <a href="https://resume.creddle.io/resume/84d5s0tgcn8" rel="noopener noreferrer " target="_blank">
                      Resume
                    </a>
                    {/* <Link to="/aboutme">About Me</Link> */}
                    {/* <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link> */}
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration:'none',color:'grey'}} to="/">Weihao Ke | Profeilo</Link>}>
                <Navigation>
                    <Link to="/landingpage">Home</Link>
                    <a href="https://resume.creddle.io/resume/84d5s0tgcn8" rel="noopener noreferrer " target="_blank">
                      Resume
                    </a>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content >
              <Main/>
            </Content>
        </Layout>
      </div>
    )
  }
}

export default App;
 