let totalDonation = document.getElementById('totDont')

// ---   add user element
var but = document.getElementById('donBut')
var tab = document.getElementById('record')
var uoffer = document.getElementById('user-offer')
but.addEventListener('click', () => {
	var row =  document.createElement('tr')
	var dat = document.createElement('td')
	var dat1 = document.createElement('td')
	var dat2 = document.createElement('td')
	dat.innerText = '2/16/20'
	dat1.innerText = document.getElementById('user-offer').value
	dat2.innerText = document.getElementById('item-cost').value
	dat2.className = "val"
	row.appendChild(dat)
	row.appendChild(dat1)
	row.appendChild(dat2)
	tab.appendChild(row)
	
   let totarr = []
	let arr = Array.from(document.getElementsByClassName('val'))
arr.forEach(i =>  totarr.push(parseInt(i.innerText)));
totarr.reduce((a,b) => total = a + (2*b) );
totalDonation.innerText= total





	var marker =  new tt.Marker()
.setLngLat([long, lat])
.addTo(map);;


var p = new tt.Popup()
 .setHTML(uoffer.value)
marker.setPopup(p)


var log = document.getElementById('Log')
var item = document.createElement('li')
item.innerHTML = offer.value

document.getElementById('green').checked ? (item.style.color = "green") : (item.style.color= "black")
document.getElementById('red').checked ? (item.style.color = "red") : (item.style.color= "black")

log.appendChild(item)


})


// let arr = Array.from(document.getElementsByClassName('val'))
// arr.forEach(i =>  totarr.push(parseInt(i.innerText)));
// totarr.reduce((a,b) => total = a +b );
// totalDonation.innerText= total