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
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import SvgIcon from 'material-ui/SvgIcon';
import Popover from 'material-ui/Popover';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
const isEthereumAddress  = require('is-ethereum-address');

const styles = {};

function MoreIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
    </SvgIcon>
  );
}

class ApprovalListItem extends Component {
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
    this.submitApprove = this.submitApprove.bind(this);
    this.submitReject = this.submitReject.bind(this);

  };

  render() {
    return (
      <ListItem>
        <ListItemText
          primary={this.props.title}
          secondary={this.props.subTitle}
        />
        <ListItemSecondaryAction>
          {this.props.loading && <CircularProgress size={36} style={{position: 'absolute',top: '40%',left: '40%',marginTop: -12,marginLeft: -12,}}/>}
          <IconButton
            disabled={this.props.loading}
            aria-label="Options"
            color="primary"
            buttonRef={node => {
              this.anchorEl = node;
            }}
            onClick={this.handleClickButton}>
            <MoreIcon />
          </IconButton>
          <Popover
            open={this.state.open}
            anchorEl={this.anchorEl}
            anchorReference='anchorEl'
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
            <ListItem disabled={this.props.loading} button onClick={(event) => { this.submitApprove(this.props.title); }}>
              <ListItemText primary="Approve" />
            </ListItem>
            <ListItem disabled={this.props.loading} button onClick={(event) => { this.submitReject(this.props.title); }}>
              <ListItemText primary="Reject" />
            </ListItem>
          </List>
          </Popover>
        </ListItemSecondaryAction>
      </ListItem>
    )
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

  submitApprove = (type) => {
    this.props.submitApprove(type)

    this.setState({open: false});
  };
  submitReject = (type) => {
    this.props.submitReject(type)

    this.setState({open: false});
  };
}

class PendingContractApprovals extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    this.renderPendingPayeeUpdate = this.renderPendingPayeeUpdate.bind(this);
    this.renderPendingPayerUpdate = this.renderPendingPayerUpdate.bind(this);
    this.renderPendingUsufructUpdate = this.renderPendingUsufructUpdate.bind(this);
  };

  renderPendingPayeeUpdate() {
    if(this.props.contract.pendingPayeeUpdate == null || this.props.contract.pendingPayeeUpdate.toAddress == '0x' || this.props.contract.pendingPayeeUpdate.toAddress == '0x0000000000000000000000000000000000000000' || (this.props.contract.pendingPayeeUpdate.payeeApproved == true && this.props.contract.pendingPayeeUpdate.payerApproved == true)) {
      return false
    }

    return (<ApprovalListItem
      title={'Payee Update'}
      subTitle={this.props.contract.pendingPayeeUpdate.toAddress}
      submitApprove={this.props.submitPayeeApprove}
      submitReject={this.props.submitPayeeReject}
      loading={this.props.loading}
      />);
  };

  renderPendingPayerUpdate() {
    if(this.props.contract.pendingPayerUpdate == null || this.props.contract.pendingPayerUpdate.toAddress == '0x' || this.props.contract.pendingPayerUpdate.toAddress == '0x0000000000000000000000000000000000000000' || (this.props.contract.pendingPayerUpdate.payeeApproved == true && this.props.contract.pendingPayerUpdate.payerApproved == true)) {
      return false
    }

    return (<ApprovalListItem
      title={'Payer Update'}
      subTitle={this.props.contract.pendingPayerUpdate.toAddress}
      submitApprove={this.props.submitPayerApprove}
      submitReject={this.props.submitPayerReject}
      loading={this.props.loading}
      />);
  };

  renderPendingUsufructUpdate() {
    if(this.props.contract.pendingUsufructUpdate == null || this.props.contract.pendingUsufructUpdate.toAddress == '0x' || this.props.contract.pendingUsufructUpdate.toAddress == '0x0000000000000000000000000000000000000000' || (this.props.contract.pendingUsufructUpdate.payeeApproved == true && this.props.contract.pendingUsufructUpdate.payerApproved == true)) {
      return false
    }

    return (<ApprovalListItem
      title={'Usufruct Update'}
      subTitle={this.props.contract.pendingUsufructUpdate.toAddress}
      submitApprove={this.props.submitUsufructApprove}
      submitReject={this.props.submitUsufructReject}
      loading={this.props.loading}
      />);
  };

  render() {

    var payee = this.renderPendingPayeeUpdate()
    var payer = this.renderPendingPayerUpdate()
    var usufruct = this.renderPendingUsufructUpdate()
    var nothing = <Typography align='center' component="h2">There is nothing to be approved</Typography>
    var showNothing = false

    if(payee == false && payer == false && usufruct == false) {
      showNothing = true
    }

    return (
      <CardContent>
        <Grid container direction="row" justify="center">
          <Grid container alignItems="flex-start" spacing={0}>
            <Grid item xs={12}>
              <Grid container direction="row" justify="center">
                <Grid item xs={12}><Typography align='center' variant="headline" component="h2" style={{marginTop:50,marginBottom:50}}>Pending approvals</Typography></Grid>
                <Grid item xs={12} style={{marginTop:10,marginBottom:10}}></Grid>
                  { ( showNothing? nothing : <List> {payee} {payer} {usufruct} </List> ) }
                <Grid item xs={12} style={{marginTop:10,marginBottom:10}}></Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center" spacing={0} style={{position: 'relative'}}>
          <Grid item xs={12} sm={12} align='left' >
            <Button size="small" variant="flat" color="primary" disabled={this.props.loading} onClick={this.props.submitBack}>
              Back
            </Button>
          </Grid>
        </Grid>
        <Grid container direction="row">
          <LinearProgress />
        </Grid>
      </CardContent>
    );
  };
}

export default withStyles(styles)(PendingContractApprovals);
