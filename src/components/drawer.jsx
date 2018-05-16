import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';
import Icon from 'material-ui/Icon';
import SvgIcon from 'material-ui/SvgIcon';
import List, { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';

const styles = {};

function AccountIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z" />
    </SvgIcon>
  );
}
function SearchIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
    </SvgIcon>
  );
}
function MyContractsIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M15,7H20.5L15,1.5V7M8,0H16L22,6V18A2,2 0 0,1 20,20H8C6.89,20 6,19.1 6,18V2A2,2 0 0,1 8,0M4,4V22H20V24H4A2,2 0 0,1 2,22V4H4Z" />
    </SvgIcon>
  );
}
function CreateIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M11,15V12H9V15H6V17H9V20H11V17H14V15H11Z" />
    </SvgIcon>
  );
}
function LogoutIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M17,17.25V14H10V10H17V6.75L22.25,12L17,17.25M13,2A2,2 0 0,1 15,4V8H13V4H4V20H13V16H15V20A2,2 0 0,1 13,22H4A2,2 0 0,1 2,20V4A2,2 0 0,1 4,2H13Z" />
    </SvgIcon>
  );
}

class AppDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = { };
  };

  render() {
    return (
      <Drawer open={this.props.open} onClose={this.props.closeDrawer}>
        <Grid container alignItems="flex-start" spacing={0}>
          <Grid item xs={12}>
            <div style={{width: '100%', height: '150px', padding: '19px', background: '#6681ff'}} color='secondary'>
              <div style={{flex: 1}}>
                <img src="LogoWhite@2x.png" width="180px" height="47px" alt="" />
              </div>
              <Typography variant="body2" style={{color: '#FFF', marginTop: '24px'}}>
                John Smith
              </Typography>
              <Typography variant="body1" style={{color: '#FFF'}}>
                johnsmith@domain.com
              </Typography>
            </div>
            <div>
              <List>
                <ListItem button onClick={(event) => { this.props.navClicked(event, 'searchContract'); }}>
                  <ListItemIcon>
                    <SearchIcon />
                  </ListItemIcon>
                  <ListItemText primary="Find Contract" />
                </ListItem>
                <ListItem button onClick={(event) => { this.props.navClicked(event, 'setupContract'); }}>
                  <ListItemIcon>
                    <CreateIcon />
                  </ListItemIcon>
                  <ListItemText primary="Create Contract" />
                </ListItem>
                <ListItem button onClick={(event) => { this.props.navClicked(event, 'myContracts'); }}>
                  <ListItemIcon>
                    <MyContractsIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Contracts" />
                </ListItem>
                <Divider />
                <ListItem button onClick={(event) => { this.props.navClicked(event, 'myProfile'); }}>
                  <ListItemIcon>
                    <AccountIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Profile" />
                </ListItem>
                <ListItem button onClick={(event) => { this.props.navClicked(event, 'welcome'); }}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary="Log Out" />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
      </Drawer>
    );
  };
}

export default withStyles(styles)(AppDrawer);
