import React from 'react';
import '../style/login.css';
import logo from '../style/Logo.svg';
import Exchainged from '../style/Exchainged.png';
import sdk from '../style/sdk.svg';
import marketplace from '../style/marketplace.svg';
import Productlogo from '../style/Productlogo.svg';
import Currency from '../style/Currency.svg';
import Cross from '../style/cross.svg';

class Login extends React.Component {


    handleClick=(e)=>{
        var a=document.getElementById("cardColl");
        var b=document.getElementById("cardcollcover");
        var c=document.getElementById("detail");
        a.className="hide";
        b.className="hide";
        c.className="clickpopup container";
    }

    handleCross=(e)=>{
        var a=document.getElementById("cardColl");
        var b=document.getElementById("cardcollcover");
        var c=document.getElementById("detail");
        a.className="container prodcont";
        b.className="img img-responsive Productlogo center-block";
        c.className="hide";
    }


    render(){
        return(
            <div className="landingPage">
<div className="abcd">
            <div className="Header">
                    <img src={logo} className="img img-responsive logo"/>
                                   
                                <div className="topnav">
                                    <a href="#home" class="active">Home</a>
                                    <a href="#news">Target Audience</a>
                                    <a href="#contact">Products</a>
                                    <a href="#">Contact Us</a>
                                   
                            </div>
            </div>
            <div className="clearfix"></div>

                    <div className="centerlogo">
                    <img src={Exchainged} className="img img-responsive exchange"/>
                    <p className="tagline">Chained.Yet free.</p>
                    </div>

                    <div className="buttons">
                    <button type="button" className="btn btn-primary activ">Log in</button>
                    <button type="button" className="btn btn-primary disable">Sign Up</button>
                        <br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
        </div>
                <div className="row" id="info">
                   
                        <div className="col-xs-3 infoFoot">
                                    <h2>For Developers</h2><br/>
                                    <p>As a Developer, you can use Exec to overcome blockchain limitations, by executing your computations on a new distributed infrastructure.</p>
                                    <button type="button" className="btn btn-primary activ learn">Learn More</button><br/><br/>
                        </div>

                        <div className="col-xs-3 infoFoot">
                                    <h2>For Producers</h2><br/>
                                    <p>As a Producer, you can rent out your machine's computing power, monetizing it by executing task for applications.</p>
                                    <button type="button" className="btn btn-primary activ learn">Learn More</button><br/><br/>
                        </div>

                        <div className="col-xs-3 infoFoot">
                                    <h2>For Enterprises</h2><br/>
                                    <p>As a token holder, you can get into the world of crypto-economy by trading your RLC tokens whenever you want.</p>
                                    <button type="button" className="btn btn-primary activ learn">Learn More</button><br/><br/>
                        
                        </div>
                </div>
                <br/><br/><br/><br/><br/><br/>
                        <div className="row proddiv">
                            <div className="col-xs-3 prod">
                                
                            <img src={marketplace} className="img img-responsive service center-block"/>
                            <h2>MARKETPLACE</h2>
                            </div>

                            <div className="col-xs-3 prod">
                            <img src={sdk} className="img img-responsive service center-block"/>
                            <h2>SDK</h2>
                            </div>
                        </div>

<img src={Productlogo} className="img img-responsive Productlogo center-block" id="cardcollcover"/>
                    <div className="container prodcont" id="cardColl">
                    
                        <div className="row coverprod">
                            <div className="col-xs-2 cardi" onClick={this.handleClick}>
                                <div className="bluecol">

                                </div>
                                <h5>Ram Mandir</h5>
                                <p>Yogi Adityanath</p>
                               <br/>
                                <p>Compatible</p>
                            </div>
                            <div className="col-xs-2 card" onClick={this.handleClick}>
                                <div className="bluecol">
                                    
                                </div>
                                <h5>Ram Mandir</h5>
                                <p>Yogi Adityanath</p>
                               <br/>
                                <p>Compatible</p>
                            </div>
                            <div className="col-xs-2 card" onClick={this.handleClick}>
                            <div className="bluecol">
                                    
                                </div>
                                    <h5>Ram Mandir</h5>
                                <p>Yogi Adityanath</p>
                                <br/>
                                <p>Compatible</p>
                            </div>
                            <div className="col-xs-2 card" onClick={this.handleClick}>
                            <div className="bluecol">
                                    
                                    </div>
                                    <h5>Ram Mandir</h5>
                                <p>Yogi Adityanath</p>
                                <br/>
                                <p>Compatible</p>
                            </div>
                            <div className="col-xs-2 cardf" onClick={this.handleClick}>
                            <div className="bluecol">
                                    
                                    </div>
                                    <h5>Ram Mandir</h5>
                                <p>Yogi Adityanath</p>
                                <br/>
                                <p>Compatible</p>
                            </div>
                            <div className="col-xs-2 cardi" onClick={this.handleClick}>
                            <div className="bluecol">
                                    
                                    </div>
                                    <h5>Ram Mandir</h5>
                                <p>Yogi Adityanath</p>
                                <br/>
                                <p>Compatible</p>
                            </div>
                            <div className="col-xs-2 card" onClick={this.handleClick}>
                            <div className="bluecol">
                                    
                                    </div>
                                    <h5>Ram Mandir</h5>
                                <p>Yogi Adityanath</p>
                                <br/>
                                <p>Compatible</p>
                            </div>
                            <div className="col-xs-2 card" onClick={this.handleClick}>
                            <div className="bluecol">
                                    
                                    </div>
                                    <h5>Ram Mandir</h5>
                                <p>Yogi Adityanath</p>
                               <br/>
                                <p>Compatible</p>
                            </div>
                            <div className="col-xs-2 card" onClick={this.handleClick}>
                            <div className="bluecol">
                                    
                                    </div>
                                    <h5>Ram Mandir</h5>
                                <p>Yogi Adityanath</p>
                                <br/>
                                <p>Compatible</p>
                            </div>
                            <div className="col-xs-2 cardf" onClick={this.handleClick}>
                            <div className="bluecol">
                                    
                                    </div>
                                    <h5>Ram Mandir</h5>
                                <p>Yogi Adityanath</p>
                                <br/>
                                <p>Compatible</p>
                            </div>
                            <div className="col-xs-2 cardi" onClick={this.handleClick}>
                            <div className="bluecol">
                                    
                                    </div>
                                    <h5>Ram Mandir</h5>
                                <p>Yogi Adityanath</p>
                                <br/>
                                <p>Compatible</p>
                            </div>

                        </div>
                    </div>
                    <div className="hide" id="detail">
                        <span><img src={Cross} className="img img-responsive cross center-block" onClick={this.handleCross}/></span>

                            <div className="leftdiv col-xs-4">
                                <div>
                                    <div className="bluebox">
                                        
                                    </div>
                                    <p class="compat">Compatible</p>
                                    <br/>
                                    <br/>

                                    <h3 className="money"><img src={Currency} className="img img-responsive currency center-block"/>0.0025/hr</h3>
                                    </div>
                            </div>

                            <div className="rightdiv col-xs-8">
                                    <h2>Ram Mandir</h2>
                                    <p>Yogi Adityanath</p><br/>
                                    <p>The legendary Mandir App we have all been waiting for, been in development since 15 years <br/>this app is finally open for devs to use!</p>
                                    <br/>
                                    App Yahin banegi!<br/><br/><br/>
                                    <b>How to use</b><br/><br/>
                                    <span className="code"><a href="#">>Learn how to use!</a></span>
                            </div>


                    </div>

            </div>
                )
    }

}

export default Login;