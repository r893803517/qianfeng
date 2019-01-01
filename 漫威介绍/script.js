    var list = document.getElementById('list');
	var i = 0;
	var liClone = list.children[0].cloneNode(true);
	list.appendChild(liClone);
	var imgWidth =  list.children[0].children[0].offsetWidth;
	console.log(imgWidth);
	var length = list.children.length;
	list.style.width = imgWidth*length+'px';
	console.log(list);
	function scr(){
			var left = list.offsetLeft;
			var target = -imgWidth*i;
			var speed = (left-target)/5;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			if(left==target){
				clearInterval(scrTime);
			}
			list.style.left = left-speed+'px';
	}
	var scrTime = setInterval(scr,70);
	function play(){
		i++;
		if(i == length){
			i = 1;
			list.style.left = 0;
		}
		scrTime = setInterval(scr,70);
    }
    var scrollTime = 3000;
	var time = setInterval(play,scrollTime);

    var canval = document.getElementById('canval');
	canval.onmouseover=function(){
		clearInterval(time);
	}
	canval.onmouseout=function(){
		time = setInterval(play,scrollTime);
    }
    
    var leftButton = document.getElementById('btn_left');
	leftButton.onclick = function(){
        if(i <= 0){
            i = 0 ;
            return;   
		}
		clearInterval(time);
        i--;
        time = setInterval(play,scrollTime);

	}
	
    var rightButton = document.getElementById('btn_right');
    rightButton.onclick = function(){
        if(i >= length-2){
            if(i == length -1){
                return;
            }
            i = length - 2;
            return;
		}
		clearInterval(time);
		i ++;
		scrTime = setInterval(scr,70);

	}
    
    var navi = document.getElementById('navi');
    console.log(navi.offsetTop);
    // console.log(window.innerHeight);
    // console.log(window.innerWidth);
    var zone = document.getElementById('blackZone2');
    console.log(zone.offsetTop);
    var windowHeight = window.innerHeight;
    var windwoWidth = window.innerWidth;

    window.onload =function(){
        setTimeout(function(){
            setInterval(function(){
                scrollDown(navi,windowHeight/200,0);
                scrollUp(zone,windowHeight/35,windowHeight*5/20);
            },15);
        },1500);
       
    }
    


    function scrollDown(elem,speed,destination){
        var top = elem.offsetTop;
        if((destination-top)<speed){
            elem.style.top = destination + 'px';
            return;
        }
        elem.style.top = top + speed + 'px';
       
    }
    function scrollUp(elem,speed,destination){
        var top = elem.offsetTop;
        if((top-destination)<speed){
            elem.style.top = destination + 'px';
            return;
        }
        elem.style.top = top - speed + 'px';
    
    }


var canvas1 = document.getElementById("thumbnail").children[0].children[0];
var canvas2 = document.getElementById("thumbnail").children[0].children[0].cloneNode(true);
document.getElementById("thumbnail").children[0].appendChild(canvas2);
document.getElementById("thumbnail").children[0].children[1].style.left =  '2600px';

    var canvas = [canvas1,canvas2];

   
    var canvasToMove = 0;
    function scrollR2L(speed,destination){
        var offset1 = canvas1.offsetLeft;
        var offset2 = canvas2.offsetLeft;
        var offset = [offset1,offset2];

        if(offset1 == destination){
            canvas1.style.left = destination-800+'px';
            offset1 = canvas2.style.width;

        }
        if(offset2 == destination){
            canvas2.style.left = destination-800+'px';
            offset2 = canvas1.style.width;

        }


        canvas2.style.left = offset2 - speed + 'px';
        canvas1.style.left = offset1 - speed + 'px';

    }

    var baseSpeed  = 10;
    var scrollP = setInterval(function(){
        scrollR2L(baseSpeed,-2600);
       },40);


