$(".jumbotron").hover(function(){

    // Let's load the page up with a new color each time
    
    // First let's create a shuffle function
    // Fisher-Yates: We B Shufflin
    
    function shuffle(array) {
        var counter = array.length, temp, index;
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }
	
    // Here we define a few nice colors to play with. Subdued, almost pastel tones.
    colors = [
            "#B8F1E3", // fave seafoam
            "#FFAC9F", // some sorta salmon
            "#B6AFE2", // periwinkle
            "#A5DFCF", // desaturated sea blue
            "#FFC9AE" // peachy ^__^
            ];
		
    // Shuffl'em
    colors = shuffle(colors);
            
    // Jquery UI animate 
    $(".jumbotron").animate({
        backgroundColor: colors[Math.floor((Math.random() * 10) + 1)]
        // Choose the first element, post-shuffle
    }, 2000 );
})

