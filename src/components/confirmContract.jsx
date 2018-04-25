import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';

const styles = {};

class ConfirmContract extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    var address = 'https://rinkeby.etherscan.io/tx/'+this.props.transactionHash
    return (
      <CardContent>
        <Grid container xs={12} direction="row" justify="center">
          <Grid item xs={12}>
            <Typography align='center' color="textSecondary" variant="headline" component="h2">Success</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align='center' color="textSecondary" component="h2">Your transaction has been successfully submitted.</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align='center' color="textSecondary" component="h2">Once it has been mined it should reflect on the contract.</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align='center' color="textSecondary" component="h2">You can view the <b>progress</b> of the transaction at <a href={address}>{address}</a>.</Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} direction="row" justify="center" spacing={0} style={{position: 'relative'}}>
          <Grid item xs={12} sm={12} align='left'>
            <Button size="small" onClick={this.props.submitBack}>Back</Button>
          </Grid>
        </Grid>
      </CardContent>
    );
  }
}

export default withStyles(styles)(ConfirmContract);
