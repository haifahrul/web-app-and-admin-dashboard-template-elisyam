(function ($) {

    'use strict';
	
    // ------------------------------------------------------- //
    // Basic Map
    // ------------------------------------------------------ //	
	var mymap = L.map('basic-map').setView([48.8588, 2.3470], 10);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 18,
			attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
			id: 'mapbox.streets'
		}).addTo(mymap);
		
    // ------------------------------------------------------- //
    // Map Marker
    // ------------------------------------------------------ //
	var mymap = L.map('map-marker').setView([48.8588, 2.3470], 10);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
		id: 'mapbox.streets'
	}).addTo(mymap);

	L.marker([48.83698, 2.36162]).addTo(mymap)
		.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();


	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);
	
    // ------------------------------------------------------- //
    // Custom Marker
    // ------------------------------------------------------ //
	var map = L.map('custom-marker').setView([51.5, -0.09], 10);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
	}).addTo(map);

	var LeafIcon = L.Icon.extend({
		options: {
			shadowUrl: 'assets/img/plugins/leaflet/custom-marker-shadow.png',
			iconSize:     [46, 60],
			shadowSize:   [45, 22],
			iconAnchor:   [22, 94],
			shadowAnchor: [4, 62],
			popupAnchor:  [-3, -76]
		}
	});

	var greenIcon = new LeafIcon({iconUrl: 'assets/img/plugins/leaflet/custom-marker.png'});

	L.marker([51.5, -0.09], {icon: greenIcon}).addTo(map);
	
    // ------------------------------------------------------- //
    // Layers COntrol
    // ------------------------------------------------------ //
	var cities = L.layerGroup();

	L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
	L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
	L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
	L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);


	var mbAttr = '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
		mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

	var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
		streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});

	var map = L.map('layer-control', {
		center: [39.73, -104.99],
		zoom: 10,
		layers: [grayscale, cities]
	});

	var baseLayers = {
		"Grayscale": grayscale,
		"Streets": streets
	};

	var overlays = {
		"Cities": cities
	};

	L.control.layers(baseLayers, overlays).addTo(map);
	
})(jQuery);