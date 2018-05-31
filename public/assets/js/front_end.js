// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  
  $(".devour").on("click", function(event) {
    // TODO delete?
    // $(".devour").on("submit", function(event) {
    event.preventDefault();
    console.log('got here');
    var burgerID = $(this).data("id");
    // TODO: delete?
    // var burgerToEat = {
    //   burger_name: $("#bte").val().trim(),
    // };
    console.log(burgerID);
    // Send the PUT request.
    $.ajax("/api/burgers/" + burgerID, {
      type: "PUT",
      data: burgerID
    }).then(
      function() {
        console.log("devoured burger with ID: ", burgerID);
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
    // console.log('length is ' + newBurger.burger_name.length);
    if (newBurger.burger_name.length > 25) {
      alert('Burger names must not be longer than 25 characters');
      return;
    } 
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