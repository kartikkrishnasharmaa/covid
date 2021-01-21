import React from 'react';
class Summary extends React.Component {

    render() {
        const{summary,currentDate} =this.props;
        return (
         <div className="container-fluid">
              <h1>Covid 19 Virus Tracker</h1>
             <div className="NewConfirmed col-sm-2">
                 <h3>New Comfirmed</h3>
                 <h1>{summary.NewConfirmed}</h1>
                 <h4>{new Date(currentDate).toDateString()}</h4>
             </div>
             <div className="TotalConfirmed col-sm-2">
                 <h3>Total Comfirmed</h3>
                 <h1>{summary.TotalConfirmed}</h1>
                 <h4>{new Date(currentDate).toDateString()}</h4>
             </div>
             <div className="NewDeath col-sm-2">
                 <h3>New Death</h3>
                 <h1>{summary.NewDeaths}</h1>
                 <h4>{new Date(currentDate).toDateString()}</h4>
             </div>
             <div className="TotalDeath col-sm-2 ">
                 <h3>Total Death</h3>
                 <h1>{summary.TotalDeaths}</h1>
                 <h4>{new Date(currentDate).toDateString()}</h4>
             </div>
             <div className="TotalRecovered col-sm-2">
                 <h3>Total Recovered</h3>
                 <h1>{summary.TotalRecovered}</h1>
                 <h4>{new Date(currentDate).toDateString()}</h4>
             </div>
             <div className="col-sm-2">
                <h3></h3>
             </div>
         </div>
            
        ) 
        }
}

export default Summary;