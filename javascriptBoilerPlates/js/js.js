/**
 * file: js.js
 * purpose:mange firkanter og skabe elementer via createelement
 **/
console.log('JavaScript from js/js.js: up and running!');

let Many = function(howMany){

  let h = document.body.clientHeight;
  let w = document.body.clientWidth;

	for(let i=0; i<howMany; i++){
  
  	// create elements on the fly
    let newDiv = document.createElement("img");
    newDiv.classList.add("red");
    newDiv.src="../images/rose.png";
    newDiv.style.left = Math.floor( Math.random() * w) + 'px';
    newDiv.style.top = Math.floor( Math.random() * h) + 'px';
    newDiv.style.transform = 'rotate('
    + Math.floor( Math.random()*360) 
    + 'deg)';

		scene.appendChild(newDiv);
		console.log('Many exec...'); // test
  }
}


//klik.addEventListener("onclick", Many(2));

//document.getElementById("klik").onclick= Many(Math.floor(Math.random() * 3 ) + 1)

//Many(Math.floor(Math.random() * 10) + 1);
