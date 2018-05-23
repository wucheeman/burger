// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // code NOT TESTED!!!
  // $(".devour").on("click", function(event) {
  //   var burger_name = $(this).data("burger_name");

  //   // Send the PUT request.
  //   $.ajax("/api/burgers/devour" + id, {
  //     type: "PUT",
  //     data: burger_name
  //   }).then(
  //     function() {
  //       console.log("devoured", newSleep);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
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