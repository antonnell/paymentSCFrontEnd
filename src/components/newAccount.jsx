import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

const styles = {};

class NewAccount extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
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
              Enter your information below and we will get you setup
            </Typography>
          </Grid>
        </Grid>
        <Grid container justify="space-around" alignItems="center" direction="row" spacing={0} style={{marginTop: '24px'}}>
          <Grid item xs={10} sm={6} md={4} lg={3} >
            <TextField required fullWidth={true} color="textSecondary" error={this.props.emailAddressError} disabled={this.props.loading}
              id="emailAddress" label="Email Address" value={this.props.emailAddress}
              onChange={this.props.handleChange('emailAddress')} margin="normal" onKeyDown={this.props.onLoginKeyDown}
              InputProps={{style: {color: '#FFF'}}} InputLabelProps={{style: {color: '#FFF'}}} />
            <TextField required fullWidth={true} color="textSecondary" error={this.props.usernameError} disabled={this.props.loading}
              id="username" label="Username" value={this.props.username}
              onChange={this.props.handleChange('username')} margin="normal" onKeyDown={this.props.onLoginKeyDown}
              InputProps={{style: {color: '#FFF'}}} InputLabelProps={{style: {color: '#FFF'}}} />
            <TextField required fullWidth={true} color="textSecondary" type="password" error={this.props.passwordError} disabled={this.props.loading}
              id="password" label="Password" value={this.props.password}
              onChange={this.props.handleChange('password')} margin="normal" onKeyDown={this.props.onLoginKeyDown}
              InputProps={{style: {color: '#FFF'}}} InputLabelProps={{style: {color: '#FFF'}}} />
            <TextField fullWidth={true} color="textSecondary" error={this.props.walletAddressError} disabled={this.props.loading}
              id="walletAddress" label="Wallet Address" value={this.props.walletAddress}
              onChange={this.props.handleChange('walletAddress')} margin="normal" onKeyDown={this.props.onLoginKeyDown}
              InputProps={{style: {color: '#FFF'}}} InputLabelProps={{style: {color: '#FFF'}}} />
          </Grid>
        </Grid>
        <Grid container xs={10} sm={6} md={4} lg={3} justify="space-around" alignItems="center" direction="row" spacing={0} style={{marginTop: '40px'}}>
          <Grid item xs={6} sm={6} md={6} lg={6} align='left'>
            <Button variant="flat" size='large' color='secondary' style={{color: '#fff'}}  onClick={this.props.submitRegisterBack}>
              Back
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} align='right'>
            <Button variant="raised" size='large' color='secondary' onClick={this.props.submitRegister}>
              Register
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(styles)(NewAccount);
