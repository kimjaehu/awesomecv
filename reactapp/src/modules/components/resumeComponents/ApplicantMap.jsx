import React, { Component } from 'react';
import '../../../App.css';
import PropTypes from 'prop-types';
import { geocode } from './Geocoder'
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Geocode from "react-geocode";
import { promised } from 'q';
import axios from 'axios';

const GOOGLE_MAP_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY
let map

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    margin: theme.spacing.unit,
    width: "50%",
    minWidth:200,
  },
  input: {
    display: 'none',
  },
  paper:{
    margin: theme.spacing.unit,
  },
  container: {
    margin: theme.spacing.unit,
  }
});
// // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
// Geocode.setApiKey(GOOGLE_MAP_KEY);
 
// // Enable or disable logs. Its optional.
// Geocode.enableDebug();

// Geocode.fromAddress("Eiffel Tower").then(
//   response => {
//     const { lat, lng } = response.results[0].geometry.location;
//     console.log(lat, lng);
//     this.setState
//   },
//   error => {
//     console.error(error);
//   }
// );


class Map extends Component {

  state = {
    searchLocation:'',
    searchLatLng:{lat: 43.6532, lng: -79.3832},
    awesomeJobs:[
      {lat: 43.6432, lng: -79.3832},
      {lat: 43.6532, lng: -79.3832},
      {lat: 43.6332, lng: -79.3832},
      {lat: 43.6232, lng: -79.3832},
      {lat: 43.6132, lng: -79.3832},
    ],
  }
  
  componentDidMount() {
    this.getAwesomeJobs()
    // this.getIndeedJobs()
    
    this.renderMap() // <- remove after information from server
  }

  initGeocode = () => {

    Geocode.setApiKey(GOOGLE_MAP_KEY);
  
    // Enable or disable logs. Its optional.
    Geocode.enableDebug();
    
    Geocode.fromAddress(this.state.searchLocation).then(
      response => {
        // const { lat, lng } = response.results[0].geometry.location;
        console.log(response.results[0].geometry.location)
        map.setCenter(new window.google.maps.LatLng(response.results[0].geometry.location))
        this.setState({searchLatLng: response.results[0].geometry.location});
        console.log('geocode after setstate',this.state.searchLatLng)
        return this.state.searchLatLng
      },
      error => {
        console.error(error);
      }
    );
    
  }

  geocoder = (postal) => {
    // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
    Geocode.setApiKey(GOOGLE_MAP_KEY);
    
    // Enable or disable logs. Its optional.
    Geocode.enableDebug();

    Geocode.fromAddress(postal).then(
      response => {
        console.log('postal code)',postal)
        console.log('from geocoder',response.results[0].geometry.location);
        return (response.results[0].geometry.location)
      },
      error => {
        console.error('geocoder error',postal,error);
      }
    );
  }
  renderMap = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_KEY}&callback=initMap`)
    window.initMap = this.initMap
  }
  
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  }
  
  onClick = (e) => {
    // this.setState(geocode(this.state.searchLocation), () => {
    //   console.log('geocode done', this.state.searchLatLng)
    //   this.newCenter(this.state.searchLatLng)
    // })
    // this.setState(geocode(this.state.searchLatLng))  
    this.initGeocode()
    // this.newCenter()
  };

  // newCenter = () => {
  //   console.log('before newcenter',this.state.searchLatLng)
  //   map.setCenter(this.state.searchLatLng);
  //   console.log('setCenter worked')
  // }

  getAwesomeJobs =() => {

    axios.get('/api/v1/users/1/jobs')
      .then(res => {
        console.log('get job list',res)
        this.setState({
          awesomeJobs: res.data
        }, this.renderMap())
        console.log(res.data)
      })
      .catch(err => {
        console.log("Error " + err)
      })
  }

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
    map = new window.google.maps.Map(document.getElementById('map'), {
      center: this.state.searchLatLng,
      zoom: 14
    });
    
    // create an infowindow 
    let infowindow = new window.google.maps.InfoWindow();

      // display markers
      this.state.awesomeJobs.map(awesomeJob => {
        console.log(awesomeJob.postal_code)
      var contentString = `Job Title: ` //${job.title}
      // create a marker

      let marker = new window.google.maps.Marker({
        // position: this.geocoder(awesomeJob.postal_code),
        position: this.geocoder(awesomeJob.postal_code),
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
      setTimeout(2000)
    });
  }



  render() {
    const { classes } = this.props;
    return (
      <main>
        <div> 
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="standard-searchLocation-input"
              label="Address, city, province"
              className={classes.textField}
              value={this.state.email}
              onChange={this.onChange}
              margin="normal"
              name="searchLocation"
            />
            <Button variant="contained" component="span" className= {classes.button} onClick={this.onClick}>
              Search
            </Button>
            {/* {this.state.errors && <span>error</span>} */}
          </form>
        </div>
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


Map.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Map);