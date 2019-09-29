import React, {Component} from 'react';
import {Grid, Cell,List,ListItem,ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Weihao Ke</h2>
                        <img src=" http://www.themes-lab.com/conbis/assets/images/avatars/avatar13_big.png"
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