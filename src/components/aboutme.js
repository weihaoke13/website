import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Skills from './skills';
class AboutMe extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img className='avatar-img' src=" https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/71679939_2464225650331507_4169363528639053824_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_oc=AQmRBoaJWaKCxzepIbsT9xGkh_uTclykSo-PVUYjFtFYPKFhWTLOORS-fzJuqunx_mo&_nc_ht=scontent-lax3-1.xx&oh=9a3d1fe818c1380c42270bbb7f90dd47&oe=5F0922D5"
                             alt="avatar"
                             style={{height:'200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop:'2em',textAlign:'center'}}>Weihao Ke</h2>
                        <h4 style={{color:'grey',textAlign:'center'}}>Software Engineer</h4>
                        <hr style={{borderTop:'3px solid #833fb2',width:'100%'}}></hr>
                        <h5>Current Location: </h5>
                        <p>Los Angeles,CA</p>

                    </Cell>
                    <Cell className='aboutme-right'col={8}>
                        <h2>Education</h2>
                        <Education startYear={2015} 
                                   endYear={2018}
                                   schoolName="Pasadena City College"
                        />

                        <Education startYear={2018} 
                                   endYear={2020}
                                   schoolName="University of California - Santa Cruz"
        
                        />
                        
                       
                        <hr style={{borderTop:'3px solid #e22947'}}></hr>
                        <h2>Skills</h2>
                        <Skills
                            skill='HTML'
                            progress={80}
                        />
                        <Skills
                            skill='Javascript'
                            progress={60}
                        />
                         <Skills
                            skill='React'
                            progress={50}
                        />
                         <Skills
                            skill='Vue'
                            progress={30}
                        />
                         <Skills
                            skill='Python'
                            progress={55}
                        />
                        <Skills
                            skill='Java'
                            progress={85}
                        />
                        <Skills
                            skill='C++'
                            progress={75}
                        />
                         <Skills
                            skill='PostgreSQL'
                            progress={65}
                        />
                        <Skills
                            skill='MySQL'
                            progress={55}
                        />
                         <Skills
                            skill='Git'
                            progress={80}
                        />
                        
                        
                    
                    </Cell>

                </Grid>
            </div>
        )
    }

}

export default AboutMe;