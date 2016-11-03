$(document).ready(function(){ 

var fruit = ["mango", "orange", "banana", "pineapple", "watermelon"];

	function createButtons(){
    // empty out all the buttons
	$("#buttons").empty();
  // create var and add user input to fruit array
  var addFruit = $("#fruit-input").val();
  fruit.push(addFruit);
  // create all the buttons in the fruit array
	for (var i = 0; i < fruit.length; i++){ 		
		var newButton = $("<button>")
    newButton.addClass("newFruit");
    newButton.attr("data-fruit", fruit[i]);
    newButton.text(fruit[i]);

 		$("#buttons").append(newButton);

    console.log(buttons);

 	};
 };
  $("#addFruit").on("click", function(){
    createButtons();

    return false;
  });

 $(document).on('click', "button", function() {
     var p = $(this).data('fruit');
     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + p + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
      url: queryURL,
      method: 'GET'
   })
     .done(function(response) {
       	var results = response.data;

       for (var i = 0; i < results.length; i++) {
       	var gifDiv = $('<div class="item">');
 		var rating = results[i].rating;

         var p = $('<p>').text("Rating: " + rating);

         var fruitImage = $('<img>');
         fruitImage.attr('src', results[i].images.fixed_height.url);

         gifDiv.append(p);
         gifDiv.append(fruitImage);

         $("#gifsAppearHere").prepend(gifDiv);
                
       };
   	});
 });
});