import React, {Component} from 'react';
import {Grid,Cell ,ProgressBar} from 'react-mdl';

class Skills extends Component{
    render(){
        return(
            <Grid>
                <Cell col={12}>
                    <div style={{display:'flex',color:'white'}}>{this.props.skill}
                    <ProgressBar style={{margin:'auto',width:'75%'}} progress={this.props.progress} buffer={90}> </ProgressBar>
                    </div>

                </Cell>
            </Grid>

        )
    }
}

export default Skills;
