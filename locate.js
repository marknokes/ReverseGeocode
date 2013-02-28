var locale_data  = ( function( window, $, undefined ){
	var get = function(args){
		if ( args == 'undefined' || args == null || args == '' ){
			data_to_get = 'all';
		} else {
			data_to_get = args;
		}
		getLocation();
	}
	var getLocation = function(){
		if (navigator.geolocation){
			navigator.geolocation.getCurrentPosition(getGoogleData , geoError , {enableHighAccuracy: true});
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
			success : function(locale_data_response){
				if (locale_data_response != '0'){
					sessionStorage.locale = JSON.stringify(locale_data_response);
					// Success
					location.reload();
				} else {
					sessionStorage.locale = 'undefined';
				}
			},
			error : function(){
				sessionStorage.locale = 'undefined';
			}
		});
	};
	var geoError = function(){
		sessionStorage.locale = 'undefined';
	};
	return { 
		get : get
	};
}(window, jQuery));
if ('undefined' != sessionStorage.locale){
	var locale = JSON.parse(sessionStorage.locale);
}


