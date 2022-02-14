let seconds=0;
let minuts=0;
let hours=0;
let start =document.querySelector("#start");
let stop =document.querySelector("#stop");
let reset =document.querySelector("#reset");
let time=document.querySelector(".display");
let count=null;

start.addEventListener("click", function()
{
 count = setInterval(displayTime, 1000);
});

stop.addEventListener("click", function()
{
clearInterval(count);
});

reset.addEventListener("click", function()
{
clearInterval(count);
seconds=0;
minuts=0;
hours=0;
time.innerHTML= "00 : 00 : 00";
});

function displayTime()
{
seconds=seconds+1;  //second++
if(seconds==60)
{
	minuts=minuts+1;
	seconds=0;

	if(minuts==60)
	{
		hours=hours+1;
		minuts=0;
	}
}
let h= hours<10 ? "0"+hours : hours;
let m= minuts<10 ? "0"+minuts : minuts;
let s= seconds<10 ? "0"+seconds : seconds;
time.innerHTML=`${h} : ${m} : ${s}`;

}