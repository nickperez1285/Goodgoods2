ll = new tt.LngLat(-122.4149, 37.7736);
var map = tt.map({
		key: 'wbiWtsdGvwuDldQxwAYq2RpgrsdHGDSw',
		container: 'map',
		style: 'tomtom://vector/1/basic-main',
		dragPan: !isMobileOrTablet(),
		zoom: 12,
		center: ll
});
map.addControl(new tt.FullscreenControl());
map.addControl(new tt.NavigationControl());
map.boxZoom.enable()
map.addControl(new tt.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
trackUserLocation: true 


}));
// -------------------markers
var marker1 = new tt.Marker()
.setLngLat([-122.4149, 37.7736])
.addTo(map)

var marker2 = new tt.Marker()
.setLngLat([-122.4221, 37.6501])
.addTo(map);


 var marker3 = new tt.Marker({color:'green'})
.setLngLat([-122.4239, 37.7201])
.addTo(map); 

var marker4 = new tt.Marker({color:'red'})
.setLngLat([-122.4021, 37.6801])
.addTo(map);



// ------- popups set up 

var markerHeight = 25, markerRadius = 5, linearOffset = 25;
var popupOffsets = {
 'top': [0, 0],
  'top-left': [0,0],
  'top-right': [0,0],
  'bottom': [0, -markerHeight],
  'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
  'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
  'left': [markerRadius, (markerHeight - markerRadius) * -1],
  'right': [-markerRadius, (markerHeight - markerRadius) * -1]
  };
 var popup1 = new tt.Popup({offset: popupOffsets, className: 'my-class'})
 .setHTML("<p> a whole cheeseburger and fries  </p>")
// check later



var popup2  = new tt.Popup({offset: popupOffsets, className: 'my-class'})
 .setHTML("<p>I left 2 pieces of Round Table pizza  on the nearby table  </p>")

var popup3  = new tt.Popup({offset: popupOffsets, className: 'my-class'})
 .setHTML("<p> 2 gargbage bags of misc table scraps </p>")

var popup4  = new tt.Popup({offset: popupOffsets, className: 'my-class'})
 .setHTML("<p> 5 gallons of used cooking oil </p>")


marker1.setPopup(popup1)
marker2.setPopup(popup2)
marker3.setPopup(popup3)
marker4.setPopup(popup4)
// ----- add new item button input 




var button = document.getElementById('add-item')
var offer = document.getElementById('offer')

button.addEventListener("click" , function(){
	var marker =  new tt.Marker()
.setLngLat([long, lat])
.addTo(map);


var p = new tt.Popup()
 .setHTML(offer.value)
marker.setPopup(p)


var log = document.getElementById('Log')
var item = document.createElement('li')
item.innerHTML = offer.value

document.getElementById('green').checked ? (item.style.color = "green") : (item.style.color= "black")
document.getElementById('red').checked ? (item.style.color = "red") : (item.style.color= "black")

log.append(new Date())
log.appendChild(item)

})

// ---  HERE api geo psosotioning   HOW TO get LIVE positioning?




axios({
   headers:{
                    'Content-Type': 'application/json',
                    },
  method: 'post',
  url: 'https://pos.ls.hereapi.com/positioning/v1/locate?apiKey=J80-sty68eY6XOpf3EsjUHq7xOAhAH21gcTNcuGR9SY',
  data: {
  "gsm": [{
  "mcc": 262,
  "mnc": 1,
  "lac": 5126,
  "cid": 21857
  }]
}
})
.then((response) => {
  console.log(response.data.location);

}, (error) => {
  console.log(error);
});


//------ sum user donation array 

//----

