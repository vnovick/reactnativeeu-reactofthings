// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Appear,
  Layout,
  Fill,
  Code,
  Link,
  Image
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const theme = createTheme({
  primary: "#232630",
  secondary: "white",
  tertiary: "#b6d6c1",
  quartenary: "#f74c4f"
}, {
  primary: "Roboto",
  secondary: "Helvetica"
});


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={[]} transitionDuration={0} theme={theme} progress="none" controls={false}>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React of Things
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={3} lineHeight={1} textColor="secondary">
            @VladimirNovick
          </Heading>
          <Text textColor="tertiary">
            vladjs.com
          </Text>
          <Image style={{marginTop: "40px" }} src={require('../assets/codevalue.png')} />
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary">
            React Native
          </Heading>
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary">
              Internet of things
            </Heading>
          <Image width="100%" src={require('../assets/iotbackground.jpg')}/>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={4} lineHeight={1} textColor="tertiary" italic>
            How the future will look like?
          </Heading>
        </Slide>
        <Slide>
          <Image width="100%" src={require('../assets/iotfunny1.jpg')}/>
        </Slide>
        <Slide>
          <Image width="100%" src={require('../assets/future.jpg')}/>
        </Slide>
        <Slide>
          <Image width="100%" src={require('../assets/iot2.png')}/>
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary">Beacons & BLE</Heading>
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary">What is a Beacon</Heading>
          <List style={{ listStyle: 'none' }}>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Small BLE radio transmitter</Text></ListItem>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>It transmits at interval of 1/10th of a second</Text></ListItem>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Can be in Eddystone or in iBeacon formats</Text></ListItem>
          </List>
        </Slide>
         <Slide>
          <Heading size={3} lineHeight={1} textColor="secondary">What is BLE</Heading>
          <List style={{ listStyle: 'none' }}>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Bluetooth Low Energy is part of Bluetooth 4.0 core</Text></ListItem>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Low power consumption - running a year on CR2032</Text></ListItem>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Low bandwidth - 5kb/s</Text></ListItem>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Low latency - 6 ms</Text></ListItem>
            <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Discoverable by bluetooth enabled devices</Text></ListItem>
          </List>
        </Slide>
        <Slide>
            <Heading size={3} lineHeight={1} textColor="secondary">Terminology</Heading>
              <List style={{ listStyle: "none" }}>
                <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Peripherial - small low power device</Text></ListItem>
                <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>Central - more powerful device</Text></ListItem>
                <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>GAP - Generic Access Profile</Text></ListItem>
                <ListItem><Text lineHeight={1.5} textColor="tertiary" italic>GATT - Generic Attribute Profile</Text></ListItem>
              </List>
        </Slide>
        <Slide>
          <Heading size={4} lineHeight={3} textColor="secondary">GAP - Generic Access Profile</Heading>
          <Text size={3} lineHeight={1} textColor="tertiary" italic>Makes your peripherial visible and determines how devices can interact</Text>
          <Image style={{ marginTop: '2rem'}} src={require('../assets/microcontrollers_Advertising2.png')} />
        </Slide>
        <Slide>
          <Heading size={4} lineHeight={3} textColor="secondary">Use GAP for broadcasting</Heading>
          <Text size={3} lineHeight={1} textColor="tertiary" italic>Peripherial sends <span style={{ color: "#f74c4f" }}>31 byte</span> custom data to whoever listens</Text>
          <Image src={require('../assets/microcontrollers_BroadcastTopology.png')} />
        </Slide>
         <Slide>
          <Heading size={3} textColor="secondary">URI beacons</Heading>
          <Heading size={4} textColor="quartenary">Eddystone</Heading>
          <Image src={require('../assets/physical-web.png')}/>
          <Text textColor="secondary">Physical Web</Text>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">Eddystone beacons in a nutshell</Heading>
          <Text style={{marginTop: '3rem'}} lineHeight={1} textColor="tertiary" italic>Beacons broadcast URL</Text>
          <Text lineHeight={1} textColor="tertiary" italic>Anyone with <span style={{ color: "#f74c4f" }}>Physical Web compatible service</span> will see this URL</Text>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={2} textColor="quartenary">It's Demo time!</Heading>
        </Slide>
        <Slide>
          <Layout>
            <Fill>
              <Heading size={6} textColor="secondary">Android</Heading>
              <Image src={require('../assets/androidphysicalweb.jpg')} width="100%"/>
            </Fill>
            <Fill>
              <Heading size={6} textColor="secondary">iOS</Heading>
              <Image src={require('../assets/EddystoneIphone.jpg')} width="60%"/>
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={1} textColor="secondary">iBeacons</Heading>
          <Image src={require('../assets/diagramredo.png')} />
          <List style={{ listStyle: 'none' }}>
            <ListItem><Text lineHeight={1} textColor="tertiary" italic><span style={{ color: "#f74c4f" }}>UUID</span> - region/device unique id</Text></ListItem>
            <ListItem><Text lineHeight={1} textColor="tertiary" italic><span style={{ color: "#f74c4f" }}>Minor</span> and <span style={{ color: "#f74c4f" }}>Major</span> - used to identify specific beacon</Text></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" italic>Why it's cool?</Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" italic>It adds another <span style={{ color: "#f74c4f" }}>proximity</span> based layer of interactions with app users</Heading>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" italic>So is iBeacon just a proximity tool?</Heading>
        </Slide>
        <Slide>
          <Heading size={5} textColor="tertiary" italic>By letting device to be aware of <span style={{ color: "#f74c4f" }}>physical context</span> we change the way we interact with a user and ultimately the way we develop our apps</Heading>
        </Slide>
        <Slide>
          <Image src={require('../assets/beacon.jpg')}/>
        </Slide>
        <Slide>
          <Image width="100%" src={require('../assets/Blog_Sale_Beacon.jpg')}/>
        </Slide>
        <Slide>
          <Image width="100%" src={require('../assets/museum-beacons-1280x640.jpg')}/>
        </Slide>
        <Slide>
          <Image width="100%" src={require('../assets/AAEAAQAAAAAAAAisAAAAJGNjMzQ0ODMzLTk5NjctNGIxYS04OWFhLTUwNzM4ZDE2ZjMxNw.jpg')}/>
        </Slide>
        <Slide>
          <Heading size={4} textColor="tertiary" italic>By using physical context we try to <span style={{ color: "#f74c4f" }}>predict</span> user intent</Heading>
          <Image src={require('../assets/Ibeaconsmuseum.jpg')}/>
        </Slide>
        <Slide>
          <Heading size={4} textColor="secondary">General guidelines for <span style={{ color: "#f74c4f" }}>physical context</span> aware apps</Heading>
          <List style={{ listStyle: 'none' }}>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Enable location services in our app</Text></ListItem>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Start scanning for beacons</Text></ListItem>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Check closest beacons against server</Text></ListItem>
            <ListItem><Text lineHeight={2} textColor="tertiary" italic>Execute custom logic based on closeset beacon</Text></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={2} textColor="quartenary">It's Demo time!</Heading>
        </Slide>
        <Slide>
          <iframe height="500px" width="100%" src="https://www.youtube.com/embed/y_6E1iCPXEM?rel=0&controls=0&showinfo=0" frameBorder="0" allowFullscreen />
        </Slide>
        <Slide>
          <Code textColor="tertiary">react-native-beacon-manager</Code>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="js"
          style={{ fontSize: "1.5rem" }}
          code={require("raw-loader!../codesamples/beacons-manager")}
          ranges={[
            { loc: [35, 36], note: "import library" },
            { loc: [38, 45], note: "regions list" },
            { loc: [46, 60], note: "Additional data for beacons" },
            { loc: [60, 62], note: "How accurate latitude and longitude in decimals" },
            { loc: [79, 83] },
            { loc: [85, 89], note: "request Authorization" },
            { loc: [90, 93], note: "get actual geolocation" },
            { loc: [93, 103], note: "find region relevant to geolocation" },
            { loc: [104, 111], note: "start searching for beacons in region" },
            { loc: [118, 129], note: "update beacons list in region" },
            { loc: [147, 151], note: "map on beacons and merge with data" },
            { loc: [63, 73], note: "merge beacon data" }
          ]}
        />
        <Slide>
          <Heading size={2} lineHeight={1} textColor="secondary">BLE beyond beacons</Heading>
        </Slide>
        <Slide>
          <Heading size={4} lineHeight={3} textColor="secondary">GATT - Generic Attribute Profile</Heading>
          <Heading size={5} textColor="tertiary" italic>Uses generic data protocol ATT to store Services and Characteristics in lookup table by using 16bit id</Heading>
        </Slide>
        <Slide>
          <Heading size={4} lineHeight={3} textColor="secondary">GATT - Topology</Heading>
          <Image src={require('../assets/microcontrollers_ConnectedTopology (1).png')}/>
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={2} textColor="secondary">Services</Heading>
          <Heading size={4} textColor="tertiary" italic>Group functionality and expose <span style={{ color: "#f74c4f" }}>Characteristics</span></Heading>
        </Slide>
        <Slide>
          <Heading size={3} lineHeight={2} textColor="secondary">Characteristics</Heading>
          <Heading size={4} textColor="tertiary" italic>Expose data to <span style={{ color: "#f74c4f" }}>read</span>, <span style={{ color: "#f74c4f" }}>write</span> and <span style={{ color: "#f74c4f" }}>observe</span> </Heading>
        </Slide>
        <Slide>
          <Image src={require('../assets/ble_hierarchy.jpg')} />
        </Slide>
        <Slide>
          <Heading size={1} lineHeight={2} textColor="quartenary">It's Demo time!</Heading>
        </Slide>
        <Slide>
          <iframe height="500px" width="100%" src="https://www.youtube.com/embed/iaD_qK94gho?rel=0&controls=0&showinfo=0" frameBorder="0" allowFullscreen />
        </Slide>
        <Slide>
          <Code textColor="tertiary">react-native-ble-plx</Code>
        </Slide>
        <CodeSlide
          style={{ fontSize: "1.5rem" }}
          transition={[]}
          lang="js"
          code={require("raw-loader!../codesamples/ledbulb.example")}
          ranges={[
            { loc: [11, 13], note: "import BleManager and Buffer" },
            { loc: [14, 15], note: "we should know UUID of our lightbulb" },
            { loc: [17, 21], note: "set our BleManager" },
            { loc: [22, 30], note: "define our state" },
            { loc: [32, 38], note: "subscribe to bluetooth status change" },
            { loc: [46, 50], note: "on initial toggle scan and connect" },
            { loc: [65, 70], note: "start looking for devices" },
            { loc: [78, 81], note: "stop scanning if led found" },
            { loc: [87, 88], note: "connect to device" },
            { loc: [111, 114], note: "discover services and characteristics" },
            { loc: [114, 118], note: "create base64 value" },
            { loc: [118, 125], note: "write value for characteristic of a service" },
            { loc: [97, 107], note: "Log our services and characteristics" },
          ]}
        />
        <Slide>
          <Heading size={3} textColor="secondary" italic>You were awesome!</Heading>
          <Heading size={6} textColor="tertiary" italic>Book <span style={{ color: "#f74c4f"}}>50%</span> discount code: <span style={{ color: "#f74c4f"}}>AURENA50</span></Heading>
          <Heading size={6} textColor="tertiary" italic>vladjs.com</Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" italic>Book Raffle</Heading>
          <Heading size={6} textColor="tertiary" italic>tweet: #reactnative @react_native_eu <span style={{ color: "#f74c4f"}}>#rnbookraffle @VladimirNovick</span></Heading>
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary" italic>Thank you!</Heading>
          <List style={{ listStyle: "none" }}>
            <ListItem>
              <Link href="https://reactnativeeu-reactofthings.surge.sh"><span style={{ textDecoration: 'none ', color: "#b6d6c1"}}>slides: </span><span style={{ color: "#f74c4f"}}>reactnativeeu-reactofthings.surge.sh</span></Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/vnovick/reactnativeeu-reactofthings"><span style={{ textDecoration: 'none ', color: "#b6d6c1"}}>repo: </span><span style={{ color: "#f74c4f", fontSize: '2rem'}}>github.com/vnovick/reactnativeeu-reactofthings</span></Link>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}