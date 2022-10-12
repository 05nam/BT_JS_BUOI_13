
// var money=100000;
// var numday = 2;
// var salary=0;
// salary = money*numday;
// console.log('bai_01___salary',salary);


function tinhluong(params) {
    var numday = document.getElementById("exampleInputEmail1").value ;
    var money = document.getElementById("exampleInputPassword1").value ;
    console.log(numday,money);
    var salary=0;
    salary = money*numday;
    console.log('bai_01___salary',salary);
    document.getElementById("txtNotify").style.fontSize="24px";
    
    document.getElementById("txtNotify").innerHTML="Tiền lương nhận:"+salary + "VDN";
}

document.getElementById("btn_N").onclick=tinhluong;