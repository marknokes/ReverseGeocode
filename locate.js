var locale_data  = ( function( window, $, undefined ){
	var getLocation = function(){
		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(getGoogleData);
		}
	};
	var getGoogleData = function(position){
		$.ajax({
			type: 'POST',
			url : 'get-location-data.php',
			data: {
				lat: position.coords.latitude,
				lng: position.coords.longitude,
				retrieve: data_to_get
			},
			dataType : 'json',
			success : function(locale_data){
				if (locale_data != '0'){
					// Do something with locale_data or locale_data.data_to_get
					$('p.json').html('locale_data: '+JSON.stringify(locale_data));
				} else {
					$('p.json').html('Sorry, no dice.');
				}
			},
			error : function(){
				$('p.json').html('Sorry, no dice');
			}
		});
	};
	var get = function(args){
		if ( args == 'undefined' || args == null || args == '' ){
			data_to_get = 'all';
		} else {
			data_to_get = args;
		}
		getLocation();
	}
	return { 
		get : get 
	};
}(window, jQuery));
