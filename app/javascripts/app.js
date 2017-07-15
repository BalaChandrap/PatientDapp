var accounts;
var account;
var patient;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function addResource(){

     var tempAccount = document.getElementById("owner").value;
     var tempData = document.getElementById("resource").value;

      patient.addData(tempData,tempAccount,{from: tempAccount}).then(function(response) {
  	  console.log("success!",response);
      alert(response);
    },function(error){
  	  console.log("Error!",error);
  	   setStatus("error"+response);
    }
  );


}
function getResource(){

  var tempAccount = document.getElementById("owner2").value;

   var result = web3.eth.sign(tempAccount,web3.sha3("patient")); 
  console.log(result);
	
    patient.getData(tempAccount,result,web3.sha3("patient"),{from: tempAccount}).then(function(response) {
  	  console.log("success!",response);
      alert(response);
  	   setStatus("Successfully stored "+tempString);
    },function(error){
  	  console.log("Error!",error);
      alert("error"+response);
  	   setStatus("error"+response);
    }
  );


}




window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];
    patient = Patient.deployed();
    
  });
}
