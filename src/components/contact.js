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
                             src= "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/71679939_2464225650331507_4169363528639053824_n.jpg?_nc_cat=101&_nc_sid=85a577&_nc_oc=AQnjdiaT36UEi-_eZF1feJaFGuaVsUCVbnwgmANC42AK-L3hhUKmpNiGQpBC73DU5wc&_nc_ht=scontent-lax3-1.xx&oh=d9a23272c88058fa5b4f6d11ad1d6c1c&oe=5EAE2B55"
                             alt="avatar"
                             style={{height:'250px'}}
                        />
                        <p style={{width:'75%',margin:'auto',paddingTop:'1em'}}>Producing high-quality websites and exceptional user experience
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