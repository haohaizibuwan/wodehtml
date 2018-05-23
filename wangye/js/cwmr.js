window.onload=function(){
	let lunbo=document.querySelector('.lunbo');
	let dakuai=document.querySelector('.lunbo .dakuai');
	let imgs=document.querySelectorAll('.lunbo .dakuai .tu5');
	console.log(imgs)
	let lw=(parseInt(getComputedStyle(imgs[0],null).width)+parseInt(getComputedStyle(imgs[0],null).marginLeft))*5;



	let times=0;
	let maxTimes=imgs.length/5;
	
	
	setInterval(move,2000);

	let current=0,next=0;
	function move(){
	next++;
	if(next===tu5.length){
		next=0;
	}
	for(let i=0;i<5;i++){
		if(++times===maxTimes){
			times=maxTimes-1;
		}
		console.log(times);
		imgs.style.transform=`translateX(${-times*lw}px)`;
	}
	for(let i=0;i<5;i++){
		if(--times<0){
			times=0;
		}
		console.log(times);
		imgs.style.transform=`translateX(${-times*lw}px)`;
	}
}	