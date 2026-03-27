"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function Map() {
  return (
    <MapContainer center={[-6.2,106.8]} zoom={11} style={{height:'500px',width:'100%',borderRadius:20}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-6.2,106.8]}>
        <Popup>Sample Location</Popup>
      </Marker>
    </MapContainer>
  )
}
