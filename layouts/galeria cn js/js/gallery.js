
var previousBtn = document.getElementsByClassName('previousBtn')[0];
var nextBtn= document.getElementsByClassName('nextBtn')[0];
var itemsList =document.getElementsByClassName('itemsList')[0];
var countChildren =itemsList.children.length;
var i =0;

previousBtn.addEventListener('click',goPrev);
function goPrev(){
	//console.log('goPrevious');
	//console.log(countChildren);
	i=i-1;
	//console.log(i)

	if (i === -1) {
		i=countChildren-1;
		//console.log(i)
		itemsList.style.left = i*-960 +"px";

		}

		else{
		itemsList.style.left= -960*i + "px";
	}
}
nextBtn.addEventListener('click',goNext)
function goNext(){
	//console.log('goNext')
	i=i+1;
	//console.log(i);
	if (i === countChildren) {
		i=0;
		//console.log(i);
		itemsList.style.left = "0px";
		}
		else{
		itemsList.style.left= -960*i + "px";
		}	
}
	
	


