import React, {Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import Education from './education';
import Skills from './skills';
import Experience from './experience';


class AboutMe extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4} >
                        <div style={{textAlign:'center'}}>
                            <img className='avatar-img' src=" https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/71679939_2464225650331507_4169363528639053824_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=WKB2QqQNlQ4AX-l2Uok&_nc_ht=scontent-lax3-1.xx&oh=fad1debc7a3f049ceb2c6336c17eca07&oe=5F583CD5"
                             alt="avatar"
                             style={{height:'200px'}}
                            />
                        </div>

                        <div>
                            <h2 style={{paddingTop:'2em',textAlign:'center'}}>Weihao Ke</h2>
                            <h4 style={{color:'grey',textAlign:'center'}}>Software Developer</h4>
                            <hr style={{borderTop:'3px solid #833fb2',width:'100%'}}></hr>

                            <div style={{textAlign:'center'}}>
                                <h5>Objective: </h5>
                                <p>Recent graduate with strong CS background and front-end & back-end development experience seeking entry-level web development opportunities in a fast-paced, growth-oriented environment.</p>
                            </div>

                            <hr style={{borderTop:'3px solid #833fb2',width:'100%'}}></hr>

                            

                            <div style={{textAlign:'center'}}>
                                <h5>LinkedIn: </h5>
                                <a href="https://www.linkedin.com/in/weihao-ke-859702162" rel="noopener noreferrer " target="_blank">
                                https://www.linkedin.com/in/weihao-ke-859702162
                                </a>

                                <h5>GitHub: </h5>
                                <a href="https://github.com/weihaoke13" rel="noopener noreferrer " target="_blank">
                                https://github.com/weihaoke13
                                </a>
                            </div>

                            <hr style={{borderTop:'3px solid #833fb2',width:'100%'}}></hr>


                            <div style={{textAlign:'center'}}>

                                <h5>Current Location: </h5>
                                <p>Los Angeles,CA</p>

                                <h5>Hobbies: </h5>
                                <p>Play basketball, watch movies, read books</p>
                            </div>

                            <hr style={{borderTop:'3px solid #833fb2',width:'100%'}}></hr>
                        </div>
                        

                    </Cell>
                    
                    <Cell className='aboutme-right'col={8}>
                        <h2>Education</h2>
                        <Education startYear="Aug 2015" 
                                   endYear="June 2018"
                                   schoolName="Pasadena City College"
                                   schoolDescription=''
                        />

                        <Education startYear="Sept 2018"
                                   endYear="June 2020"
                                   schoolName="University of California - Santa Cruz"
                                   schoolDescription='Courses: Data Structures and Algorithms,  Analysis of Algorithms, Software Engineering,  Mobile Applications, and Web Applications.'
                                   schoolReward= " Award: Dean's Honors List - UC Santa Cruz "
        
                        />
                        
                       
                        <h2>Experience</h2>
                        <Experience startYear="June 2019"
                                   endYear="August 2019"
                                   companyName = "Adler & Associates Entertainment"
                                   jobName = "Front-End Developer Intern"
                                   jobDescription1 = "• Assisted with the front end of a streaming site based on UI/UX designs with the use of React.js, Sass, Pug, and Selenium."
                                   jobDescription2 ="• Built reusable, stateful components and libraries that can be exported and imported for future use in other realms of the application."
                                   jobDescription3 ="• Integrated validation on client-side using React Formik and Yup schemas."
                                   jobDescription4 ="• Created and implemented a custom CSS grid system, with CSS media queries for mobile and tablet responsiveness."
                                   jobDescription5 ="• Accomplished and completed tasks using Agile product management, and consistent communication with both back-end developers and UI/UX designers."
                        />
                

                        <hr style={{borderTop:'3px solid #e22947'}}></hr>
                        <h2>Skills</h2>
                        <Skills
                            skill='Javascript'
                            progress={70}
                        />
                         <Skills
                            skill='HTML/CSS'
                            progress={80}
                        />
                         <Skills
                            skill='React'
                            progress={60}
                        />
                        <Skills
                            skill='Vue'
                            progress={50}
                        />
                        <Skills
                            skill='Java'
                            progress={80}
                        />
                        <Skills
                            skill='Python'
                            progress={60}
                        />
                        <Skills
                            skill='PostgreSQL'
                            progress={60}
                        />
                        <Skills
                            skill='MySql'
                            progress={50}
                        />
                        <Skills
                            skill='Git'
                            progress={70}
                        />
                        <Skills
                            skill='Flask'
                            progress={60}
                        />

                        
                    
                    </Cell>

                </Grid>
            </div>
        )
    }

}

export default AboutMe;