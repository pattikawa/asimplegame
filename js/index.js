//Global variables
			var width = 40; 
            var height = 40;	
			var numberOfFaces=3 
			
            /*function random_top() {
					var x;
					x = Math.floor(Math.random() * 20);
					return 20 * x + 100;
					}
			
			function random_left() {
					var x;
					x = Math.floor(Math.random() * 20);
					return 20 * x + 5;
					}*/
						
            
            
			function random_top() {
					var x;
					x = Math.floor(Math.random() * 20);
					return 20 * x + 100;
					}
			
			function random_left() {
					var x;
					x = Math.floor(Math.random() * 20);
					return 20 * x + 5;
					}
						
		function click_face(){					
				var theBody =	document.getElementsByTagName("body")[0];
				var extra_child= document.getElementsByTagName("img")[numberOfFaces-1];
                var theClick =	document.getElementsByTagName("body")[0];
				
			extra_child.onclick = function nextLevel(event){
            event.stopPropagation();
            numberOfFaces += 1;
            show_pattern();
            //audio
            audioElement.play();
			};
		
			theBody.onclick = function gameOver() {
              //audio
            audioElement2.play();
            alert("Game Over!\nYou got in total " + (numberOfFaces*2-1) + " smiling faces :-)!\nReload the page to try again.");
			theBody.onclick = null;
            extra_child.onclick = null;
                       
           
            }; 
		}
			
		function generateFaces() {	
				// delete all 
			var list = document.getElementById("leftSide");
			while (list.hasChildNodes()) {   
						list.removeChild(list.firstChild);
					}
				
					var list2 = document.getElementById("rightSide");
					while (list2.hasChildNodes()) {   
						list2.removeChild(list2.firstChild);
					}
				
				// generate 5 faces to the left
			var i=0
			while(i<numberOfFaces){		
				var top_position = random_top(); 
				var left_position =random_left(); 
				var this_div = document.createElement("img");     
				var leftSide = document.getElementById("leftSide");
				var rightSide = document.getElementById("rightSide");
						this_div.setAttribute("src", "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png");  

                        //add css class
                        this_div.classList.add('this_div');
                        
						this_div.style.top = top_position + "px";
						this_div.style.left = left_position + "px";
						this_div.style.width = width + "px";
						this_div.style.height = height + "px";
						leftSide.appendChild(this_div);
					i++
			}	
					var theRightSide = document.getElementById("leftSide");
					var the_clone= theRightSide.cloneNode(true);
					document.getElementById("rightSide").appendChild(the_clone);
                   
					
					var last_child= document.getElementsByTagName("img")[numberOfFaces*2-1];
					last_child.remove(last_child);	
                   

		}
        
        

        
	
			function show_pattern(){
				generateFaces(numberOfFaces);	
				click_face(numberOfFaces);
					
				}
                
               
                
                        
        // Bubble Sounds "Taira Komori's Japanese Free Sound Effects": http://taira-komori.jpn.org/freesounden.html 
var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'http://taira-komori.jpn.org/sound_os/attack01/shuriken_ninja_knifes3.mp3');
  
var audioElement2 = document.createElement('audio');
  audioElement2.setAttribute('src', 'http://taira-komori.jpn.org/sound_os/sfmagic01/pipipi.mp3');

$.get();

audioElement.addEventListener("load", function() {
  audioElement.play();
}, true);

audioElement2.addEventListener("load", function() {
  audioElement.play();
}, true);


     
                
                