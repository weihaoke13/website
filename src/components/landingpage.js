import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                        src="http://www.themes-lab.com/conbis/assets/images/avatars/avatar13_big.png"
                        alt="avatar"
                        className="avatar-img">

                        </img>

                        <div className='banner-text'>
                            <h1>Front End Software Engineer</h1>
                            <hr/>
                            <p> HTML CSS | React.JS | Javascript </p>
                            <div className='social-links'>
                                <a href="https://www.linkedin.com/in/weihao-ke-859702162" rel="noopener noreferrer " target="_blank">
                                    <i className="fa fa-linkedin" aria-hidden="true"></i>
                                </a>
                                <a href="https://github.com/weihaoke13" rel="noopener noreferrer " target="_blank">
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                </a>
                                <a href="http://google.com" rel="noopener noreferrer " target="_blank">
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
