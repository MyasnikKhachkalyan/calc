// let x = prompt();
// let aper = "";
// let tool = x.length-1;
// while(tool>=0){
// 	console.log(x[tool]);
// 	aper = aper + x[tool];
// 	tool--;
// }
// console.log(aper);



let x = document.getElementById("resultv2");
x.innerHTML = 0;

document.getElementById("clear").onclick = function(){
	x.innerHTML = 0;
}

document.getElementById("continue").onclick = function(){
	calculator();
}



function calculator(){


let y = prompt("welcome to my calculator. You can do +, -, *, /, !, ^ math operations");
collectinginArr();
computingResult();

function collectinginArr(){

let a = "";
let t = 0;
	arr = [];
let arrBra = [];
let arr1 = [];

// debugger; 	
while(t<y.length){
	a += y[t];
	if (y[t]==="("){		
			arr[arr.length] = arrBra;	
			arrBra[0] = y[t];
			t++;
			a = "";
			a +=y[t];	
			while(y[t-1]!==")"){
				if(isNaN(a)){
					arrBra[arrBra.length] = a.slice(0, a.length-1);
					arrBra[arrBra.length] = y[t];
					a = "";
					t++;
					a += y[t];
				}
				else{
					t++;	
					a += y[t];
				}
			}
		arr[arr.length] = y[t];
		t++;	
		a = "";	
		}
	else if (isNaN(a) && a !== "") {
		arr[arr.length] = arr1[t-1];
		arr[arr.length] = y[t];
		a = "";
		t++;		
	} 
	else {
		arr1[t] = a;
		if (y[t+1] === undefined) {
			arr[arr.length] = a; 
		}
		t++;
	}
}
console.log(arr);
}


function computingResult() {
	let result = 0; 
	for (var i = 0; i < arr.length; i++) {

		if(!Array.isArray(arr[i])){
			continue; 
		}
		else{	
			break;

		}
	}
}



// while(t<y.length){
// 	 a += y[t];
// 	if (isNaN(a)) {
// 		let c = Number((b[t-1]));
// 		let mathfu = y[t];
// 		if (mathfu === "!"){
// 			let res = 1;
// 			while(c>0){
// 			res = res*c;
// 			c--;
// 			}
// 			x.innerHTML = res;
// 			break;
// 		}
		 
// 		// if (isNaN(y.slice(t+1))) {
// 		// 	while(!isNaN(a))
// 				// write all in arrays, make difeerent functions 
// 		//  } 
// 		else {
// 			let d = Number(y.slice(t+1));
// 			//console.log(c,d,mathfu);
// 			if (mathfu === "+") {
// 				x.innerHTML = c + d;
// 			} 
// 			else if(mathfu === "-"){
// 				x.innerHTML = c - d;
// 			}
// 			else if(mathfu === "*"){
// 				x.innerHTML = c*d;
// 			}
// 			else if(mathfu === "/"){
// 				x.innerHTML = c/d;
// 			}
// 			else if(mathfu === "^"){
// 				let res = 1;
// 				while(d>0){
// 				res = res*c;
// 				d--;
// 				}
// 				x.innerHTML = res;
// 				break;
// 			} 
// 			break;
// 		}	
// 	} else {
// 		b[t] = a;
// 		t++;	
// 	} 
	
// }
// console.log(a);
// console.log(b);

}

calculator();
