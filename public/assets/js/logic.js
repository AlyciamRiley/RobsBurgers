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


  var newDevoured = $(".change-devoured").attr("data-newdevoured");
  var id = $(".change-devoured").attr("data-id");

  $(".change-devoured").on("click", function(event) {

    console.log(newDevoured);
    event.preventDefault();
    if (newDevoured == true) {
      eatBurger();
    } else {
      deleteBurger();
    }
  });

  function eatBurger() {
    var newDevouredState = {
      devoured: newDevoured
    };
    console.log("new devoured", newDevoured);

    //   Send the PUT Request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(function() {
      console.log("changed devoured to ", newDevoured);
      // location.reload();
    });
  }

  // Throw Away Burger
  function deleteBurger() {

    // Send the delete request
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted burger!", id);
      //reload page to get the updated list
      // location.reload();
    });
  }
});
