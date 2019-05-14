// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");
        if ($(this).data("devoured") === 0){
           var devoured = true
        }else devoured = false
        // var devoured = $(this).data("devoured");
        console.log(devoured);
        console.log(id);
        var newDevoured = {
            devoured: devoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function () {
                console.log("changed devoured status to ", devoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#nom").val(),
            devoured: $("[name=devoured]:checked").val()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger on the menu");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
