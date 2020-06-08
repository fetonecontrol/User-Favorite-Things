$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();

    let arr1 = [$("#Fav1").val(), $("#Fav2").val(), $("#Fav3").val()];
    let arr2 = [];
    arr2.push(arr1[1], arr1[0], arr1[2]);
    console.log(arr2);
    $("#user0").text(arr2[0]);
    $("#user1").text(arr2[1]);
    $("#user2").text(arr2[2]);
  });
});