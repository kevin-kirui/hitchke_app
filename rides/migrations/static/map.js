function initMap() {
    const myLatLng = { lat: -1.286389, lng: 36.817223 }; // Example coordinates (Nairobi, Kenya)
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Nairobi, Kenya",
    });
  }