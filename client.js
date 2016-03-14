$(document).ready(function(){
  $like = 0;
  $.ajax({
    url: "http://localhost:3000/companies.json",
    datatype: "json",
    method: "get",
    error: function(){
      alert('Please reload!');
    },
    success:  function(data){
      $("#container").html("");
      $produts = "";
      for(var j=0; j<data.companies.length; j++){
        $("#container").append("<h1>"+data.companies[j].name+"  <a 'href='#' style='font-size: 16px'>LIKE (" + ($like) + ")</a></h1> ");
        for(var i=0; i<data.companies[j].products.length; i++){
          $products = data.companies[j].products[i].name+","
          $("#container").append("<span>"+$products+"</span>");
        }
      }
    }
  });

  $('#container').click('a',function(){
    //alert('hello');
    //e.preventDefault();
    $like = $like + 1;
    console.log($like);
    //return false;
  });

jQuery.fn.fadeDelay = function() {
 delay = 0;
 return this.each(function() {
  $(this).delay(delay).fadeIn(350);
  delay += 50;
 });
};

$("h1").each(function() {
  $(this).fadeDelay();
});
});
