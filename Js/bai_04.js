








function total(){
    var width= document.getElementById("wid").value ;
    console.log(width)
    var height= document.getElementById("heig").value ;
var dienTich = Number(width)*Number(height) ;
var chuVi = (Number(width)+(Number(height))*2) ;
console.log(width,height,dienTich,chuVi);
   document.getElementById("txtNotify__bt4s").innerHTML ="Dien Tich :"+dienTich;
   document.getElementById("txtNotify__bt4p").innerHTML  ="Chu Vi: "+chuVi;
}

document.getElementById("btn_bt4").onclick=total