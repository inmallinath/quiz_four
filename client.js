$(document).ready(function(){
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
        $("#container").append("<h1>"+data.companies[j].name+"</h1>");
        for(var i=0; i<data.companies[j].products.length; i++){
          $products = data.companies[j].products[i].name+","
          $("#container").append("<span>"+$products+"</span>");
        }
      }
    }
  });
});
