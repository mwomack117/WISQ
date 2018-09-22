// JavaScript Document

$(document).ready(function () {
  "use strict";

  // SIDE NAV
  //$('.sidenav').sidenav();

  // OnClick functions to search for recipes by category. Results are returned as images
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
      for (var i = 0; i < 12; i++) {

        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);

        /* ----- MODAL ----- */
        image.on("click", function () {
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
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
        /* ------------------------------------------------ */

        $("#images").append(image);

      }
    });
  });
  
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
      for (var i = 0; i < 12; i++) {

        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);

        /* ----- MODAL ----- */
        image.on("click", function () {
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
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
      for (var i = 0; i < 12; i++) {

        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);

        /* ----- MODAL ----- */
        image.on("click", function () {
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
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
      for (var i = 0; i < 12; i++) {

        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);

        /* ----- MODAL ----- */
        image.on("click", function () {
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
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
      for (var i = 0; i < 12; i++) {

        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);

        /* ----- MODAL ----- */
        image.on("click", function () {
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
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
      for (var i = 0; i < 12; i++) {

        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(250).width(250);

        /* ----- MODAL ----- */
        image.on("click", function () {
          // Get the modal
          var modal = document.getElementById('myModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("img01");
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
