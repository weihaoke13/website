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
                           Budget
                        </CardTitle>
                        <CardText>
                        Budget App
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/weihaoke13/budget' target="_blank"> GitHub</Button>
                            <Button colored href='https://weihaoke13.github.io/budget/' target="_blank"> Demon</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    {/* project 2*/}
                    <Card shadow={5} style={{minWidth:'300', margin:'auto'}}>
                        <CardTitle style={{color:'black', height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}}>
                        Currency
                        </CardTitle>
                        <CardText>
                            Currency App
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/weihaoke13/currency' target='_blank'> GitHub</Button>
                            <Button colored href='https://weihaoke13.github.io/currency/' target='_blank'> Demon</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                     {/* project 3*/}
                     <Card shadow={5} style={{minWidth:'400', margin:'auto'}}>
                        <CardTitle style={{color:'black', height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}}>
                            Receipe
                        </CardTitle>
                        <CardText>
                            Receipe App
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/weihaoke13/receipe' target='_blank'> GitHub</Button>
                            <Button colored href='https://weihaoke13.github.io/receipe/' target='_blank'> Demon</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                     {/* project 4*/}
                    <Card shadow={5} style={{minWidth:'400', margin:'auto'}}>
                        <CardTitle style={{color:'black', height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}}>
                            T-shirt customrize 
                        </CardTitle>
                        <CardText>
                        T-shirt customrize app
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/weihaoke13/mytshirtapp' target='_blank'> GitHub</Button>
                            <Button colored href='https://weihaoke13.github.io/mytshirtapp/' target='_blank'> Demon</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>


                    {/* project 5*/}
                    <Card shadow={5} style={{minWidth:'400', margin:'auto'}}>
                        <CardTitle style={{color:'black', height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}}>
                            To do list
                        </CardTitle>
                        <CardText>
                            To do list App
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/weihaoke13/todolist' target='_blank'> GitHub</Button>
                            <Button colored href='https://weihaoke13.github.io/todolist/' target='_blank'> Demon</Button>
                        </CardActions>
                        <CardMenu style={{color:'#fff'}}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                     {/* project 6*/}
                     <Card shadow={5} style={{minWidth:'400', margin:'auto'}}>
                        <CardTitle style={{color:'black', height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png) center / cover'}}>
                            iStore
                        </CardTitle>
                        <CardText>
                            iStore
                        </CardText>
                        <CardActions border>
                            <Button colored href='https://github.com/weihaoke13/iStore' target='_blank'> GitHub</Button>
                            <Button colored href='https://react-istore.netlify.com' target='_blank'> Demon</Button>
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
                <div className='project-grid'>

                {/* project 1*/}
                <Card shadow={5} style={{minWidth:'300', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'176px',background:'url(https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png) center / cover'}}>
                       Weather
                    </CardTitle>
                    <CardText>
                    Weather App
                    </CardText>
                    <CardActions border>
                        <Button colored href='https://github.com/weihaoke13/weather' target="_blank"> GitHub</Button>
                        <Button colored href='https://weihaoke13.github.io/weather/' target="_blank"> Demon</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>

                {/* project 2*/}
                <Card shadow={5} style={{minWidth:'300', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'176px',background:'url(https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png) center / cover'}}>
                       RPS
                    </CardTitle>
                    <CardText>
                    Rock, Paper, Scissor Game
                    </CardText>
                    <CardActions border>
                        <Button colored href='https://github.com/weihaoke13/RockPaperScissor/tree/master' target="_blank"> GitHub</Button>
                        <Button colored href='https://weihaoke13.github.io/RockPaperScissor/' target="_blank"> Demon</Button>

                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
                

                {/* project 3*/}
                <Card shadow={5} style={{minWidth:'300', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'176px',background:'url(https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png) center / cover'}}>
                       Sign in
                    </CardTitle>
                    <CardText>
                    Sign in page
                    </CardText>
                    <CardActions border>
                        <Button colored href='https://github.com/weihaoke13/signin' target="_blank"> GitHub</Button>
                        <Button colored href=' https://weihaoke13.github.io/signin/' target="_blank"> Demon</Button>

                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>
                
                </div>
            )
        }

        else if(this.state.activeTab === 2){
            return(
                <div className='project-grid'>

                {/* project 1*/}
                <Card shadow={5} style={{minWidth:'300', margin:'auto'}}>
                    <CardTitle style={{color:'black', height:'176px',background:'url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png) center / cover'}}>
                       Responsive
                    </CardTitle>
                    <CardText>
                   Responsive website
                    </CardText>
                    <CardActions border>
                        <Button colored href='https://github.com/weihaoke13/responsive' target="_blank"> GitHub</Button>
                        <Button colored href='https://weihaoke13.github.io/responsive/' target="_blank"> Demon</Button>
                    </CardActions>
                    <CardMenu style={{color:'#fff'}}>
                        <IconButton name='share' />
                    </CardMenu>
                </Card>

               
                
                </div>
            )
        }

    }
    

    render(){
        return(
            <div className='category-tab'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Javascript</Tab>
                    <Tab>HTML/CSS</Tab>
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