import logo from './logo.svg';
import './App.css';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useState } from 'react';
import * as Rechart from 'recharts';
import { CToast, CToastBody, CToastClose } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'

const App = () => {
  const [temperature1,setTemperature1] = useState(0);
  const [temperature2,setTemperature2] = useState(0);
  const [data, setData] = useState([]);

  const {lastJsonMessage, readyState} = useWebSocket('ws://localhost:8999', {
    onOpen: () => console.log(`Connected to App WS`),
    onMessage: () => {
      if (lastJsonMessage) {
        setTemperature1(lastJsonMessage[0]['temperature']);
        setTemperature2(lastJsonMessage[1]['temperature']);
        if ((lastJsonMessage[0]['data']<100) && (lastJsonMessage[1]['data']<100))
           setData((currentData) => [...currentData, lastJsonMessage]);
      }
    },
    onError: (event) => { console.error(event); },
    shouldReconnect: (closeEvent) => true,
    reconnectInterval: 3000
  });

  let checkConection = ""

  console.log('ready', readyState)

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];
  
  const isConnected = () => {
    if (readyState == 1) {
      checkConection = "connected"
    }
    else{
      checkConection = "disconnected"
    }
  }

  isConnected()

  return (
    <div className="App">
      <header className="App-header">
        <div className="Top-header">
          <div className='Logo-area'>
            <p><img src={logo} className="App-logo" alt="logo" /></p>
            <h1>Test</h1>
          </div>
          <div>
            <CToast autohide={false} visible={true} className="Toast" aria-label='toast'>
                <CToastBody>The server is now {checkConection}.</CToastBody>
                <CToastClose className="me-2 m-auto" white />
            </CToast>
          </div>
        </div>
        <hr/>
      </header>
      
      <div className='Boxes'>
        <div className='Temp-box'><div className='Id-title'>ID 1 </div>Temp: {temperature1} C</div>
        <div className='Temp-box'><div className='Id-title'>ID 2 </div>Temp: {temperature2} C</div>
      </div>
      <div>
        <Rechart.LineChart 
          width={1400} 
          height={500} 
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          aria-label='chart'
          >
          <Rechart.XAxis dataKey="name" interval='preserveEnd' domain={[0, 100]} allowDataOverflow="false"/>
          <Rechart.YAxis hide="true" domain={[0, 100]} allowDataOverflow="false"/>
          <Rechart.Tooltip />
          <Rechart.Legend />
          <Rechart.CartesianAxis axisLine="false" tick="false"/>
          <Rechart.Line name="1" type="monotone" dataKey="0['data']" stroke="#ff6c00" />
          <Rechart.Line name="2" type="monotone" dataKey="1['data']" stroke="#1e9292" />
        </Rechart.LineChart>
      </div>
    </div>
    );
}

export default App;
