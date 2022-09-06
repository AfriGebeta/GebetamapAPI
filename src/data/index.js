

const direction =  async (start , newMarker , apiKey) => {
    const url = "https://mapapi.gebeta.app/api/v1/route/driving/direction/?la1=" + start.lat + "&lo1=" + start.lon + "&la2=" + newMarker.lat + "&lo2=" + newMarker.lng + "&apiKey="+apiKey
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
      } catch (err) {
        return err;
      }
}

const matrix = async (startpoint, apiKey) => {
  
    const url = "https://mapapi.gebeta.app/api/v1/route/driving/matrix/?start=" + startpoint + "&apiKey="+apiKey

  try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
      } catch (err) {
        return err;
      }
}

const isodistance = async (point ,  apiKey) => {
    //   const url = "https://mapapi.gebeta.app/api/v1/route/driving/direction/?la1=" + point.lat + "&lo1=" + start.lon + "&la2=" + newMarker.lat + "&lo2=" + newMarker.lng + "&apiKey="+apiKey
    // try {
    //     const response = await fetch(url);
    //     const json = await response.json();
    //     return json;
    //   } catch (err) {
    //     return err;
    //   }      
}

const tss = async (points, apiKey) => {

  const url = "https://mapapi.gebeta.app/api/v1/route/driving/tss/?start=" + points + "&apiKey=" + apiKey   
    try {
        const response = await fetch(url);
        const json = await response.json();
        return json;
      } catch (err) {
        return err;
      }
}

const geocoding = (name , apiKey) => {

}


module.exports = { direction: direction, matrix: matrix, isodistance: isodistance, tss: tss, geocoding: geocoding }

