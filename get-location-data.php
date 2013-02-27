<?php

$data_to_get = $_POST['retrieve'];

$curl   = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => 'http://maps.googleapis.com/maps/api/geocode/json?latlng='.$_POST['lat'].','.$_POST['lng'].'&sensor=false',
	CURLOPT_RETURNTRANSFER => true
));

$result = curl_exec($curl);

curl_close($curl);

$address_data = json_decode($result);

for ($i = 0; $i < sizeof( $address_data->results ); $i++)
{
	$address_components[$i] = $address_data->results[$i]->address_components;
}

$location = array();

foreach( $address_components as $component )
{
	foreach( $component as $component_object )
	{
		$location[$component_object->types[0]] = $component_object;
	}
}

if ( sizeof( $location ) > 0 )
{
	$location_data = array(
		'street_number' => $location['street_number']->long_name,
		'street' 		=> $location['route']->long_name,
		'city' 			=> $location['locality']->long_name,
		'zip' 			=> $location['postal_code']->long_name,
		'state' 		=> $location['administrative_area_level_1']->long_name,
		'state_short' 	=> $location['administrative_area_level_1']->short_name,
		'country'		=> $location['country']->long_name,
		'country_short'	=> $location['country']->short_name,
		'county' 		=> $location['administrative_area_level_2']->long_name
	);
	
	if ( $data_to_get == 'all' )
		$data = $location_data;
	else
		$data = array( $data_to_get => $location_data[$data_to_get] );
}
else
{
	$data = 0;
}
echo json_encode($data);
die;
	
