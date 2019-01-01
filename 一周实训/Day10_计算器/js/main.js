//定义两个要做运算的值
var number1 = "";
var number2 = "";
//定义运算符
var operational  = "";

//显示值的p标签得到
var label = document.getElementById("screen");
//获取p标签的集合
var btns = document.getElementsByTagName("a");

for (var i = 0 ;i <btns.length;i++) {
	var btn = btns[i];
	btn.onclick = function(){
		//获取按钮上的内容
		var txt = this.innerHTML;
		console.log(txt);
		switch (txt){
			case "AC":
				number1 = "";
				number2 = "";
				operational = "";
				label.innerHTML = "";
				break;
			case "+":
				operational = "+";
				break;
			case "-":
				operational = "-";
				break;
			case "X":
				operational = "X";
				break;
			case "/":
				operational = "/";
				break;
			case "=":
				var num1 = parseFloat(number1);
				var num2 = parseFloat(number2);
				switch (operational){
					case "+":
						label.innerHTML = num1 + num2;
						break;
					case "-":
						label.innerHTML = num1 - num2;
						break;
					case "X":
						label.innerHTML = num1 * num2;
						break;
					case "/":
						label.innerHTML = num1 / num2;
						break;
				}
				number1 = "";
				number2 = "";
				operational = "";
				break;
			default:
				if(operational == ""){
					number1 = number1 + txt;
					label.innerHTML = number1;
				}else{
					number2 = number2 + txt;
					label.innerHTML = number2;
				}
				break;
		}
	}
}
