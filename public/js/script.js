const socket = io();

if(navigator.geolocation){
    navigator.geolocation.watchPosition((position) => {
        const {latitude, longitude} = position.coords;
        socket.emit('send-location', {latitude, longitude});
        // console.log('Location sent to server', {latitude, longitude});
    },
    (error) => {
        console.error('Error getting location', error);
    },
    {
        enableHighAccuracy : true,
        timeout : 5000,
        maximumAge : 0
    })
}


const map = L.map('map').setView([0, 0], 16);
const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Data © OpenStreetMap',
}).addTo(map);

let markers = {};

socket.on('receive-location', (data) => {
    const {id, latitude, longitude} = data;
    // console.log('Received location from server', data);
    map.setView([latitude, longitude]);

    if(markers[id]){
        markers[id].setLatLng([latitude, longitude]);
    }else{
        markers[id] = L.marker([latitude, longitude]).addTo(map);
    }

})

socket.on('user-disconnected', (id) => {
    console.log('User disconnected', id);
    if(markers[id]){
        map.removeLayer(markers[id]);
        delete markers[id]; 
    }
})