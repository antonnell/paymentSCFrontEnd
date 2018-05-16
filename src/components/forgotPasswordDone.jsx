import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles = {};

class ForgotPasswordDone extends Component {

  constructor(props) {
    super(props);
  };

  render() {
    return (
      <Grid container justify="space-around" alignItems="center" direction="row" spacing={0} style={{marginTop: '100px'}}>
        <Grid item xs={10} sm={6} md={4} lg={3} align='center'>
          <Grid container justify="space-around" alignItems="center" direction="row" spacing={0}>
            <Grid item xs={12} align='center'>
              <div style={{flex: 1}}>
                <img src="LogoWhite@2x.png" width="180px" height="47px" alt="" />
              </div>
            </Grid>
          </Grid>
          <Grid containe justify="space-around" alignItems="center" direction="row" spacing={0}>
            <Grid item xs={12} style={{marginTop: '50px'}}>
              <Typography style={{color: '#fff'}} variant="Body2" >If the chosen email address exists, password reset instructions have been send to the address provided.</Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-around" alignItems="center" direction="row" spacing={0} style={{marginTop: '40px'}}>
            <Grid item xs={12} align='left'>
              <Button variant="flat" size='large' color='secondary' style={{color: '#fff'}}  onClick={this.props.submitForgotPasswordDoneBack}>
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(styles)(ForgotPasswordDone);
