import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img sytle={{borderRadius: '50%'}}
                        src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/71679939_2464225650331507_4169363528639053824_n.jpg?_nc_cat=101&_nc_oc=AQlgmLzO7MycSfqpXFNq9TCAM0-Q9HKM5M-hzhnkudxmOoR9t6hNWKWgb0o0bo4dn9U&_nc_ht=scontent-lax3-1.xx&oh=8afa2a1c72dff634419be9cfd80f5cc1&oe=5E6FF12B"
                        alt="avatar"
                        className="avatar-img">

                        </img>

                        <div className='banner-text'>
                            <h1>Software Engineer</h1>
                            <hr/>
                            <p> HTML CSS | React.JS | Javascript </p>
                            <div className='social-links'>
                                <a href="https://www.linkedin.com/in/weihao-ke-859702162" rel="noopener noreferrer " target="_blank">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="https://github.com/weihaoke13" rel="noopener noreferrer " target="_blank">
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.facebook.com/weihao.ke.5" rel="noopener noreferrer " target="_blank">
                                    <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                        </div>s
                        </div>
                
                    </Cell>
                </Grid>
                
            </div>
        )
    }

}

export default LandingPage;