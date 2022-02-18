'use strict';

$(document).ready(function () {
    console.log("Hello there!");

    //PLace map on web page
    mapboxgl.accessToken = mapboxApiKey;

    const map = new mapboxgl.Map(
        {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-75.72560527974049, 45.75144829393112],
            zoom: 15
        }
    )
//corporate home marker - geocode
    geocode('1 Antares Dr., Suite 400\n' +
        'Ottawa ON, K2E 8C4', mapboxApiKey).then(function (results){
        var canada = new mapboxgl.Marker({
            color: '#5097a5'
        })
            .setLngLat(results)
            .addTo(map)

        new mapboxgl.Popup()
            .setLngLat(results)
            .setHTML('<h3><em>Harris Computer Systems</em></h3>')
            .addTo(map)

        // marker.setPopup(canada)
    })




    //place a zoom and rotate
    var zoomWheel = map.scrollZoom.setZoomRate(1 / 25);
    var rotate = map.dragRotate.enable();

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

    marker.setPopup(harrisPopUp);

    // fly to
    map.flyTo({center: [-83.37747694511727, 33.959023510866395]})

})