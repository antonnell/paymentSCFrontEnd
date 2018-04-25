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
    return (
      <Grid container xs={12} justify="space-around" alignItems="center" direction="row" spacing={0}>
        <Grid container xs={12} justify="space-around" alignItems="center" direction="row" spacing={0}>
          <Grid item xs={10} sm={6} md={4} lg={3} style={{marginTop: '100px'}} align='center'>
            <Typography variant="headline" color="inherit">
              BitDiem Network
            </Typography>
          </Grid>
        </Grid><Grid container xs={12} justify="space-around" alignItems="center" direction="row" spacing={0}>
          <Grid item xs={10} sm={6} md={4} lg={3} style={{marginTop: '80px'}}>
            <TextField required fullWidth={true} color="textSecondary" error={this.props.usernameError} disabled={this.props.loading}
              id="username" label="Username" value={this.props.username}
              onChange={this.props.handleChange('username')} margin="normal" onKeyDown={this.props.onLoginKeyDown} />
            <TextField required fullWidth={true} color="textSecondary" type="password" error={this.props.passwordError} disabled={this.props.loading}
              id="password" label="Password" value={this.props.password}
              onChange={this.props.handleChange('password')} margin="normal" onKeyDown={this.props.onLoginKeyDown} />
          </Grid>
        </Grid>
        <Grid container xs={12} justify="space-around" alignItems="center" direction="row" spacing={0}>
          <Grid item xs={10} sm={6} md={4} lg={3} align='right'>
            <Typography color="inherit" style={{fontSize: '12px', cursor: 'pointer'}}>
              Forgot Password
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} justify="space-around" alignItems="center" direction="row" spacing={0} style={{marginTop: '40px'}}>
          <Grid item xs={12} sm={12} md={12} lg={12} align='center'>
            <Button variant="flat" size='large' color='secondary' style={{border:'2px solid #424242'}} onClick={this.props.submitLogin}>
              LOGIN
            </Button>
          </Grid>
        </Grid>
        <Grid container xs={12} justify="space-around" alignItems="center" direction="row" spacing={0} style={{marginTop: '40px'}}>
          <Grid item xs={12} sm={12} md={12} lg={12} align='center'>
            <Typography color="inherit" style={{fontSize: '12px', width:'90px', display: 'inline-block'}}>
              No account yet?
            </Typography>
            <Typography color="inherit" style={{fontSize: '12px', cursor: 'pointer', width: '60px', display: 'inline-block'}} onClick={this.props.submitRegisterNavigate}>
              Create one
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(styles)(Welcome);
