var Maze =function(stage,width,height,x,y){
	this.stage=stage;
	this.width=width;
	this.height=height;
	this.div;
	this.x=x;
	this.y=y;
	this.flag=false;

	this.init=function(){
		var me=this;
		this.div=document.createElement("div");
		this.div.style.width=this.width+"px";
		this.div.style.height=this.height+"px";
		this.div.style.position="absolute";
		
		this.div.style.border="1px solid red";
		this.div.style.left=this.x+"px";
		this.div.style.top=this.y+"px";
	
		this.stage.appendChild(this.div);
		//나인 사각형을 클릭하면 나의 this.div의 배경색을 바꾸자
		this.div.addEventListener("click",function(){
			if (this.flag=!this.flag)
			{
				me.div.style.background="red";
			}else{
				me.div.style.background="";
			}
			
		});
	}
}