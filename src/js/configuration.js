var configuration = {
	"dataSource": "json/regioni.json",
	"mapOptions": {
		"center": {lat: 41.913355, lng: 12.484130},
		"zoom": 6,
		"scrollwheel": false,
		"gestureHandling": 'cooperative',
    "mapTypeControlOptions": {
	    "style": google.maps.MapTypeControlStyle.DEFAULT  
	  },
    "styles": [
	    {
	    	"featureType": "all",
	    	"elementType": "labels",
	    	"stylers": [
	    		{ "visibility": "off" }
	    	]
	    }
    ]
	},
	"styles": {
		"feature": {
			"fillColor": "#3367D6",
			"fillColorSelected": "#4285F4",
			"strokeWeight": 0.8,
			"strokeColor": '#ffffff',
			"fillOpacity": 1
		}
	}
}