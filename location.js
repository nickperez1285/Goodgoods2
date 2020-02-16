          
  let lat = 37.7501
  let long = -122.4221
          
      if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
              console.log(position.coords.latitude , position.coords.longitude);
              lat = position.coords.latitude
              long = position.coords.longitude
          });
      } else {
          console.error("Geolocation is not supported by this browser!");
      }
     