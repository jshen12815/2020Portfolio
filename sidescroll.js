
//Js for side scroll on Homepage
// get array of pane objects and select last one
var page = document.getElementById('page');
var panes = page.getElementsByClassName('pane');
last_pane = panes[panes.length-1];

//get X value of last panel of first round and last panel
var endStart = document.getElementById('endStart')
var begStar = endStart.getBoundingClientRect().right;
var lastEnd = last_pane.getBoundingClientRect().right;


//get X value of first panel of second round
//var repeatBeg = document.getElementById('repeatBegin');
//var reStar = repeatBeg.getBoundingClientRect().left;
//var rStar = get



window.onscroll = function () {
        	  // Horizontal Scroll.
              //y=position of body
        	  var y = document.body.getBoundingClientRect().top;
        	  page.scrollLeft = -y;
        	  
        	  // Looping Scroll.
              //dummyx = negative (left position of lastpane +window.scrollY);
        	  //var diff = window.scrollY - dummy_x;
              var begEnd = lastEnd - window.innerWidth;
              var returnMid = begStar - window.innerWidth;

              if (window.scrollY == 0) {
                window.scrollTo(0,begStar);
              }
              else if (window.scrollY == begEnd) {
                window.scrollTo(0, returnMid);
              }

               document.getElementById('variables').innerHTML = 
               //page.offsetWidth;
               window.scrollY;

        	}
        	// Adjust the body height if the window resizes.
window.onresize = resize;
        	// Initial resize.
resize();


        	// Reset window-based vars
function resize() {
        	  var w = page.scrollWidth-window.innerWidth+window.innerHeight;
        	  document.body.style.height = w + 'px';
        	  
              //left position of pane in viewport + Yscrollposition
        	  //dummy_x = last_pane.getBoundingClientRect().left+window.scrollY;
        	//+window.scrollY
        	}


              //'rect:   '+ last_pane.getBoundingClientRect().left
             //  + "  scroll:  "+ window.scrollY + " y:  " + y 
              // +' dummy:  '+ dummy_x
              // + "  diff:  " + diff ;

             // document.getElementById('variables').innerHTML = 'dummy:'+ dummy_x+ "scroll:"+ window.scrollY+"dif:  "+diff;

              //scrollto: 
              /*if (diff > 0) {
                window.scrollTo(0, diff);
               
              }

              //scrollto (0, left of position of lastpane + window.scrollY)
              else if (window.scrollY == 0) {
                window.scrollTo(0, dummy_x);
               
              }
              //reverse scroll
              //else if()

*/
//offsetWidth(incl border) or clientWidth(no border)


//function vars() {
  //          document.getElementById('variables').innerHTML = 'dummy:'+ dummy_x+ "scroll:"+ window.scrollY;
//}
//getBoundingClientRect() returns the size of an element and its position relative to the viewport.
//This method returns a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height.
//bluehost: https://cpanel-box5549.bluehost.com/
//us: essiccg6 