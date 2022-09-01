import { MapContainer, TileLayer, Polyline , useMapEvents , Marker , Popup , Polygon , FeatureGroup , EditControl} from 'react-leaflet';
import { useState } from 'react';
import red from './red.png';
import L from 'leaflet';

import green from './green.png';
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
        
     
           gmarker.push(e.latlng);
          Setter(!sets)
      }
      
      if (props.stop && props.start != true) {
        
        rmarker.push(e.latlng);
        Setter(!sets)
         
      }

  
    },
  })

  if (props.calculate) {
    let startpoint = []
    for (let i = 0; i < gmarker.length; i++){
      let en = gmarker[i].lat +"/"+ gmarker[i].lng;
      startpoint.push(en)
    }
    //['9.02179482529835/38.79895733316493', '9.021286211799913/38.80321858887773', '9.022515359860698/38.80174807997937']


    const url = "http://mapapi.gebeta.app/api/v1/route/driving/matrix/?start=" + startpoint + "&apiKey=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkMTQyNmJjZTg3MzU4ZmEzYTc1NjRjMjY1YTA5MzZjYyIsImlhdCI6MTY2MjAxODUyMCwic3ViIjoidGFraXMiLCJpc3MiOiJ0YWtpIn0.xfH2ME-LYJ1enQpKMrPI4B-vnFZPGaEsg4rUEp95VqY"
   
    try {
        async function getData() {
            const getResonse = await fetch(url)
            const data = await getResonse.json()
            if (getResonse.status != 400) {
               let array = []
             for (let i = 0; i < data.response.length; i++) {
                 array.push(data.response[i].data.direction)
        }
      
        try {
          setPos(array);
        }catch(err){}
              
              return data
              
             
            } else {
              console.log(data)
              return []
            }
      }
      getData()
      
      } catch (err) { 
      }      
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

      
      {pos.map(position => {
        try {
          return <Polyline positions={position} color={ getRandomColor()} />
        } catch (err) {
          
        }
      }
         
         
      )}
       
      
      </div>
    
    
  )
}


function Matrix(props) {

  const [start, setStart] = useState(false);
  const [stop, setStop] = useState(false);
  const [calculate, setCalculate] = useState(false);

 
  return (


          <div className='leaflet-container relative'>

            <MapContainer center={[default_latitude, default_longitude]} zoom={18}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
            <AddMarkerToClick key={0} start={props.matrixStart} stop={stop} calculate={props.matrixCalculate}/>
            </MapContainer>
        </div>  

  );
}

export default Matrix;
