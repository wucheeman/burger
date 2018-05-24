// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();
    // var burger_name = $(this).data("burger_name");
    var burgerToEat = {
      burger_name: $("#bte").val().trim(),
    };
    console.log(burgerToEat);
    // Send the PUT request.
    $.ajax("/api/burgers/devour", {
      type: "PUT",
      data: burgerToEat
    }).then(
      function() {
        console.log("devoured", burgerToEat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#nb").val().trim(),
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


});