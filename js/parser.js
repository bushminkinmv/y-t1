var t = '['+
'{"type":"Чартер",'+
'"number":"LH2999",'+
'"name":"Lufthansa",'+
'"logo":"--",'+
'"plane":"Boeing 747-400",'+
'"airport":"Москва",'+
'"time":"10-00",'+
'"status":"Посадка",'+
'"info":"--"},'+
'{"type":"Обычный",'+
'"number":"LH2999",'+
'"name":"Lufthansa",'+
'"logo":"--",'+
'"plane":"Boeing 747-400",'+
'"airport":"Москва",'+
'"time":"10-00",'+
'"status":"Посадка",'+
'"info":"--"},'+
'{"type":"Обычный",'+
'"number":"LH2999",'+
'"name":"Lufthansa",'+
'"logo":"--",'+
'"plane":"Boeing 747-400",'+
'"airport":"Москва",'+
'"time":"10-00",'+
'"status":"Посадка",'+
'"info":"--"}'+
']';

var flights = $.parseJSON(t);
flights.forEach(function(f) {
	$('.arrival tr:last').after('<tr class="table-info"> \
          <td data-title="ID">'+f.type+'</td> \
          <td data-title="Number">'+f.number+'</td> \
          <td data-title="Name">'+f.name+'</td> \
          <td data-title="Logo">'+f.logo+'</td> \
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

var flights = $.parseJSON(t);
flights.forEach(function(f) {
     $('.departure tr:last').after('<tr class="table-info"> \
          <td data-title="ID">'+f.type+'</td> \
          <td data-title="Number">'+f.number+'</td> \
          <td data-title="Name">'+f.name+'</td> \
          <td data-title="Logo">'+f.logo+'</td> \
          <td data-title="Plane">'+f.plane+'</td> \
          <td data-title="Airport">'+f.airport+'</td> \
          <td data-title="Time">'+f.time+'</td> \
          <td data-title="Status">'+f.status+'</td> \
          <td data-title="Info">'+f.info+'</td> \
    </tr> \
    <tr class="add-info"> \
          <td><div>Регистрация 12:00 - 22:33</div></td> \
          <td>Посадка 23:30 - 00:05</td> \
    </tr>');
});