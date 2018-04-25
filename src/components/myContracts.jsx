import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';

const styles = {};

class MyContracts extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <CardContent>
        <Grid container xs={12} direction="row" justify="center">
          <Grid container xs={12} alignItems="flex-start" spacing={0}>
            <Grid item xs={12}>
              <Grid container xs={12} direction="row" justify="center">
                <Grid item xs={12}><Typography align='center' variant="headline" component="h2" style={{marginTop:50,marginBottom:50}}>Your Contracts</Typography></Grid>
                <Grid item xs={12} style={{marginTop:10,marginBottom:10}}></Grid>
                <Grid item xs={12} sm={12} align='center'>
                  <Typography component="h2">Not implemented yet!</Typography>
                </Grid>
                <Grid item xs={12} style={{marginTop:10,marginBottom:10}}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} direction="row" justify="center" spacing={0} style={{position: 'relative'}}>
          <Grid item xs={12} sm={12} align='left' >
            <Button style={{verticalAlign: 'middle', marginTop: '8px'}} size="small" variant="flat" color="secondary" disabled={this.props.loading} onClick={this.props.submitBack}>
              Back
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    );
  };
}

export default withStyles(styles)(MyContracts);
