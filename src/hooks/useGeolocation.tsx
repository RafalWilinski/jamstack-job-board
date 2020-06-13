import { useState, useEffect } from 'react';

export const useGeolocation = () => {
  const [state, setState] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 2,
    haveLocation: false
  })
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
      setState({
          latitude,
          longitude,
          zoom: 14,
          haveLocation: true
      });
    },)
  }, []);
  return state
}
