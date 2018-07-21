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

  $(".change-devoured").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    console.log("ID", id)
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
        devoured: newDevoured
    };
    console.log("new devoured", newDevoured)

  //   Send the PUT Request
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
    }).then(
        function() {
            console.log("changed devoured to ", newDevoured);
            // location.reload();
        }
    );
});


$(".throw-away").on("click", function(event) {
  event.preventDefault();
  var id = $(".throw-away").attr("data-id");
  $.ajax("/api/burgers/" + id, {
    type: "DELETE"
  }).then(function() {
    console.log("deleted burger!", id);
    //reload page to get the updated list
    // 
})
});

});