import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img sytle={{borderRadius: '30%'}}
                        src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/71679939_2464225650331507_4169363528639053824_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_oc=AQmRBoaJWaKCxzepIbsT9xGkh_uTclykSo-PVUYjFtFYPKFhWTLOORS-fzJuqunx_mo&_nc_ht=scontent-lax3-1.xx&oh=9a3d1fe818c1380c42270bbb7f90dd47&oe=5F0922D5"
                        alt="avatar"
                        className="avatar-img">
                        </img>

                        <div className='banner-text'>
                            <h1>Software Developer</h1>
                            <hr/>
                            <p> HTML/CSS | React.JS | Javascript | Python | PostgreSQL </p>
                           
                            <div className='social-links'>
                                <a href="https://www.linkedin.com/in/weihao-ke-859702162" rel="noopener noreferrer " target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://github.com/weihaoke13" rel="noopener noreferrer " target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.facebook.com/weihao.ke.5" rel="noopener noreferrer " target="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>
                        </div>
                        </div>
                
                    </Cell>
                </Grid>
                
            </div>
        )
    }

}

export default LandingPage;
