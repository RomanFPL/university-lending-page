"use strict";
const initialize = () => {
    let myLatlng = new google.maps.LatLng(55.78367643143814, 37.71923783732045);
    let myOptions = {
        zoom: 16,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    let contentString = '<div id="content">Приймальна комисия</div>';
    let infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    let marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "м. Семеновская, ул. Измайловский вал, дом 2"
    });
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
};

export { initialize };