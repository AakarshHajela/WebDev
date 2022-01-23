import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';

function App() {

  const [data,setData] = useState([]);

  const userData = async()=>{
    await axios.get('https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba')
    .then(res=>setData(res.data.clients))
    .catch(err=>console.log("UserData Error",err))
  }

  useEffect(()=>{
    userData();
    console.log(data);
  },[])
    

  return (
    <div className="App">
      <div>
        <div style={{backgroundColor:'tomato',width:'300px', borderRadius:'40px',marginLeft:'525px', height:'50px'}}>
          <h1>Client List</h1>
        </div>
        <div>
          {data.map((dat) => {
            return (
              <div style={{display:'inline-flex'}}>
              <div style={{backgroundColor:'lightskyblue',width:'300px', borderRadius:'40px',margin:'20px'}} key={dat.id}>
                  <div style={{magin:5}}>
                      <h4>Name: {dat.name}</h4>
                      <h4>Company: {dat.company}</h4>
                      <h4>Invoice Pending: {dat.invoicePending}</h4>
                      <h4>Invoice Paid: {dat.invoicepaid}</h4>
                      <h4>Order ID: {dat.orderId}</h4>
                  </div>
              </div>
              </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
