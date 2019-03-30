import React, { Component } from 'react';
import { render } from 'react-dom';

const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY

class Map extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById('map'),{
      center: {lat: 43.6532, lng: -79.3832},
          zoom: 8});
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&callback=initMap`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    const styles = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    return (
      <div style={styles} id={'map'} />
    );
  }
}

export default Map