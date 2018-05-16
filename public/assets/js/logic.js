// Create new burger
// ===============================================
$(function() { 

$("#submit").on("click", function(event) {
    
    event.preventDefault();
    
    var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: 0,
        
    };

    //Send the POST Request
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function() {
            console.log("created new burger!");
            // location.reload();
        }
    );
});

});