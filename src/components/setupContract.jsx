import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import SvgIcon from 'material-ui/SvgIcon';

const styles = {};

function IntervalIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
    </SvgIcon>
  );
}

function ApprovalIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z" />
    </SvgIcon>
  );
}

class ContractCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elevation: 0
    };

    this.hover = this.hover.bind(this);
    this.stopHover = this.stopHover.bind(this);
  };

  hover() {
    this.setState({elevation: 3})
  }
  stopHover() {
  this.setState({elevation: 0})
  }

  render() {
    return(
      <Card elevation={this.state.elevation} onMouseOver={this.hover} onMouseOut={this.stopHover} onClick={() => {this.props.handleClick(this.props.type)}} style={{marginBottom: '8px', marginRight: '8px', cursor: 'pointer', padding:'8px'}} >
        <Grid container direction="row" justify="center">
          <Grid item xs={12}>
            <Typography align='center' color="inherit" variant="headline" component="h2" style={{marginTop: '12px', marginBottom: '12px'}}>{this.props.heading}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align='center' color="inherit">{this.props.text}</Typography>
          </Grid>
          <Grid item xs={12} align='center' style={{marginTop: '12px'}}>
            {this.props.icon}
          </Grid>
        </Grid>
      </Card>
    );
  }
};

class SetupContract extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    /*<Grid item xs={12}>
      <TextField fullWidth={true}
        id="bitDiem" label="Bit Diem Address" required error={this.props.bitDiemError} value={this.props.bitDiem} disabled={this.props.loading}
        onChange={this.handleChange('bitDiem')} margin="normal"
        helperText="Address of the bitDiem Organisation if you would like to provide them with usufruct"/>
    </Grid>
    <Grid item xs={12}>
      <TextField fullWidth={true} required error={this.props.ensNameError} disabled={this.props.loading}
        id="ensName" label="ENS Name" value={this.props.ensName}
        onChange={this.handleChange('ensName')} margin="normal"
        helperText={"Human friendly name for your contract. You can use this to search for your contract going forward"}/>
    </Grid>*/

    if(this.props.loaded) {
      return(<CardContent>
        <Grid container direction="row" justify="center" spacing={0}>
          <Grid item xs={12}>
            <Typography align='center' color="textSecondary" variant="headline" component="h2" style={{marginTop:50,marginBottom:50}}>Contract setup is complete!</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align='center' color="textSecondary" component="h2">Your contract address is: <b>{this.props.contract.address}</b>.</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align='center' color="textSecondary" component="h2">Keep it safe, you can interact with the contract using this address.</Typography>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" spacing={0} style={{position: 'relative', marginTop: '12px'}}>
          <Grid item xs={12} sm={12} align='left'>
            <Button size="small" color="primary" onClick={this.props.submitBack}>Back</Button>
          </Grid>
        </Grid>
      </CardContent>)
    }

    if(this.props.contractType == null) {
      return (
        <CardContent>
          <Grid container direction="row" justify="center" >
            <Grid item xs={12}><Typography align='center' variant="headline" component="h2" style={{marginTop:50,marginBottom:50}}>Setup Contract</Typography></Grid>
            <Grid item xs={12}>
              <Typography align='left' color="inherit" component="h2" style={{marginBottom:12}}>Select one of the contract types below.</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
              <ContractCard handleClick={this.props.handleProductSelect} type='Interval' heading="Interval Contract" text="Payments are made on a routine basis! You just tell us when you want to withdraw." icon={<IntervalIcon style={{fontSize:'75px', color: 'rgba(0, 0, 0, 0.87)'}} />} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
              <ContractCard handleClick={this.props.handleProductSelect} type='Approval' heading="Approval Contract" text="A payment is made once the job is complete! You just have to tell us when you are done." icon={<ApprovalIcon style={{fontSize:'75px', color: 'rgba(0, 0, 0, 0.87)'}}  />} />
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center" spacing={0} style={{position: 'relative', marginTop: '12px'}}>
              <Grid item xs={12} sm={12} align='left'>
                <Button size="small" variant="flat" color="primary" disabled={this.props.loading} onClick={this.props.submitBack}>
                  Back
                </Button>
              </Grid>
          </Grid>
        </CardContent>
      );
    }

    var interval = null;

    if(this.props.contractType == 'Interval') {
      interval = (<Grid item xs={12} >
        <TextField required fullWidth={true} color="textSecondary" required error={this.props.paymentIntervalError} disabled={this.props.loading}
          id="paymentInterval" label="Payment Interval" value={this.props.paymentInterval}
          onChange={this.props.handleChange('paymentInterval')} margin="normal"
            helperText={"The interval that funds will be transferred to the payee"}/>
        </Grid>);
    }

    return (
      <CardContent>
        <Grid container direction="row" justify="center">
          <Grid container alignItems="flex-start" spacing={0}>
            <Grid item xs={12}>
              <Grid container direction="column" justify="center">
                <Grid item xs={12}><Typography align='center' variant="headline" component="h2" style={{marginTop:50,marginBottom:50}}>Setup Contract</Typography></Grid>
                <Grid item xs={12} >
                  <TextField required fullWidth={true} color="textSecondary" required error={this.props.payerError} disabled={this.props.loading}
                    id="payer" label="Payer Address" value={this.props.payer}
                    onChange={this.props.handleChange('payer')} margin="normal"
                    helperText={"The contract address of the company/person who will be paying for the services"}/>
                </Grid>
                <Grid item xs={12} >
                  <TextField required fullWidth={true} color="textSecondary" required error={this.props.payeeError} disabled={this.props.loading}
                    id="payee" label="Payee Address" value={this.props.payee}
                    onChange={this.props.handleChange('payee')} margin="normal"
                    helperText={"The contracat address of the company/person who will be receiving payment"}/>
                </Grid>
                {interval}
                <Grid item xs={12} >
                  <TextField required fullWidth={true} color="textSecondary" required error={this.props.paymentAmountError} disabled={this.props.loading}
                    id="paymentAmount" label="Payment Amount" value={this.props.paymentAmount}
                    onChange={this.props.handleChange('paymentAmount')} margin="normal"
                    helperText={"The amount of funds that will be transferred to the payee"}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" spacing={0} style={{position: 'relative', marginTop: '12px'}}>
            <Grid item xs={6} sm={6} align='left'>
              <Button size="small" variant="flat" color="primary" disabled={this.props.loading} onClick={this.props.reset}>
                Back
              </Button>
              {this.props.loading && <CircularProgress size={36} style={{position: 'absolute',top: '50%',left: '50%',marginTop: -12,marginLeft: -12,}}/>}
            </Grid>
            <Grid item xs={6} sm={6} align='right' >
              <Button size="small" variant="raised" color="primary" disabled={this.props.loading} onClick={this.props.submitSetupContract}>
                Done
              </Button>
              {this.props.loading && <CircularProgress size={36} style={{position: 'absolute',top: '50%',left: '50%',marginTop: -12,marginLeft: -12,}}/>}
            </Grid>
        </Grid>
      </CardContent>
    );
  }
}

export default withStyles(styles)(SetupContract);
