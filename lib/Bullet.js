//객체 메뉴얼
//s: 이 총알이 어떤 div에 붙을지를 결정하세요
//posY:이 총알이 어느 y좌표에서부터 날아갈지 결정하세요
var Bullet=function(stage,x,y){
	//객체의 특징에 대한 값을 담고 있다고, 속성이라 한다.
	//property라 표기한다.
	this.span;
	this.x=x;
	this.y=y;
	this.stage=stage;
	this.st;//나의 셋타임아웃을 가리키기 위한 변수!!
	this.velX=10;//몇 픽셀씩 움직일지!!

	//객체안에 들어있는 함수는 메서드라 한다!!
	//method(방법) : 객체의 동작 방식을 결정하는 로직이 들어있기 때문..
	this.init=function(){
		this.span=document.createElement("span");
		this.span.innerText="●";
		this.span.style.color="red";
		this.span.style.position="absolute";
		this.span.style.left=this.x+"px";
		this.span.style.top=this.y+"px";

		this.span.style.width=10+"px"
		this.span.style.height=10+"px"
		stage.appendChild(this.span);

		this.move();
	     }
	this.hitTest=function(){
		for(i=0; i<enemyArray.length;i++){
			//적군과 부딪치면..

			//배열에 존재하는 img에 대해서만 즉 undefined가 아닌경우만
			if(enemyArray[i]!==undefined){
				var result=hitTest(this.span, enemyArray[i].img);
				if(result){
					//총알 죽이고
					this.stage.removeChild(this.span);
					clearTimeout(this.st);

					//적군 죽이고
					this.stage.removeChild(enemyArray[i].img);
					clearTimeout(enemyArray[i].st);
					delete enemyArray[i];
					return;
				}
			}
		}
	}
	this.move=function(){
		var me=this;
		this.x+=this.velX;
		this.span.style.left=this.x+"px";
		//stage를 벗어나면, 총알의 setTimeout 멈춰야 한다!!
		console.log(parseInt(this.stage.style.width));
		
		this.st=setTimeout(function(){
			me.move();
				},10);
		//적군과 충돌검사
		this.hitTest();
		//부딪치지 않고 화면밖으로 나가면...			
		if(parseInt(this.span.style.left)>parseInt(this.stage.style.width)){
				//alert("저 자살할게요"); setTimeout 멈추고, 화면에서 지우고!!
				this.stage.removeChild(this.span);
				clearTimeout(this.st);
				return;
			}
	}
}