// Create new burger
// ===============================================
$(function() {
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

  //Eat burger
  $(".change-devoured").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    //   Send the PUT Request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
      location.reload();
    });
  });


  //Throw away burger
  $(".throw-away").on("click", function(event) {
    event.preventDefault();
    var id2 = $(".throw-away").attr("data-id");
    $.ajax("/api/burgers/" + id2, {
      type: "DELETE"
    }).then(function() {
      //reload page to get the updated list
      location.reload();
    });
  });
});
