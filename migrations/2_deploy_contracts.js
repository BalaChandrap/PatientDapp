module.exports = function(deployer) {
  
  deployer.deploy(ECVerify);
  deployer.autolink();
  deployer.deploy(Patient);
};
