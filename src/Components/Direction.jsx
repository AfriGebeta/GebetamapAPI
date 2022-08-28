

import { MapContainer, TileLayer, Polyline , useMapEvents , Marker , Popup , Polygon , FeatureGroup , EditControl} from 'react-leaflet';
import { useState } from 'react';
import red from './red.png';
import L from 'leaflet';
import green from './green.png';
const default_latitude = 9.02151;
const default_longitude = 38.80115;


function AddMarkerToClick() {


  const [rmarker, redMarker] = useState([]);
  const [gmarker, greenMarker] = useState([]);
  
  const [pos, setPos] = useState([]);
  const [l1, setL1] = useState("");
  const [lo1, setLO1] = useState("");

  const RedIcon = L.icon({
  iconUrl:  require('./red.png'), 
  iconRetinaUrl:  require('./red.png'),  
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,  
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon'
  });
  

const GreenIcon = L.icon({
  iconUrl: require('./green.png') , 
  iconRetinaUrl:  require('./green.png') ,  
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,  
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon'
  });

  const map = useMapEvents({
    click(e) {
      const newMarker = e.latlng
      if (l1 == "") {  
          setL1(newMarker.lat);
          setLO1(newMarker.lng);
          let _gmarker = [];
          _gmarker.push(e.latlng);
          greenMarker(_gmarker);
      }
      else
      {

        var startTime = performance.now()
        const url = "https://mapapi.gebeta.app/api/v1/route/driving/direction/?la1=" + l1 + "&lo1=" + lo1 + "&la2=" + newMarker.lat + "&lo2=" + newMarker.lng
        
        fetch(url)
          .then(response =>  response.json() )
          .then(data => {
            console.log("Printing the data here")
            console.log(data)
            setPos(data.direction);
          });
        let _rmarker = [];
        _rmarker.push(e.latlng);
        redMarker(_rmarker);
        
        var endTime = performance.now()

        console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)
        setL1("");
        setLO1("");
      }     
    },
  })
  const blabal = [[9.0209339, 38.804987], [9.0209339, 38.804987], [9.0206708, 38.8044643], [9.0205022, 38.8041264], [9.0204362, 38.8039818], 
[9.0204051, 38.8039], [9.0203838, 38.8038192], [9.0203733, 38.8037143], [9.0203712, 38.803634], [9.0203797, 38.803483], [9.0203978, 38.803373], [9.0204357, 38.8032406], [9.0204653, 38.8031732], [9.0206561, 38.8028339], [9.0207779, 38.8026341], [9.0208638, 38.8024919], [9.0210909, 38.8021008], [9.0210909, 38.8021008]]
    
        return (
    
      <div>
          {rmarker.map(marker => 
        <Marker position={marker} icon={ RedIcon }>
          <Popup>Marker is at {marker}</Popup>
        </Marker>
      )}

        {gmarker.map(marker => 
        <Marker position={marker} icon={ GreenIcon }>
          <Popup>Marker is at {marker}</Popup>
        </Marker>
      )}

    
            <Polyline positions={pos} color="red" /> 

      </div>
    
    
  )
}


function Direction() {

  
  return (
   <div className="leaflet-container">
      <MapContainer center={[default_latitude, default_longitude]} zoom={18}>
          <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <AddMarkerToClick/>
    </MapContainer>
   </div>
      

        

  );
}

export default Direction;



