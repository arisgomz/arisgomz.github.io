function openMenu(){
	// Find the element
	x=document.getElementById("menu");
	y=document.getElementsByClassName("menuItem");
	// Change the style attribute directly
	if(x.style.display=="none"){
		x.style.display="block";
		x.style.right="0";
		for(j=0;j<y.length;j++){
			y[j].style.display="block";
		};
	}
	else{
		x.style.display="none";
	}
}

function resize(){
	x=document.getElementById("menu");
	y=document.getElementsByClassName("menuItem");
	x.style.display="block";
	x.style.right="0";
	for(j=0;j<y.length;j++){
		y[j].style.display="inline-block";
	};
}