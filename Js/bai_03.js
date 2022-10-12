function VND(params) {
   var usd = document.getElementById("USD").value ;
    var vnd = (Number(usd)*23000); 
    document.getElementById("txtNotify__bt3").innerHTML=vnd;
}
document.getElementById("btn_bt3").onclick=VND;