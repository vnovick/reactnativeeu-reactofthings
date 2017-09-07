/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  FlatList,
  DeviceEventEmitter
} from 'react-native';

import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Button, 
  Body, 
  Icon, 
  Text,
  Card,
  Right,
  List,
  ListBody,
  ListItem,
  CardItem,
  Tabs,
  Tab,
  Thumbnail
} from 'native-base';


import Beacons from 'react-native-beacons-manager';


const regions = [{
  uuid: '07775DD0-111B-11E4-9191-0800200C9A66',
  identifier: 'React Native EU',
  latitude: 51.0995,
  longitude: 17.0400
}]

const beaconsRegistry = [{
  uuid: '07775DD0-111B-11E4-9191-0800200C9A66',
  major: 12288,
  minor: 4608,
  name: 'Puck.js',
  imgUrl: 'https://d1dr2mxwsd2nqe.cloudfront.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/e/s/espruinopuck.js6_2.jpg'
},{
  uuid: '07775DD0-111B-11E4-9191-0800200C9A66',
  major: 9010,
  minor: 23588,
  nam: 'XY Tracker',
  imgUrl: 'https://goo.gl/TTu6yp'
}]


const GEO_ACCURACY = 4;


function mergeWithRegistryData(beacon) {
  return beaconsRegistry.filter(({
    uuid: rUUID,
    major: rMajor,
    minor: rMinor
  }) => 
    rUUID === beacon.uuid && rMajor === beacon.major && rMinor === beacon.minor 
  ).reduce((acc, rBeacon) => ({ ...acc, ...rBeacon}), beacon)
}

export default class RNBeacons extends Component {

   constructor(props) {
    super(props);
    this.state = {
      region: null,
      beacons: []
    };
  }

  componentWillMount(){
    // Request for authorization while the app is open
    Beacons.requestWhenInUseAuthorization();


    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude }}) => {
      const region = regions.filter(({ 
        latitude: rLatitude, 
        longitude: rLongitude 
      }) => (
        parseFloat(latitude).toFixed(GEO_ACCURACY) === 
        parseFloat(rLatitude).toFixed(GEO_ACCURACY) &&

        parseFloat(longitude).toFixed(GEO_ACCURACY) === 
        parseFloat(rLongitude).toFixed(GEO_ACCURACY)
      ));
      
      if (region.length > 0) {
        region.map(({ uuid, identifier }) => Beacons.startRangingBeaconsInRegion({
            identifier,
            uuid
        }))
      } else {
        // Hardcoded values for demo if geolocation off
        Beacons.startRangingBeaconsInRegion({
          identifier: 'React Native EU',
          uuid: '07775DD0-111B-11E4-9191-0800200C9A66'
        })
      }
    })
  }

  componentDidMount() {
    this.beaconsDidRange = DeviceEventEmitter.addListener(
      'beaconsDidRange',
      ({ beacons }) => {
        this.setState({
          beacons
        });
      }
    );
  }

  componentWillUnMount(){
    this.beaconsDidRange = null;
  }

  render() {
    const { beacons } =  this.state;
    return (
      <Container>
        <Header>
          <Body>
            <Title>iBeacons Demo</Title>
          </Body>
        </Header>
        <Content>
          <List>
            {  beacons.map(mergeWithRegistryData).map(this.renderRow) }
          </List>
        </Content>
      </Container>
    );
  }

  renderRow = (item) => {
    return (
            <ListItem key={`${item.uuid}-${item.major}-${item.minor}`}>
              <Thumbnail circle size={80} source={{ uri: item.imgUrl }} />
              <Body>
                <Text>{ item.name }</Text>
                <Text style={styles.smallText}>
                  UUID: {item.uuid ? item.uuid  : 'NA'}
                </Text>
                <Text style={styles.smallText}>
                  Major: {item.major ? item.major : 'NA'}
                </Text>
                <Text style={styles.smallText}>
                  Minor: {item.minor ? item.minor : 'NA'}
                </Text>
                <Text style={styles.smallText}>
                  RSSI: {item.rssi ? item.rssi : 'NA'}
                </Text>
                <Text>
                  Proximity: {item.proximity ? item.proximity : 'NA'}
                </Text>
                <Text>
                  Distance: {item.accuracy ? item.accuracy.toFixed(2) : 'NA'}m
                </Text>
              </Body>
            </ListItem>
    );
  }
}

const styles = StyleSheet.create({
    smallText: {
    fontSize: 11
  }
});


AppRegistry.registerComponent('RNBeacons', () => RNBeacons);
