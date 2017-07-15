
import "./ECVerify.sol";

contract Patient {
  
 public address owner;

 public string data;

 function addData(string _data,address _owner) constant returns(bool)
 {

   owner = _owner;
   
   data = _data;

   return true;

 } 

 function getData(address _owner,bytes32 msghash,bytes sighash) constant returns (string)
 {

  if(ECVerify.ecverify(msghash, sighash, owner))
   {
      return data;
   }
   
   throw;

 }
 


}