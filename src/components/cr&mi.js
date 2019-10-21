import React from 'react';
import '../style/recenttrade.css';
import logoSymbol from '../style/Logo Symbol.svg';
import graph from '../style/graph.svg';
import coin from '../style/coin.svg';
import Table from '../style/OrdersTable.svg';
import eye from '../style/eye.svg';
import Person from '../style/profile_person.svg';
class CRNMI extends React.Component {
    render(){
        return(
            <div className="recent">
            <div className="sidebar">
                <img src={logoSymbol} className="img img-responsive recentlogo"/>
                    <a href="#home"> <img src={graph} className="img img-responsive graph"/></a>
                    <a href="#services"><img src={coin} className="img img-responsive coin"/></a>
                    <a href="#clients"><img src={Table} className="img img-responsive table1"/></a>
                    <a href="#contact"><img src={eye} className="img img-responsive eye"/></a>
            </div>
            <h2 className="head">Current Request and Market Info</h2>
        <div class="container recenttable">   
            
                <table class="table2 table-borderless">
                    <thead>
                    <tr>
                        <th>Price</th>
                        <th>Time</th>
                        <th>Workerpool</th>
                        <th>Volume</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>0.0000002</td>
                        <td>21/02/19-01:28:44</td>
                        <td>ashhgsGHg5454A4D45S5D</td>
                        <td>1</td>
                    </tr>
                    <tr>
                    <td>0.0000002</td>
                        <td>21/02/19-01:28:44</td>
                        <td>ashhgsGHg5454A4D45S5D</td>
                        <td>1</td>
                    </tr>
                    <tr>
                    <td>0.0000002</td>
                        <td>21/02/19-01:28:44</td>
                        <td>ashhgsGHg5454A4D45S5D</td>
                        <td>1</td>
                    </tr>
                    </tbody>
                </table>


                <table class="table3 table-borderless">
                    <thead>
                    <tr>
                        <th>Price</th>
                        <th>Time</th>
                        <th>Workerpool</th>
                        <th>Volume</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>0.0000002</td>
                        <td>21/02/19-01:28:44</td>
                        <td>ashhgsGHg5454A4D45S5D</td>
                        <td>1</td>
                    </tr>
                    <tr>
                    <td>0.0000002</td>
                        <td>21/02/19-01:28:44</td>
                        <td>ashhgsGHg5454A4D45S5D</td>
                        <td>1</td>
                    </tr>
                    <tr>
                    <td>0.0000002</td>
                        <td>21/02/19-01:28:44</td>
                        <td>ashhgsGHg5454A4D45S5D</td>
                        <td>1</td>
                    </tr>
                    </tbody>
                </table>



</div>
            <h3 className="hello">Hello Saksham!</h3>
            <img src={Person} className="img img-responsive person"/>                   
            </div>
        )
    }

}

export default CRNMI;