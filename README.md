
`kapusons-ui-map` is a Kapusons implementation of interactive maps through GeoJson data. It uses [Google Maps API](https://developers.google.com/maps/). It allows you to easily render polygons over a google map.   

## Features

### GeoJson data
`kapusons-ui-map` comes with two json libraries for italy regions and for all the world's states until 2015.

## Installation

### Setup development environment

```
git clone git@github.com:KapusonsSRL/kapusons-ui-map.git
npm install
bower install
gulp serve
```

### As a Bower package

```
bower install kapusons-ui-map --save
```

## Implementation

### Usage
  * Javascript file loads in GeoJSON data consisting of polygon coordinates, markers (items), and supplmentary information 
  * Canvas highlights region and activates an information window (map-tail) when mouse coordinates are inside regional polygon
  * Clicking on a specific region opens an information window that shows the GeoJSON items. Further clicking leads to more informational windows.


### Heroku-Hosted Example Application
[Kapusons Google Maps Hosted on Heroku](https://kapusons-ui-map.herokuapp.com/)

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

## To do list

* Improve mobile visualization
* Replace google maps infowindow component with a custom one
* Improve the configuration
* Improve the documentation
