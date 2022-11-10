"use strict"

onload = function getSize()
{
    let w = this.document.documentElement.clientWidth;
    let h = this.document.documentElement.clientHeight;
    this.document.getElementById('wh').innerHTML = "<h1> wigth: " + w + "<br />" + "Height" + h + "</h1>"
    window.addEventListener('resize', getSize);
}

function myFunction() {
    document.getElementById("myDIV").style.backgroundColor = "red";
  }

    function zoomin(){
        var myImg = document.getElementById("map");
        var currWidth = myImg.clientWidth;
        if(currWidth == 2500) return false;
         else{
            myImg.style.width = (currWidth + 100) + "px";
        } 
    }
    function zoomout(){
        var myImg = document.getElementById("map");
        var currWidth = myImg.clientWidth;
        if(currWidth == 100) return false;
		 else{
            myImg.style.width = (currWidth - 100) + "px";
        }
    }