import React from 'react';
import ReactDOM from 'react-dom';
import "./../scss/style.scss";
import {
    Router,
    Route,
    Link,
    IndexLink,
    IndexRoute,
    hashHistory
} from 'react-router';

document.addEventListener('DOMContentLoaded',function(){

    class Home extends React.Component{
        render(){
            return (
                <div>
                    <h1 className='home'>DESIGN YOUR HOME</h1>
                </div>
            )
        }
    }


    class AboutUsHeader extends React.Component{
        render(){
            return(
                <div>
                    <section className='row'>
                        <p className='col-6 paragraph1'><strong>Czym się zajmujemy?</strong>
                            <div className='paragraph2'>Przedstawiamy zadady, dzięki którym Ty sam możesz
                                spróbować zaprojektować swój własny dom energooszczędny.Pozwalamy rozróżnić
                                czym jest dom pasywny a energooszczędny.
                            </div>
                        </p>
                        <div className='box col-6'>
                            <img className='imgAbout' src='https://perfectagent.com.au/wp-content/uploads/2017/10/two-storey-luxury-house-in-Australia-700x525.jpg'/>
                        </div>
                    </section>
                </div>
            )
        }
    }
    class AboutUsSection extends React.Component{
        render(){
            return(
                <div className='row'>
                    <p className='col-6 paragraph1'><strong>Czym są domy energooszczędne?</strong>
                        <div className='definition'><strong>Domy energooszczędne</strong> są to budynki, których roczne zapotrzebowanie na ciepło
                            jest niższe od 70 kWh/(m2·rok). Poniżej przedstawiono straty ciepła przez przegrody zewnętzne
                            (dach, ściany, stropy, stolarka drzwiowa i okienna). Dlatego ważnym elementem jest
                            zapewnienie im odpowiedniego stopnia izolacyjności
                        </div>
                    </p>
                    <img className='col-5 imgAbout1' src='https://www.archon.pl/uploads/article/0/416/95/straty_ciepla.jpg'/>
                    <p className='col-6 paragraph2'>Zasady budowy domów energooszczędnych:<hr></hr>
                        Bryła domu powinna być prosta, a ściany i dach – mieć jak najmniej załamań.
                        Największe przeszklenia umieszcza się od strony południowej.Średni współczynnik przenikania ciepła
                        U przegród zewnętrznych nie przekracza 0,2 W/(m2·K). Osiągnięcie takich parametrów jest możliwe dzięki
                        zastosowaniu w ścianach warstwy termoizolacji grubości min. 20 cm, a w dachu lub stropodachu – 30 cm.
                        Źródłem ciepła są nowoczesne urządzenia o wysokiej sprawności (kocioł kondensacyjny, pompa ciepła). Grzejniki powinny
                        mieć jak najmniejszą pojemność wodną, a rury być dobrze zaizolowane.
                        Do ogrzewania wykorzystuje się również darmową energię słoneczną.

                    </p>
                </div>
            )
        }
    }
    class AboutUs extends React.Component{
        render(){
            return(
                <div>
                    <AboutUsHeader/>
                    <AboutUsSection/>
                </div>
            )
        }
    }

    class Galery extends React.Component {
        state={
            src:null
        };
        handleClick=(e)=>{
            this.setState({
               src:e.target.src,
            });
        };
        handleDelete=(e)=>{
            this.setState({
                src:null
            })

        };
        render() {
            let big=null;
            if (this.state.src!==null ){

                big=<div>
                    <img onClick={this.handleDelete} className='fullScreen' src={this.state.src}/>
                </div>
            }

            return (
                <section className='grid'>
                    <h1 className=' col-12 galleryText'>Zainsipiruj się i stwórz swój model domu</h1>
                    <div className='slider'>
                        {big}
                        <ul>
                            <li><img onClick= {this.handleClick} src="./../images/g1.jpg"/></li>
                            <li><img onClick= {this.handleClick} src="./../images/g2.jpg"/></li>
                            <li><img onClick= {this.handleClick} src="./../images/g3.jpg"/></li>
                            <li><img onClick= {this.handleClick} src="./../images/g4.jpg"/></li>
                            <li><img onClick= {this.handleClick} src="./../images/dom.png"/></li>
                            <li><img onClick= {this.handleClick} src="./../images/g6.jpg"/></li>
                        </ul>

                    </div>
                </section>
            )
        }
    }

    class Design extends React.Component{
        render(){
            return (
                <CalculatorMain/>
            )
        }
    }

    class CalculatorMain extends React.Component{
        render(){
            return (
                <ul className='calculatorList'>
                    <li><CalculatorIsolation/></li>
                    <li><CalculatorPipe/></li>
                    <li><CalculatorEnergy/></li>
                    <li><CalculatorPrice/></li>
                    <li><CalculatorWarm/></li>
                </ul>
            )
        }
    }
    class CalculatorIsolation extends React.Component{
        state={
            input1:'',
            input2:'',
            input3:'',
            input4:'',
            displayHead:'block',
            displayCalc:'none'
        };
        handleInput1=(e)=>{
            this.setState({
                input1:e.target.value,
            })
        };
        handleInput2=(e)=>{
            this.setState({
                input2:e.target.value
            })
        };
        handleInput3=(e)=>{
            this.setState({
                input3:e.target.value
            })
        };
        handleInput4=(e)=>{
            this.setState({
                input4:e.target.value
            })
        };
        handleClickHeader=()=>{
            this.setState({
                displayHead:'block',
                displayCalc:this.state.displayCalc==='block'?'none':'block'
            })
        };

        render(){
            let result;
            result=(1/0.3)-(0.04+0.13+parseInt(this.state.input1)+parseInt(this.state.input2)+parseInt(this.state.input3)+parseInt(this.state.input4));
            let welna=(result*this.state.input2).toFixed(3);
            return(
                <div>
                    <h3 style={{display:this.state.displayHead}} onClick={this.handleClickHeader}>Kalkulator grubości izolacji</h3>
                    <div style={{display:this.state.displayCalc}}>
                    <label>Podaj opór cieplny tynku silikatowego:
                        <input type='text' value={this.state.input1} onChange={this.handleInput1}/>
                    </label><br></br>
                    <label>Podaj współczynnik przewodzenia ciepła warstwy izolacyjnej:
                        <input type='text' value={this.state.input2} onChange={this.handleInput2}/>
                    </label><br></br>
                    <label>Podaj opór cieplny muru z betonu komórkowego:
                        <input type='text' value={this.state.input3} onChange={this.handleInput3}/>
                    </label><br></br>
                    <label>Podaj opór cieplny tynku gipsowego:
                        <input type='text' value={this.state.input4} onChange={this.handleInput4}/>
                    </label><br></br>
                    <span>Grubość warstwy izolacyjnej wynosi: {welna} m. Znajdź katalog
                        producentów warstwy izolacyjnej i dobierz odpowiednią grubość katalogową.
                    </span>
                    </div>
                </div>
            )
        }
    }
    class CalculatorPipe extends React.Component{
        state={
            input5:'',
            displayHead:'block',
            displayCalc:'none'
        };
        handleInput5=(e)=>{
            this.setState({
                input5:e.target.value
            })
        };
        handleClickHeader=()=>{
            this.setState({
                displayHead:'block',
                displayCalc:this.state.displayCalc==='block'?'none':'block'
            })
        };
        render(){

            let podloga=7*this.state.input5;
            return (
                <div>
                    <h3 style={{display:this.state.displayHead}} onClick={this.handleClickHeader}>Kalkulator zużycia rur na ogrzewanie podłogowe</h3>
                    <div style={{display:this.state.displayCalc}}>
                        <label>Podaj powierzchnię domu:
                            <input type='text' value={this.state.input5} onChange={this.handleInput5}/>
                        </label><br></br>
                        <span>Potrzebujesz {podloga} m długości rur do instalacji ogrzewania podłogowego</span>
                    </div>
                </div>
            )
        }
    }
    class CalculatorEnergy extends React.Component{
        state={
            input6:'',
            displayHead:'block',
            displayCalc:'none'
        };
        handleInput6=(e)=>{
            this.setState({
                input6:e.target.value
            })
        };
        handleClickHeader=()=>{
            this.setState({
                displayHead:'block',
                displayCalc:this.state.displayCalc==='block'?'none':'block'
            })
        };
        render(){
            let cwu=Math.floor((this.state.input6*60*365*0.95*4.2*(55-7.6))/1000000);
            let gaz=Math.floor((cwu*1000000000)/((35.865*1000000)*0.88));
            let price=gaz*2.26;
            return(
                <div>
                    <h3 style={{display:this.state.displayHead}} onClick={this.handleClickHeader}>Kalkulator obliczający zapotrzebowanie na energię do przygotowania CWU(ciepłej wody użytkowej) </h3>
                    <div style={{display:this.state.displayCalc}}>
                    <label>Podaj liczbę osób mieszkającą w domu:
                        <input type='text' value={this.state.input6} onChange={this.handleInput6}/><br></br>
                        <span>Twoje zapotrzebowanie na energię do przygotowania CWU wynosi {cwu} GJ/rok.
                        Dlatego też Twoje zapotzrebowanie na pierwotne nośniki energii wynosi {gaz} m³ gazu/sezon grzewczy.
                            Przybliżony koszt za ogrzewanie w sezonie grzewczym będzie wynosiło {price} zł.
                            <br></br><br></br><em>(przyjęto wartość opałową gazu równą 35,865 MJ/m³, sprawność kotła 88%, cena za gaz 2.26zł/m³ gazu, temp. wody dostarczane: 55°C,roczna średnia temp. wody: 7,6°C)</em></span>
                    </label>
                    </div>
                </div>
            )
        }
    }
    class CalculatorPrice extends React.Component{
        state={
            input7:'',
            input8:'',
            displayHead:'block',
            displayCalc:'none'
        };
        handleInput7=(e)=>{
            this.setState({
                input7:e.target.value
            })
        };
        handleInput8=(e)=>{
            this.setState({
                input8:e.target.value
            })
        };
        handleClickHeader=()=>{
            this.setState({
                displayHead:'block',
                displayCalc:this.state.displayCalc==='block'?'none':'block'
            })
        };
        render(){
            let carbon=parseInt(this.state.input7)/parseInt(this.state.input8);
            let energy=Math.floor(carbon*24*0.8);
            let gaz=Math.floor((energy*1000)/(35.865*0.93));
            let priceGaz=Math.floor(gaz*2.26);
            let finalPrice=priceGaz-this.state.input7;
            return (
                <div>
                    <h3 style={{display:this.state.displayHead}} onClick={this.handleClickHeader}>Kalkulator obliczający różnicę cenową zastosowania pieca węglowego a gazowego</h3>
                    <div style={{display:this.state.displayCalc}}>
                        <label>Podaj koszt zużycia węgla na sezon grzewczy:
                            <input type='number' value={this.state.input7} onChange={this.handleInput7}/><br></br>
                        </label>
                        <label>Podaj cenę tony węgla:
                            <input type='text' value={this.state.input8} onChange={this.handleInput8}/><br></br>
                        </label>
                        <span>Ze spalonego węgla uzyskasz energii {energy} GJ/rok. Gdybyś zastąpił piec węglowy
                            na piec gazowy, to przy takiej samej energii zużyjesz {gaz} m³ gazu/rok.
                            Koszt zastosowania pieca gazowego będzie wynosił {priceGaz} zł/rok.Zatem
                            zastosowanie pieca gazowego jest droższe o {finalPrice} zł. Jednak pamiętaj o środowisku i zadbaj o nie !!!
                        </span>
                    </div>
                </div>
            )
        }
    }
    class CalculatorWarm extends React.Component{
        state={
            select:'',
            input9:'',
            old:'150',
            window:'120',
            warm:'80',
            energy:'50',
            displayHead:'block',
            displayCalc:'none'
        };
        handleSelect=(e)=>{
            this.setState({
                select:e.target.value,
            })
        };
        handleInput9 = (e)=>{
            this.setState({
                input9:e.target.value,
            })
        };
        handleClickHeader=()=>{
            this.setState({
                displayHead:'block',
                displayCalc:this.state.displayCalc==='block'?'none':'block'
            })
        };
        render(){
            let howMuch=this.state.input9*this.state.select;
            return (
                <div>
                    <h3 style={{display:this.state.displayHead}} onClick={this.handleClickHeader}>Kalkulator określający obliczeniowe zapotrzebowanie ciepła</h3>
                    <div style={{display:this.state.displayCalc}}>
                        <label>Wybierz rodzaj budownictwa mieszkaniowego domu jednorodzinnego:
                            <select  value={this.state.select} onChange={this.handleSelect}>
                                <option value={this.state.old}>stare</option>
                                <option value={this.state.window}>stare z wymienionym oknami</option>
                                <option value={this.state.warm}>docieplane</option>
                                <option value={this.state.energy}>energooszczędne</option>
                            </select>
                        </label><br></br>
                        <label>Podaj powierzchnię dom :
                            <input type='text' value={this.state.input9} onChange={this.handleInput9}/>
                        </label><br></br>
                        <span>
                            Zapotrzebowanie ciepła dla Twojego domu będzie wynosiło {howMuch} W.
                        </span>
                    </div>
                </div>
            )
        }
    }


    class Contact extends React.Component{
        render(){
            return (
                <section>
                    <div className="col-5 contact">DESING YOUR HOME
                        <p>ul.Księdz Piotra Ściegiennego 57<br></br>
                            33-332 Kraków<br></br>
                            tel: 12 42 82 353<br></br>
                            email: designyourhome@gmail.com
                        </p>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4311.543695995482!2d19.997342960611153!3d50.017742215815794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47164364bbe52745%3A0x95b6a3ed51c0330f!2sKsi%C4%99dza+Piotra+%C5%9Aciegiennego+57%2C+33-332+Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1516794819425" width="600" height="450" frameBorder="0" style={{border:"0"}} allowFullScreen></iframe>
                    </div>
                </section>
            )
        }
    }
    class Template extends React.Component {
        render() {
            const activeStyle = {
                borderBottom:'2px solid grey'
            };

            return <div className='grid'>
                <ul className="row">
                    <li className='col-2'><IndexLink className='list' activeStyle={activeStyle} to="/" >Strona główna</IndexLink></li>
                    <li className='col-2'><IndexLink className='list' activeStyle={activeStyle} to="/aboutus">O nas</IndexLink></li>
                    <li className='col-2'><IndexLink className='list' activeStyle={activeStyle} to="/galery">Galeria projektów</IndexLink></li>
                    <li className='col-2'><IndexLink className='list' activeStyle={activeStyle} to="/design">Zaprojektuj swój dom</IndexLink></li>
                    <li className='col-1'><IndexLink className='list' activeStyle={activeStyle} to="/contact">Kontakt</IndexLink></li>
                </ul>
                {this.props.children}
            </div>;
        }
    }
    class App extends React.Component {
        render() {
            return (
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Home} />
                        <Route path='/aboutus' component={AboutUs} />
                        <Route path='/galery' component={Galery} />
                        <Route path='/design' component={Design} />
                        <Route path='/contact' component={Contact} />
                    </Route>
                </Router>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )


});
