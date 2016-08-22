function like(){
  try {
    document.getElementsByClassName('coreSpriteHeartOpen')[0].click(); // like button class
    document.getElementsByClassName('_de018 coreSpriteRightPaginationArrow')[0].click(); // right arrow class
  } catch (e) {
	// if picture liked just goint to the next picture
    document.getElementsByClassName('_de018 coreSpriteRightPaginationArrow')[0].click(); // right arrow class
  }
}

var i = 1;
var time = Math.floor((Math.random() * 5000) + 1000);
var liker = setInterval(function(){
   like();
   console.log(i);
   i = i+1;
 }, 15000-time);