import Geocode from "react-geocode";


// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.

export const geocode = () => {
  const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY

  Geocode.setApiKey(GOOGLE_MAP_KEY);
 
  // Enable or disable logs. Its optional.
  Geocode.enableDebug();
  
  Geocode.fromAddress("Eiffel Tower").then(
    response => {
      // const { lat, lng } = response.results[0].geometry.location;
      return response.results[0].geometry.location;
    },
    error => {
      console.error(error);
    }
  );

}
