$(document).ready(function() {
  var topographic = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 15,
    minZoom: 2,
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri'
  }),
  basic = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
    maxZoom: 15,
    minZoom: 2,
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
  });

  var cities = L.layerGroup();
  var provinces = L.layerGroup();
  var rivers = L.layerGroup();
  var mountains = L.layerGroup();
  var deserts = L.layerGroup();
  var silk = L.layerGroup();
  var walls = L.layerGroup();
  var steppes = L.layerGroup();

var citiesIcon = L.icon({
iconUrl: 'img/city.png',
iconSize: [10,10],
iconAnchor: [5,5],
popupAnchor: [0,-5]
});


//var Sites = L.layerGroup([stops]);


function provinces_style(feature) {
  return {
      fillColor: '#BDBDBD',
      weight: 1,
      opacity: 1,
      color: '#FFF',
      dashArray: '',
      fillOpacity: 0.3
  };
}

function deserts_style(feature) {
return {
  fillColor: '#000',
  weight: 1,
  opacity: 1,
  color: '#cc9966',
  dashArray: '',
  fillOpacity: 0.3
};
}

function steppes_style(feature) {
return {
  fillColor: '#e5f5f9',
  weight: 1,
  opacity: 1,
  color: '#99d8c9',
  dashArray: '',
  fillOpacity: 0.3
};
}

function mountains_style(feature) {
return {
  fillColor: '#efedf5',
  weight: 1,
  opacity: 1,
  color: '#bcbddc',
  dashArray: '',
  fillOpacity: 0.3
};
}


  var popup1 = L.popup({
    maxWidth : 1800
  });
  var popup2 =
  {
    'maxWidth': '500',
    'className' : 'another-popup' // classname for another popup
  }

  var popup_mountains =
  {
    'maxWidth': '500',
    'className' : 'mountains-popup' // classname for another popup
  }

  var popup_steppes =
  {
    'maxWidth': '500',
    'className' : 'steppes-popup' // classname for another popup
  }

  var popup_deserts =
  {
    'maxWidth': '500',
    'className' : 'deserts-popup' // classname for another popup
  }

  var popup_cities =
  {
    'maxWidth': '500',
    'className' : 'cities-popup' // classname for another popup
  }



var provinces = new L.GeoJSON.AJAX("data/china_provinces.json", {
    style: provinces_style,
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
          provinces.resetStyle(this);
      },
      layer.bindPopup('<p> '+feature.properties.name+'</p>')
      );
  }
}).addTo(provinces);

  var deserts = new L.GeoJSON.AJAX("data/deserts.geojson", {
    style: deserts_style,
    onEachFeature: function (feature, layer) {
      layer.on('mouseover', function () {
          this.setStyle({
            weight: 1,
            color: '#dfbf9f',
            dashArray: '',
            fillOpacity: 0.5
          });
      });
      layer.on('mouseout', function () {
          deserts.resetStyle(this);
      },
      layer.bindPopup('<p>'+feature.properties.Name+'</p>', popup_deserts)
      );
  }
}).addTo(deserts);

var steppes = new L.GeoJSON.AJAX("data/steppes.geojson", {
  style: steppes_style,
  onEachFeature: function (feature, layer) {
    layer.on('mouseover', function () {
        this.setStyle({
          weight: 1,
          color: '#2ca25f',
          dashArray: '',
          fillOpacity: 0.5
        });
    });
    layer.on('mouseout', function () {
        steppes.resetStyle(this);
    },
    layer.bindPopup('<p>'+feature.properties.Name+'</p>', popup_steppes)
    );
}
}).addTo(steppes);

var mountains = new L.GeoJSON.AJAX("data/mountains.geojson", {
  style: mountains_style,
  onEachFeature: function (feature, layer) {
    layer.on('mouseover', function () {
        this.setStyle({
          weight: 1,
          color: '#756bb1',
          dashArray: '',
          fillOpacity: 0.5
        });
    });
    layer.on('mouseout', function () {
        mountains.resetStyle(this);
    },
    layer.bindPopup('<p>'+feature.properties.Name+'</p>', popup_mountains)
    );
}
}).addTo(mountains);


  //var till = L.Proj.geoJson(wisc_glacier).addTo(till_units);

  var cities = new L.GeoJSON.AJAX("data/cities.geojson",{
    style : function(feature) {
      return {
        color: '#000',
        weight: 0.5
      }
    },
    pointToLayer: function(geoJsonPoint, latlng) {
      return L.marker(latlng,{
      icon: citiesIcon
    })
    },
    onEachFeature: function(feature, layer) {
      layer.on('click',function(e) {
        map.setView(e.latlng,4);
        $("#paneltext").html('<h3> '+feature.properties.Name+'</h3><p><img src=" '
                  +feature.properties.Image+'" alt="", width=92%></p><br><p>'
                    +feature.properties.Description+'</p><br><p>Previous time as capital city: ' +feature.properties.Capital+'</p>');
      }),
      layer.bindPopup('<h4>'+feature.properties.Name+'</h4><p>See panel below for more details</p>', popup2)
    }
  }).addTo(cities);

  var rivers = new L.GeoJSON.AJAX("data/rivers_k8O.json", {
    style : function(feature) {
      return {
        color: '#47a8d8',
        weight: 0.35
      }
    }
  }).addTo(rivers);

  var walls = new L.GeoJSON.AJAX("data/greatwall_9js.json", {
    style : function(feature) {
      return {
        color: 'red',
        weight: 0.35
      }
    }
  }).addTo(walls);

  var silkRoad = new L.GeoJSON.AJAX("data/silk_road_8h3.json", {
    style : function(feature) {
      return {
        color: '#8e8e5f',
        weight: 1
      }
    }
  }).addTo(silk);

  var map = L.map('map', {
    center: [35,106],
    zoom: 3,
    layers: [basic, provinces, cities, rivers]
  });
  //.setView([43.8,-88],10);

  //var till = L.Proj.geoJson(wisc_glacier).addTo(till_units);

  var baseLayers = {
    "Basic": basic,
    "Topographic":topographic
  };

  var overlays = {
  "Provinces": provinces,
  "Cities": cities,
  "Rivers": rivers,
  "Terrains": mountains,
  "Deserts": deserts,
  "Steppes": steppes,
  "Great Walls": walls,
  "Silk Road": silk
  };


L.control.layers(baseLayers, overlays).addTo(map);
});
