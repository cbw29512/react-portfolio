import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="project-bg">
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', top: '20px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(https://i.imgur.com/Zb4ZKIH.png) center / cover`}} ></CardTitle>
            <CardText>
              React Photo Wall!
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/cbw29512/assessment---react-photo-wall' target="_blank" rel="noopener noreferrer"><Button colored>GitLab</Button></a>
              <a href='https://i.imgur.com/Zb4ZKIH.png' target="_blank" rel="noopener noreferrer"><Button colored>Example</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', top:'20px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(https://i.imgur.com/LM49S65.png) center / cover`}} ></CardTitle>
            <CardText>
              React Twitter Feed!
            </CardText>
            <CardActions border>
            <a href='https://github.com/cbw29512/twitter-feed' target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
            <a href='https://raw.githubusercontent.com/cbw29512/twitter-feed/master/ezgif.com-video-to-gif.gif' target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', top:'20px'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(https://i.imgur.com/IWeFmB0.png) center / cover`}} ></CardTitle>
            <CardText>
              Kwitter (Twitter Clone)!
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/cbw29512/assessment---kwitter-frontend' target="_blank" rel="noopener noreferrer"><Button colored>Gitlab</Button></a>
            <a href='https://ty914.gitlab.io/assessment---kwitter-frontend/' target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', top:'20'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(https://i.imgur.com/lLy1ufQ.png) center / cover`}} ></CardTitle>
            <CardText>
              Django App Ghost Post!
            </CardText>
            <CardActions border>
              <a href='https://github.com/cbw29512/ghostpost' target="_blank" rel="noopener noreferrer"><Button colored>Github</Button></a>
              <a href='https://i.imgur.com/lLy1ufQ.png' target="_blank" rel="noopener noreferrer"><Button colored>Example</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', top:'20'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(https://i.imgur.com/FWmR8T6.png) center / cover`}} ></CardTitle>
            <CardText>
              Django Bug Tracker!
            </CardText>
            <CardActions border>
            <a href='https://github.com/cbw29512/bugtracker' target="_blank" rel="noopener noreferrer"><Button colored>Github</Button></a>
            <a href='https://i.imgur.com/FWmR8T6.png' target="_blank" rel="noopener noreferrer"><Button colored>Example</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', top:'20'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(https://i.imgur.com/FWnJrSN.png) center / cover`}} ></CardTitle>
            <CardText>
              Twitter Clone!
            </CardText>
            <CardActions border>
            <a href='https://github.com/cbw29512/twitterclone' target="_blank" rel="noopener noreferrer"><Button colored>Github</Button></a>
            <a href='https://i.imgur.com/FWnJrSN.png' target="_blank" rel="noopener noreferrer"><Button colored>Example</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
      
        <div className="projects-grid">
          {/* Project 1 */}
          
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', top:'20'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(https://i.imgur.com/qbYP3Ex.png) center / cover`}} ></CardTitle>
            <CardText>
              Javascript Maze Runner!
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/cbw29512/maze1' target="_blank" rel="noopener noreferrer"><Button colored>GitLab</Button></a>
              <a href='https://cbw29512.gitlab.io/maze1' target="_blank" rel="noopener noreferrer"><Button colored>TRY ME!</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', top:'20'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: `url(https://i.imgur.com/pThRImZ.png) center / cover`}} ></CardTitle>
            <CardText>
              Magic 8 Ball!
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/cbw29512/magic8ball' target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
              <a href='https://cbw29512.gitlab.io/magic8ball/' target="_blank" rel="noopener noreferrer"><Button colored>TRY ME!</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', top:'20'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(https://i.imgur.com/AOFDEPe.png) center / cover`}} ></CardTitle>
            <CardText>
              Halloween Coin Flip!
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/cbw29512/coin-object' target="_blank" rel="noopener noreferrer"><Button colored>GitLab</Button></a>
            <a href='https://cbw29512.gitlab.io/coin-object/' target="_blank" rel="noopener noreferrer"><Button colored>TRY ME!</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        
        </div>
      
      )
    } else if(this.state.activeTab === 3) {
      return (

        <div className="projects-grid">
          {/* Project 1 */}
            
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', top:'20'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(https://i.imgur.com/EHhfo93.png) center / cover`}} ></CardTitle>
            <CardText>
              Javascript Sokoban!
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/cbw29512/sokoban' target="_blank" rel="noopener noreferrer"><Button colored>GitLab</Button></a>
            <a href='https://cbw29512.gitlab.io/sokoban/' target="_blank" rel="noopener noreferrer"><Button colored>TRY ME!</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', top:'20'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(https://i.imgur.com/eGWcJbj.png) center / cover`}} ></CardTitle>
            <CardText>
              Tower Of Hanoi!
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/cbw29512/towerofhanoi/pages' target="_blank" rel="noopener noreferrer"><Button colored>GitLab</Button></a>
            <a href='https://cbw29512.gitlab.io/towerofhanoi/' target="_blank" rel="noopener noreferrer"><Button colored>TRY ME!</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto', top:'20'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(https://i.imgur.com/oyWMAZC.png) center / cover`}} ></CardTitle>
            <CardText>
              Connect Four
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/cbw29512/connectfour' target="_blank" rel="noopener noreferrer"><Button colored>GitLab</Button></a>
            <a href='https://cbw29512.gitlab.io/connectfour/' target="_blank" rel="noopener noreferrer"><Button colored>TRY ME!</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>     
        
      )
    }

  }

  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Django</Tab>
          <Tab>Javascript</Tab>
          <Tab>Games</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
