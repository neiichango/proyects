


var Slider= function(selector) {
	this.itemsList =selector;
	this.countChildren =this.itemsList.children().length;
	this.previousBtn= $('.previousBtn');
	this.nextBtn=$('.nextBtn');
	this.i=0;
}




	Slider.prototype = {
		constructor: Slider,
		goPrev: function(){
			this.i=this.i-1;
			if (this.i === -1) {
					this.i=this.countChildren-1;
					this.itemsList.css({'left':this.i*-960 +"px"});

			}

			else{
				this.itemsList.css({'left':-960*this.i+"px"});
			}




		},
		goNext: function(){
			 this.i=this.i+1;
			if (this.i === this.countChildren) {
				this.i=0;				
				this.itemsList.css({'left':'0px'});

			}
				else{
				this.itemsList.css({'left':-960*this.i + "px"});
				}	
			

	},

		addEventHandlers: function(){
			this.nextBtn[0].ref = this;
			this.previousBtn[0].ref =this;

			this.nextBtn.on('click',function(){
				this.ref.goNext();

			});

			this.previousBtn.on('click',function(){
				this.ref.goPrev();
			});

		} 
};




var slider = new Slider($('.itemsList'))
	slider.addEventHandlers();
	/*slider.nextBtn.click( function(){
		slider.goNext();

	});

	slider.previousBtn.click(function(){
		slider.goPrev();
	});*/



	




	/*var previousBtn= $('.previousBtn');
	var nextBtn=$('.nextBtn');
	var itemsList=$('.itemsList');
	var countChildren=itemsList.children().length;
	var i=0;
	var	value=0;
	//console.log(this.countChildren);

nextBtn.click(goNext);
previousBtn.click(goPrev);

function goPrev(){
i=i-1
if (i === -1) {
		i=countChildren-1;
		value=i*-960 +"px"
		
		
		itemsList.css('left',value);

		}

		else{
		value=-960*i+"px";
		itemsList.css('left',value);
	}
}
function goNext(){
 i=i+1;
	if (i === countChildren) {
		i=0;
		
		itemsList.css('left','0px');
		}
		else{
			value=-960*i + "px"
		itemsList.css('left',value)
		}	

}*/


/*
----------javascript de la galeria----------



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
}*/
	
	


