// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devoured").on("click", function (event) {
        var id = $(this).data("id");
        var eaten = $(this).data("neweaten");

        var newDevoured = {
            devoured: eaten
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function () {
                console.log("changed devoured status to ", eaten);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#nom").val().trim(),
            devour: $("[name=devoured]:checked").val().trim()
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