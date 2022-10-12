





function tinhtong(params) {
    
    var number= document.getElementById("num__6").value ;
    var layHangChuc=Math.floor(Number(number)/10);
    var layHangDonVi=Number(number)%10;
    var total=layHangChuc+layHangDonVi;
    document.getElementById("txtNotify__bt5").innerHTML="Tong:"+total;
    console.log(total)
}

document.getElementById("btn_bt5").onclick=tinhtong;