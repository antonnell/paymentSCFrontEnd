var config = function() {
  return {
  "paymentApprovalData":"60806040526000600455600060055534801561001a57600080fd5b50613cdf8061002a6000396000f30060806040526004361061013d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062470e5014610142578063114f4d291461019d578063155dd5ee146101f857806317c6e08b1461023d5780631b2e7ce2146102aa57806324d4ba71146103055780632fd949ca1461035c578063382a29141461038b5780633b76594d146103e65780634b10fb7f1461041e5780634b28676d146104495780635ff03f86146104a45780637007b80c146104ff5780637410c9461461052a5780637f4e48491461058157806386731f07146105ba57806387ad78ac146106155780639dfc911714610644578063a750bb7414610701578063be079ac71461076e578063c177713c146107db578063cf5a51c414610832578063dbd3cd621461088d578063ebdc8ed1146108d2575b600080fd5b34801561014e57600080fd5b50610183600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061093f565b604051808215151515815260200191505060405180910390f35b3480156101a957600080fd5b506101de600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110d1565b604051808215151515815260200191505060405180910390f35b34801561020457600080fd5b5061022360048036038101908080359060200190929190505050611413565b604051808215151515815260200191505060405180910390f35b34801561024957600080fd5b506102a8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061151d565b005b3480156102b657600080fd5b506102eb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116ec565b604051808215151515815260200191505060405180910390f35b34801561031157600080fd5b5061031a611e7e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561036857600080fd5b50610371611ea8565b604051808215151515815260200191505060405180910390f35b34801561039757600080fd5b506103cc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506121cc565b604051808215151515815260200191505060405180910390f35b610404600480360381019080803590602001909291905050506123a6565b604051808215151515815260200191505060405180910390f35b34801561042a57600080fd5b5061043361246e565b6040518082815260200191505060405180910390f35b34801561045557600080fd5b5061048a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612478565b604051808215151515815260200191505060405180910390f35b3480156104b057600080fd5b506104e5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061264f565b604051808215151515815260200191505060405180910390f35b34801561050b57600080fd5b50610514612992565b6040518082815260200191505060405180910390f35b34801561053657600080fd5b5061053f61299c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561058d57600080fd5b506105966129c6565b604051808260028111156105a657fe5b60ff16815260200191505060405180910390f35b3480156105c657600080fd5b506105fb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506129dd565b604051808215151515815260200191505060405180910390f35b34801561062157600080fd5b5061062a612d20565b604051808215151515815260200191505060405180910390f35b34801561065057600080fd5b50610659613014565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b34801561070d57600080fd5b50610716613095565b6040518084151515158152602001831515151581526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b34801561077a57600080fd5b50610783613159565b6040518084151515158152602001831515151581526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b3480156107e757600080fd5b506107f061321d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561083e57600080fd5b50610873600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050613246565b604051808215151515815260200191505060405180910390f35b34801561089957600080fd5b506108b8600480360381019080803590602001909291905050506139d4565b604051808215151515815260200191505060405180910390f35b3480156108de57600080fd5b506108e7613acc565b6040518084151515158152602001831515151581526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806109ec5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80610a445750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515610a4f57600080fd5b83600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610a8c57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610ac757600080fd5b8473ffffffffffffffffffffffffffffffffffffffff16600960000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610e70576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610b94576001600960000160006101000a81548160ff0219169083151502179055505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610c09576001600960000160016101000a81548160ff0219169083151502179055505b60011515600960000160009054906101000a900460ff161515148015610c45575060011515600960000160019054906101000a900460ff161515145b15610d7d577f7d271a40de8e48054470d35ca3fefa3f25b01743d14144afee87c8abee797a2f600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a184600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610e6b565b7f83c7dad04780f6c08686b87a26c5e5619990f4fbc036e4cac7efd0f319e6e217600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b6110c5565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149150606060405190810160405280841515815260200183151581526020018673ffffffffffffffffffffffffffffffffffffffff16815250600960008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff02191690831515021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507f978d2c36e5cf02fe44c0fc6f132aeae0db99aa14616a5783ed4250c3e44b6d13600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b60019350505050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061117b5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561118657600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156111c357600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156111fe57600080fd5b8273ffffffffffffffffffffffffffffffffffffffff16600760000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561140957606060405190810160405280600015158152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff16815250600760008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff02191690831515021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507f2d43ce80a39809c020908c7f7ec889bf15d8030ea8b4841057804d713a27bf9d6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168433604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b6001915050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561147057600080fd5b81611488600354600454613b9090919063ffffffff16565b1015151561149557600080fd5b6114aa82600454613b9090919063ffffffff16565b6004819055506114db6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683613ba9565b7f0788d719d36264cd922e6e2bb8f52f65b13571d1ea3ddaf8d27b1acfdd18c3d06004546040518082815260200191505060405180910390a160019050919050565b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561155a57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561159557600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156115d257600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561160d57600080fd5b846000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550826003819055506000600660006101000a81548160ff021916908360028111156116b457fe5b02179055507fabd60e51a18b36604f00b5547417cf9051cc5c3a2e80e68206296e14be19f0bc60405160405180910390a15050505050565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806117995750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806117f15750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156117fc57600080fd5b83600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561183957600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561187457600080fd5b8473ffffffffffffffffffffffffffffffffffffffff16600860000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611c1d576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611941576001600860000160006101000a81548160ff0219169083151502179055505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156119b6576001600860000160016101000a81548160ff0219169083151502179055505b60011515600860000160009054906101000a900460ff1615151480156119f2575060011515600860000160019054906101000a900460ff161515145b15611b2a577f9275f1c30b46299d6b74c72442bcc7c7378bc58ccf8ddcad861d3fe1c182fa24600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a184600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611c18565b7f83c7dad04780f6c08686b87a26c5e5619990f4fbc036e4cac7efd0f319e6e217600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b611e72565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149150606060405190810160405280841515815260200183151581526020018673ffffffffffffffffffffffffffffffffffffffff16815250600860008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff02191690831515021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507f72c2f08357400f2ccd757dcf2a05e7dcacb2a45c6e6d82e284beaf85b81c4a2a600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b60019350505050919050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480611f525750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80611faa5750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515611fb557600080fd5b60016002811115611fc257fe5b600660009054906101000a900460ff166002811115611fdd57fe5b148061200e575060006002811115611ff157fe5b600660009054906101000a900460ff16600281111561200c57fe5b145b151561201957600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561208d576001600b60000160006101000a81548160ff0219169083151502179055505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415612102576001600b60000160016101000a81548160ff0219169083151502179055505b60011515600b60000160009054906101000a900460ff16151514801561213e575060011515600b60000160019054906101000a900460ff161515145b15612198576002600660006101000a81548160ff0219169083600281111561216257fe5b02179055507f6d0d90585834980bd0e5603341ff50b06349c11e0bf9241d03f6d065f12a262b60405160405180910390a16121c5565b7f80839e538bde2958c151f70739742ebe9e722b5da34c2fa611315b3da73ea2bc60405160405180910390a15b6001905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561222a57600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561226757600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156122a257600080fd5b7fa9e5978bbfbf156599d86b750e4db433bc414c83e3ee93cae447582d6d42990b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a182600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001915050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561240357600080fd5b813414151561241157600080fd5b61242682600454613c5990919063ffffffff16565b6004819055507f7cb5d45c1071f219bd2da1ea101758715bd52f23f2a707f2d9a0387dea18d9066004546040518082815260200191505060405180910390a160019050919050565b6000600554905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156124d557600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561251257600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561254d57600080fd5b7f58d3642786417c870516a8557fb095d6f4f6f141035c3a96a0ab96e11202fa6d6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001915050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806126f95750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561270457600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561274157600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561277c57600080fd5b8273ffffffffffffffffffffffffffffffffffffffff16600860000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561298857606060405190810160405280600015158152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff16815250600860008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff02191690831515021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507fc680d3fffabbf99d59eed0e626d287e327d8aedf2c30743bf13ae1c6380976f2600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168433604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b6001915050919050565b6000600454905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600660009054906101000a900460ff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480612a875750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515612a9257600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515612acf57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515612b0a57600080fd5b8273ffffffffffffffffffffffffffffffffffffffff16600960000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415612d1657606060405190810160405280600015158152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff16815250600960008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff02191690831515021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507fb47ca3775a090e3f8ac330bffeb8e511623720922e9d5fac8102e32384fc62b3600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168433604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b6001915050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480612dca5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80612e225750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515612e2d57600080fd5b60006002811115612e3a57fe5b600660009054906101000a900460ff166002811115612e5557fe5b141515612e6157600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415612ed5576001600a60000160006101000a81548160ff0219169083151502179055505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415612f4a576001600a60000160016101000a81548160ff0219169083151502179055505b60011515600a60000160009054906101000a900460ff161515148015612f86575060011515600a60000160019054906101000a900460ff161515145b15612fe0576001600660006101000a81548160ff02191690836002811115612faa57fe5b02179055507fb51dffe792beb9c21b5572a8e1e045ec740e8919e04c7fa0c4a987ca7e639cba60405160405180910390a161300d565b7fc898a916997b561c8955a71e9839a3bcd5684a16322731ac7641a9f357be6ded60405160405180910390a15b6001905090565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828282925092509250909192565b60008060006130a2613c77565b6008606060405190810160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900460ff161515151581526020016000820160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905080600001518160200151826040015193509350935050909192565b6000806000613166613c77565b6007606060405190810160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900460ff161515151581526020016000820160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905080600001518160200151826040015193509350935050909192565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806132f35750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b8061334b5750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561335657600080fd5b83600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561339357600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156133ce57600080fd5b8473ffffffffffffffffffffffffffffffffffffffff16600760000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415613774576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561349b576001600760000160006101000a81548160ff0219169083151502179055505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415613510576001600760000160016101000a81548160ff0219169083151502179055505b60011515600760000160009054906101000a900460ff16151514801561354c575060011515600760000160019054906101000a900460ff161515145b15613682577f1cabee66f433424d5dd2434080023b3c858065fb3a72c3221636aca3fcf279996000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a1846000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061376f565b7f83c7dad04780f6c08686b87a26c5e5619990f4fbc036e4cac7efd0f319e6e2176000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b6139c8565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149150606060405190810160405280841515815260200183151581526020018673ffffffffffffffffffffffffffffffffffffffff16815250600760008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff02191690831515021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507f83c7dad04780f6c08686b87a26c5e5619990f4fbc036e4cac7efd0f319e6e2176000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b60019350505050919050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613a3257600080fd5b8160055410151515613a4357600080fd5b613a5882600554613b9090919063ffffffff16565b600581905550613a8a600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683613ba9565b7ff1cd759bc86f7e79470e4a2e1bc21dd46c673588ab057bfca67fb184a55ed8036005546040518082815260200191505060405180910390a160019050919050565b6000806000613ad9613c77565b6009606060405190810160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900460ff161515151581526020016000820160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905080600001518160200151826040015193509350935050909192565b6000828211151515613b9e57fe5b818303905092915050565b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015613bef573d6000803e3d6000fd5b508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000808284019050838110151515613c6d57fe5b8091505092915050565b606060405190810160405280600015158152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff16815250905600a165627a7a72305820dbf46f5a395fdd60d0ffbab7c761618dc32913d458a1b48d4e3f79109153b4390029",
  "paymentApprovalAbi":[
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "requestUsufructUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "rejectPayerUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_amount",
  				"type": "uint256"
  			}
  		],
  		"name": "withdrawFunds",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_payerAddress",
  				"type": "address"
  			},
  			{
  				"name": "_payeeAddress",
  				"type": "address"
  			},
  			{
  				"name": "_paymentAmount",
  				"type": "uint256"
  			}
  		],
  		"name": "PaymentIntervalContract",
  		"outputs": [],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "requestPayeeUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getUsufruct",
  		"outputs": [
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [],
  		"name": "terminateContract",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "setPayeeAddress",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_amount",
  				"type": "uint256"
  			}
  		],
  		"name": "depositFunds",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": true,
  		"stateMutability": "payable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getPayeeBalance",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "setPayerAddress",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "rejectPayeeUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getPayerBalance",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getPayeeAddress",
  		"outputs": [
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getContractState",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint8"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "rejectUsufructUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [],
  		"name": "approvePayout",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getContractDetails",
  		"outputs": [
  			{
  				"name": "_payerAddress",
  				"type": "address"
  			},
  			{
  				"name": "_payeeAddress",
  				"type": "address"
  			},
  			{
  				"name": "_usufructAddress",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getPendingPayeeUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			},
  			{
  				"name": "",
  				"type": "bool"
  			},
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getPendingPayerUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			},
  			{
  				"name": "",
  				"type": "bool"
  			},
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getPayerAddress",
  		"outputs": [
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "requestPayerUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_amount",
  				"type": "uint256"
  			}
  		],
  		"name": "withdrawPayment",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getPendingUsufructUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			},
  			{
  				"name": "",
  				"type": "bool"
  			},
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"payable": true,
  		"stateMutability": "payable",
  		"type": "fallback"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": true,
  				"name": "from",
  				"type": "address"
  			},
  			{
  				"indexed": true,
  				"name": "to",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "value",
  				"type": "uint256"
  			}
  		],
  		"name": "Transfer",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [],
  		"name": "ContractCreated",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [],
  		"name": "ContractApproveRequested",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [],
  		"name": "ContractApproved",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [],
  		"name": "ContractTerminatedRequested",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [],
  		"name": "ContractTerminated",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "payerBalance",
  				"type": "uint256"
  			}
  		],
  		"name": "FundsDeposited",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "payerBalance",
  				"type": "uint256"
  			}
  		],
  		"name": "DepositWithdrawn",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "payeeBalance",
  				"type": "uint256"
  			}
  		],
  		"name": "PaymentsWithdrawn",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayerUpdated",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayerUpdateRequested",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayerUpdateAuthorised",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayerUpdateRejected",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayeeUpdated",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayeeUpdateRequested",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayeeUpdateAuthorised",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayeeUpdateRejected",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "UsufructUpdateRequested",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "UsufructUpdateAuthorised",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "UsufructUpdateRejected",
  		"type": "event"
  	}
  ],
  "paymentIntervalData":"60806040526000600555600060065560006007553480156200002057600080fd5b50604051608080620040f98339810180604052810190808051906020019092919080519060200190929190805190602001909291908051906020019092919050505083600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515620000a057600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515620000dc57600080fd5b83600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156200011a57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156200015657600080fd5b856000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600381905550826004819055506000600860006101000a81548160ff021916908360028111156200020557fe5b02179055506200022362000298640100000000026401000000009004565b6005819055507fcf78cf0d6f3d8371e1075c69c492ab4ec5d8cf23a1a239b6a51a1d00be7ca31233604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1505050505050620002a0565b600043905090565b613e4980620002b06000396000f30060806040526004361061013d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062470e5014610142578063114f4d291461019d578063155dd5ee146101f85780631b2e7ce21461023d57806324d4ba71146102985780632fd949ca146102ef578063382a29141461031e5780633b76594d146103795780634a7de193146103b15780634b10fb7f146103dc5780634b28676d146104075780635fb02f4d146104625780635ff03f86146104915780637007b80c146104ec5780637410c946146105175780637f4e48491461056e57806386731f07146105a75780639dfc911714610602578063a750bb74146106bf578063be079ac71461072c578063c177713c14610799578063cf5a51c4146107f0578063dbd3cd621461084b578063ebdc8ed114610890575b600080fd5b34801561014e57600080fd5b50610183600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108fd565b604051808215151515815260200191505060405180910390f35b3480156101a957600080fd5b506101de600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061108f565b604051808215151515815260200191505060405180910390f35b34801561020457600080fd5b50610223600480360381019080803590602001909291905050506113d1565b604051808215151515815260200191505060405180910390f35b34801561024957600080fd5b5061027e600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506114fb565b604051808215151515815260200191505060405180910390f35b3480156102a457600080fd5b506102ad611c8d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102fb57600080fd5b50610304611cb7565b604051808215151515815260200191505060405180910390f35b34801561032a57600080fd5b5061035f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612049565b604051808215151515815260200191505060405180910390f35b61039760048036038101908080359060200190929190505050612223565b604051808215151515815260200191505060405180910390f35b3480156103bd57600080fd5b506103c66122f3565b6040518082815260200191505060405180910390f35b3480156103e857600080fd5b506103f16123a1565b6040518082815260200191505060405180910390f35b34801561041357600080fd5b50610448600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506123d1565b604051808215151515815260200191505060405180910390f35b34801561046e57600080fd5b506104776125a8565b604051808215151515815260200191505060405180910390f35b34801561049d57600080fd5b506104d2600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612918565b604051808215151515815260200191505060405180910390f35b3480156104f857600080fd5b50610501612c5b565b6040518082815260200191505060405180910390f35b34801561052357600080fd5b5061052c612c8b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561057a57600080fd5b50610583612cb5565b6040518082600281111561059357fe5b60ff16815260200191505060405180910390f35b3480156105b357600080fd5b506105e8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050612ccc565b604051808215151515815260200191505060405180910390f35b34801561060e57600080fd5b5061061761300f565b604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b3480156106cb57600080fd5b506106d4613090565b6040518084151515158152602001831515151581526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b34801561073857600080fd5b50610741613154565b6040518084151515158152602001831515151581526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b3480156107a557600080fd5b506107ae613218565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156107fc57600080fd5b50610831600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050613241565b604051808215151515815260200191505060405180910390f35b34801561085757600080fd5b50610876600480360381019080803590602001909291905050506139cf565b604051808215151515815260200191505060405180910390f35b34801561089c57600080fd5b506108a5613b41565b6040518084151515158152602001831515151581526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390f35b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806109aa5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80610a025750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515610a0d57600080fd5b83600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610a4a57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610a8557600080fd5b8473ffffffffffffffffffffffffffffffffffffffff16600b60000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610e2e576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610b52576001600b60000160006101000a81548160ff0219169083151502179055505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610bc7576001600b60000160016101000a81548160ff0219169083151502179055505b60011515600b60000160009054906101000a900460ff161515148015610c03575060011515600b60000160019054906101000a900460ff161515145b15610d3b577f7d271a40de8e48054470d35ca3fefa3f25b01743d14144afee87c8abee797a2f600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a184600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610e29565b7f83c7dad04780f6c08686b87a26c5e5619990f4fbc036e4cac7efd0f319e6e217600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b611083565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149150606060405190810160405280841515815260200183151581526020018673ffffffffffffffffffffffffffffffffffffffff16815250600b60008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff02191690831515021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507f978d2c36e5cf02fe44c0fc6f132aeae0db99aa14616a5783ed4250c3e44b6d13600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b60019350505050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806111395750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561114457600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561118157600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156111bc57600080fd5b8273ffffffffffffffffffffffffffffffffffffffff16600960000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156113c757606060405190810160405280600015158152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff16815250600960008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff02191690831515021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507f2d43ce80a39809c020908c7f7ec889bf15d8030ea8b4841057804d713a27bf9d6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168433604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b6001915050919050565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561143157600080fd5b611439613c05565b915061144482613c0d565b90508361145c82600654613ca990919063ffffffff16565b1015151561146957600080fd5b61147e84600654613ca990919063ffffffff16565b6006819055506114af6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685613cc2565b7fb18738fbb85cf07a784ef89336a646e43db9c66e3f500f91617b83b5d5ea800160065485604051808381526020018281526020019250505060405180910390a1600192505050919050565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806115a85750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806116005750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561160b57600080fd5b83600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561164857600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561168357600080fd5b8473ffffffffffffffffffffffffffffffffffffffff16600a60000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611a2c576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611750576001600a60000160006101000a81548160ff0219169083151502179055505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156117c5576001600a60000160016101000a81548160ff0219169083151502179055505b60011515600a60000160009054906101000a900460ff161515148015611801575060011515600a60000160019054906101000a900460ff161515145b15611939577f9275f1c30b46299d6b74c72442bcc7c7378bc58ccf8ddcad861d3fe1c182fa24600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a184600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611a27565b7f83c7dad04780f6c08686b87a26c5e5619990f4fbc036e4cac7efd0f319e6e217600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b611c81565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149150606060405190810160405280841515815260200183151581526020018673ffffffffffffffffffffffffffffffffffffffff16815250600a60008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff02191690831515021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507f72c2f08357400f2ccd757dcf2a05e7dcacb2a45c6e6d82e284beaf85b81c4a2a600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b60019350505050919050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480611d615750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b80611db95750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515611dc457600080fd5b60016002811115611dd157fe5b600860009054906101000a900460ff166002811115611dec57fe5b1480611e1d575060006002811115611e0057fe5b600860009054906101000a900460ff166002811115611e1b57fe5b145b1515611e2857600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611e9c576001600d60000160006101000a81548160ff0219169083151502179055505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415611f11576001600d60000160016101000a81548160ff0219169083151502179055505b60011515600d60000160009054906101000a900460ff161515148015611f4d575060011515600d60000160019054906101000a900460ff161515145b15611fde576002600860006101000a81548160ff02191690836002811115611f7157fe5b02179055507f9d7e11b7ee517fc092f4a904e8eac7b469444955f9a0c9e1cb4644be70b771f633604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1612042565b7fc0e77bfaf82f1aed8f0bd2dc47e54733e2af7a479d6c9f230f53a9904d21741633604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b6001905090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156120a757600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156120e457600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561211f57600080fd5b7fa9e5978bbfbf156599d86b750e4db433bc414c83e3ee93cae447582d6d42990b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a182600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001915050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561228057600080fd5b813414151561228e57600080fd5b6122a382600654613d7290919063ffffffff16565b6006819055507f26679fa1f3868c950e9362f1106cf73f3318de0280e0411a3c68e4b463eadd4f60065483604051808381526020018281526020019250505060405180910390a160019050919050565b60008060006001600281111561230557fe5b600860009054906101000a900460ff16600281111561232057fe5b148061235157506000600281111561233457fe5b600860009054906101000a900460ff16600281111561234f57fe5b145b151561235c57600080fd5b612364613c05565b915061238361237283613c0d565b600654613ca990919063ffffffff16565b905061239a60045482613d9090919063ffffffff16565b9250505090565b6000806123ac613c05565b90506123cb6123ba82613c0d565b600754613d7290919063ffffffff16565b91505090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561242e57600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561246b57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156124a657600080fd5b7f58d3642786417c870516a8557fb095d6f4f6f141035c3a96a0ab96e11202fa6d6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1684604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a1826000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001915050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806126525750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806126aa5750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156126b557600080fd5b600060028111156126c257fe5b600860009054906101000a900460ff1660028111156126dd57fe5b1415156126e957600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561275d576001600c60000160006101000a81548160ff0219169083151502179055505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156127d2576001600c60000160016101000a81548160ff0219169083151502179055505b60011515600c60000160009054906101000a900460ff16151514801561280e575060011515600c60000160019054906101000a900460ff161515145b156128ad5761281b613c05565b6005819055506001600860006101000a81548160ff0219169083600281111561284057fe5b02179055507f0a45561d3c9029086ecb50a7cc1a2cfdb3eabb2d287e9325883f82050755afec33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1612911565b7f535831bcc66e33e1dd43c83b8ba7706456fc40cac142fa949aeb485cbcbb53c933604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a15b6001905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806129c25750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15156129cd57600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515612a0a57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515612a4557600080fd5b8273ffffffffffffffffffffffffffffffffffffffff16600a60000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415612c5157606060405190810160405280600015158152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff16815250600a60008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff02191690831515021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507fc680d3fffabbf99d59eed0e626d287e327d8aedf2c30743bf13ae1c6380976f2600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168433604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b6001915050919050565b600080612c66613c05565b9050612c85612c7482613c0d565b600654613ca990919063ffffffff16565b91505090565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600860009054906101000a900460ff16905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480612d765750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b1515612d8157600080fd5b81600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515612dbe57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515612df957600080fd5b8273ffffffffffffffffffffffffffffffffffffffff16600b60000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561300557606060405190810160405280600015158152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff16815250600b60008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff02191690831515021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507fb47ca3775a090e3f8ac330bffeb8e511623720922e9d5fac8102e32384fc62b3600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168433604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b6001915050919050565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169150600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050828282925092509250909192565b600080600061309d613de1565b600a606060405190810160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900460ff161515151581526020016000820160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905080600001518160200151826040015193509350935050909192565b6000806000613161613de1565b6009606060405190810160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900460ff161515151581526020016000820160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905080600001518160200151826040015193509350935050909192565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60008060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806132ee5750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b806133465750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561335157600080fd5b83600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561338e57600080fd5b3073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156133c957600080fd5b8473ffffffffffffffffffffffffffffffffffffffff16600960000160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561376f576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415613496576001600960000160006101000a81548160ff0219169083151502179055505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561350b576001600960000160016101000a81548160ff0219169083151502179055505b60011515600960000160009054906101000a900460ff161515148015613547575060011515600960000160019054906101000a900460ff161515145b1561367d577f1cabee66f433424d5dd2434080023b3c858065fb3a72c3221636aca3fcf279996000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a1846000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061376a565b7f83c7dad04780f6c08686b87a26c5e5619990f4fbc036e4cac7efd0f319e6e2176000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b6139c3565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149250600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149150606060405190810160405280841515815260200183151581526020018673ffffffffffffffffffffffffffffffffffffffff16815250600960008201518160000160006101000a81548160ff02191690831515021790555060208201518160000160016101000a81548160ff02191690831515021790555060408201518160000160026101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509050507f83c7dad04780f6c08686b87a26c5e5619990f4fbc036e4cac7efd0f319e6e2176000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff168633604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001935050505060405180910390a15b60019350505050919050565b6000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515613a3057600080fd5b613a38613c05565b9150613a4382613c0d565b905083613a5b82600754613d7290919063ffffffff16565b10151515613a6857600080fd5b613a8f84613a8183600654613ca990919063ffffffff16565b613ca990919063ffffffff16565b600681905550613abc84613aae83600754613d7290919063ffffffff16565b613ca990919063ffffffff16565b60078190555081600581905550613af5600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1685613cc2565b7fa21048fafbb2c049d83f70c98e05b976cf8f1e5f767ef698a6fdb1e7444c282860075485604051808381526020018281526020019250505060405180910390a1600192505050919050565b6000806000613b4e613de1565b600b606060405190810160405290816000820160009054906101000a900460ff161515151581526020016000820160019054906101000a900460ff161515151581526020016000820160029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050905080600001518160200151826040015193509350935050909192565b600043905090565b6000806000806002811115613c1e57fe5b600860009054906101000a900460ff166002811115613c3957fe5b1415613c485760009250613ca2565b613c5d60055485613ca990919063ffffffff16565b9150613c88600354613c7a84600454613da690919063ffffffff16565b613d9090919063ffffffff16565b9050600654811115613c9e576006549250613ca2565b8092505b5050919050565b6000828211151515613cb757fe5b818303905092915050565b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015613d08573d6000803e3d6000fd5b508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000808284019050838110151515613d8657fe5b8091505092915050565b60008183811515613d9d57fe5b04905092915050565b6000806000841415613dbb5760009150613dda565b8284029050828482811515613dcc57fe5b04141515613dd657fe5b8091505b5092915050565b606060405190810160405280600015158152602001600015158152602001600073ffffffffffffffffffffffffffffffffffffffff16815250905600a165627a7a7230582009d4762ae0423bb638f6dae6791785a2d54a0e9181dc2c87e05f97a08b3271db0029",
  "paymentIntervalAbi":[
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "requestUsufructUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "rejectPayerUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_amount",
  				"type": "uint256"
  			}
  		],
  		"name": "withdrawFunds",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "requestPayeeUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getUsufruct",
  		"outputs": [
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [],
  		"name": "terminateContract",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "setPayeeAddress",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_amount",
  				"type": "uint256"
  			}
  		],
  		"name": "depositFunds",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": true,
  		"stateMutability": "payable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getRemainingIntervals",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getPayeeBalance",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "setPayerAddress",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [],
  		"name": "startContract",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "rejectPayeeUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getPayerBalance",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getPayeeAddress",
  		"outputs": [
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getContractState",
  		"outputs": [
  			{
  				"name": "",
  				"type": "uint8"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "rejectUsufructUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getContractDetails",
  		"outputs": [
  			{
  				"name": "_payerAddress",
  				"type": "address"
  			},
  			{
  				"name": "_payeeAddress",
  				"type": "address"
  			},
  			{
  				"name": "_usufructAddress",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getPendingPayeeUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			},
  			{
  				"name": "",
  				"type": "bool"
  			},
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getPendingPayerUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			},
  			{
  				"name": "",
  				"type": "bool"
  			},
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getPayerAddress",
  		"outputs": [
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_address",
  				"type": "address"
  			}
  		],
  		"name": "requestPayerUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": false,
  		"inputs": [
  			{
  				"name": "_amount",
  				"type": "uint256"
  			}
  		],
  		"name": "withdrawPayment",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "function"
  	},
  	{
  		"constant": true,
  		"inputs": [],
  		"name": "getPendingUsufructUpdate",
  		"outputs": [
  			{
  				"name": "",
  				"type": "bool"
  			},
  			{
  				"name": "",
  				"type": "bool"
  			},
  			{
  				"name": "",
  				"type": "address"
  			}
  		],
  		"payable": false,
  		"stateMutability": "view",
  		"type": "function"
  	},
  	{
  		"inputs": [
  			{
  				"name": "_payerAddress",
  				"type": "address"
  			},
  			{
  				"name": "_payeeAddress",
  				"type": "address"
  			},
  			{
  				"name": "_interval",
  				"type": "uint256"
  			},
  			{
  				"name": "_paymentAmount",
  				"type": "uint256"
  			}
  		],
  		"payable": false,
  		"stateMutability": "nonpayable",
  		"type": "constructor"
  	},
  	{
  		"payable": true,
  		"stateMutability": "payable",
  		"type": "fallback"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": true,
  				"name": "from",
  				"type": "address"
  			},
  			{
  				"indexed": true,
  				"name": "to",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "value",
  				"type": "uint256"
  			}
  		],
  		"name": "Transfer",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "ContractCreated",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "ContractStartRequested",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "ContractStarted",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "ContractTerminatedRequested",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "ContractTerminated",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_balance",
  				"type": "uint256"
  			},
  			{
  				"indexed": false,
  				"name": "_amount",
  				"type": "uint256"
  			}
  		],
  		"name": "FundsDeposited",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_balance",
  				"type": "uint256"
  			},
  			{
  				"indexed": false,
  				"name": "_amount",
  				"type": "uint256"
  			}
  		],
  		"name": "DepositWithdrawn",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_balance",
  				"type": "uint256"
  			},
  			{
  				"indexed": false,
  				"name": "_amount",
  				"type": "uint256"
  			}
  		],
  		"name": "PaymentsWithdrawn",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayerUpdated",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayerUpdateRequested",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayerUpdateAuthorised",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayerUpdateRejected",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayeeUpdated",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayeeUpdateRequested",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayeeUpdateAuthorised",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "PayeeUpdateRejected",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "UsufructUpdateRequested",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "UsufructUpdateAuthorised",
  		"type": "event"
  	},
  	{
  		"anonymous": false,
  		"inputs": [
  			{
  				"indexed": false,
  				"name": "_fromAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_toAddress",
  				"type": "address"
  			},
  			{
  				"indexed": false,
  				"name": "_byAddress",
  				"type": "address"
  			}
  		],
  		"name": "UsufructUpdateRejected",
  		"type": "event"
  	}
  ]
  }
}

module.exports = config()
