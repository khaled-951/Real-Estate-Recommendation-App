import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import mapboxgl from 'mapbox-gl';

const useStyles = makeStyles({
    mapStyle: {
      "height" : "70vh",
      "width" : "70%"
    }
});

export default function Mapbox(){
  const classes = useStyles();
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2hhbGVkOTUxIiwiYSI6ImNrcmM5dXFzbjRqb2cycG54ZmdkNHlwYzMifQ.TjzyHaViRTz7t_7LOfvNkA';
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(9.5375);
  const [lat, setLat] = useState(33.8869);
  const [zoom, setZoom] = useState(6.5);
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });
  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
    });
    });
  useEffect( () => console.log({ lat, lng }), [lat, lng] );
  return (
    <>
      
      <div ref={mapContainer} className={ classes.mapStyle } />
    </>
  );
}