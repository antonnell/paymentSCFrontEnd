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

class ChangeContractPayer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {

    if(this.props.loaded) {
      var address = 'https://rinkeby.etherscan.io/tx/'+this.props.updatePayerHash
      return(<CardContent>
        <Grid container direction="row" justify="center">
          <Grid item xs={12}>
            <Typography align='center' color="textSecondary" variant="headline" component="h2" style={{marginTop:50,marginBottom:50}}>Contract change has been requested!</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align='center' color="textSecondary" component="h2"><b>{this.props.contract.payerAddress}</b> has been updated to: <b>{this.props.newPayerAddress}</b>.</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align='center' color="textSecondary" component="h2">Once it has been mined it should reflect on your contract.</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align='center' color="textSecondary" component="h2">You can view the <b>progress</b> of the transaction at <a href={address}>{address}</a>.</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" spacing={0} style={{position: 'relative'}}>
          <Grid item xs={12} sm={12} align='left'>
            <Button size="small" onClick={this.props.submitBack}>Back</Button>
          </Grid>
        </Grid>
      </CardContent>)
    }

    return (
        <CardContent>
          <Grid container direction="row" justify="center">
            <Grid container alignItems="flex-start" spacing={0}>
              <Grid item xs={12}>
                <Grid container direction="column" justify="center">
                  <Grid item xs={12}><Typography align='center' variant="headline" component="h2" style={{marginTop:50,marginBottom:50}}>Update Payer</Typography></Grid>
                  <Grid item xs={12}>
                    <Typography component="h2">Current Payer Address: {this.props.contract.payerAddress}</Typography>
                  </Grid>
                  <Grid item xs={12} >
                    <TextField required fullWidth={true} color="textSecondary" required error={this.props.newPayerAddressError} disabled={this.props.loading}
                      id="newPayerAddress" label="Payer Address" value={this.props.newPayerAddress}
                      onChange={this.props.handleChange('newPayerAddress')} margin="normal"
                      helperText={"Address of the payer you want to set"}/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" spacing={0} style={{position: 'relative'}}>
            <Grid item xs={6} sm={6} align='left' >
              <Button size="small" variant="flat" color="primary" disabled={this.props.loading} onClick={this.props.submitBack}>
                Back
              </Button>
              {this.props.loading && <CircularProgress size={36} style={{position: 'absolute',top: '50%',left: '50%',marginTop: -12,marginLeft: -12,}}/>}
            </Grid>
            <Grid item xs={6} sm={6} align='right'>
              <Button size="small" variant="raised" color="primary" disabled={this.props.loading} onClick={this.props.submitUpdatePayer}>
                Update
              </Button>
              {this.props.loading && <CircularProgress size={36} style={{position: 'absolute',top: '50%',left: '50%',marginTop: -12,marginLeft: -12,}}/>}
            </Grid>
          </Grid>
          <Grid container direction="row">
            <LinearProgress />
          </Grid>
        </CardContent>
    );
  }
}

export default withStyles(styles)(ChangeContractPayer);
