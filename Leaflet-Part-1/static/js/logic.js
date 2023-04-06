// var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

var myMap = L.map("map", {
    center: [
        38.54, -121.75
    ],
    zoom: 5,
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

d3.json(url).then(function(data) {
    createFeatures(data.features);
    console.log(data);
});

function colorDepth(depth) {
// ['#0F0','#4F0','#8F0','#CF0','#FF0','#FC0','#FA0','#F80','#F40','#F20']
    if (depth < 10) {
        return '#0F0';
    } else if (depth < 20) {
        return '#4F0';
    } else if (depth < 30) {
        return '#8F0';
    } else if (depth < 40) {
        return '#CF0';
    } else if (depth < 50) {
        return '#FF0';
    } else if (depth < 60) {
        return '#FC0';
    } else if (depth < 80) {
        return '#FA0';
    } else if (depth < 150) {
        return '#F80';
    } else if (depth < 250) {
        return '#F40';
    } else {
        return '#F20';
    }
}
    
    
function createFeatures(earthquakeData){

    function onEachFeature1(feature, layer) {
        var timestamp = new Date(feature.properties.time);

        L.circle([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
            color: "black",
            weight: 1,
            fillColor: colorDepth(feature.geometry.coordinates[2]),
            fillOpacity: 0.75,
            radius: formatSize(feature.properties.mag)
            })
        .bindPopup("<h3>" + timestamp.toISOString() + "</h3><hr /><h2>M " + feature.properties.mag + " • " + feature.properties.place + "<hr />Depth: " + feature.geometry.coordinates[2] + "㎞</h2>")
        .addTo(myMap);
    }
        
    var earthquakes = L.geoJson(earthquakeData, {
        onEachFeature: onEachFeature1
    });

    
}

/*
    Theis function formatSize() is added as a safeguard in case an earthquake is of magnitude less than or equal to 0.75.
    Without this, magnitudes >0 and <=0.75 are very small making them difficult to see and click on.
    Negative magnitude earthquakes also *REALLY* mess up the data points without this function, which is the main reason it exists.
    See https://www.usgs.gov/faqs/how-can-earthquake-have-negative-magnitude for more on negative magnitude earthquakes!
*/
function formatSize(m) {
    if (m > 0.75) {
        return (m * 10000);
    } else {
        return 7500;
    }
}

var legend = L.control({position: 'bottomright'});
    legend.onAdd = function (myMap) {
        var div = L.DomUtil.create('div', 'info legend');
        var labels = ['10− ㎞', '10-20 ㎞', '20-30 ㎞', '30-40 ㎞', '40-50 ㎞', '50-60 ㎞', '60-80 ㎞', '80-150 ㎞', '150-250 ㎞', '250+ ㎞'];
        var colors = ['#0F0','#4F0','#8F0','#CF0','#FF0','#FC0','#FA0','#F80','#F40','#F20']

        for (var i = 0; i < labels.length; i++) {
            div.innerHTML += "<div style =\"background-color: " + colors[i] + "\"> " + labels[i] + " </div><br />";
        }
        return div;
    };
    
legend.addTo(myMap);    