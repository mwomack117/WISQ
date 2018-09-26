// JavaScript Document

$(document).ready(function () {
  "use strict";
  
  $("#beef").on("click", function () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=beef";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      // console.log(response);
      $("#images").empty();

      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);

        /* ----- MODAL ----- */
        image.on("click", function () {
          // Get the modal
          var modal = document.getElementById('foodModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("modalImg");
          var captionText = document.getElementById("modalText");
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

  $("#chicken").on("click", function () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      // console.log(response);
      $("#images").empty();

      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);

        /* ----- MODAL ----- */
        image.on("click", function () {
          // Get the modal
          var modal = document.getElementById('foodModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("modalImg");
          var captionText = document.getElementById("modalText");
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

  $("#pork").on("click", function () {
    var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=pork";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      // console.log(response);
      $("#images").empty();

      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);

        /* ----- MODAL ----- */
        image.on("click", function () {
          // Get the modal
          var modal = document.getElementById('foodModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("modalImg");
          var captionText = document.getElementById("modalText");
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
      // console.log(response);
      $("#images").empty();

      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);

        /* ----- MODAL ----- */
        image.on("click", function () {
          // Get the modal
          var modal = document.getElementById('foodModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("modalImg");
          var captionText = document.getElementById("modalText");
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
      // console.log(response);
      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);

        /* ----- MODAL ----- */
        image.on("click", function () {
          // Get the modal
          var modal = document.getElementById('foodModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("modalImg");
          var captionText = document.getElementById("modalText");
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
      // console.log(response);
      $("#images").empty();
      // For loop to return 12 images
      for (var i = 0; i < 12; i++) {

        var imgURL = response.meals[i].strMealThumb;
        var image = $("<img>").attr("src", imgURL).height(200).width(200);

        /* ----- MODAL ----- */
        image.on("click", function () {
          // Get the modal
          var modal = document.getElementById('foodModal');
          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var modalImg = document.getElementById("modalImg");
          var captionText = document.getElementById("modalText");
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
