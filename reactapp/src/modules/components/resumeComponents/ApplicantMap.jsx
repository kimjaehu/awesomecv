import React, { Component } from 'react';
import '../../../App.css';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY

const styles = theme => ({
  textField: {
    margin: theme.spacing.unit,
    width: "auto",
  },
})
class Map extends Component {

  state = {
    awesomeJobs:[{lat: 43.6532, lng: -79.3832}],
    indeedJobs: [{lat: 43.1532, lng: -79.1832},{lat: 43.6352, lng: -79.3862}]
  }

  componentDidMount() {
    // this.getAwesomeJobs()
    // this.getIndeedJobs()
    this.renderMap() // <- remove after information from server
  }

  renderMap = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&callback=initMap`)
    window.initMap = this.initMap
  }
  
  // getAwesomeJobs =() => {
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

  // Indeed integration
    // getIndeedJobs =() => {
    //   const endPoint = "http://api.indeed.com/ads/apisearch?"
    //   const parameters ={
    //     publisher: "",
    //     v:"2",
    //     userip:"",
    //     useragent: "",
    //     format: "json",
    //     q:"",
    //     l:"",
    //     fromage: "35"
    //   }

    //   axios.get(endPoint + new URLSearchParams(parameters))
    //     .then(response => {
    //       console.log(response) //response.results.latitude & response.results.latitude
    //     })
    //     .catch(err => {
    //       console.log(`Error: ${err}`)
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
      this.state.awesomeJobs.map(job => {

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
        {/* <div>
          <TextField
              id="filled-full-width"
              label="Job title"
              value={this.props.info.lastName}
              onChange={this.props.handler('lastName')}
              className={classes.textField}
              placeholder="Last Name"
              fullWidth
              margin="normal"
              variant="filled"
              InputLabelProps={{
                shrink: true,
              }}
          />
        </div> */}
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