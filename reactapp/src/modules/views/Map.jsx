// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import CurrentLocation from '../components/mapComponents/Location';

// const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY

// export class MapContainer extends Component {
//   state = {
//     showingInfoWindow: false,  //Hides or the shows the infoWindow
//     activeMarker: {},          //Shows the active marker upon click
//     selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
//   };

//   onMarkerClick = (props, marker, e) =>
//   this.setState({
//     selectedPlace: props,
//     activeMarker: marker,
//     showingInfoWindow: true
//   });

// onClose = props => {
//   if (this.state.showingInfoWindow) {
//     this.setState({
//       showingInfoWindow: false,
//       activeMarker: null
//     });
//   }
//   };

//   render() {
//     return (
//       <CurrentLocation
//         centerAroundCurrentLocation
//         google={this.props.google}
//       >
//         <Marker onClick={this.onMarkerClick} name={'current location'} />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </CurrentLocation>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: GOOGLE_MAP_KEY
// })(MapContainer);

import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';

const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY

class Map extends Component {

  state = {
    jobs: [{lat: 43.6532, lng: -79.3832},{lat: 43.6352, lng: -79.3862}]
  }

  componentDidMount() {
    // this.getJobs()
    this.renderMap() // <- remove after information from server
  }

  renderMap = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&callback=initMap`)
    window.initMap = this.initMap
  }
  
  // getJobs =() => {
  //   const endPoint = "localhost:3000"

  //   axios.get(endPoint)
  //     .then(response => {
  //       this.setState({
  //         jobs:
  //       }, this.renderMap())
  //       console.log(response)
  //     })
  //     .catch(err => {
  //       console.log("Error " + err)
  //     })
  // }

  initMap = () => {

    //create a map
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 43.6532, lng: -79.3832},
      zoom: 12
    });

    // create an infowindow 
    let infowindow = new window.google.maps.InfoWindow();

      // display markers
      this.state.jobs.map(job => {

        var contentString = `Job Title: ` //${job.title}

      // create a marker
      let marker = new window.google.maps.Marker({
        position: {lat: job.lat, lng: job.lng},
        map: map,
        // title: job.title
      })

      //click on a marker
      marker.addListener('click', function() {

        //change the content
        infowindow.setContent(contentString)

        //open an infowindow
        infowindow.open(map, marker);
      });

    });
  }



  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    )
  }
}


function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}


export default Map