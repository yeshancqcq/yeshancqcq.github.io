$(document).ready(function() {
  var topographic2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 15,
    minZoom: 2,
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri'
  }),
  basic2 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 15,
    minZoom: 2,
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
  });

  var shang = L.layerGroup();
  var zhou = L.layerGroup();
  var qin = L.layerGroup();
  var han = L.layerGroup();
  var threekingdoms = L.layerGroup();
  var jin = L.layerGroup();
  var ns1 = L.layerGroup();
  var ns2 = L.layerGroup();
  var sui = L.layerGroup();
  var tang = L.layerGroup();
  var nsong = L.layerGroup();
  var ssong = L.layerGroup();
  var yuan = L.layerGroup();
  var ming = L.layerGroup();
  var qing = L.layerGroup();

var citiesIcon = L.icon({
iconUrl: 'img/city.png',
iconSize: [10,10],
iconAnchor: [5,5],
popupAnchor: [0,-5]
});


//var Sites = L.layerGroup([stops]);


function dynasties_style(feature) {
  return {
      fillColor: '#BDBDBD',
      weight: 1,
      opacity: 1,
      color: '#FFF',
      dashArray: '',
      fillOpacity: 0.3
  };
}


  var popupdy = L.popup({
    maxWidth : 1800
  });



var shang = new L.GeoJSON.AJAX("data/shang_territory_i8u.json", {
    style: dynasties_style,
    onEachFeature: function (feature, layer) {
      layer.on('mouseover', function () {
          this.setStyle({
            weight: 1,
            color: '#666',
            dashArray: '',
            fillOpacity: 0.8
          });
      });
      layer.on('mouseout', function () {
          shang.resetStyle(this);
          $("#paneltext").html('<h3>Shang Descriptions</p>');
      },
      layer.bindPopup('<p>Shang Dynasty</p>', pupupdy)
      );
  }
}).addTo(shang);


  var map2 = L.map('map', {
    center: [35,106],
    zoom: 3,
    layers: [basic2]
  });
  //.setView([43.8,-88],10);

  //var till = L.Proj.geoJson(wisc_glacier).addTo(till_units);

  var baseLayers2 = {
    "Basic": basic2
  };

  var overlays2 = {
  "Shang": shang,
  "Zhou": zhou
  };


L.control.layers(baseLayers2, overlays2).addTo(map2);
});
