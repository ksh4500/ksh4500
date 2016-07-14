/*적군을 정의한다!!*/
var Enemy=function(stage,width,height,x,y,src){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.img;
	this.src=src;

	this.init(){
	 this.img=document.createElement("img");
	 this.img.src=this.src;
	 
	 this.img.style.width=this.width+"px";
	 this.img.style.height=this.height+"px";
	 
	 this.img.style.position="absolute";
	 this.img.style.left=this.x+"px";
     this.img.style.top=this.y+"px";

	}
	
	this.move(){
	}
}