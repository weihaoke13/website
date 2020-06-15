import React, {Component} from 'react';
import {Grid, Cell,List,ListItem,ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Weihao Ke</h2>
                        <img className='avatar-img '
                             src= "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/71679939_2464225650331507_4169363528639053824_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_oc=AQmRBoaJWaKCxzepIbsT9xGkh_uTclykSo-PVUYjFtFYPKFhWTLOORS-fzJuqunx_mo&_nc_ht=scontent-lax3-1.xx&oh=9a3d1fe818c1380c42270bbb7f90dd47&oe=5F0922D5"
                             alt="avatar"
                             style={{height:'250px'}}
                        />
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Producing high-quality websites and exceptional user experience
                        </p>
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>
                        I’m a self-starter and motivated team player with the ability to accomplish tasks independently and work with other people. Juggling an entire project or working alongside others has honed time management skills for effective planning and organization estimating budgets and completing tasks on deadline every time. I am confident I will be an asset to your organization. I can plan and utilize my workload to meet due dates.  

                        </p>

                    
                    
                    </Cell>


                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'18px',fontFamily:'Anton'}}>
                                        <i className="fa fa-phone-square"></i>
                                        (626)-991-6613</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'13px',fontFamily:'Anton'}}>
                                    <i className='fa fa-envelope'></i>weihaoke13@gmail.com</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'18px',fontFamily:'Anton'}}>
                                    <i className='fa fa-instagram'></i>weihaoke06</ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                        
                    </Cell>

                </Grid>
                
            </div>
        )
    }

}

export default Contact;