var t = '['+
'{"type":"Вылет",'+
'"number":"LH2999",'+
'"name":"Lufthansa",'+
'"logo":"http://aviakompaniya.info/sites/default/files/imagecache/icologobig/lufthansa_logo.png",'+
'"plane":"Boeing 747-400",'+
'"airport":"Москва",'+
'"time":"10-00",'+
'"status":"Посадка",'+
'"info":"--"},'+
'{"type":"Прилет",'+
'"number":"LH2999",'+
'"name":"Lufthansa",'+
'"logo":"http://aviakompaniya.info/sites/default/files/imagecache/icologobig/s7.gif",'+
'"plane":"Boeing 747-400",'+
'"airport":"Москва",'+
'"time":"10-00",'+
'"status":"Посадка",'+
'"info":"--"},'+
'{"type":"Прилет",'+
'"number":"LH2999",'+
'"name":"Lufthansa",'+
'"logo":"http://aviakompaniya.info/sites/default/files/imagecache/icologobig/singaporeair-logo.jpg",'+
'"plane":"Boeing 747-400",'+
'"airport":"Москва",'+
'"time":"10-00",'+
'"status":"Посадка",'+
'"info":"--"}'+
']';
function reloadData()
{
  $('#table tbody tr').remove();
  var flights = $.parseJSON(t);
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
