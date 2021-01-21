import React from 'react';
import axios from 'axios';
import Summary from "./Summary";
import Countries from "./Countries"
class Details extends React.Component {

   state={
       countries:[],
       global:[],
       currentDate:null,
       loading:true
   }


   async componentDidMount(){
       const res= await axios.get("https://api.covid19api.com/summary");
       console.log(res);
       this.setState({countries:res.data.Countries});
       this.setState({global:res.data.Global});
       this.setState({currentDate:res.data.Date});
       this.setState({loading:false});
    }
    render() {
        return (
         <div>
        <Summary summary={this.state.global} currentDate={this.state.currentDate}/>
         <table className="table">
             <thead>
                  <tr>
                      <th>Countries</th>
                      <th>New Confirmed</th>
                      <th>Total Recovered</th>
                      <th>Total Death</th>
                  </tr>
             </thead>
             <tbody>
               {this.state.countries.map(country=>(<Countries countries={country} key={country.Country}/>))}
             </tbody>
         </table>
         <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div class="container text-center">
      <h3>Designed by Kartik Sharma</h3>
    </div>
  </footer>
         </div>
        ) 
        }
}

export default Details;