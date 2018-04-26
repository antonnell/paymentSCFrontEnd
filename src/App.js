import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import Grid from 'material-ui/Grid';
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles';
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import SvgIcon from 'material-ui/SvgIcon';
import Card from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';
import Menu, { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import ButtonBase from 'material-ui/ButtonBase';

import MetamaskRequired from './components/metamaskRequired.jsx';
import MetamaskLoginRequired from './components/metamaskLoginRequired.jsx';
import SearchContract from './components/searchContract.jsx';
import ViewContract from './components/viewContract.jsx';
import DepositContract from './components/depositContract.jsx';
import WithdrawContract from './components/withdrawContract.jsx';
import SetupContract from './components/setupContract.jsx';
import ErrorModal from './components/errorModal.jsx';
import UpdateContractPayer from './components/updateContractPayer.jsx';
import UpdateContractPayee from './components/updateContractPayee.jsx';
import UpdateContractUsufruct from './components/updateContractUsufruct.jsx';
import PendingApprovals from './components/pendingApprovals.jsx';
import ConfirmContract from './components/confirmContract.jsx';
import MyContracts from './components/myContracts.jsx';
import MyProfile from './components/myProfile.jsx';
import Welcome from './components/welcome.jsx';
import NewAccount from './components/newAccount.jsx';
import AppDrawer from './components/drawer.jsx';

const Config = require('./config.js');

const Eth = require('ethjs-query')
const EthContract = require('ethjs-contract')

const isEthereumAddress  = require('is-ethereum-address');
const fs = require('fs');

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
function MenuIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
    </SvgIcon>
  );
}


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffff55',
      main: '#ffe400',
      dark: '#c7b200',
      contrastText: '#000000',
    },
    secondary: {
      light: '#6d6d6d',
      main: '#424242',
      dark: '#1b1b1b',
      contrastText: '#ffffff',
    }
  },
  /*palette: {
    primary: {
      light: '#ffff55',
      main: '#ffe400',
      dark: '#c7b200',
      contrastText: '#000000',
    },
    secondary: {
      light: '#2c2c2c',
      main: '#000000',
      dark: '#000000',
      contrastText: '#ffffff',
    }
  },*/
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: 'welcome',

      loaded:false,
      loading:false,

      payer: '',
      payerError: false,
      payee: '',
      payeeError: false,
      paymentAmount: '',
      paymentAmountError: false,
      paymentInterval: '',
      paymentIntervalError: false,
      bitDiem: '',
      bitDiemError: false,
      ensName: '',
      ensNameError: false,
      error: null,

      depositAmount: '',
      depositAmountError: false,

      withdrawAmount: '',
      withdrawAmountError: false,

      username: '',
      usernameError: false,
      password: '',
      passwordError: false,
      emailAddress: '',
      emailAddressError: false,
      walletAddress: '',
      walletAddressError: false,

      width: 0,
      height: 0,
      navValue: 'searchContract',
      drawerOpen: false
    };

    this.getContract = this.getContract.bind(this);

    this.submitSetupContract = this.submitSetupContract.bind(this);
    this.submitFundContract = this.submitFundContract.bind(this);
    this.submitWithdrawContract = this.submitWithdrawContract.bind(this);
    this.submitSearchContract = this.submitSearchContract.bind(this);
    this.submitStartContract = this.submitStartContract.bind(this);
    this.submitTerminateContract = this.submitTerminateContract.bind(this);
    this.submitApproveContract = this.submitApproveContract.bind(this);
    this.submitUpdatePayee = this.submitUpdatePayee.bind(this);
    this.submitUpdatePayer = this.submitUpdatePayer.bind(this);
    this.submitUpdateUsufruct = this.submitUpdateUsufruct.bind(this);
    this.submitPayeeApprove = this.submitPayeeApprove.bind(this);
    this.submitPayeeReject = this.submitPayeeReject.bind(this);
    this.submitPayerApprove = this.submitPayerApprove.bind(this);
    this.submitPayerReject = this.submitPayerReject.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.submitRegister = this.submitRegister.bind(this);

    this.submitBack = this.submitBack.bind(this);
    this.submitViewBack = this.submitViewBack.bind(this);
    this.submitRegisterBack = this.submitRegisterBack.bind(this);
    this.submitCreateNavigate = this.submitCreateNavigate.bind(this);
    this.submitDepositNavigate = this.submitDepositNavigate.bind(this);
    this.submitUpdatePayerNavigate = this.submitUpdatePayerNavigate.bind(this);
    this.submitUpdateUsufructNavigate = this.submitUpdateUsufructNavigate.bind(this);
    this.submitUpdatePayeeNavigate = this.submitUpdatePayeeNavigate.bind(this);
    this.submitWithdrawNavigate = this.submitWithdrawNavigate.bind(this);
    this.submitSearchNavigate = this.submitSearchNavigate.bind(this);
    this.submitApprovalsNavigate = this.submitApprovalsNavigate.bind(this);
    this.submitRegisterNavigate = this.submitRegisterNavigate.bind(this);

    this.processSetupIntervalContract = this.processSetupIntervalContract.bind(this);
    this.processSetupApprovalContract = this.processSetupApprovalContract.bind(this);
    this.processSetupReturned = this.processSetupReturned.bind(this);
    this.processFundContract = this.processFundContract.bind(this);
    this.processWithdrawContract = this.processWithdrawContract.bind(this);
    this.processUpdatePayee = this.processUpdatePayee.bind(this);
    this.processUpdatePayeeRequest = this.processUpdatePayeeRequest.bind(this);
    this.processUpdatePayer = this.processUpdatePayer.bind(this);
    this.processUpdatePayerRequest = this.processUpdatePayerRequest.bind(this);
    this.processUpdateUsufructRequest = this.processUpdateUsufructRequest.bind(this);
    this.processSearchContract = this.processSearchContract.bind(this);
    this.processSearch = this.processSearch.bind(this);

    this.reset = this.reset.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleProductSelect = this.handleProductSelect.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onLoginKeyDown = this.onLoginKeyDown.bind(this);

    this.locationHashChanged = this.locationHashChanged.bind(this);

  };

  componentWillMount() {
    var currentScreen = window.location.hash.substring(1);
    if(!['welcome', 'newAccount', 'setupContract', 'searchContract'].includes(currentScreen)) {
      window.location.hash = 'searchContract';
    }
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    window.onhashchange = this.locationHashChanged;

    if(!window.web3) {
      window.location.hash = 'metamaskRequired';
      return;
    }

    var that = this

    window.web3.eth.getAccounts((error, accounts) => {
      if(error) return that.setState({error:error.toString(), loading: false});
      that.setState({accounts});

      if(accounts.length == 0) {
        window.location.hash = 'metamaskLoginRequired';
        return;
      }
    })

    this.setState({constIntervalData: Config.paymentIntervalData});
    this.setState({constIntervalAbi: Config.paymentIntervalAbi});
    this.setState({constApprovalData: Config.paymentApprovalData});
    this.setState({constApprovalAbi: Config.paymentApprovalAbi});

    this.locationHashChanged();
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  };

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  reset() {
    this.setState({
      loaded:false,
      loading:false,

      payer: '',
      payerError: false,
      payee: '',
      payeeError: false,
      paymentAmount: '',
      paymentAmountError: false,
      paymentInterval: '',
      paymentIntervalError: false,
      bitDiem: '',
      bitDiemError: false,
      ensName: '',
      ensNameError: false,
      error: null,

      depositAmount: '',
      depositAmountError: false,

      withdrawAmount: '',
      withdrawAmountError: false,

      username: '',
      usernameError: false,
      password: '',
      passwordError: false,
      emailAddress: '',
      emailAddressError: false,
      walletAddress: '',
      walletAddressError: false,

      contractType: null,
      currentContract: null
    });
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleProductSelect(contractType) {
    this.setState({contractType})
  };

  submitDepositNavigate() {
    this.setState({error: null, loading: false, loaded:false});
    window.location.hash = 'fundContract';
  };

  submitUpdatePayerNavigate() {
    this.setState({error: null, loading: false, loaded:false});
    window.location.hash = 'updateContractPayer';
  };

  submitUpdatePayeeNavigate() {
    this.setState({error: null, loading: false, loaded:false});
    window.location.hash = 'updateContractPayee';
  };

  submitUpdateUsufructNavigate() {
    this.setState({error: null, loading: false, loaded:false});
    window.location.hash = 'updateContractUsufruct';
  };

  submitWithdrawNavigate() {
    this.setState({error: null, loading: false, loaded:false});
    window.location.hash = 'withdrawContract';
  };

  submitCreateNavigate() {
    this.setState({error: null, loading: false, loaded:false, contractType: null});
    window.location.hash = 'setupContract';
  };

  submitSearchNavigate() {
    this.setState({error: null, loading: false, loaded:false, contractType: null, currentContract: null});
    window.location.hash = 'searchContract';
  };

  submitApprovalsNavigate() {
    this.setState({error: null, loading: false, loaded:false});
    window.location.hash = 'pendingApprovals';
  };

  submitRegisterNavigate() {
    this.setState({error: null, loading: false, loaded:false});
    window.location.hash = 'newAccount';
  };

  submitUpdatePayee() {
    this.setState({
      loading:true,
      newPayeeAddressError: false,
      error: null
    });
    var error = false;
    if (!isEthereumAddress(this.state.newPayeeAddress)) {
      this.setState({ newPayeeAddressvError: true });
      error = true;
    }

    if (error) {
      this.setState({loading: false});
    } else {
      if(this.state.accounts[0] == this.state.currentContract.payeeAddress) {
        this.processUpdatePayee();
      } else {
        this.processUpdatePayeeRequest();
      }
    }
  };

  processUpdatePayee() {
    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }
    var that = this;

    myContract.setPayeeAddress(this.state.newPayeeAddress, {
      from: this.state.accounts[0],
      gas: '4700000'
    }, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});

      that.setState({loading:false, loaded:true, updatePayeeHash: result});
    })
  };

  processUpdatePayeeRequest() {
    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }
    var that = this;

    myContract.requestPayeeUpdate(this.state.newPayeeAddress, {
      from: this.state.accounts[0],
      gas: '4700000'
    }, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});

      that.setState({loading:false, loaded:true, updatePayeeHash: result});
    })
  };

  submitUpdatePayer() {
    this.setState({
      loading:true,
      newPayerAddressError: false,
      error: null
    });
    var error = false;
    if (!isEthereumAddress(this.state.newPayerAddress)) {
      this.setState({ newPayerAddressError: true });
      error = true;
    }

    if (error) {
      this.setState({loading: false});
    } else {
      if(this.state.accounts[0] == this.state.currentContract.payerAddress) {
        this.processUpdatePayer();
      } else {
        this.processUpdatePayerRequest();
      }
    }
  };

  processUpdatePayer() {
    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }
    var that = this;

    myContract.setPayerAddress(this.state.newPayerAddress, {
      from: this.state.accounts[0],
      gas: '4700000'
    }, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});

      that.setState({loading:false, loaded:true, updatePayerHash: result});
    })
  };

  processUpdatePayerRequest() {
    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }
    var that = this;

    myContract.requestPayerUpdate(this.state.newPayerAddress, {
      from: this.state.accounts[0],
      gas: '4700000'
    }, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});

      that.setState({loading:false, loaded:true, updatePayerHash: result});
    })
  };

  submitUpdateUsufruct() {
    this.setState({
      loading:true,
      newPayerAddressError: false,
      error: null
    });
    var error = false;
    if (!isEthereumAddress(this.state.newUsufructAddress)) {
      this.setState({ newUsufructAddressError: true });
      error = true;
    }

    if (error) {
      this.setState({loading: false});
    } else {
      this.processUpdateUsufructRequest();
    }
  };

  processUpdateUsufructRequest() {
    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }
    var that = this;

    myContract.requestUsufructUpdate(this.state.newUsufructAddress, {
      from: this.state.accounts[0],
      gas: '4700000'
    }, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});

      that.setState({loading:false, loaded:true, updateUsufructHash: result});
    })
  };

  submitApproveContract() {
    this.setState({loading: true, error: null});

    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }

    var that = this
    myContract.approvePayout({from: this.state.accounts[0]}, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});
      that.setState({transactionHash: result, error: null, loading: false, loaded:true});
      window.location.hash = 'confirmContract';
    });
  };

  submitStartContract() {
    this.setState({loading: true, error: null});

    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }

    var that = this
    myContract.startContract({from: this.state.accounts[0]}, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});
      that.setState({transactionHash: result, error: null, loading: false, loaded:true});
      window.location.hash = 'confirmContract';
    });
  };

  submitTerminateContract() {
    this.setState({loading: true, error: null});

    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }

    var that = this
    myContract.terminateContract({from: this.state.accounts[0]}, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});
      that.setState({transactionHash: result, error: null, loading: false, loaded:true});
      window.location.hash = 'confirmContract';
    });
  };

  submitSearchContract() {
    this.setState({
      loading:true,
      searchContractError: false,
      error: null
    });
    var error = false;
    if (!isEthereumAddress(this.state.searchContract)) {
      this.setState({ searchContractError: true });
      error = true;
    }

    if (error) {
      this.setState({loading: false});
    } else {
      this.processSearch();
    }
  };

  processSearch() {
    var that = this;

    var currentContract = this.state.currentContract;
    if(currentContract == null) {
      currentContract = {}
    }

    this.setState({currentContract});

    var intervalContract = window.web3.eth.contract(this.state.constIntervalAbi).at(this.state.searchContract)
    intervalContract.getContractDetails({from: this.state.accounts[0]}, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});
      console.log(result)
      var currentContract = that.state.currentContract;
      currentContract.contractAddress = that.state.searchContract;
      currentContract.payerAddress = result[0];
      currentContract.payeeAddress = result[1];
      currentContract.usufructAddress = result[2];
      currentContract.contractType = result[3];
      if(currentContract.contractType == 'Interval') {
        currentContract.paymentAmount = result[4].c[0];
        currentContract.paymentInterval = result[5].c[0];
        currentContract.payerBalance = result[6].c[0];
        currentContract.payeeBalance = result[7].c[0];
      } else if (currentContract.contractType == 'Approval') {
        currentContract.paymentAmount = result[4].c[0];
        currentContract.payerBalance = result[5].c[0];
        currentContract.payeeBalance = result[6].c[0];
      } else {
        //eh
      }
      that.setState({currentContract});

      that.processSearchContract(that.getContract(currentContract))
    });
  };

  processSearchContract(myContract) {
    if(typeof myContract !== 'undefined') {
      var that = this;

      /*myContract.getPayeeBalance({from: this.state.accounts[0]}, (error, result) => {
        if(error) return that.setState({error:error.toString(), loading: false});

        var currentContract = that.state.currentContract;
        currentContract.fundsWithdrawable = result.c[0]
        that.setState({currentContract});
      });
      myContract.getPayerBalance({from: this.state.accounts[0]}, (error, result) => {
        if(error) return that.setState({error:error.toString(), loading: false});

        console.log(result)
        var currentContract = that.state.currentContract;
        currentContract.fundsDeposited = result.c[0]
        that.setState({currentContract});
      });*/
      myContract.getContractState({from: this.state.accounts[0]}, (error, result) => {
        if(error) return that.setState({error:error.toString(), loading: false});

        var state = 'Created'
        switch (result.c[0]) {
          case 0:
            state = 'Created'
            break;
          case 1:
            if(that.state.currentContract.contractType == 'Interval') {
              state = 'In Progress'
            } else {
              state = 'Approved'
            }
            break;
          case 2:
            state = 'Terminated'
            break;
        }
        var currentContract = that.state.currentContract;
        currentContract.contractState = state
        that.setState({currentContract});
      });
      myContract.getPendingPayeeUpdate({from: this.state.accounts[0]}, (error, result) => {
        if(error) return that.setState({error:error.toString(), loading: false});

        var currentContract = that.state.currentContract;
        currentContract.pendingPayeeUpdate = { payerApproved: result[0], payeeApproved: result[1], toAddress: result[2] }
        that.setState({currentContract});
      });
      myContract.getPendingPayerUpdate({from: this.state.accounts[0]}, (error, result) => {
        if(error) return that.setState({error:error.toString(), loading: false});

        var currentContract = that.state.currentContract;
        currentContract.pendingPayerUpdate = { payerApproved: result[0], payeeApproved: result[1], toAddress: result[2] }
        that.setState({currentContract});
      });
      myContract.getPendingUsufructUpdate({from: this.state.accounts[0]}, (error, result) => {
        if(error) return that.setState({error:error.toString(), loading: false});

        var currentContract = that.state.currentContract;
        currentContract.pendingUsufructUpdate = { payerApproved: result[0], payeeApproved: result[1], toAddress: result[2] }
        that.setState({currentContract});
      });

      this.setState({loading: false, withdrawContract: this.state.searchContract, depositContract: this.state.searchContract});
      window.location.hash = 'viewContract';
    }
  };
  submitWithdrawContract() {
    this.setState({
      loading:true,
      withdrawContractError: false,
      withdrawAmountError: false,
      error: null
    });
    var error = false;
    if (this.state.withdrawAmount=='') {
      this.setState({ withdrawAmountError: true });
      error = true;
    }

    if (error) {
      this.setState({loading: false})
    } else {
      this.processWithdrawContract()
    }
  };
  processWithdrawContract() {
    var _amount = this.state.withdrawAmount;

    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }
    var that = this;

    myContract.withdrawPayment(_amount, {
      to: this.state.currentContract.contractAddress,
      from: this.state.accounts[0],
      gas: '4700000'
    }, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});

      that.setState({withdrawContractHash: result, loading:false, loaded:true})
    })
  };

  submitFundContract() {
    this.setState({
      loading:true,
      depositContractError: false,
      depositAmountError:false,
      error: null
    })
    var error = false;
    if (this.state.depositAmount=='') {
      this.setState({ depositAmountError: true });
      error = true;
    }

    if (error) {
      this.setState({loading: false})
    } else {
      this.processFundContract()
    }
  };
  processFundContract() {
    var _amount = this.state.depositAmount;

    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }
    var that = this;

    myContract.depositFunds(_amount, {
      to: this.state.currentContract.contractAddress,
      from: this.state.accounts[0],
      value: _amount,
      gas: '4700000'
    }, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});

      that.setState({fundContractHash: result, loading:false, loaded:true})
    })
  };

  submitLogin() {
    this.setState({
      loading:true,
      usernameError: false,
      passwordError:false,
      error: null
    })
    var error = false;
    if (this.state.username == '') {
      this.setState({ usernameError: true });
      error = true;
    }
    if (this.state.password == '') {
      this.setState({ passwordError: true });
      error = true;
    }
    if (error) {
      this.setState({loading: false})
    } else {
      this.processLogin()
    }
  };

  processLogin() {
    this.setState({loading: false, navValue: 'searchContract', username: '', password: ''})
    window.location.hash = 'searchContract';
  };

  submitRegister() {
    this.setState({
      loading:true,
      usernameError: false,
      passwordError:false,
      error: null
    })
    var error = false;
    if (this.state.username == '') {
      this.setState({ usernameError: true });
      error = true;
    }
    if (this.state.password == '') {
      this.setState({ passwordError: true });
      error = true;
    }
    if (this.state.emailAddress == '') {
      this.setState({ emailAddressError: true });
      error = true;
    }
    if (this.state.walletAddress != '' && !isEthereumAddress(this.state.walletAddress)) {
      this.setState({ walletAddressError: true });
      error = true;
    }
    if (error) {
      this.setState({loading: false})
    } else {
      this.processRegister()
    }
  };

  processRegister() {
    this.setState({loading: false, navValue: 'searchContract', username: '', password: '', emailAddress: '', walletAddress: ''});
    window.location.hash = 'searchContract';
  };

  submitBack() {
    this.setState({
      contractType: null,
      error: null
    })
    window.location.hash = 'viewContract';
  };

  submitViewBack() {
    this.setState({
      navValue: 'search',
      contractType: null,
      error: null
    })
    window.location.hash = 'searchContract';
  };

  submitRegisterBack() {
    this.setState({
      error: null
    })
    window.location.hash = 'welcome';
  };

  submitSetupContract() {
    this.setState({
      loading:true,
      payerError: false,
      payeeError:false,
      paymentAmountError: false,
      paymentIntervalError: false,
      bitDiemError:false,
      ensNameError:false,
      error: null
    })
    var error = false;
    if (!isEthereumAddress(this.state.payer)) {
      this.setState({ payerError: true });
      error = true;
    }
    if (!isEthereumAddress(this.state.payee)) {
      this.setState({ payeeError: true });
      error = true;
    }
    /*if (!isEthereumAddress(this.state.bitDiem)) {
      this.setState({ bitDiemError: true });
      error = true;
    }
    if (this.state.ensName=='') {
      this.setState({ ensNameError: true });
      error = true;
    }*/
    if (this.state.paymentAmount=='') {
      this.setState({ paymentAmountError: true });
      error = true;
    }
    if (this.state.contractType=='Interval' && this.state.paymentInterval=='') {
      this.setState({ paymentIntervalError: true });
      error = true;
    }
    if (error) {3
      this.setState({loading: false})
    } else {
      this.setState({loading:true, error: null})
      if(this.state.contractType=='Interval') {
        this.processSetupIntervalContract()
      } else {
        this.processSetupApprovalContract()
      }
    }
  };
  processSetupApprovalContract() {
    let paymentApprovalContract = window.web3.eth.contract(this.state.constApprovalAbi);

    var that = this;
    let contract = paymentApprovalContract.new(
      this.state.payer,
      this.state.payee,
      this.state.paymentAmount,
      {
        from: this.state.accounts[0],
        gas: '4700000',
        data: this.state.constApprovalData
      },
      this.processSetupReturned
    );
  };
  processSetupIntervalContract() {
    let paymentIntervalContract = window.web3.eth.contract(this.state.constIntervalAbi);

    var that = this;
    let contract = paymentIntervalContract.new(
      this.state.payer,
      this.state.payee,
      this.state.paymentInterval,
      this.state.paymentAmount,
      {
        from: this.state.accounts[0],
        gas: '4700000',
        data: this.state.constIntervalData
      },
      this.processSetupReturned
    );
  };

  processSetupReturned(error, contract) {
    if(error) return this.setState({error:error.toString(), loading: false});

    if (typeof contract !== 'undefined' && typeof contract.address !== 'undefined') {
      this.setState({loading:false, loaded:true, contract: contract})
    }
  };

  getContract(contract) {
    if(contract == null) {
      return null
    }

    if(contract.contractType == 'Interval') {
      return window.web3.eth.contract(this.state.constIntervalAbi).at(contract.contractAddress)
    } else if (contract.contractType == 'Approval') {
      return window.web3.eth.contract(this.state.constApprovalAbi).at(contract.contractAddress)
    } else {
      return null
    }
  };

  submitPayeeApprove() {
    this.setState({loading:true, error: null})

    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }
    var that = this;

    myContract.requestPayeeUpdate(this.state.pendingPayeeUpdate.toAddress, {
      from: this.state.accounts[0],
      gas: '4700000'
    }, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});

      that.setState({loading:false, loaded:true})
    })
  };

  submitPayeeReject() {
    this.setState({loading:true, error: null})

    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }
    var that = this;

    myContract.rejectPayeeUpdate(this.state.pendingPayeeUpdate.toAddress, {
      from: this.state.accounts[0],
      gas: '4700000'
    }, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});

      that.setState({loading:false, loaded:true})
    })
  };

  submitPayerApprove() {
    this.setState({loading:true, error: null})

    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }
    var that = this;

    myContract.requestPayerUpdate(this.state.pendingPayerUpdate.toAddress, {
      from: this.state.accounts[0],
      gas: '4700000'
    }, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});

      that.setState({loading:false, loaded:true})
    })
  };

  submitPayerReject() {
    this.setState({loading:true, error: null})

    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }
    var that = this;

    myContract.rejectPayerUpdate(this.state.pendingPayerUpdate.toAddress, {
      from: this.state.accounts[0],
      gas: '4700000'
    }, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});

      that.setState({loading:false, loaded:true})
    })
  };

  submitUsufructApprove() {
    this.setState({loading:true, error: null})

    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }
    var that = this;

    myContract.requestUsufructUpdate(this.state.pendingUsufructUpdate.toAddress, {
      from: this.state.accounts[0],
      gas: '4700000'
    }, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});

      that.setState({loading:false, loaded:true})
    })
  };

  submitUsufructReject() {
    this.setState({loading:true, error: null})

    const myContract = this.getContract(this.state.currentContract);
    if(myContract == null) { return this.setState({error: 'Invalid Contract Type', loading: 'false'}); }
    var that = this;

    myContract.rejectUsufructUpdate(this.state.pendingUsufructUpdate.toAddress, {
      from: this.state.accounts[0],
      gas: '4700000'
    }, (error, result) => {
      if(error) return that.setState({error:error.toString(), loading: false});

      that.setState({loading:false, loaded:true})
    })
  };


  navClicked = (event, navValue) => {
    var currentScreen = 'searchContract';
    switch(navValue) {
      case 'searchContract':
        currentScreen = 'searchContract';
        break;
      case 'setupContract':
        currentScreen = 'setupContract';
        break;
      case 'myContracts':
        currentScreen = 'myContracts';
        break;
      case 'myProfile':
        currentScreen = 'myProfile';
        break;
      case 'welcome':
        currentScreen = 'welcome';
        break;
      break;
    }
    this.setState({ navValue, error: null, loading: false, loaded:false, drawerOpen: false });
    window.location.hash = currentScreen;
  };

  renderMetamaskRequired() {
    return (<MetamaskRequired />);
  };

  renderMetamaskLoginRequired() {
    return (<MetamaskLoginRequired />);
  };

  renderConfirmContract() {
    return (<ConfirmContract
      submitBack={this.submitBack}
      transactionHash={this.state.transactionHash}
      reset={this.reset}
      handleChange={this.handleChange}
      loaded={this.state.loaded}
      loading={this.state.loading}
      error={this.state.error}
      />);
  };

  renderPendingApprovals() {
    return (<PendingApprovals
      submitBack={this.submitBack}
      submitPayeeApprove={this.submitPayeeApprove}
      submitPayeeReject={this.submitPayeeReject}
      submitPayerApprove={this.submitPayerApprove}
      submitPayerReject={this.submitPayerReject}
      submitUsufructApprove={this.submitUsufructApprove}
      submitUsufructReject={this.submitUsufructReject}
      contract={this.state.currentContract}
      reset={this.reset}
      handleChange={this.handleChange}
      loaded={this.state.loaded}
      loading={this.state.loading}
      error={this.state.error}
      />);
  };

  renderUpdateContractPayer() {
    return (<UpdateContractPayer
      submitBack={this.submitBack}
      submitUpdatePayer={this.submitUpdatePayer}
      contract={this.state.currentContract}
      newPayerAddress={this.state.newPayerAddress}
      newPayerAddressError={this.newPayerAddressError}
      reset={this.reset}
      handleChange={this.handleChange}
      loaded={this.state.loaded}
      loading={this.state.loading}
      error={this.state.error}
      />);
  };

  renderUpdateContractPayee() {
    return (<UpdateContractPayee
      submitBack={this.submitBack}
      submitUpdatePayee={this.submitUpdatePayee}
      contract={this.state.currentContract}
      newPayeeAddress={this.state.newPayeeAddress}
      newPayeeAddressError={this.newPayeeAddressError}
      reset={this.reset}
      handleChange={this.handleChange}
      loaded={this.state.loaded}
      loading={this.state.loading}
      error={this.state.error}
      />);
  };

  renderUpdateContractUsufruct() {
    return (<UpdateContractUsufruct
      submitBack={this.submitBack}
      submitUpdateUsufruct={this.submitUpdateUsufruct}
      contract={this.state.currentContract}
      newUsufructAddress={this.state.newUsufructAddress}
      newUsufructAddressError={this.newUsufructAddressError}
      reset={this.reset}
      handleChange={this.handleChange}
      loaded={this.state.loaded}
      loading={this.state.loading}
      error={this.state.error}
      />);
  };

  renderSetupContract() {
    return (<SetupContract
      submitBack={this.submitViewBack}
      submitSetupContract={this.submitSetupContract}
      reset={this.reset}
      handleChange={this.handleChange}
      handleProductSelect={this.handleProductSelect}
      contract={this.state.contract}
      contractType={this.state.contractType}
      payer={this.state.payer}
      payerError={this.state.payerError}
      payee={this.state.payee}
      payeeError={this.state.payeeError}
      paymentInterval={this.state.paymentInterval}
      paymentIntervalError={this.state.paymentIntervalError}
      paymentAmount={this.state.paymentAmount}
      paymentAmountError={this.state.paymentAmountError}
      loaded={this.state.loaded}
      loading={this.state.loading}
      error={this.state.error}
      />);
  };

  renderFundContract() {
    return (<DepositContract
      submitBack={this.submitBack}
      submitFundContract={this.submitFundContract}
      reset={this.reset}
      handleChange={this.handleChange}
      contract={this.state.currentContract}
      fundContractHash={this.state.fundContractHash}
      depositAmount={this.state.depositAmount}
      depositAmountError={this.state.depositAmountError}
      loaded={this.state.loaded}
      loading={this.state.loading}
      error={this.state.error}
      />);
  };

  renderWithdrawContract() {
    return (<WithdrawContract
      submitBack={this.submitBack}
      submitWithdrawContract={this.submitWithdrawContract}
      reset={this.reset}
      handleChange={this.handleChange}
      contract={this.state.currentContract}
      withdrawAmount={this.state.withdrawAmount}
      withdrawAmountError={this.state.withdrawAmountError}
      withdrawContractHash={this.state.withdrawContractHash}
      loaded={this.state.loaded}
      loading={this.state.loading}
      error={this.state.error}
      />);
  };

  renderMyContracts() {
    return (<MyContracts
      submitBack={this.submitViewBack} />)
  };

  renderMyProfile() {
    return (<MyProfile
      submitBack={this.submitViewBack} />)
  };

  renderWelcome() {
    return (<Welcome
      handleChange={this.handleChange}
      onLoginKeyDown={this.onLoginKeyDown}
      submitLogin={this.submitLogin}
      submitRegisterNavigate={this.submitRegisterNavigate}
      username={this.state.username}
      usernameError={this.state.usernameError}
      password={this.state.password}
      passwordError={this.state.passwordError}
      />)
  };

  renderNewAccount() {
    return (<NewAccount
      handleChange={this.handleChange}
      onLoginKeyDown={this.onLoginKeyDown}
      submitRegister={this.submitRegister}
      submitRegisterBack={this.submitRegisterBack}
      username={this.state.username}
      usernameError={this.state.usernameError}
      password={this.state.password}
      passwordError={this.state.passwordError}
      emailAddress={this.state.emailAddress}
      emailAddressError={this.state.emailAddressError}
      walletAddress={this.state.walletAddress}
      walletAddressError={this.state.walletAddressError}
      />)
  };

  renderSearchContract() {
    return (<SearchContract
      submitSearchContract={this.submitSearchContract}
      submitCreateNavigate={this.submitCreateNavigate}
      reset={this.reset}
      handleChange={this.handleChange}
      loaded={this.state.loaded}
      loading={this.state.loading}
      searchContract={this.state.searchContract}
      searchContractError={this.state.searchContractError}
      contract={this.state.contract}
      withdrawContract={this.state.withdrawContract}
      withdrawAmount={this.state.withdrawAmount}
      error={this.state.error}
      />);
  };

  renderViewContract() {
    return (<ViewContract
      submitBack={this.submitViewBack}
      submitDepositNavigate={this.submitDepositNavigate}
      submitWithdrawNavigate={this.submitWithdrawNavigate}
      submitUpdatePayerNavigate={this.submitUpdatePayerNavigate}
      submitUpdatePayeeNavigate={this.submitUpdatePayeeNavigate}
      submitUpdateUsufructNavigate={this.submitUpdateUsufructNavigate}
      submitApprovalsNavigate={this.submitApprovalsNavigate}
      submitStartContract={this.submitStartContract}
      submitTerminateContract={this.submitTerminateContract}
      submitApproveContract={this.submitApproveContract}
      reset={this.reset}
      handleChange={this.handleChange}
      contract={this.state.currentContract}
      loaded={this.state.loaded}
      loading={this.state.loading}
      error={this.state.error}
      />);
  };

  handleClose() {
    this.setState({error: null})
  };

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget, menuOpen: true });
  };

  handleMenuClose() {
    this.setState({ menuOpen: false})
  };

  openDrawer() {
    this.setState({drawerOpen: true})
  };

  closeDrawer() {
    this.setState({drawerOpen: false})
  };

  onLoginKeyDown(event) {
    if (event.which == 13) {
      this.submitLogin()
    }
  };

  render() {

    var styles = {
      headerBackground: {
        backgroundColor: '#ffe400',
        maxHeight:250,
        borderBottom: '1px solid #777777'
      }
    };

    /*
      screen breakpoints
      xsm: < 600
      sm: >= 600 + < 960
      md: >= 960 + < 1280
      lg: >= 1280 + < 1920
      xl: >= 1920
    */
    var size = '';

    if(this.state.width < 600) {
      size = 'xsm'
    } else if (this.state.width < 960) {
      size = 'sm'
    } else if (this.state.width < 960) {
      size = 'md'
    } else if (this.state.width < 960) {
      size = 'lg'
    } else {
      size = 'xlg'
    }


    var cardStyle = {
      height: (this.state.height-112),
      overflowY: 'auto'
    }

    if(['welcome', 'newAccount'].includes(this.state.currentScreen)) {
      return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <div style={{position: 'absolute', left: '0px', right: '0px', top:'0px', bottom: '0px', backgroundColor: '#ffe400'}}>
            {this.renderScreen()}
          </div>
        </MuiThemeProvider>
      )
    }

    if(size == 'xsm') {
      return (
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu" onClick={() => { this.openDrawer(); }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" style={{flex: 1}}>
                BitDiem Network
              </Typography>
            </Toolbar>
          </AppBar>
          <AppDrawer open={this.state.drawerOpen} closeDrawer={this.closeDrawer} navClicked={this.navClicked} navValue={this.navValue} />
          <CssBaseline />
          <Grid container xs={12} justify="space-around" alignItems="center" direction="row" spacing={0}>
            <Grid container xs={12} justify="space-around" alignItems="center" direction="row" spacing={0}>
              <Grid item xs={12} sm={8} md={6} lg={4} style={{}}>
                <Card raised elevation={0} square={false}  style={cardStyle}>
                  {this.renderScreen()}
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <BottomNavigation value={this.state.navValue} onChange={this.navClicked} style={{position: 'absolute', bottom:'0px', left: '0px', right: '0px'}} >
            <BottomNavigationAction label="Search" value="searchContract" icon={<SearchIcon />} />
            <BottomNavigationAction label="Create" value="setupContract" icon={<CreateIcon />} />
            <BottomNavigationAction label="My Contracts" value="myContracts" icon={<MyContractsIcon />} />
          </BottomNavigation>

          <ErrorModal error={this.state.error} open={this.state.error != null} handleClose={this.handleClose} />
        </MuiThemeProvider>
      )
    } else {

      var fabButton = (<Tooltip title='Create a new contract'>
        <Button variant="fab" color='secondary' style={{position: 'absolute', top:'157px', left: '20px'}} disabled={this.state.loading} onClick={this.submitCreateNavigate}>
          +
        </Button>
      </Tooltip>)

      if(this.state.currentScreen == 'setupContract') {
        fabButton = (<Tooltip title='Search for your contract'>
          <Button variant="fab" color='secondary' style={{position: 'absolute', top:'157px', left: '20px'}} disabled={this.state.loading} onClick={this.submitSearchNavigate}>
            <SearchIcon />
          </Button>
        </Tooltip>)
      } else if (this.state.currentScreen == 'metamaskRequired' || this.state.currentScreen == 'metamaskLoginRequired' || this.state.currentScreen == 'welcome') {
        fabButton = null
      }

      return (
        <MuiThemeProvider theme={theme}>
          <div style={styles.headerBackground}>
            <AppBar elevation={0} position="static" color="primary">
              <Toolbar>
                <IconButton color="inherit" aria-label="Menu" onClick={() => { this.openDrawer(); }}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                  BitDiem Network
                </Typography>
              </Toolbar>
            </AppBar>
            <AppDrawer open={this.state.drawerOpen} closeDrawer={this.closeDrawer} navClicked={this.navClicked} navValue={this.navValue} />
            <CssBaseline />
            <Grid container xs={12} justify="space-around" alignItems="center" direction="row" spacing={0} style={{marginBottom: '60px'}}>
              <Grid container xs={11} justify="space-around" direction="row" spacing={0}>
                <Grid item xs={false} sm={2} md={3} lg={3} style={{marginTop: '120px'}}>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={6} style={{marginTop: '120px'}}>
                  <Card raised elevation={5} square={false}  >
                    {this.renderScreen()}
                  </Card>
                </Grid>
                <Grid item xs={false} sm={2} md={3} lg={3} style={{position: 'relative'}}>
                  {fabButton}
                </Grid>
              </Grid>
            </Grid>
          </div>

          <ErrorModal error={this.state.error} open={this.state.error != null} handleClose={this.handleClose}/>
        </MuiThemeProvider>
      );
    }
  };
  locationHashChanged() {
    var currentScreen = window.location.hash.substring(1);
    if(currentScreen == '') {
      this.setState({currentScreen: 'welcome'});
    } else {
      if(!['welcome', 'newAccount', 'setupContract'].includes(currentScreen) && this.state.currentContract == null) {
        window.location.hash = 'searchContract';
        currentScreen = 'searchContract';
      }
      this.setState({currentScreen});
    }
  };
  renderScreen() {
    switch (this.state.currentScreen) {
      case 'welcome':
        return this.renderWelcome();
        break;
      case 'newAccount':
        return this.renderNewAccount();
        break;
      case 'searchContract':
        return this.renderSearchContract();
        break;
      case 'setupContract':
        return this.renderSetupContract();
        break;
      case 'fundContract':
        return this.renderFundContract();
        break;
      case 'withdrawContract':
        return this.renderWithdrawContract();
        break;
      case 'viewContract':
        return this.renderViewContract();
        break;
      case 'metamaskRequired':
        return this.renderMetamaskRequired();
        break;
      case 'metamaskLoginRequired':
        return this.renderMetamaskLoginRequired();
        break;
      case 'updateContractPayer':
        return this.renderUpdateContractPayer();
        break;
      case 'updateContractPayee':
        return this.renderUpdateContractPayee();
        break;
      case 'updateContractUsufruct':
        return this.renderUpdateContractUsufruct();
        break;
      case 'pendingApprovals':
        return this.renderPendingApprovals();
        break;
      case 'confirmContract':
        return this.renderConfirmContract();
        break;
      case 'myContracts':
        return this.renderMyContracts();
        break;
      case 'myProfile':
        return this.renderMyProfile();
        break;
      default:
        return this.renderSearchContract();
    }
  }
}

export default App;
