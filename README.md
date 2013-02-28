ReverseGeocode
==============

Uses HTML5 Geolocation and Google's Geocoding API to retrieve data about a browsers location.

Arguments:

* street_number
* street
* city
* zip
* state
* state_short
* country
* country_short
* county
* all ( default )

Return values ( json ):

* locale ( a json object containing all of the above ) ( default )
* locale.arg_from_above

*Note: the locale object is stored in sessionStorage*

Required Scripts:

* jQuery
* locate.js (included)

**Example**

This example will retrieve the zip code only. The default is to return everything. View the default behavior in example.html.

```html
<script>
if (!sessionStorage.locale){
	locale_data.get('zip');
}
</script>
```
