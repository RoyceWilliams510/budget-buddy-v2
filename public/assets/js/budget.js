$(function() {
    $(".buyer").on("click",function(event){
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax("/api/items/"+id, {
            type: "PUT"
        }).then(
            function() {
            console.log("Updated item");
            location.reload();
            }
        );
    })
    $(".remover").on("click",function(event){
        event.preventDefault();
        var id = $(this).data("id");
        $.ajax("/api/items/"+id, {
            type: "DELETE"
        }).then(
            function() {
            console.log("Deleted item");
            location.reload();
            }
        );
    })

    $(".adder").on("submit", function(event) {
    event.preventDefault();
    var newItem = {
        item: $("#item-name").val().trim(),
        price: $("#item-price").val().trim(),
        purchased: false
    };
    console.log(newItem);
    $.ajax("/api/items", {
        type: "POST",
        data: newItem
    }).then(
        function() {
        console.log("created new item");
        location.reload();
        }
    );
    });
});
