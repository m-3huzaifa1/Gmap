import React from "react";
import ReactMapboxGl from "react-mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoibWF5b2ppY2giLCJhIjoiY2pla3Q3MzVvMWRoYTJybnVyMndxM2hmdCJ9.nWZlYcpKaMqz6m7xTsnJGA"
  });

export default function GMap({user}) {
    return(
        <React.Fragment>
        
                
                <div className="map user">
                
                    <Map
                  style={"mapbox://styles/mapbox/streets-v8"}
                  zoom={[8]}
                  center={[user.lat,user.lang]}  //user.address.geo.lat, user.address.geo.lng
                  containerStyle={{
                    height: "60vh",
                    width: "60vw"
                  }} >
                </Map>                
                </div>
              
    
       </React.Fragment>
    )
}
