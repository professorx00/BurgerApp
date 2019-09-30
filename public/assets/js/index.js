
$("#addBurgerBtn").on("click",function(event){
    event.preventDefault();
    let burger = {burger: $("#addBurger").val()}
    $.ajax("/", {
        type: "POST",
        data: burger
      }).then(function() {
          console.log("WUBDUB DUB");
          location.reload();
        });
})

$(".devourBurger").on("click",function(event){
    event.preventDefault();
    console.log("clicking")
    let id = {id: $(this).attr("data")}
    console.log(id);
    $.ajax("/",{
        type: "PUT",
        data: id
    }).then(function(){
        console.log("Get Schwitzy")
        location.reload();
    });
})