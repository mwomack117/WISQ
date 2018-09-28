// JavaScript Document

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA-QfumrPujLAK_ZEySWiQjoLiIuPY3MQk",
  authDomain: "group-project-1-1f7d8.firebaseapp.com",
  databaseURL: "https://group-project-1-1f7d8.firebaseio.com",
  projectId: "group-project-1-1f7d8",
  storageBucket: "group-project-1-1f7d8.appspot.com",
  messagingSenderId: "357236023309"
};
firebase.initializeApp(config);

var database = firebase.database();

$(document).ready(function () {
  "use strict";


  $("#beef").on("click", function () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#images").empty();

      // For loop to return 15 images
      for (var i = 0; i < 15; i++) {

        var name = response.meals[i].strMeal;
        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);
        image.attr("alt", name);
        image.attr("data-name", name);

        /* ----- MODAL ----- */
        // create another ajax call to get more info from mealDb 
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            $("#ingredients").empty();
            $("#instructions").empty();

            // List Indredients in the modal
            var ingredient = response.meals[0];
            var infoText = $("#ingredients");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);
            infoText.append("<br>" + ingredient.strIngredient6);
            infoText.append("<br>" + ingredient.strIngredient7);
            infoText.append("<br>" + ingredient.strIngredient8);
            infoText.append("<br>" + ingredient.strIngredient9);

            // Directions
            var instructionText = $("#instructions");
            instructionText.append(response.meals[0].strInstructions);

          });

          // // Firebase // //
          var favButton = document.querySelector("#favIcon");
          favButton.onclick = function (event) {
            event.preventDefault();

            database.ref().push({
              name: name
            });
          };

          // Get the modal
          var modal = document.getElementById('foodModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("foodImg");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;

          // Get the <span> element that closes the modal
          var closeButton = document.getElementsByClassName("close")[0];

          // When the user clicks on <span> (x), close the modal
          closeButton.onclick = function () {
            modal.style.display = "none";
          };

        });
        /* ------------------------------------------------ */

        $("#images").append(image);

      }
    });
  });

  // Firebase for all buttons //
  // This function allows updates to page in real-time when the firebase database changes. 
  database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val().name);

    var itemKey = childSnapshot.key;
    // Create remove button to delete recipe
    var removeButton = $("<button class='btn btn-outline-light removeItem'> <i class='fas fa-times'></i> </button>");
    removeButton.attr('data-key', itemKey);

    var newTableRow = "<tr><td>" + childSnapshot.val().name + "</td><td>";
    $("tbody").append(removeButton, newTableRow);

  });

  // Function to delete recipe 
  $("tbody").on("click", ".removeItem", function () {
    event.preventDefault();
    var confirmDelete = confirm("Are you sure you want to delete this recipe?");

    if (confirmDelete) {
      database.ref().child($(this).attr('data-key')).remove();

    } else {
      return;
    }
    location.reload();
  });

  // --------------------------------------------------------------------------- //

  $("#chicken").on("click", function () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      $("#images").empty();

      // For loop to return 12 images
      for (var i = 0; i < 15; i++) {

        var name = response.meals[i].strMeal;
        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);
        image.attr("alt", name);
        image.attr("data-name", name);


        /* ----- MODAL ----- */
        // create another ajax call to get more info from mealDb 
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            $("#ingredients").empty();
            $("#instructions").empty();

            // List Indredients in the modal
            var ingredient = response.meals[0];
            var infoText = $("#ingredients");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);
            infoText.append("<br>" + ingredient.strIngredient6);
            infoText.append("<br>" + ingredient.strIngredient7);
            infoText.append("<br>" + ingredient.strIngredient8);
            infoText.append("<br>" + ingredient.strIngredient9);

            // Directions
            var instructionText = $("#instructions");
            instructionText.append(response.meals[0].strInstructions);

          });

          // // Firebase // //
          var favButton = document.querySelector("#favIcon");
          favButton.onclick = function (event) {
            event.preventDefault();

            database.ref().push({
              name: name
            });
          };

          // Get the modal
          var modal = document.getElementById('foodModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("foodImg");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;

          // Get the <span> element that closes the modal
          var closeButton = document.getElementsByClassName("close")[0];

          // When the user clicks on <span> (x), close the modal
          closeButton.onclick = function () {
            modal.style.display = "none";
          };

        });
        /* ------------------------------------------------ */

        $("#images").append(image);

      }
    });
  });

  // --------------------------------------------------------------------------- //

  $("#pork").on("click", function () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=pork";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      $("#images").empty();

      // For loop to return 12 images
      for (var i = 0; i < 15; i++) {

        var name = response.meals[i].strMeal;
        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);
        image.attr("alt", name);
        image.attr("data-name", name);

        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.meals[i]);
        console.log(save);

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.meals[0]);
            $("#ingredients").empty();
            $("#instructions").empty();

            // List indredients in the modal
            var ingredient = response.meals[0];
            var infoText = $("#ingredients");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);
            infoText.append("<br>" + ingredient.strIngredient6);
            infoText.append("<br>" + ingredient.strIngredient7);
            infoText.append("<br>" + ingredient.strIngredient8);
            infoText.append("<br>" + ingredient.strIngredient9);

            // Directions
            var instructionText = $("#instructions");
            instructionText.append(response.meals[0].strInstructions);

          });

          // // Firebase // //
          var favButton = document.querySelector("#favIcon");
          favButton.onclick = function (event) {
            event.preventDefault();

            database.ref().push({
              name: name
            });
          };

          // Get the modal
          var modal = document.getElementById('foodModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("foodImg");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  $("#seafood").on("click", function () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      $("#images").empty();

      // For loop to return 12 images
      for (var i = 0; i < 15; i++) {

        var name = response.meals[i].strMeal;
        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);
        image.attr("alt", name);
        image.attr("data-name", name);

        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.meals[i]);
        console.log(save);

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.meals[0]);
            $("#ingredients").empty();
            $("#instructions").empty();

            // List indredients in the modal
            var ingredient = response.meals[0];
            var infoText = $("#ingredients");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);
            infoText.append("<br>" + ingredient.strIngredient6);
            infoText.append("<br>" + ingredient.strIngredient7);
            infoText.append("<br>" + ingredient.strIngredient8);
            infoText.append("<br>" + ingredient.strIngredient9);

            // Directions
            var instructionText = $("#instructions");
            instructionText.append(response.meals[0].strInstructions);

          });

          // // Firebase // //
          var favButton = document.querySelector("#favIcon");
          favButton.onclick = function (event) {
            event.preventDefault();

            database.ref().push({
              name: name
            });
          };

          // Get the modal
          var modal = document.getElementById('foodModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("foodImg");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  $("#vegetarian").on("click", function () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 15; i++) {

        var name = response.meals[i].strMeal;
        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);
        image.attr("alt", name);
        image.attr("data-name", name);

        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.meals[i]);
        console.log(save);

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.meals[0]);
            $("#ingredients").empty();
            $("#instructions").empty();

            // List indredients in the modal
            var ingredient = response.meals[0];
            var infoText = $("#ingredients");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);
            infoText.append("<br>" + ingredient.strIngredient6);
            infoText.append("<br>" + ingredient.strIngredient7);
            infoText.append("<br>" + ingredient.strIngredient8);
            infoText.append("<br>" + ingredient.strIngredient9);

            // Directions
            var instructionText = $("#instructions");
            instructionText.append(response.meals[0].strInstructions);

          });

          // // Firebase // //
          var favButton = document.querySelector("#favIcon");
          favButton.onclick = function (event) {
            event.preventDefault();

            database.ref().push({
              name: name
            });
          };

          // Get the modal
          var modal = document.getElementById('foodModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("foodImg");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  $("#dessert").on("click", function () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=desert";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 15; i++) {

        var name = response.meals[i].strMeal;
        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);
        image.attr("alt", name);
        image.attr("data-name", name);

        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.meals[i]);
        console.log(save);

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.meals[0]);
            $("#ingredients").empty();
            $("#instructions").empty();

            // List indredients in the modal
            var ingredient = response.meals[0];
            var infoText = $("#ingredients");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);
            infoText.append("<br>" + ingredient.strIngredient6);
            infoText.append("<br>" + ingredient.strIngredient7);
            infoText.append("<br>" + ingredient.strIngredient8);
            infoText.append("<br>" + ingredient.strIngredient9);

            // Directions
            var instructionText = $("#instructions");
            instructionText.append(response.meals[0].strInstructions);

          });

          // // Firebase // //
          var favButton = document.querySelector("#favIcon");
          favButton.onclick = function (event) {
            event.preventDefault();

            database.ref().push({
              name: name
            });
          };

          // Get the modal
          var modal = document.getElementById('foodModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("foodImg");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  $("#gin").on("click", function () {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 15; i++) {

        var name = response.drinks[i].strDrink;
        var imgURL = response.drinks[i].strDrinkThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);
        image.attr("alt", name);
        image.attr("data-name", name);


        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.drinks[i]);
        console.log(save);

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.drinks[0]);
            $("#ingredients").empty();
            $("#instructions").empty();

            // List indredients in the modal
            var ingredient = response.drinks[0];
            var infoText = $("#ingredients");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);

            // Directions
            var instructionText = $("#instructions");
            instructionText.append(response.meals[0].strInstructions);

          });

          // // Firebase // //
          var favButton = document.querySelector("#favIcon");
          favButton.onclick = function (event) {
            event.preventDefault();

            database.ref().push({
              name: name
            });
          };

          // Get the modal
          var modal = document.getElementById('drinkModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("drinkImg");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  $("#rum").on("click", function () {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 15; i++) {

        var name = response.drinks[i].strDrink;
        var imgURL = response.drinks[i].strDrinkThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);
        image.attr("alt", name);
        image.attr("data-name", name);


        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.drinks[i]);
        console.log(save);

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.drinks[0]);
            $("#ingredients").empty();
            $("#instructions").empty();

            // List indredients in the modal
            var ingredient = response.drinks[0];
            var infoText = $("#ingredients");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);

            // Directions
            var instructionText = $("#instructions");
            instructionText.append(response.meals[0].strInstructions);

          });

          // // Firebase // //
          var favButton = document.querySelector("#favIcon");
          favButton.onclick = function (event) {
            event.preventDefault();

            database.ref().push({
              name: name
            });
          };

          // Get the modal
          var modal = document.getElementById('drinkModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("drinkImg");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  $("#scotch").on("click", function () {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 15; i++) {


        var name = response.drinks[i].strDrink;
        var imgURL = response.drinks[i].strDrinkThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);
        image.attr("alt", name);
        image.attr("data-name", name);


        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.drinks[i]);
        console.log(save);

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.drinks[0]);
            $("#ingredients").empty();
            $("#instructions").empty();

            // List indredients in the modal
            var ingredient = response.drinks[0];
            var infoText = $("#ingredients");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);

            // Directions
            var instructionText = $("#instructions");
            instructionText.append(response.meals[0].strInstructions);

          });

          // // Firebase // //
          var favButton = document.querySelector("#favIcon");
          favButton.onclick = function (event) {
            event.preventDefault();

            database.ref().push({
              name: name
            });
          };

          // Get the modal
          var modal = document.getElementById('drinkModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("drinkImg");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  $("#tequila").on("click", function () {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Tequila";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 15; i++) {

        var name = response.drinks[i].strDrink;
        var imgURL = response.drinks[i].strDrinkThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);
        image.attr("alt", name);
        image.attr("data-name", name);


        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.drinks[i]);
        console.log(save);

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.drinks[0]);
            $("#ingredients").empty();
            $("#instructions").empty();

            // List indredients in the modal
            var ingredient = response.drinks[0];
            var infoText = $("#ingredients");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);

            // Directions
            var instructionText = $("#instructions");
            instructionText.append(response.meals[0].strInstructions);

          });

          // // Firebase // //
          var favButton = document.querySelector("#favIcon");
          favButton.onclick = function (event) {
            event.preventDefault();

            database.ref().push({
              name: name
            });
          };

          // Get the modal
          var modal = document.getElementById('drinkModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("drinkImg");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  $("#vodka").on("click", function () {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 15; i++) {

        var name = response.drinks[i].strDrink;
        var imgURL = response.drinks[i].strDrinkThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);
        image.attr("alt", name);
        image.attr("data-name", name);


        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.drinks[i]);
        console.log(save);

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.drinks[0]);
            $("#ingredients").empty();
            $("#instructions").empty();

            // List indredients in the modal
            var ingredient = response.drinks[0];
            var infoText = $("#ingredients");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);

            // Directions
            var instructionText = $("#instructions");
            instructionText.append(response.meals[0].strInstructions);

          });

          // // Firebase // //
          var favButton = document.querySelector("#favIcon");
          favButton.onclick = function (event) {
            event.preventDefault();

            database.ref().push({
              name: name
            });
          };

          // Get the modal
          var modal = document.getElementById('drinkModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("drinkImg");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });

  $("#non-alc").on("click", function () {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 15; i++) {

        var name = response.drinks[i].strDrink;
        var imgURL = response.drinks[i].strDrinkThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);
        image.attr("alt", name);
        image.attr("data-name", name);


        // Create a button on modal that will save information to favorite.html when clicked
        var save = $("#save");
        save.attr("data-name", response.drinks[i]);
        console.log(save);

        /* ----- MODAL ----- */
        image.on("click", function () {
          var name = $(this).attr("data-name").split(" ").join("+").toLowerCase();

          // This query gives us more info that we can print to the modal (ingredients, instructions, etc..)
          var specificURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + name;

          $.ajax({
            url: specificURL,
            method: "GET"
          }).then(function (response) {
            console.log(response.drinks[0]);
            $("#ingredients").empty();
            $("#instructions").empty();

            // List indredients in the modal
            var ingredient = response.drinks[0];
            var infoText = $("#ingredients");
            infoText.append(ingredient.strIngredient1);
            infoText.append("<br>" + ingredient.strIngredient2);
            infoText.append("<br>" + ingredient.strIngredient3);
            infoText.append("<br>" + ingredient.strIngredient4);
            infoText.append("<br>" + ingredient.strIngredient5);

            // Directions
            var instructionText = $("#instructions");
            instructionText.append(response.meals[0].strInstructions);

          });

          // // Firebase // //
          var favButton = document.querySelector("#favIcon");
          favButton.onclick = function (event) {
            event.preventDefault();

            database.ref().push({
              name: name
            });
          };

          // Get the modal
          var modal = document.getElementById('drinkModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("drinkImg");
          var captionText = document.getElementById("caption");
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;

          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          // When the user clicks on <span> (x), close the modal
          span.onclick = function () {
            modal.style.display = "none";
          };
        });
        /* ---------- */

        $("#images").append(image);

      }
    });
  });
});