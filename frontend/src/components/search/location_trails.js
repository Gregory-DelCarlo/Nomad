// import { googleAPIKey, placeType } from '../../helper/google_api'

// const latitude = 37.773972;
// const longitude = -122.431297;

// let radius = 4 * 1000;

// const url =
// ‘https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +

// latitude +
// ‘, ’ +
//     longitude +
// ‘& radius=’ +
//     radius +
// //  ‘&type=’ +
// //  placeType +
// ‘& key=’ +
//     googleAPIKey;

// fetch(url)
//     .then(res => {
//         return res.json();
//     })
//     .then(res => {
//         for (let googlePlace of res.results) {
//             var place = {};
//             var myLat = googlePlace.geometry.location.lat;
//             var myLong = googlePlace.geometry.location.lng;
//             var coordinate = {
//                 latitude: myLat,
//                 longitude: myLong,
//             };
//             place[‘placeTypes’] = googlePlace.types;
//             place[‘coordinate’] = coordinate;
//             place[‘placeId’] = googlePlace.place_id;
//             place[‘placeName’] = googlePlace.name;
//             places.push(place);
//         }
//         console.log(
//             The places around San Francisco, CA, USA: ‘ +
//         places.map(nearbyPlaces => nearbyPlaces.placeName),
//         );
//     })
//     .catch(error => {
//         console.log(error);
//     });
// });

