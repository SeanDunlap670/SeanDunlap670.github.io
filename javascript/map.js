





// Creates variables for map boundry function

function displaymap (){

  var mymap = L.map('mapid', {fullscreenControl: true }) .setView([27.174961, 78.042385], 13, {minZoom: 2, maxZoom: 15} );
  // sets the map base layer by provided link, adds to mapp
  L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mymap);



var marker1 = L.marker ([27.174961, 78.042385]).addTo(mymap);{
marker1.bindPopup(
"<h1>Taj Mahal</h1>." + "</br>"
+ "<img src='images/taj-mahal.jpg' height= '150px' width= '150px' />" + "</br>"
+ "<p> The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ-/;[4] Arabic: تاج محل‎, lit. 'Place or Position of the Crown', Hindi: ताज महल, lit. 'Crown of the Palaces' [taːdʒ ˈmɛːɦ(ə)l])[5] is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. The tomb is the centrepiece of a 17-hectare (42-acre) complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall.</P>" );
};

var marker2 = L.marker ([40.334245, 116.477652]).addTo(mymap);{
marker2.bindPopup("<h1>Great Wall of China</h1>"+ "</br>" + "<img src='images/Great-Wall-of-China.jpg' height= '150px' width= '150px' />" + "</br>"
+ "<p> The Great Wall of China  萬里長城 is the collective name of a series of fortification systems generally built across the historical northern borders of China to protect and consolidate territories of Chinese states and empires against various nomadic groups of the steppe and their polities. Several walls were being built from as early as the 7th century BC by ancient Chinese states;[2] selective stretches were later joined together by Qin Shi Huang (220–206 BC), the first Emperor of China. Little of the Qin wall remains. Later on, many successive dynasties have built and maintained multiple stretches of border walls. The most well-known sections of the wall were built by the Ming dynasty (1368–1644).</p>");
};

var marker3 = L.marker ([30.328611, 35.441944]).addTo(mymap); {
marker3.bindPopup(
"<h1>Great Pyramids of Giza </h1>"
+ "<img src='images/pyramidsof-giza.jpg' height= '150px' width= '150px' />" + "</br>"
+ "<p> The Giza pyramid complex, also called the Giza Necropolis, is the site on the Giza Plateau in Egypt that includes the Great Pyramid of Giza, the Pyramid of Khafre, and the Pyramid of Menkaure, along with their associated pyramid complexes and the Great Sphinx of Giza. All were built during the Fourth Dynasty of the Old Kingdom of Ancient Egypt. The site also includes several cemeteries and the remains of a workers' village.</p>");
};

var marker4 = L.marker ([-22.951389, -43.2108334]).addTo(mymap);{
marker4.bindPopup(
"<h1>Christ the Redeemer</b>" + "</h1>" + "<img src='images/Christ-the-Redeemer-Statue.jpg' height= '150px' width= '150px' />" + "</br>"
+ "<p> Christ the Redeemer (Portuguese: Cristo Redentor, standard Brazilian Portuguese: [ˈkɾistu ʁedẽˈtoʁ], local pronunciation: [ˈkɾiɕtŭ̻ xe̞dẽ̞ˈtoɦ]) is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot. Romanian sculptor Gheorghe Leonida fashioned the face. Constructed between 1922 and 1931, the statue is 30 metres (98 ft) high, excluding its 8-metre (26 ft) pedestal. The arms stretch 28 metres (92 ft) wide</p>");
};

var marker5 = L.marker ([-13.163056, -72.545556]).addTo(mymap); {
marker5.bindPopup("<h1>Machu Picchu</h1>"+ "</br>" + "<img src='images/Machu-Picchu-.jpg' height= '150px' width= '150px' />" + "</br>"
+ "<p> Machu Picchu (English: /ˈmɑːtʃuː ˈpiːktʃuː/[1][2][3][4][5][6] or /ˈpiːtʃuː/, Spanish: [ˈmatʃu ˈpi(k)tʃu];[9] Quechua: Machu Pikchu[10] [ˈmatʃʊ ˈpɪktʃʊ]) is a 15th-century Inca citadel, located in the Eastern Cordillera of southern Peru, on a 2,430-metre (7,970 ft) mountain ridge.[11][12] It is located in the Cusco Region, Urubamba Province, Machupicchu District,[13] above the Sacred Valley, which is 80 kilometres (50 mi) northwest of Cuzco and through which the Urubamba River flows, cutting through the Cordillera and creating a canyon with a tropical mountain climate.</p>");
};

var marker6 = L.marker ([20.682778, -88.569167]).addTo(mymap); {
marker6.bindPopup("<h1>Chichen Itza</b>" + "</h1>" + "<img src='images/Chichen-Itza.jpg' height= '150px' width= '150px' />" + "</br>"
+ "<p> Chichen Itza was a major focal point in the Northern Maya Lowlands from the Late Classic (c. AD 600–900) through the Terminal Classic (c. AD 800–900) and into the early portion of the Postclassic period (c. AD 900–1200). The site exhibits a multitude of architectural styles, reminiscent of styles seen in central Mexico and of the Puuc and Chenes styles of the Northern Maya lowlands. The presence of central Mexican styles was once thought to have been representative of direct migration or even conquest from central Mexico, but most contemporary interpretations view the presence of these non-Maya styles more as the result of cultural diffusion.</p>");
};

var marker7 = L.marker ([41.890169, 12.492269]).addTo(mymap);{
marker7.bindPopup("<h1>The Roman Colosseum</h1>" + "</br>" + "<img src='images/colosseum.jpg' height= '150px' width= '150px' />" + "</br>"
+ "<p> The Colosseum or Coliseum (/ˌkɒləˈsiːəm/ KOL-ə-SEE-əm), also known as the Flavian Amphitheatre , is an oval amphitheatre in the centre of the city of Rome, Italy. Built of travertine limestone, tuff (volcanic rock), and brick-faced concrete, it was the largest amphitheatre ever built at the time and held 50,000 spectators. The Colosseum is situated just east of the Roman Forum. Construction began under the emperor Vespasian in AD 72 and was completed in AD 80 under his successor and heir, Titus</p>");
};



  /*
  [27.174961, 78.042385]
  [40.334245, 116.477652],
  [30.328611, 35.441944],
  [-22.951389, -43.2108334],
  [-13.163056, -72.545556],
  [20.682778, -88.569167],
  [41.890169, 12.492269]

    ]).addTo(mymap)
*/
/*
 L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',{
   maxZoom: 18,
   id: 'mapbox.mapbox-traffic-v1',
   accessToken: mapbox_access_token
 }).addTo(mymap);
*/
/*
   // Creates a map variable marker point
   var marker = L.marker ([51.5, -0.09]).addTo(mymap);
   // creates var circle
   var circle = L.circle([ 51.508, -0.11], {
     color: 'red',
     fillColor: '#f03',
     fillOpacity:0.5,
     radius: 500
   }).addTo(mymap);
   // creates variable polygon three points
   var polygon = L.polygon ([
   [51.509, -0.08],
   [51.503, -0.06],
   [51.51, -0.047]
 ]).addTo(mymap);
 // binds popup window to point marker with message
 marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
 // changes zoom on click for marker
 marker.on('click',function(e){
   mymap.setView(e.latlng, 14);
 });
 // binds popup to circle with message
 circle.bindPopup("I am a circle.");
 // changes zoom on click for circle
 circle.on('click', function(e){
   mymap.setView(e.latlng, 13);
 });
 // binds popup to polygon with message
 polygon.bindPopup("I am a polygon.");
  // changes zoom on click for polygon
 polygon.on('click', function(e){
   mymap.setView(e.latlng, 13);
 });
 // creates a variable : polyline : three points
 var polyline =L.polyline([
 [51.506, -0.08],
 [51.502, -0.06],
 [51.507, -0.047]
], {color: 'red'}).addTo(mymap);

*/



// creates the variable Zoom veiwer, defines the variable with a function
var ZoomViewer = L.Control.extend({
 onAdd: function(){
   var gauge = L.DomUtil.create('div');
   gauge.style.width = '200px';
   gauge.style.background = 'rgba(255,255,255,0.5)';
   gauge.style.textAlign= 'left';
   mymap.on('zoomstart zoom zoomend', function(ev){
     gauge.innerHTML = 'Zoom level: ' + mymap.getZoom();
   })
   return gauge;
 }
});
// calls the zoomVeiwer function into the map
(new ZoomViewer).addTo(mymap);
// sets the initial zoom of the map
mymap.setView([0, 0], 2 );
mymap.option.maxZoom





// JS for corrdinate point display on click
 L.Control.Coordinates = L.Control.extend({
	options: {
		position: 'bottomleft',
		latitudeText: 'lat.',
		longitudeText: 'lon.',
		promptText: 'Press Ctrl+C to copy coordinates',
		precision: 4
	},

	initialize: function(options)
	{
		L.Control.prototype.initialize.call(this, options);
	},

	onAdd: function(map)
	{
		var className = 'leaflet-control-coordinates',
			that = this,
			container = this._container = L.DomUtil.create('div', className);
		this.visible = false;

			L.DomUtil.addClass(container, 'hidden');


		L.DomEvent.disableClickPropagation(container);

		this._addText(container, map);

		L.DomEvent.addListener(container, 'click', function() {
			var lat = L.DomUtil.get(that._lat),
				lng = L.DomUtil.get(that._lng),
				latTextLen = this.options.latitudeText.length + 1,
				lngTextLen = this.options.longitudeText.length + 1,
				latTextIndex = lat.textContent.indexOf(this.options.latitudeText) + latTextLen,
				lngTextIndex = lng.textContent.indexOf(this.options.longitudeText) + lngTextLen,
				latCoordinate = lat.textContent.substr(latTextIndex),
				lngCoordinate = lng.textContent.substr(lngTextIndex);

			window.prompt(this.options.promptText, latCoordinate + ' ' + lngCoordinate);
    	}, this);

		return container;
	},

	_addText: function(container, context)
	{
		this._lat = L.DomUtil.create('span', 'leaflet-control-coordinates-lat' , container),
		this._lng = L.DomUtil.create('span', 'leaflet-control-coordinates-lng' , container);

		return container;
	},

	/**
	 * This method should be called when user clicks the map.
	 * @param event object
	 */
	setCoordinates: function(obj)
	{
		if (!this.visible) {
			L.DomUtil.removeClass(this._container, 'hidden');
		}

		if (obj.latlng) {
			L.DomUtil.get(this._lat).innerHTML = '<strong>' + this.options.latitudeText + ':</strong> ' + obj.latlng.lat.toFixed(this.options.precision).toString();
			L.DomUtil.get(this._lng).innerHTML = '<strong>' + this.options.longitudeText + ':</strong> ' + obj.latlng.lng.toFixed(this.options.precision).toString();
		}
	}
});




// Function creating graticule overlay

/*
 Graticule plugin for Leaflet powered maps.
*/
L.Graticule = L.GeoJSON.extend({

    options: {
        style: {
            color: '#333',
            weight: 1
        },
        interval: 20
    },

    initialize: function (options) {
        L.Util.setOptions(this, options);
        this._layers = {};

        if (this.options.sphere) {
            this.addData(this._getFrame());
        } else {
            this.addData(this._getGraticule());
        }
    },

    _getFrame: function() {
        return { "type": "Polygon",
          "coordinates": [
              this._getMeridian(-180).concat(this._getMeridian(180).reverse())
          ]
        };
    },

    _getGraticule: function () {
        var features = [], interval = this.options.interval;

        // Meridians
        for (var lng = 0; lng <= 180; lng = lng + interval) {
            features.push(this._getFeature(this._getMeridian(lng), {
                "name": (lng) ? lng.toString() + "° E" : "Prime meridian"
            }));
            if (lng !== 0) {
                features.push(this._getFeature(this._getMeridian(-lng), {
                    "name": lng.toString() + "° W"
                }));
            }
        }

        // Parallels
        for (var lat = 0; lat <= 90; lat = lat + interval) {
            features.push(this._getFeature(this._getParallel(lat), {
                "name": (lat) ? lat.toString() + "° N" : "Equator"
            }));
            if (lat !== 0) {
                features.push(this._getFeature(this._getParallel(-lat), {
                    "name": lat.toString() + "° S"
                }));
            }
        }

        return {
            "type": "FeatureCollection",
            "features": features
        };
    },

    _getMeridian: function (lng) {
        lng = this._lngFix(lng);
        var coords = [];
        for (var lat = -90; lat <= 90; lat++) {
            coords.push([lng, lat]);
        }
        return coords;
    },

    _getParallel: function (lat) {
        var coords = [];
        for (var lng = -180; lng <= 180; lng++) {
            coords.push([this._lngFix(lng), lat]);
        }
        return coords;
    },

    _getFeature: function (coords, prop) {
        return {
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": coords
            },
            "properties": prop
        };
    },

    _lngFix: function (lng) {
        if (lng >= 180) return 179.999999;
        if (lng <= -180) return -179.999999;
        return lng;
    }

});

L.graticule = function (options) {
    return new L.Graticule(options);
};

// calls the function for the graticule lat/log overlay
L.graticule().addTo(mymap);


var southWest = L.latLng(-89.98155760646617, -180),
northEast = L.latLng(89.99346179538875, 180);
var bounds = L.latLngBounds(southWest, northEast);


// set the extent of map panning to edge of world
mymap.setMaxBounds(bounds);
mymap.on('drag', function() {
   mymap.panInsideBounds(bounds, { animate: false });
});


// call the function for Corrdinate on click
var c = new L.Control.Coordinates();
c.addTo(mymap);
mymap.on('click', function(e) {
c.setCoordinates(e);
});


};
