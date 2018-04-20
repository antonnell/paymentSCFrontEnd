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

import SearchContract from './components/searchContract.jsx';
import ViewContract from './components/viewContract.jsx';
import DepositContract from './components/depositContract.jsx';
import WithdrawContract from './components/withdrawContract.jsx';
import SetupContract from './components/setupContract.jsx';

const Eth = require('ethjs-query')
const EthContract = require('ethjs-contract')

const isEthereumAddress  = require('is-ethereum-address');
const fs = require('fs');

const Config = require('./config.js');

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
      light: '#2c2c2c',
      main: '#000000',
      dark: '#000000',
      contrastText: '#ffffff',
    }
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentScreen: 'searchContract',

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
      errored: false,

      depositContract: '',
      depositContractError: false,
      depositAmount: '',
      depositAmountError: false,

      withdrawContract: '',
      withdrawContractError: false,
      withdrawAmount: '',
      withdrawAmountError: false,

      width: 0,
      height: 0,
      bottomNavValue: 'search'
    };

    this.submitSetupContract = this.submitSetupContract.bind(this);
    this.submitBack = this.submitBack.bind(this);
    this.submitFundContract = this.submitFundContract.bind(this);
    this.submitWithdrawContract = this.submitWithdrawContract.bind(this);
    this.submitSearchContract = this.submitSearchContract.bind(this);
    this.submitStartContract = this.submitStartContract.bind(this);
    this.submitCreateNavigate = this.submitCreateNavigate.bind(this);
    this.submitDepositNavigate = this.submitDepositNavigate.bind(this);
    this.submitWithdrawNavigate = this.submitWithdrawNavigate.bind(this);
    this.submitSearchNavigate = this.submitSearchNavigate.bind(this);

    this.processSetupContract = this.processSetupContract.bind(this);
    this.processFundContract = this.processFundContract.bind(this);
    this.processWithdrawContract = this.processWithdrawContract.bind(this);

    this.reset = this.reset.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  };

  componentDidMount() {
    var that = this

    this.setState({constData: Config.paymentIntervalData});
    this.setState({constAbi: Config.paymentIntervalAbi});

    window.web3.eth.getAccounts(function (error, accounts) {
      if (error) return console.error(error)
      that.setState({accounts})
    })

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

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
      errored: false,

      depositContract: '',
      depositContractError: false,
      depositAmount: '',
      depositAmountError: false,

      withdrawContract: '',
      withdrawContractError: false,
      withdrawAmount: '',
      withdrawAmountError: false,})
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleRadio = (event, value) => {
   this.setState({ value });
  };
  handleChecked = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  submitDepositNavigate() {
    this.setState({currentScreen: 'fundContract'})
  };

  submitWithdrawNavigate() {
    this.setState({currentScreen: 'withdrawContract'})
  };

  submitCreateNavigate() {
    this.setState({currentScreen: 'setupContract'})
  };

  submitSearchNavigate() {
    this.setState({currentScreen: 'searchContract'})
  };

  submitStartContract() {
    this.setState({loading: true});
    const myContract = window.web3.eth.contract(this.state.constAbi).at(this.state.searchContract);
    if(typeof myContract !== 'undefined') {
      var that = this
      myContract.startContract({from: this.state.accounts[0]}, function(error, result){
        that.setState({loading: false});

        that.processSearchContract();
      });
    }
  };

  submitSearchContract() {
    this.setState({
      loading:true,
      searchContractError: false
    })
    var error = false;
    if (!isEthereumAddress(this.state.searchContract)) {
      this.setState({ searchContractError: true });
      error = true;
    }

    if (error) {
      this.setState({loading: false})
    } else {
      this.processSearchContract()
    }
  };
  processSearchContract() {
    const myContract = window.web3.eth.contract(this.state.constAbi).at(this.state.searchContract);
    if(typeof myContract !== 'undefined') {
      var that = this
      myContract.getPayeeAddress({from: this.state.searchContract}, function(error, result){
        that.setState({payeeAddress: result});
      });
      myContract.getPayerAddress({from: this.state.searchContract}, function(error, result){
        that.setState({payerAddress: result});
      });
      myContract.getPayeeBalance({from: this.state.searchContract}, function(error, result){
        if(!error)
          that.setState({fundsWithdrawable: result.c[0]});
      });
      myContract.getPayerBalance({from: this.state.searchContract}, function(error, result){
        if(!error)
          that.setState({fundsDeposited: result.c[0]});
      });
      myContract.getContractState({from: this.state.searchContract}, function(error, result){
        if(!error) {
          var state = 'Created'
          switch (result.c[0]) {
            case 0:
              state = 'Created'
              break;
            case 1:
              state = 'In Progress'
              break;
            case 2:
              state = 'Terminated'
              break;
          }
          that.setState({contractState: state});
        }
      });

      this.setState({paymentintervalcontractContract: myContract, currentScreen: 'viewContract', loading: false, withdrawContract: this.state.searchContract, depositContract: this.state.searchContract})
    }
  };
  submitWithdrawContract() {
    this.setState({
      loading:true,
      withdrawContractError: false,
      withdrawAmountError: false
    })
    var error = false;
    if (this.state.withdrawContract=='') {
      this.setState({ withdrawContractError: true });
      error = true;
    }
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

    const myContract = window.web3.eth.contract(this.state.constAbi).at(this.state.searchContract);
    var that = this;

    myContract.withdrawPayment(_amount, {
      to: this.state.withdrawContract,
      from: this.state.accounts[0],
      gas: 3000000
    }, function(error, result) {
      that.setState({withdrawContractHash: result, loading:false, loaded:true})
    })
  };

  submitFundContract() {
    this.setState({
      loading:true,
      depositContractError: false,
      depositAmountError:false
    })
    var error = false;
    if (this.state.depositContract=='') {
      this.setState({ depositContractError: true });
      error = true;
    }
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

    const myContract = window.web3.eth.contract(this.state.constAbi).at(this.state.searchContract);
    var that = this;

    myContract.depositFunds(_amount, {
      to: this.state.depositContract,
      from: this.state.accounts[0],
      value: _amount,
      gas: 3000000
    }, function(error, result) {
      that.setState({fundContractHash: result, loading:false, loaded:true})
    })
  };

  submitBack() {
    this.setState({
      currentScreen: 'searchContract'
    })
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
    if (this.state.paymentInterval=='') {
      this.setState({ paymentIntervalError: true });
      error = true;
    }
    if (error) {
      this.setState({loading: false})
    } else {
      this.processSetupContract()
    }
  };
  async processSetupContract() {
    this.setState({loading:true})
    let code = this.state.constData;
    let abi = this.state.constAbi

    let paymentintervalcontractContract = window.web3.eth.contract(abi);

    var that = this;
    let contract = paymentintervalcontractContract.new(
      this.state.payer,
      this.state.payee,
      this.state.paymentAmount,
      this.state.paymentInterval,
      {from: this.state.accounts[0], gas: 4700000, data: code},
      function (e, contract){
        console.log(e, contract);
        if (typeof contract !== 'undefined' && typeof contract.address !== 'undefined') {
           console.log('Contract mined! address: ' + contract.address + ' transactionHash: http://testnet.etherscan.io/tx/' + contract.transactionHash);

           that.setState({loading:false, loaded:true, contract: contract})
        }
      }
    );
  };
  handleBottomNavValueChange = (event, bottomNavValue) => {
    var currentScreen = 'searchContract'
    switch(bottomNavValue) {
      case 'search':
        currentScreen = 'searchContract'
      break
      case 'create':
        currentScreen = 'setupContract'
      break
      case 'myContract':
        currentScreen = 'searchContract'
      break
    }
    this.setState({ bottomNavValue, currentScreen });
  };

  renderSetupContract(style) {
    return (<SetupContract
        submitBack={this.submitBack}
        submitSetupContract={this.submitSetupContract}
        reset={this.reset}
        handleChange={this.handleChange}
        contract={this.state.contract}
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
        errored={this.state.errored}
        err={this.state.err}
        />)
  };

  renderFundContract(style) {
    return (<DepositContract
        submitBack={this.submitBack}
        submitFundContract={this.submitFundContract}
        reset={this.reset}
        handleChange={this.handleChange}
        depositContract={this.state.depositContract}
        depositContractError={this.state.depositContractError}
        fundContractHash={this.state.fundContractHash}
        depositAmount={this.state.depositAmount}
        depositAmountError={this.state.depositAmountError}
        loaded={this.state.loaded}
        loading={this.state.loading}
        errored={this.state.errored}
        err={this.state.err}
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
      errored={this.state.errored}
      err={this.state.err}
      />)
  };

  renderViewContract() {
    return (<ViewContract
      submitBack={this.submitBack}
      submitDepositNavigate={this.submitDepositNavigate}
      submitWithdrawNavigate={this.submitWithdrawNavigate}
      submitStartContract={this.submitStartContract}
      reset={this.reset}
      handleChange={this.handleChange}
      contractState={this.state.contractState}
      fundsDeposited={this.state.fundsDeposited}
      fundsWithdrawable={this.state.fundsWithdrawable}
      payerAddress={this.state.payerAddress}
      payeeAddress={this.state.payeeAddress}
      loaded={this.state.loaded}
      loading={this.state.loading}
      errored={this.state.errored}
      err={this.state.err}
      />)
  };

  renderWithdrawContract(style) {
    return (<WithdrawContract
        submitBack={this.submitBack}
        submitWithdrawContract={this.submitWithdrawContract}
        reset={this.reset}
        handleChange={this.handleChange}
        fundsWithdrawable={this.state.fundsWithdrawable}
        withdrawContract={this.state.withdrawContract}
        withdrawContractError={this.state.withdrawContractError}
        withdrawAmount={this.state.withdrawAmount}
        withdrawAmountError={this.state.withdrawAmountError}
        loaded={this.state.loaded}
        loading={this.state.loading}
        errored={this.state.errored}
        err={this.state.err}
        />)
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

    if(size == 'xsm') {
      return (
        <MuiThemeProvider theme={theme}>
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="title" color="inherit">
                BitDiem Network
              </Typography>
            </Toolbar>
          </AppBar>
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

          <BottomNavigation value={this.state.bottomNavValue} onChange={this.handleBottomNavValueChange} style={{position: 'absolute', bottom:'0px', left: '0px', right: '0px', backgroundColor: ''}} >
            <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} />
            <BottomNavigationAction label="Create" value="create" icon={<CreateIcon />} />
            <BottomNavigationAction label="My Contracts" value="myContracts" icon={<MyContractsIcon />} />
          </BottomNavigation>
        </MuiThemeProvider>
      )
    } else {

      var tooltip = 'Create'
      var fabIcon = '+'
      var onClick = this.submitCreateNavigate

      if(this.state.currentScreen == 'setupContract') {
        tooltip = 'Search'
        fabIcon = <SearchIcon />
        onClick = this.submitSearchNavigate
      }

      return (
        <MuiThemeProvider theme={theme}>
          <div style={styles.headerBackground}>
            <AppBar elevation={0} position="static" color="primary">
              <Toolbar>
                <IconButton color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography variant="title" color="inherit">
                  BitDiem Network
                </Typography>
              </Toolbar>
            </AppBar>
            <CssBaseline />
            <Grid container xs={12} justify="space-around" alignItems="center" direction="row" spacing={0}>
              <Grid container xs={11} justify="space-around" direction="row" spacing={0}>
                <Grid item xs={false} sm={2} md={3} lg={4} style={{marginTop: '120px'}}>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4} style={{marginTop: '120px'}}>
                  <Card raised elevation={5} square={false}  >
                    {this.renderScreen()}
                  </Card>
                </Grid>
                <Grid item xs={false} sm={2} md={3} lg={4} style={{position: 'relative'}}>
                  <Tooltip title={tooltip}>
                    <Button variant="fab" color='secondary' style={{position: 'absolute', top:'157px', left: '20px'}} onClick={onClick}>
                      {fabIcon}
                    </Button>
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </MuiThemeProvider>
      );
    }
  };
  renderScreen() {
    switch (this.state.currentScreen) {
      case 'searchContract':
        return this.renderSearchContract()
        break;
      case 'setupContract':
        return this.renderSetupContract()
        break;
      case 'fundContract':
        return this.renderFundContract()
        break;
      case 'withdrawContract':
        return this.renderWithdrawContract()
        break;
      case 'viewContract':
        return this.renderViewContract()
        break;
      default:
        return this.renderSearchContract()
    }
  }
}

export default App;
