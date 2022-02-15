'use strict';

$(document).ready(function () {
    console.log("Hello there!");

    //PLace map on web page
    mapboxgl.accessToken = mapboxApiKey;

    const map = new mapboxgl.Map(
        {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-83.37747694511727, 33.959023510866395],
            zoom: 15
        }
    )

    //place a zoom and rotate
    var zoomWheel = map.scrollZoom.setZoomRate(1 / 25);
    var rotate = map.dragRotate

    //marker
    var marker = new mapboxgl.Marker({
        color: '#002c36',
    })
        .setLngLat([-83.37747694511727, 33.959023510866395])
        .addTo(map)

    // pop up
    var harrisPopUp = new mapboxgl.Popup()
        .setLngLat([-83.37747694511727, 33.959023510866395])
        .setHTML('<h1 class="pop"><em>Harris of Athens</em></h1>')
        .addTo(map)

})