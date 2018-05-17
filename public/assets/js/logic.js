// Create new burger
// ===============================================
$(function() {

    //Eat burger
    $(".change-devoured").on("click", function(event) {
      event.preventDefault();
      console.log("onclick is working!");
      var id = $(this).data("id");
      var newDevoured = $(this).data("newDevoured");

      var newDevouredState = {
          devoured: newDevoured
      };

    //   Send the PUT Request
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
      }).then(
          function() {
              console.log("changed devoured to ", newDevoured);
              location.reload();
          }
      );
  });


    //Create new burger
  $("#submit").on("click", function(event) {
    event.preventDefault();
    
    //Create new burger
    var newBurger = {
      burger_name: $("#ca")
        .val()
        .trim(),
      devoured: 0
    };

    //Send the POST Request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger!");
      location.reload();
    });
  });










});
