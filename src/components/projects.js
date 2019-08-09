import React, {Component} from 'react';
import {Tabs, Tab ,Grid, Cell,Card,CardTitle, CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';

class Projects extends Component{
    constructor(props){
        super(props);
        this.state={
            activeTab:0
        };
    }
    toggleCategories(){
        if (this.state.activeTab === 0){
            return(
                <div className='project-grid'>
                    {/* project 1*/}
                    <Card shadow={5} style={{minWidth:'300', margin:'auto'}}>
                        <CardTitle style={{color:'black', height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}}>
                            React Project
                        </CardTitle>
                        <CardText>
                            lorem 
                        </CardText>
                        <CardActions border>
                            <Button colored> GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    {/* project 2*/}
                    <Card shadow={5} style={{minWidth:'300', margin:'auto'}}>
                        <CardTitle style={{color:'black', height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}}>
                            React Project
                        </CardTitle>
                        <CardText>
                            lorem 
                        </CardText>
                        <CardActions border>
                            <Button colored> GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                     {/* project 3*/}
                     <Card shadow={5} style={{minWidth:'400', margin:'auto'}}>
                        <CardTitle style={{color:'black', height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}}>
                            React Project
                        </CardTitle>
                        <CardText>
                            lorem 
                        </CardText>
                        <CardActions border>
                            <Button colored> GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </div>
               
                
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div>This is Javascript</div>
            )
        }

    }
    

    render(){
        return(
            <div className='category-tab'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                </Tabs>

                
                    <Grid >
                        <Cell col={12}>
                            <div className='content'>{this.toggleCategories()}</div>
                        </Cell>

                    </Grid>
              

            </div>
        )
    }

}

export default Projects;