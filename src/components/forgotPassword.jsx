import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { CircularProgress } from 'material-ui/Progress';

const styles = {};

class ForgotPassword extends Component {

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
          <Grid container justify="space-around" alignItems="center" direction="row" spacing={0} style={{marginTop: '80px'}}>
            <Grid item xs={12} align='center'>
              <Typography variant="body2" style={{color: '#fff'}}>
                Enter your information below and we will get you setup
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-around" alignItems="center" direction="row" spacing={0} style={{marginTop: '24px'}}>
            <Grid item xs={12}>
              <TextField required fullWidth={true} error={this.props.emailAddressError} disabled={this.props.loading}
                id="emailAddress" label="Email Address" value={this.props.emailAddress}
                onChange={this.props.handleChange('emailAddress')} margin="normal" onKeyDown={this.props.onForgotPasswordKeyDown}
                InputProps={{style: {color: '#FFF'}}}
                InputLabelProps={{style: {color: '#FFF'}}} />
            </Grid>
          </Grid>
          {this.props.loading && <CircularProgress size={36} style={{position: 'absolute',top: '50%',left: '50%',marginTop: -12,marginLeft: -12,}}/>}
          <Grid container justify="space-around" alignItems="center" direction="row" spacing={0} style={{minHeight: '30px'}}>
            <Grid item xs={12} align='center'>
              <Typography style={{color: '#f44336'}} >
                {this.props.error}
              </Typography>
            </Grid>
          </Grid>
          <Grid container justify="space-around" alignItems="center" direction="row" spacing={0} style={{marginTop: '40px'}}>
            <Grid item xs={6} align='left'>
              <Button variant="flat" size='large' color='secondary' style={{color: '#fff'}}  onClick={this.props.submitForgotPasswordBack}>
                Back
              </Button>
            </Grid>
            <Grid item xs={6} align='right'>
              <Button variant="raised" size='large' color='secondary' onClick={this.props.submitForgotPassword} disabled={this.props.loading}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(styles)(ForgotPassword);
