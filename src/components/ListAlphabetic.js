import React, { Component } from 'react';
import Sidenav from './partials/Sidenav'
import LocationCard from './LocationCard'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
// import { fetchCameras } from '../redux/actions/camerasActions'
import { connect } from 'react-redux'

class ListAlphabetic extends Component {

  state = {

  }

  componentDidMount(){
    // this.props.fetchCountries()
    // this.props.fetchStates()
  }

  render () {

    // let camerasList = this.props.cameras.map(camera => <Camera key={camera.id} camera={camera} />)

    // let listOfCountries = this.props.countries.map(country => <LocationCard key={country.id} country={country} />)
    // let listOfStates = this.props.states.map(state => <LocationCard key={state.id} state={state} />)

    return (
      <Row>

        <Col className="text-center">
          {/* { listOfCountries } */}
          COuntries
        </Col>
        <Col className="text-center">
        {/* { listOfStates } */}
        States
        </Col>

      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    states: state.states,
    buckets: state.buckets,
    posts: state.posts
  };
};

export default connect(mapStateToProps, { })(ListAlphabetic)
