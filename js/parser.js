function reloadData()
{
  $('#table tbody tr').remove();
  var flights = $.getJSON("data.json");
  var showArrival = $(".active-chechboxa").length === 1;
  var showDeparture = $(".active-chechboxd").length === 1;
  flights.forEach(function(f) {
    if(f.type === "Прилет" && showArrival || f.type === "Вылет" && showDeparture )
  	$('.arrival tbody').append('<tr class="table-info"> \
            <td data-title="ID">'+f.type+'</td> \
            <td data-title="Number">'+f.number+'</td> \
            <td data-title="Name">'+f.name+'</td> \
            <td data-title="Logo"><img height="30px" src="'+f.logo+'"></td> \
            <td data-title="Plane">'+f.plane+'</td> \
            <td data-title="Airport">'+f.airport+'</td> \
            <td data-title="Time">'+f.time+'</td> \
            <td data-title="Status">'+f.status+'</td> \
            <td data-title="Info">'+f.info+'</td> \
      </tr> \
      <tr class="add-info"> \
            <td><div>Регистрация </br> 12:00 - 22:33</div></td> \
            <td>Посадка </br> 23:30 - 00:05</td> \
            <td colspan="7"></td> \
      </tr>');
  });

  $(".table-info").click(function() {
  if ($(this).hasClass("active-l1")) {
    $(".active-l2").fadeOut("fast", function(){
      $(".active-l2").removeClass("active-l2");
      $(".active-l1").removeClass("active-l1");
    });
  }
  else {
    $(".active-l2").fadeOut("fast");
    $(".active-l1").removeClass("active-l1");
    $(".active-l2").removeClass("active-l2");
    $(this).addClass("active-l1");
    $(this).next("tr").fadeIn("fast", function (){
      $(this).addClass("active-l2");
    });
  }
});

}
// var flights = $.parseJSON(t);
// flights.forEach(function(f) {
//      $('.departure tr:last').after('<tr class="table-info"> \
//           <td data-title="ID">'+f.type+'</td> \
//           <td data-title="Number">'+f.number+'</td> \
//           <td data-title="Name">'+f.name+'</td> \
//           <td data-title="Logo">'+f.logo+'</td> \
//           <td data-title="Plane">'+f.plane+'</td> \
//           <td data-title="Airport">'+f.airport+'</td> \
//           <td data-title="Time">'+f.time+'</td> \
//           <td data-title="Status">'+f.status+'</td> \
//           <td data-title="Info">'+f.info+'</td> \
//     </tr> \
//     <tr class="add-info"> \
//           <td><div>Регистрация 12:00 - 22:33</div></td> \
//           <td>Посадка 23:30 - 00:05</td> \
//     </tr>');
// });
