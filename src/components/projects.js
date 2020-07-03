import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import mazerunner from './images/mazerunner.png';
import sokoban from './images/sokoban.png';
import halloween from './images/halloween.png';
import ghostpost from './images/ghostpost.png';
import bugtracker from './images/bugtracker.png';
import twitterclone from './images/twitterclone.png';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${mazerunner}) center / cover`}} ></CardTitle>
            <CardText>
              Javascript Maze Runner!
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/cbw29512/maze1' target="_blank" rel="noopener noreferrer"><Button colored>GitLab</Button></a>
              <a href='https://cbw29512.gitlab.io/maze1' target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${sokoban}) center / cover`}} ></CardTitle>
            <CardText>
              Javascript Sokoban!
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/cbw29512/sokoban/' target="_blank" rel="noopener noreferrer"><Button colored>GitLab</Button></a>
            <a href='https://cbw29512.gitlab.io/sokoban/' target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${halloween}) center / cover`}} ></CardTitle>
            <CardText>
              Halloween Coin Flip!
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/cbw29512/coin-object' target="_blank" rel="noopener noreferrer"><Button colored>GitLab</Button></a>
            <a href='https://cbw29512.gitlab.io/coin-object/' target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${ghostpost}) center / cover`}} ></CardTitle>
            <CardText>
              Django App Ghost Post!
            </CardText>
            <CardActions border>
              <a href='https://github.com/cbw29512/ghostpost' target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
              <a href='www.google.com' target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${bugtracker}) center / cover`}} ></CardTitle>
            <CardText>
              Django Bug Tracker!
            </CardText>
            <CardActions border>
            <a href='https://github.com/cbw29512/bugtracker' target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
            <a href='https://cbw29512.gitlab.io/sokoban/' target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${twitterclone}) center / cover`}} ></CardTitle>
            <CardText>
              Halloween Coin Flip!
            </CardText>
            <CardActions border>
            <a href='https://github.com/cbw29512/twitterclone' target="_blank" rel="noopener noreferrer"><Button colored>GitHub</Button></a>
            <a href='https://cbw29512.gitlab.io/coin-object/' target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
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
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${mazerunner}) center / cover`}} ></CardTitle>
            <CardText>
              Javascript Maze Runner!
            </CardText>
            <CardActions border>
              <a href='https://gitlab.com/cbw29512/maze1' target="_blank" rel="noopener noreferrer"><Button colored>GitLab</Button></a>
              <a href='https://cbw29512.gitlab.io/maze1' target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${sokoban}) center / cover`}} ></CardTitle>
            <CardText>
              Javascript Sokoban!
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/cbw29512/sokoban/' target="_blank" rel="noopener noreferrer"><Button colored>GitLab</Button></a>
            <a href='https://cbw29512.gitlab.io/sokoban/' target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${halloween}) center / cover`}} ></CardTitle>
            <CardText>
              Halloween Coin Flip!
            </CardText>
            <CardActions border>
            <a href='https://gitlab.com/cbw29512/coin-object' target="_blank" rel="noopener noreferrer"><Button colored>GitLab</Button></a>
            <a href='https://cbw29512.gitlab.io/coin-object/' target="_blank" rel="noopener noreferrer"><Button colored>Live Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>

      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>Personal</h1></div>
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
          <Tab>Personal</Tab>
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
