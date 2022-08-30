import { MapContainer, TileLayer, Polyline , useMapEvents , Marker , Popup , Polygon , FeatureGroup , EditControl} from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
const default_latitude = 9.02151;
const default_longitude = 38.80115;



function AddMarkerToClick(props) {

  const [rmarker, redMarker] = useState([]);
  const [gmarker, greenMarker] = useState([]);
  const [sets , Setter] = useState(false)
  const [l1, setL1] = useState("");
  const [lo1, setLO1] = useState("");
  const [endPoints, setEndPoints] = useState([])
  const [pos , setPos] = useState([])

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
      if (props.start && props.stop != true) { 
          setL1(newMarker.lat);
          setLO1(newMarker.lng);  
          let _gmarker = [];
          _gmarker.push(e.latlng);
          greenMarker(_gmarker);
      }
      
      if (props.stop && props.start != true) {
        
        rmarker.push(e.latlng);
        Setter(!sets)
         
      }
    
    },
  })

  if (props.calculate) {
    let endpoints = []
    for (let i = 0; i < rmarker.length; i++){
      let en = rmarker[i].lat +"/"+ rmarker[i].lng;
      endpoints.push(en)
    }
    console.log(endpoints)
    const url = "https://mapapi.gebeta.app/api/v1/route/driving/onm/?la1=" + l1 + "&lo1=" + lo1 + "&json=" +  endpoints
        fetch(url)
          .then(response =>  response.json() )
          .then(data => {setPos(data.directions)});
      
      
  }
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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

      
       {pos.map(position => 
         <Polyline positions={position.direction} color={ getRandomColor()} />
      )}
       
      
      </div>
    
    
  )
}


function OneToMany() {

  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [calculate, setCalculate] = useState(false);

  
  return (

    <div>
      <button style={{ background : start ? "green" : "red"}} onClick={() => { setStart(!start); }}>Start node</button>
      <button style={{ background : stop ? "green" : "red"}} onClick={() => { setStop(!stop); }}>Stop node</button>
      <button style={{ background: calculate ? "green" : "red" }} onClick={() => {
        setCalculate(true);
        
        const timer = setTimeout(() => {
            setCalculate(false);
        }, 2000);

        
      }}>Calculate</button>
        <div className='leaflet-container'>
            <MapContainer center={[default_latitude, default_longitude]} zoom={18}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
            <AddMarkerToClick key={0} start={start} stop={stop} calculate={calculate}/>
            </MapContainer>
        </div>     
      </div>
 

  );
}

export default OneToMany;
