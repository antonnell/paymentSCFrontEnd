import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { LinearProgress } from 'material-ui/Progress';
import { CircularProgress } from 'material-ui/Progress';

const styles = {};

class SearchContract extends Component {

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
              <Grid container xs={12} direction="column" justify="center">
                <Grid item xs={12}><Typography align='center' variant="headline" component="h2" style={{marginTop:50,marginBottom:50}}>Contract Information</Typography></Grid>
                <Grid item xs={12}><Typography align='center'>{"For more information, head over to https://www.bitdiem.com/"}</Typography></Grid>
                <Grid item xs={12} style={{marginTop:10,marginBottom:10}}></Grid>
                <Grid item xs={12}>
                  <Typography component="h2">Contract state: {this.props.contractState}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography component="h2">Funds Deposited: {this.props.fundsDeposited}</Typography>
                </Grid>
                <Grid item xs={12} >
                  <Typography component="h2">Funds Withdrawable: {this.props.fundsWithdrawable}</Typography>
                </Grid>
                <Grid item xs={12} >
                  <Typography component="h2">Payer Address: {this.props.payerAddress}</Typography>
                </Grid>
                <Grid item xs={12} >
                  <Typography component="h2">Payee Address: {this.props.payeeAddress}</Typography>
                </Grid>
                <Grid item xs={12} style={{marginTop:10,marginBottom:10}}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} direction="row" justify="center" spacing={0} style={{position: 'relative'}}>
          <Grid item xs={3} sm={3} align='left' >
            <Button size="medium" variant="flat" color="secondary" disabled={this.props.loading} onClick={this.props.submitBack}>
              Back
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} align='right' spacing={0}>
            <Button size="medium" variant="raised" color="secondary" disabled={this.props.loading||this.props.contractState!='Created'} onClick={this.props.submitStartContract}>
              Start
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} align='right' spacing={0}>
            <Button size="medium" variant="raised" color="secondary" disabled={this.props.loading} onClick={this.props.submitDepositNavigate}>
              Deposit
            </Button>
          </Grid>
          <Grid item xs={3} sm={3} align='right' spacing={0}>
            <Button size="medium" variant="raised" color="secondary" disabled={this.props.loading} onClick={this.props.submitWithdrawNavigate}>
              Withdraw
            </Button>
          </Grid>
          {this.props.loading && <CircularProgress size={36} style={{position: 'absolute',top: '50%',left: '50%',marginTop: -12,marginLeft: -12,}}/>}
        </Grid>
        <Grid container xs={12} direction="row">
          <LinearProgress />
        </Grid>
      </CardContent>
    );
  }
}

export default withStyles(styles)(SearchContract);
