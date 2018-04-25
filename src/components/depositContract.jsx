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

class DepositContract extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {

    if(this.props.loaded) {
      var address = 'https://rinkeby.etherscan.io/tx/'+this.props.fundContractHash
      return(<CardContent>
        <Grid container xs={12} direction="row" justify="center">
          <Grid item xs={12}>
            <Typography align='center' color="textSecondary" variant="headline" component="h2">Deposit is complete!</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align='center' color="textSecondary" component="h2"><b>{this.props.depositAmount}</b> has been depositted to: <b>{this.props.contract.contractAddress}</b>.</Typography>
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
      </CardContent>)
    }

    return (
      <CardContent>
        <Grid container xs={12} direction="row" justify="center">
          <Grid container xs={12} alignItems="flex-start" spacing={0}>
            <Grid item xs={12}>
              <Grid container xs={12} direction="column" justify="center">
                <Grid item xs={12}><Typography align='center' variant="headline" component="h2" style={{marginTop:50,marginBottom:50}}>Fund Contract</Typography></Grid>
                <Grid item xs={12}>
                  <Typography component="h2">Balance: {this.props.contract.fundsDeposited}</Typography>
                </Grid>
                <Grid item xs={12} >
                  <TextField required fullWidth={true} color="textSecondary" required error={this.props.depositAmountError} disabled={this.props.loading}
                    id="depositAmount" label="Amount" value={this.props.depositAmount}
                    onChange={this.props.handleChange('depositAmount')} margin="normal"
                    helperText={"Deposit amount"}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} direction="row" justify="center" spacing={0} style={{position: 'relative'}}>
            <Grid item xs={6} align='left' >
              <Button size="small" variant="flat" color="secondary" disabled={this.props.loading} onClick={this.props.submitBack}>
                Back
              </Button>
              {this.props.loading && <CircularProgress size={36} style={{position: 'absolute',top: '50%',left: '50%',marginTop: -12,marginLeft: -12,}}/>}
            </Grid>
            <Grid item xs={6} align='right' >
              <Button size="small" variant="raised" color="secondary" disabled={this.props.loading} onClick={this.props.submitFundContract}>
                Deposit
              </Button>
              {this.props.loading && <CircularProgress size={36} style={{position: 'absolute',top: '50%',left: '50%',marginTop: -12,marginLeft: -12,}}/>}
            </Grid>
        </Grid>
        <Grid container xs={12} direction="row">
          <LinearProgress />
        </Grid>
      </CardContent>
    );
  }
}

export default withStyles(styles)(DepositContract);
