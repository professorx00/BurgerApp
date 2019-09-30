let userid=0;
let username='';

$("#userLogin").on("click",function(event){
    event.preventDefault();
    username=$("#userName").val()
    $.ajax("/users/"+username,{
        type:"GET"
    }).then(function(data){
        userid=data[0].id;
    })
})


$("#addBurgerBtn").on("click",function(event){
    event.preventDefault();
    let burger = {burger: $("#addBurger").val(),userid: userid}
    $.ajax("/burger", {
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
    let id = {id: $(this).attr("data"),userid:userid}
    console.log(id);
    $.ajax("/burger",{
        type: "PUT",
        data: id
    }).then(function(){
        console.log("Get Schwitzy")
        location.reload();
    });
})