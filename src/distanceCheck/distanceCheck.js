


function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1); 
    var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
    }

    function deg2rad(deg) {
    return deg * (Math.PI/180)
    }

       // The target longitude and latitude
    // var targetlong = doc.data().userLocation.long;                         
    // var targetlat = doc.data().userLocation.lat;
    // let distance = getDistanceFromLatLonInKm(targetlat, targetlong, userLocation.lat, userLocation.long)\

//    let distance = getDistanceFromLatLonInKm(1.11111,2.333333,1.332222,3.22222)
//    console.log(distance)
export default getDistanceFromLatLonInKm