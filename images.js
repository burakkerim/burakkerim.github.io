
L.marker([36.684193, 27.376232]).bindPopup('<img src="gallery-sail/knidos.jpg" alt="knidos"/> <p>Knidos</p>').addTo(map);

L.marker([36.686822, 27.370380]).bindPopup('<img src="gallery-sail/knidos2.jpg" alt="knidos"/> <p>Knidos</p>').addTo(map);

L.marker([37.044204, 27.221146]).bindPopup('<img src="gallery-sail/IMG_0328.JPG" alt="gumusluk"/> <p></p>').addTo(map);

L.marker([37.004886, 27.217725]).bindPopup('<img src="gallery-sail/IMG_0241.JPG" alt="catalada"/> <p></p>').addTo(map);

L.marker([37.174711, 27.358454]).bindPopup('<img src="gallery-sail/IMG_0309.JPG" alt="gundogan"/> <p></p>').addTo(map);

L.marker([37.002997, 27.257917]).bindPopup('<img src="gallery-sail/csk.JPG" alt="cevatsakir"/> <p>cevat sakir</p>').addTo(map);

L.marker([37.381957, 26.736436]).bindPopup('<img src="gallery-sail/IMG_0737.JPG" alt="arki"/> <p></p>').addTo(map);

L.marker([37.309768, 26.547088]).bindPopup('<img src="gallery-sail/IMG_0768.JPG" alt="patmos"/> <p></p>').addTo(map);

L.marker([37.152614, 26.864711]).bindPopup('<img src="gallery-sail/IMG_0891.JPG" alt="leros"/> <p></p>').addTo(map);

L.marker([37.353295, 27.174975]).bindPopup('<img src="gallery-sail/IMG_0636.JPG" alt="didim"/> <p></p>').addTo(map);

L.marker([36.894389, 27.287717]).bindPopup('<img src="gallery-sail/DSC_0137.JPG" alt="kos"/> <p></p>').addTo(map);

L.marker([36.575567, 27.178454]).bindPopup('<img src="gallery-sail/nisiros.jpg" alt="nisiros"/> <p></p>').addTo(map);

L.marker([36.620068, 28.870307]).bindPopup('<img src="gallery-sail/IMG_5545.JPG" alt="agababa"/> <p></p>').addTo(map);

L.marker([36.801012, 28.529341]).bindPopup('<img src="gallery-sail/IMG_5800.JPG" alt="semirce"/> <p></p>').addTo(map);

L.marker([36.414775, 27.387856]).bindPopup('<img src="gallery-sail/DSC_0243.JPG" alt="tilos"/> <p></p>').addTo(map);

// L.marker([36.485656, 27.523024]).bindPopup('<img src="gallery-sail/yelken.jpg" alt="tilos-simi"/> <p></p>').addTo(map);

// L.marker([36.485656, 27.523024]).bindPopup('<video width="320" height="240" controls> <source src="gallery-sail/sail.mp4" type="video/mp4"> Your browser does not support the video tag. </video> <p></p>').addTo(map);

L.marker([36.485656, 27.523024]).bindPopup('<video width="300" height="240" controls> <source src="gallery-sail/sail.mkv"> Your browser does not support the video tag. </video> <p></p>').addTo(map);

L.marker([36.616193, 27.835193]).bindPopup('<img src="gallery-sail/DSC_0260.JPG" alt="simi"/> <p></p>').addTo(map);

L.marker([36.997531, 26.922802]).bindPopup('<img src="gallery-sail/DSC_1132.JPG" alt="telendos"/> <p></p>').addTo(map);

L.marker([36.850091, 28.274427]).bindPopup('<img src="gallery-sail/DSC_0346.JPG" alt="marmaris"/> <p></p>').addTo(map);

L.marker([36.720857, 28.644790]).bindPopup('<img src="gallery-sail/IMG_5699.JPG" alt="asıkoyu"/> <p></p>').addTo(map);

L.marker([37.384922, 27.256300]).bindPopup('<img src="gallery-sail/IMG_0607.JPG" alt="didim"/> <p></p>').addTo(map);

L.marker([37.530883, 27.275735]).bindPopup('<img src="gallery-sail/IMG_0425.JPG" alt="milet"/> <p></p>').addTo(map);

L.marker([37.659400, 27.296862]).bindPopup('<img src="gallery-sail/IMG_0547.JPG" alt="priene"/> <p></p>').addTo(map);

L.marker([37.938221, 27.341466]).bindPopup('<img src="gallery-sail/DSC_0265.JPG" alt="efes"/> <p></p>').addTo(map);


L.marker([36.643134, 28.893083]).bindPopup('<img src="gallery-sail/DSC_0063.jpg" alt="gobun"/> <p></p>').addTo(map);

L.marker([36.635286, 28.880440]).bindPopup('<img src="gallery-sail/IMG_6837.JPG" alt="martı"/> <p></p>').addTo(map);

L.marker([36.697212, 28.870791]).bindPopup('<img src="gallery-sail/IMG_6758.JPG" alt="tasyaka"/> <p>bedri rahmi</p>').addTo(map);

// L.marker([36.707227, 28.931913]).bindPopup('<img src="gallery-sail/DSC_0265.JPG" alt="yassıca"/> <p></p>').addTo(map);

L.marker([36.710765, 28.895406]).bindPopup('<img src="gallery-sail/DSC_1091.JPG" alt="boynuz"/> <p></p>').addTo(map);

L.marker([36.677343, 28.917303]).bindPopup('<img src="gallery-sail/DSC_1058-ANIMATION.gif" alt="tersane"/> <p></p>').addTo(map);

L.marker([36.573392, 29.085761]).bindPopup('<img src="gallery-sail/IMG_1103.JPG" alt="kayakoy"/> <p></p>').addTo(map);

L.marker([36.623643, 29.102794]).bindPopup('<img src="gallery-sail/DSC_0293.JPG" alt="fethiye"/> <p></p>').addTo(map);



document.querySelector(".leaflet-popup-pane").addEventListener("load", function (event) {
  var tagName = event.target.tagName,
      popup = map._popup; // Currently open popup, if any.

  if (tagName === "IMG" && popup) {
    popup.update();
  }
}, true); // Capture the load event, because it does not bubble.
