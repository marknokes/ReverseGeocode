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

* locale_data.street_number
* locale_data.street
* locale_data.city
* locale_data.zip
* locale_data.state
* locale_data.state_short
* locale_data.country
* locale_data.country_short
* locale_data.county
* locale_data ( a json object containing all of the above ) ( default )

Required Scripts:

* jQuery
* locate.js (included)

**Example**

This example will retrieve the zip code only. The default is to return everything. View the default behavior in example.html.

```html
<script>locale_data.get('zip');</script>
```
