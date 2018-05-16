import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const styles = {};

class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    const style = theme => ({
      whiteLabel: {
        color: '#4CAF50',
      },
      whiteUnderline: {
        '&:before': {
          backgroundColor: '#4CAF50',
        },
      },
      whiteUnderline: {
        '&:after': {
          backgroundColor: '#4CAF50',
        },
      },
    })
    return (
      <Grid container justify="space-around" alignItems="center" direction="row" spacing={0}>
        <Grid container justify="space-around" alignItems="center" direction="row" spacing={0}>
          <Grid item xs={10} sm={6} md={4} lg={3} style={{marginTop: '100px'}} align='center'>
            <div style={{flex: 1}}>
              <img src="LogoWhite@2x.png" width="180px" height="47px" alt="" />
            </div>
          </Grid>
        </Grid>
        <Grid container justify="space-around" alignItems="center" direction="row" spacing={0} style={{marginTop: '80px'}}>
          <Grid item xs={10} sm={6} md={4} lg={3} align='center'>
            <Typography variant="body2" style={{color: '#fff'}}>
              Enter your BitDiem login credentials
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-around" alignItems="center" direction="row" spacing={0} style={{marginTop: '24px'}}>
          <Grid item xs={10} sm={6} md={4} lg={3}>
            <TextField required fullWidth={true} error={this.props.usernameError} disabled={this.props.loading}
              id="username" label="Email Address" value={this.props.username}
              onChange={this.props.handleChange('username')} margin="normal" onKeyDown={this.props.onLoginKeyDown}
              InputProps={{style: {color: '#FFF'}}}
              InputLabelProps={{style: {color: '#FFF'}}} />
            <TextField required fullWidth={true} color="primary" type="password" error={this.props.passwordError} disabled={this.props.loading}
              id="password" label="Password" value={this.props.password}
              onChange={this.props.handleChange('password')} margin="normal" onKeyDown={this.props.onLoginKeyDown}
              InputProps={{style: {color: '#FFF'}}}
              InputLabelProps={{style: {color: '#FFF'}}} />
          </Grid>
        </Grid>
        <Grid container justify="space-around" alignItems="center" direction="row" spacing={0}>
          <Grid item xs={10} sm={6} md={4} lg={3} align='right'>
            <Typography style={{ color: '#fff', fontSize: '12px', cursor: 'pointer'}} onClick={this.props.submitForgotPasswordNavigate}>
              Forgot Password
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-around" alignItems="center" direction="row" spacing={0} style={{marginTop: '40px'}}>
          <Grid item xs={12} sm={12} md={12} lg={12} align='center'>
            <Button variant="raised" size='large' color='secondary' onClick={this.props.submitLogin}>
              LOGIN
            </Button>
          </Grid>
        </Grid>
        <Grid container justify="space-around" alignItems="center" direction="row" spacing={0} style={{marginTop: '40px'}}>
          <Grid item xs={12} sm={12} md={12} lg={12} align='center'>
            <Typography color="inherit" style={{color: '#fff', fontSize: '12px', width:'90px', display: 'inline-block'}}>
              No account yet?
            </Typography>
            <Typography color="inherit" style={{color: '#fff', fontSize: '12px', cursor: 'pointer', width: '60px', display: 'inline-block'}} onClick={this.props.submitRegisterNavigate}>
              Create one
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(styles)(Welcome);
