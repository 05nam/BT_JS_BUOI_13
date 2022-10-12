

function tinhTrungBinh(params) {
    var num1 = document.getElementById("num__1").value ;
    var num2 = document.getElementById("num__2").value ;
    var num3 = document.getElementById("num__3").value ;
    var num4 = document.getElementById("num__4").value ;
    var num5 = document.getElementById("num__5").value ;

    console.log(typeof(num1));
    var trungBinh= (Number(num1)+Number(num2)+Number(num3)+Number(num4)+Number(num5))/5;
document.getElementById("txtNotify__bt2").innerHTML=trungBinh;
}


document.getElementById("btn_bt2").onclick = tinhTrungBinh;