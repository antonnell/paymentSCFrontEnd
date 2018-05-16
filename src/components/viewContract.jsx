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
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import SvgIcon from 'material-ui/SvgIcon';
import Popover from 'material-ui/Popover';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

function MoreIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
    </SvgIcon>
  );
};

const styles = {};

class SearchContract extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorOriginVertical: 'top',
      anchorOriginHorizontal: 'left',
      transformOriginVertical: 'top',
      transformOriginHorizontal: 'left',
      positionTop: 200,
      positionLeft: 400,
      anchorReference: 'anchorEl'
    };

    this.handleClickButton = this.handleClickButton.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };

  render() {

    var startTerminatedApprove = null

    if(this.props.contract.contractType == 'Approval') {
      if(this.props.contract.contractState=='Created') {
        startTerminatedApprove = (
          <ListItem button onClick={this.props.submitApproveContract}>
            <ListItemText primary="Approve Payout" />
          </ListItem>)
      }
    } else if (this.props.contract.contractType == 'Interval') {
      if(this.props.contract.contractState=='Created') {
        startTerminatedApprove = (
          <ListItem button onClick={this.props.submitStartContract}>
            <ListItemText primary="Start Contract" />
          </ListItem>)
      } else if(this.props.contract.contractState=='In Progress') {
        startTerminatedApprove = (
          <ListItem button onClick={this.props.submitTerminateContract}>
            <ListItemText primary="Terminate Contract" />
          </ListItem>)
      }
    }

    var infoStyle = {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }

    var pendingApprovals = 0;
    if(this.props.contract.pendingPayeeUpdate != null && this.props.contract.pendingPayeeUpdate.toAddress != '0x0000000000000000000000000000000000000000' && (this.props.contract.pendingPayeeUpdate.payeeApproved != true || this.props.contract.pendingPayeeUpdate.payerApproved != true)) {
      pendingApprovals++;
    }
    if(this.props.contract.pendingPayerUpdate != null && this.props.contract.pendingPayerUpdate.toAddress != '0x0000000000000000000000000000000000000000' && (this.props.contract.pendingPayerUpdate.payeeApproved != true || this.props.contract.pendingPayerUpdate.payerApproved != true)) {
      pendingApprovals++;
    }
    if(this.props.contract.pendingUsufructUpdate != null && this.props.contract.pendingUsufructUpdate.toAddress != '0x0000000000000000000000000000000000000000' && (this.props.contract.pendingUsufructUpdate.payeeApproved != true || this.props.contract.pendingUsufructUpdate.payerApproved != true)) {
      pendingApprovals++;
    }

    return (
      <CardContent>
        <Grid container direction="row" justify="center">
          <Grid container alignItems="flex-start" spacing={0}>
            <Grid item xs={12}>
              <Grid container direction="row" justify="center">
                <Grid item xs={12}><Typography align='center' variant="headline" component="h2" style={{marginTop:50,marginBottom:50}}>Your Contract Information</Typography></Grid>
                <Grid item xs={12} style={{marginTop:10,marginBottom:10}}></Grid>
                <Grid item xs={12} sm={4}>
                  <Typography component="h2"><b>Contract Address:</b></Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography component="h2" style={infoStyle}>{this.props.contract.contractAddress}</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography component="h2"><b>Contract Type:</b></Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography component="h2" style={infoStyle}>{this.props.contract.contractType}</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography component="h2"><b>Contract State:</b></Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography component="h2" style={infoStyle}>{this.props.contract.contractState}</Typography>
                </Grid>
                <Grid item xs={12} style={{marginTop:10}}></Grid>
                <Grid item xs={12} sm={4}>
                  <Typography component="h2"><b>Payment Amount:</b></Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography component="h2" style={infoStyle}>{this.props.contract.paymentAmount} wei</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography component="h2"><b>Payment Interval:</b></Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography component="h2" style={infoStyle}>{this.props.contract.paymentInterval!=null?(this.props.contract.paymentInterval+' blocks'):'N/A'}</Typography>
                </Grid>
                <Grid item xs={12} style={{marginTop:10}}></Grid>
                <Grid item xs={12} sm={4}>
                  <Typography component="h2"><b>Funds Deposited:</b></Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography component="h2" style={infoStyle}>{this.props.contract.payerBalance} wei</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography component="h2"><b>Funds Available:</b></Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography component="h2" style={infoStyle}>{this.props.contract.payeeBalance} wei</Typography>
                </Grid>
                <Grid item xs={12} style={{marginTop:10}}></Grid>
                <Grid item xs={12} sm={4}>
                  <Typography component="h2"><b>Payer Address:</b></Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography component="h2" style={infoStyle}>{this.props.contract.payerAddress}</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography component="h2"><b>Payee Address:</b></Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography component="h2" style={infoStyle}>{this.props.contract.payeeAddress}</Typography>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography component="h2"><b>Usufruct Address:</b></Typography>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Typography component="h2" style={infoStyle}>{this.props.contract.usufructAddress}</Typography>
                </Grid>
                <Grid item xs={12} style={{marginTop:10,marginBottom:10}}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" spacing={0} style={{position: 'relative'}}>
          <Grid item xs={2} sm={2} align='left' >
            <Button style={{verticalAlign: 'middle', marginTop: '8px'}} size="small" variant="flat" color="primary" disabled={this.props.loading} onClick={this.props.submitBack}>
              Back
            </Button>
          </Grid>
          <Grid item xs={10} sm={10} align='right'>
            <Button style={{verticalAlign: 'middle'}} size="small" variant="flat" color="primary" disabled={this.props.loading||this.props.contract.contractState=='Terminated'} onClick={this.props.submitDepositNavigate}>
              Deposit
            </Button>
            <Button style={{verticalAlign: 'middle'}} size="small" variant="flat" color="primary" disabled={this.props.loading} onClick={this.props.submitWithdrawNavigate}>
              Withdraw
            </Button>
            <Badge color="secondary" badgeContent={pendingApprovals} >
              <IconButton
                style={{verticalAlign: 'top'}}
                color="primary"
                aria-label="More"
                buttonRef={node => {
                  this.anchorEl = node;
                }}
                onClick={this.handleClickButton}>
                <MoreIcon  />
              </IconButton>
            </Badge>
            <Popover
              open={this.state.open}
              anchorEl={this.anchorEl}
              anchorReference={this.state.anchorReference}
              anchorPosition={{ top: this.state.positionTop, left: this.state.positionLeft }}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: this.state.anchorOriginVertical,
                horizontal: this.state.anchorOriginHorizontal,
              }}
              transformOrigin={{
                vertical: this.state.transformOriginVertical,
                horizontal: this.state.transformOriginHorizontal,
              }}
            >
            <List component="nav">
              {startTerminatedApprove}
              <ListItem button onClick={this.props.submitUpdatePayerNavigate}>
                <ListItemText primary="Update Payer" />
              </ListItem>
              <ListItem button onClick={this.props.submitUpdatePayeeNavigate}>
                <ListItemText primary="Update Payee" />
              </ListItem>
              <ListItem button onClick={this.props.submitUpdateUsufructNavigate}>
                <ListItemText primary="Update Usufruct" />
              </ListItem>
              <Badge color="secondary" badgeContent={pendingApprovals} >
                <ListItem button onClick={this.props.submitApprovalsNavigate}>
                  <ListItemText primary="Approvals" />
                </ListItem>
              </Badge>
            </List>
            </Popover>
          </Grid>
          {this.props.loading && <CircularProgress size={36} style={{position: 'absolute',top: '50%',left: '50%',marginTop: -12,marginLeft: -12,}}/>}
        </Grid>
        <Grid container direction="row">
          <LinearProgress />
        </Grid>
      </CardContent>
    );
  };

  handleClickButton = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };
}

export default withStyles(styles)(SearchContract);
