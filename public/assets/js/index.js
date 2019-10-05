function reload(){
    $.ajax("/",{
        type:"GET"
    })
}

$("#addBurgerBtn").on("click", function (event) {
    event.preventDefault();
    let burger = { burger: $("#addBurger").val() }
    $.ajax("/", {
        type: "POST",
        data: burger
    }).then(function () {
        console.log("WUBDUB DUB");
        reload();
    });
})

$(".devourBurger").on("click", function (event) {
    event.preventDefault();
    console.log("clicking")
    let id = { id: $(this).attr("data") }
    console.log(id);
    $.ajax("/", {
        type: "PUT",
        data: id
    }).then(function () {
        console.log("Get Schwitzy")
        $('#imageTitle').attr("src", '/assets/img/burgerAnimatedsm.gif');
        setTimeout(()=>{reload();},2200)
        
    });
})