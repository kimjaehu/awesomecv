// import React, { Component } from 'react';
// import '../../../App.css';

// const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY

// class Map extends Component {

//   state = {
//     jobs: [{lat: 43.6532, lng: -79.3832}]
//   }

//   componentDidMount() {
//     // this.getJobs()
//     this.renderMap() // <- remove after information from server
//   }

//   renderMap = () => {
//     loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&callback=initMap`)
//     window.initMap = this.initMap
//   }
  
//   // getJobs =() => {
//   //   const endPoint = "localhost:3000"

//   //   axios.get(endPoint)
//   //     .then(response => {
//   //       this.setState({
//   //         jobs:
//   //       }, this.renderMap())
//   //       console.log(response)
//   //     })
//   //     .catch(err => {
//   //       console.log("Error " + err)
//   //     })
//   // }

//   initMap = () => {

//     //create a map
//     let adminMap = new window.google.maps.Map(document.getElementById('adminMap'), {
//       center: {lat: 43.6532, lng: -79.3832},
//       zoom: 15
//     });

//     // create an infowindow 
//     let infowindow = new window.google.maps.InfoWindow();

//       // display markers
//       this.state.jobs.map(job => {

//         var contentString = `Job Title: ` //${job.title}

//       // create a marker
//       let marker = new window.google.maps.Marker({
//         position: {lat: job.lat, lng: job.lng},
//         map: adminMap,
//         // title: job.title
//       })

//       //click on a marker
//       marker.addListener('click', function() {

//         //change the content
//         infowindow.setContent(contentString)

//         //open an infowindow
//         infowindow.open(adminMap, marker);
//       });

//     });
//   }



//   render() {
//     return (
//       <main>
//         <div id="adminMap" className="adminMap"></div>
//       </main>
//     )
//   }
// }


// function loadScript(url) {
//   var index = window.document.getElementsByTagName("script")[0]
//   var script = window.document.createElement("script")
//   script.src = url
//   script.async = true
//   script.defer = true
//   index.parentNode.insertBefore(script, index)
// }


// export default Map