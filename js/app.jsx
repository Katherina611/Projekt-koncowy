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
        state={
            text:<h1 className='loader'/>
        };
        componentDidMount(){
            this.timeout=setTimeout(()=>{
                this.setState({
                    text:<h1 className='home'>DESIGN YOUR HOME</h1>
                })
            },2000)
        }
        componentWillUnmount(){
            clearTimeout(this.timeout)
        }

        render(){
            return (
                <div>
                    {this.state.text}
                </div>
            )
        }
    }


    class AboutUsHeader extends React.Component{
        state={
            width:'500px'
        };
        handleMouseEnter=()=>{
            this.setState({
                width:"550px",
                height:'350px'
            })

        };
        handleMouseLeave=()=>{
            this.setState({
                width:"500px",
                height:'300px'
            })

        };

        render(){
            const style={
                width:this.state.width,
                height:this.state.height
            };
            return(
                <div>
                    <section className='row'>
                        <p className='col-6 paragraph1'><strong>Czym się zajmujemy?</strong>
                            <div className='paragraph2'>Przedstawiamy zasady, dzięki którym Ty sam możesz
                                spróbować zaprojektować swój własny dom energooszczędny. Pozwalamy rozróżnić
                                czym jest dom pasywny a energooszczędny.
                            </div>
                        </p>
                        <div className='box col-6'>
                            <img className='imgAbout' onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter} style={style} title='Dom energooszczędny' src='https://perfectagent.com.au/wp-content/uploads/2017/10/two-storey-luxury-house-in-Australia-700x525.jpg'/>
                        </div>
                    </section>
                </div>
            )
        }
    }
    class AboutUsSection extends React.Component{
        state={
            width:'500px',
            height:'300px'
        };
        handleMouseEnter=()=>{
            this.setState({
                width:"550px",
                height:'350px'
            })

        };
        handleMouseLeave=()=>{
            this.setState({
                width:"500px",
                height:'300px'
            })

        };

        render(){
            const style={
                width:this.state.width,
                height:this.state.height
            };
            return(
                <div className='row'>
                    <p className='col-6 paragraph1'><strong>Czym są domy energooszczędne?</strong>
                        <div className='definition'><strong>Domy energooszczędne</strong> są to budynki, których roczne zapotrzebowanie na ciepło
                            jest niższe od 70 kWh/(m2·rok). Poniżej przedstawiono straty ciepła przez przegrody zewnętzne
                            (dach, ściany, stropy, stolarka drzwiowa i okienna). Dlatego ważnym elementem jest
                            zapewnienie im odpowiedniego stopnia izolacyjności
                        </div>
                    </p>
                    <img className='col-5 imgAbout1' onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter} style={style} title='Straty ciepła przez przegrody zewnętrzne' src='https://www.archon.pl/uploads/article/0/416/95/straty_ciepla.jpg'/>
                </div>
            )
        }
    }
    class AboutUsPassive extends React.Component{
        render(){
            return (
                <div className='row'>
                    <p className='col-6 paragraph1'><strong>Czym są domy pasywne?</strong>
                        <div className='definition'><strong>Dom pasywny</strong> to standard wznoszenia obiektów budowlanych, który wyróżniają
                            bardzo dobre parametry izolacyjne przegród zewnętrznych oraz
                            zastosowanie szeregu rozwiązań, mających na celu zminimalizowanie zużycia
                            energii w trakcie eksploatacji.To budynek, w którym zapotrzebowanie na ciepło jest tak niskie,
                            że można zrezygnować z osobnego systemu grzewczego bez utraty komfortu.
                            Dzięki skutecznemu korzystaniu z energii elektrycznej całkowite zapotrzebowanie na energię wynosi poniżej 33 kWh/(m2/rok).
                        </div>
                    </p>

                </div>
            )
        }
    }
    class AboutUsBuild extends React.Component{
        render(){
            return (
                <div className='row'>
                    <p className='col-6 paragraph2'><strong>Zasady budowy domów energooszczędnych i pasywnych:</strong><hr></hr>
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
                    <AboutUsPassive/>
                    <AboutUsBuild/>
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
                            <li><img onClick= {this.handleClick} src="images/g1.jpg"/></li>
                            <li><img onClick= {this.handleClick} src="../images/g2.jpg"/></li>
                            <li><img onClick= {this.handleClick} src="../images/g3.jpg"/></li>
                            <li><img onClick= {this.handleClick} src="../images/g4.jpg"/></li>
                            <li><img onClick= {this.handleClick} src="../images/dom.png"/></li>
                            <li><img onClick= {this.handleClick} src="../images/g6.jpg"/></li>
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
                    <li><CalculatorIsolationWall/></li>
                    <li><CalculatorIsolationRoof/></li>
                    <li><CalculatorIsolationFloor/></li>
                    <li><CalculatorBlock/></li>
                    <li><CalculatorPipe/></li>
                    <li><CalculatorEnergy/></li>
                    <li><CalculatorPrice/></li>
                    <li><CalculatorWarm/></li>
                </ul>
            )
        }
    }
    class CalculatorIsolationWall extends React.Component{
        state={
            input1:'',
            input2:'',
            input3:'',
            input4:'',
            displayHead:'block',
            displayCalc:'none',

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
            let span;

            if(this.state.input1&&this.state.input2&&this.state.input3&&this.state.input4!==''){
                span=<span>Grubość warstwy izolacyjnej wynosi: <strong>{welna} m</strong>. Znajdź katalog
                        producentów warstwy izolacyjnej i dobierz odpowiednią grubość katalogową.
                    </span>;
            }else{
                span=''
            }


            return(
                <div>
                    <h3 style={{display:this.state.displayHead}} onClick={this.handleClickHeader}>Kalkulator grubości warstwy izolacyjnej ścian zewnętrznych</h3>
                    <div style={{display:this.state.displayCalc}}>
                    <label>Podaj opór cieplny tynku zewnętrznego:
                        <input type='text' value={this.state.input1} onChange={this.handleInput1}/>
                    </label>
                    <label>Podaj współczynnik przewodzenia ciepła warstwy izolacyjnej:
                        <input type='text' value={this.state.input2} onChange={this.handleInput2}/>
                    </label>
                    <label>Podaj opór cieplny muru z betonu komórkowego:
                        <input type='text' value={this.state.input3} onChange={this.handleInput3}/>
                    </label>
                    <label>Podaj opór cieplny tynku wewnętrznego:
                        <input type='text' value={this.state.input4} onChange={this.handleInput4}/>
                    </label>
                        {span}
                    </div>
                </div>
            )
        }
    }

    class CalculatorIsolationRoof extends React.Component {
        state = {
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            displayHead: 'block',
            displayCalc: 'none'
        };
        handleInput1 = (e) => {
            this.setState({
                input1: e.target.value,
            })
        };
        handleInput2 = (e) => {
            this.setState({
                input2: e.target.value
            })
        };
        handleInput3 = (e) => {
            this.setState({
                input3: e.target.value
            })
        };
        handleInput4 = (e) => {
            this.setState({
                input4: e.target.value
            })
        };
        handleClickHeader = () => {
            this.setState({
                displayHead: 'block',
                displayCalc: this.state.displayCalc === 'block' ? 'none' : 'block'
            })
        };

        render() {
            let result;
            result = (1 / 0.25) - (0.04 + 0.13 + parseInt(this.state.input1) + parseInt(this.state.input2) + parseInt(this.state.input3) + parseInt(this.state.input4));
            let welna = (result * this.state.input4).toFixed(3);
            let span;

            if(this.state.input1&&this.state.input2&&this.state.input3&&this.state.input4!==''){
                span=<span>Grubość warstwy izolacyjnej wynosi: <strong>{welna} m</strong>. Znajdź katalog
                        producentów warstwy izolacyjnej i dobierz odpowiednią grubość katalogową.
                    </span>;
            }else{
                span=''
            }
            return (
                <div>
                    <h3 style={{display: this.state.displayHead}} onClick={this.handleClickHeader}>Kalkulator grubości
                        warstwy izolacyjnej dachu</h3>
                    <div style={{display: this.state.displayCalc}}>
                        <label>Podaj opór cieplny dachówki:
                            <input type='text' value={this.state.input1} onChange={this.handleInput1}/>
                        </label>
                        <label>Podaj opór cieplny płyty gipsowo-kartonowej:
                            <input type='text' value={this.state.input2} onChange={this.handleInput2}/>
                        </label>
                        <label>Podaj opór cieplny folii paraizolacyjnej:
                            <input type='text' value={this.state.input3} onChange={this.handleInput3}/>
                        </label>
                        <label>Podaj współczynnik przewodzenia ciepła warstwy izolacyjnej:
                            <input type='text' value={this.state.input4} onChange={this.handleInput4}/>
                        </label>
                        {span}
                    </div>
                </div>
            )
        }
    }

    class CalculatorIsolationFloor extends React.Component {
        state = {
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            displayHead: 'block',
            displayCalc: 'none'
        };
        handleInput1 = (e) => {
            this.setState({
                input1: e.target.value,
            })
        };
        handleInput2 = (e) => {
            this.setState({
                input2: e.target.value
            })
        };
        handleInput3 = (e) => {
            this.setState({
                input3: e.target.value
            })
        };
        handleInput4 = (e) => {
            this.setState({
                input4: e.target.value
            })
        };
        handleClickHeader = () => {
            this.setState({
                displayHead: 'block',
                displayCalc: this.state.displayCalc === 'block' ? 'none' : 'block'
            })
        };

        render() {
            let result;
            result = (1 / 0.45) - (0.13 + parseInt(2*this.state.input1) + parseInt(this.state.input2) + parseInt(2*this.state.input3));
            let welna = (result * this.state.input4).toFixed(3);
            let span;

            if(this.state.input1&&this.state.input2&&this.state.input3&&this.state.input4!==''){
                span=<span>Grubość warstwy izolacyjnej wynosi: <strong>{welna} m</strong>. Znajdź katalog
                        producentów warstwy izolacyjnej i dobierz odpowiednią grubość katalogową.
                    </span>;
            }else{
                span=''
            }
            return (
                <div>
                    <h3 style={{display: this.state.displayHead}} onClick={this.handleClickHeader}>Kalkulator grubości
                        warstwy izolacyjnej podłogi</h3>
                    <div style={{display: this.state.displayCalc}}>
                        <label>Podaj opór cieplny betonu zwykłwego:
                            <input type='text' value={this.state.input1} onChange={this.handleInput1}/>
                        </label>
                        <label>Podaj opór cieplny piasku:
                            <input type='text' value={this.state.input2} onChange={this.handleInput2}/>
                        </label>
                        <label>Podaj opór cieplny folii paraizolacyjnej:
                            <input type='text' value={this.state.input3} onChange={this.handleInput3}/>
                        </label>
                        <label>Podaj współczynnik przewodzenia ciepła warstwy izolacyjnej:
                            <input type='text' value={this.state.input4} onChange={this.handleInput4}/>
                        </label>
                        {span}
                    </div>
                </div>
            )
        }
    }

    class CalculatorBlock extends React.Component{
        state={
            input1:'',
            select:'',
            ytong:'0.119201',
            silika:'0.066267',
            thermopor:'0.08925',
            cegla:'0.01625',
            solbet:'0.1416',
            displayHead: 'block',
            displayCalc: 'none'
        };
        handleClick1=(e)=>{
            this.setState({
                input1:e.target.value
            })
        };
        handleSelect=(e)=>{
            this.setState({
                select:e.target.value
            });
            console.log(this.state.select)
        };
        handleClickHeader = () => {
            this.setState({
                displayHead: 'block',
                displayCalc: this.state.displayCalc === 'block' ? 'none' : 'block'
            })
        };
        render(){
            let result=Math.ceil(this.state.input1/this.state.select);
            let span;

            if(this.state.input1&&this.state.select!==''){
                span=<span>Do postawienia ścian będziesz potrzebować <strong>{result}</strong> pustaków</span>
            }else{
                span=''
            }
            return (
                <div>
                    <h3 style={{display: this.state.displayHead}} onClick={this.handleClickHeader}>Kalkulator ilości
                    pustaków potrzebnych do wybudowania ścian</h3>
                    <div style={{display: this.state.displayCalc}}>
                        <label>Podaj powierzchnię ścian w domu:
                            <input type='text' value={this.state.input1} onChange={this.handleClick1}/>
                        </label>
                        <label>
                            <select value={this.state.select} onChange={this.handleSelect}>
                                <option value={this.state.ytong}>Ytong PP3/0,5 S+GT</option>
                                <option value={this.state.silika}>Silka E18 klasy 15</option>
                                <option value={this.state.thermopor}>Thermopor 25 P+W</option>
                                <option value={this.state.cegla}>Cegła pełna</option>
                                <option value={this.state.solbet}>Solbet Optimal</option>
                            </select>
                        </label>
                        {span}
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
            let span;

            if(this.state.input5!==''){
                span=<span>Potrzebujesz <strong>{podloga} m</strong> długości rur do instalacji ogrzewania podłogowego</span>
            }else{
                span=''
            }
            return (
                <div>
                    <h3 style={{display:this.state.displayHead}} onClick={this.handleClickHeader}>Kalkulator zużycia rur na ogrzewanie podłogowe</h3>
                    <div style={{display:this.state.displayCalc}}>
                        <label>Podaj powierzchnię domu:
                            <input type='text' value={this.state.input5} onChange={this.handleInput5}/>
                        </label>
                        {span}
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
            let span;

            if(this.state.input6!==''){
                span=<span>Twoje zapotrzebowanie na energię do przygotowania CWU wynosi <strong>{cwu} GJ/rok</strong>.
                            Dlatego też Twoje zapotrzebowanie na pierwotne nośniki energii wynosi <strong>{gaz} m³ gazu/sezon grzewczy</strong>.
                            Przybliżony koszt za ogrzewanie w sezonie grzewczym będzie wynosiło <strong>{price} zł</strong>.
                            <br></br><br></br><em>(przyjęto wartość opałową gazu równą 35,865 MJ/m³, sprawność kotła 88%, cena za gaz 2.26zł/m³ gazu, temp. wody dostarczane: 55°C,roczna średnia temp. wody: 7,6°C)</em>
                        </span>
            }else{
                span=''
            }
            return(
                <div>
                    <h3 style={{display:this.state.displayHead}} onClick={this.handleClickHeader}>Kalkulator obliczający zapotrzebowanie na energię do przygotowania CWU(ciepłej wody użytkowej) </h3>
                    <div style={{display:this.state.displayCalc}}>
                        <label>Podaj liczbę osób mieszkającą w domu:
                            <input type='text' value={this.state.input6} onChange={this.handleInput6}/>
                        </label>
                        {span}
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
            let span;

            if(this.state.input7&&this.state.input8!==''){
                span=<span>Ze spalonego węgla uzyskasz energii <strong>{energy} GJ/rok</strong>. Gdybyś zastąpił piec węglowy
                            na piec gazowy, to przy takiej samej energii zużyjesz <strong>{gaz} m³ gazu/rok</strong>.
                            Koszt zastosowania pieca gazowego będzie wynosił <strong>{priceGaz} zł/rok</strong>. Zatem
                            zastosowanie pieca gazowego jest droższe o <strong>{finalPrice} zł</strong>. Jednak pamiętaj o środowisku i zadbaj o nie !!!
                        </span>
            }else{
                span=''
            }
            return (
                <div>
                    <h3 style={{display:this.state.displayHead}} onClick={this.handleClickHeader}>Kalkulator obliczający różnicę cenową zastosowania pieca węglowego a gazowego</h3>
                    <div style={{display:this.state.displayCalc}}>
                        <label>Podaj koszt zużycia węgla na sezon grzewczy:
                            <input type='text' value={this.state.input7} onChange={this.handleInput7}/>
                        </label>
                        <label>Podaj cenę tony węgla:
                            <input type='text' value={this.state.input8} onChange={this.handleInput8}/>
                        </label>
                        {span}
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
            let span;

            if(this.state.input9!==''){
                span=<span>Zapotrzebowanie ciepła dla Twojego domu będzie wynosiło {howMuch} W.</span>
            }else{
                span=''
            }

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
                        {span}
                    </div>
                    <p><em>* Pamiętaj, że wszystkie obliczenia są poglądowe.</em></p>
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
                        <ContactForm/>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4311.543695995482!2d19.997342960611153!3d50.017742215815794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47164364bbe52745%3A0x95b6a3ed51c0330f!2sKsi%C4%99dza+Piotra+%C5%9Aciegiennego+57%2C+33-332+Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1516794819425" width="600" height="450" frameBorder="0" style={{border:"0"}} allowFullScreen></iframe>
                        <Link/>
                    </div>
                </section>
            )
        }
    }
    class ContactForm extends React.Component{
        state={
            input1:'',
            input2:'',
            text:'',
            select:''
        };
        handleClick1 = (e)=>{
            this.setState({
                input1:e.target.value,
            })
        };
        handleClick2 = (e)=>{
            this.setState({
                input2:e.target.value,
            })
        };
        handleSelect = (e)=>{
            this.setState({
                select:e.target.value,
            })
        };
        handleText = (e)=>{
            this.setState({
                text:e.target.value,
            })
        };
        handleSubmit = (e)=>{
            e.preventDefault();
            const url='http://localhost:3000/contacts';

            const obj={
                name:this.state.input1,
                email:this.state.input2,
                msg:this.state.text,
                section:this.state.select
            };
            fetch(url,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(obj)
                })

        };
        render(){
            const style={
                display:'block',
                width:'350px',
                height:'50px',
                padding:'5px'
            };
            const btn={
                width:'100px',
                height:'50px',
                color:'grey',
                marginTop:'20px'
            };

            return (
                <div>
                    <form className='form'>
                        <h1>Formularz kontaktowy</h1>
                        <label>Imię i Nazwisko:
                            <input type='text' style={style} value={this.state.input1} onChange={this.handleClick1}/>
                        </label>
                        <label>Email:
                            <input type='email' style={style} value={this.state.input2} onChange={this.handleClick2}/>
                        </label>
                        <label>Dział:
                            <select value={this.state.select} onChange={this.handleSelect}>
                                <option>Konsultant</option>
                                <option>Projektant</option>
                                <option>Inwestor</option>
                                <option>Prezes</option>
                            </select>
                        </label>
                        <label>Wiadomość:
                            <textarea style={style} value={this.state.text} onChange={this.handleText}/>
                        </label>
                        <input type='submit' value='submit' style={btn} onClick={this.handleSubmit}/>
                    </form>
                </div>
            )
        }
    }
    class Link extends React.Component{
        render(){

            return (
                <div>
                    <p>Przydatne linki do materiałów budowlanych:</p>
                    <ul>
                        <li><a href='https://www.solbet.pl/'>Solbet</a></li>
                        <li><a href='http://www.leier.pl/3100_scienne_ceramiczne.php'>Leier</a></li>
                        <li><a href='https://www.ytong-silka.pl/'>Ytong</a></li>
                        <li><a href='https://www.isover.pl/'>Isover</a></li>
                    </ul>
                </div>
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
