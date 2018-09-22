
// OnClick functions to search for recipes by category 
// Results are returned as images

//chicken
$("#chicken").on("click", function () {
  var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    $("#images").empty();
    
    // For loop to return 12 images
    for (let i = 0; i < 12; i++) {

      var imgURL = response.meals[i].strMealThumb;
      var image = $("<img>").attr("src", imgURL).height(250).width(250);

      $("#images").append(image);

    };
  });
});

// Beef
$("#beef").on("click", function () {
  var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    $("#images").empty();

    // For loop to return 12 images
    for (let i = 0; i < 12; i++) {

      var imgURL = response.meals[i].strMealThumb;
      var image = $("<img>").attr("src", imgURL).height(250).width(250);

      $("#images").append(image);

    };
  });
});

// Pork
$("#pork").on("click", function () {
  var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=pork";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    $("#images").empty();

    // For loop to return 12 images
    for (let i = 0; i < 12; i++) {

      var imgURL = response.meals[i].strMealThumb;
      var image = $("<img>").attr("src", imgURL).height(250).width(250);

      $("#images").append(image);

    };
  });
});

// Seafood
$("#seafood").on("click", function () {
  var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    $("#images").empty();

    // For loop to return 12 images
    for (let i = 0; i < 12; i++) {

      var imgURL = response.meals[i].strMealThumb;
      var image = $("<img>").attr("src", imgURL).height(250).width(250);

      $("#images").append(image);

    };
  });
});

// Vegetarian
$("#vegetarian").on("click", function () {
  var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    $("#images").empty();
    // For loop to return 12 images
    for (let i = 0; i < 12; i++) {

      var imgURL = response.meals[i].strMealThumb;
      var image = $("<img>").attr("src", imgURL).height(250).width(250);

      $("#images").append(image);

    };
  });
});

// Dessert
$("#dessert").on("click", function () {
  var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=desert";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    $("#images").empty();
    // For loop to return 12 images
    for (let i = 0; i < 12; i++) {

      var imgURL = response.meals[i].strMealThumb;
      var image = $("<img>").attr("src", imgURL).height(250).width(250);

      $("#images").append(image);

    };
  });
});

