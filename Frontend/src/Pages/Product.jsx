import React, { useState } from 'react'
import './../Styles/Product.css'
import { useInView } from 'react-intersection-observer';
import Modal from '../Components/Modal';

const options = {
    threshold: 0.5,
    triggerOnce: true
  }

const Product = () => {

    const [openModal, setOpenModal] = useState(false)

    const { ref: myRef1, inView: divIsVisible1 } = useInView(options);
    const { ref: myRef2, inView: divIsVisible2 } = useInView(options);
    const { ref: myRef3, inView: divIsVisible3 } = useInView(options);
    const { ref: myRef4, inView: divIsVisible4 } = useInView(options);
    const { ref: myRef5, inView: divIsVisible5 } = useInView(options);
    const { ref: myRef6, inView: divIsVisible6 } = useInView(options);
    const { ref: myRef7, inView: divIsVisible7 } = useInView(options);
    const { ref: myRef8, inView: divIsVisible8 } = useInView(options);
    const { ref: myRef9, inView: divIsVisible9 } = useInView(options);

  return (
    <div className='product-container'>
        <img ref={myRef1} className={divIsVisible1? 'visible product-img': 'product-img'} src="https://cdn2.yamaha-motor.eu/prod/product-assets/2022/XP500ADX/2022-Yamaha-XP500ADX-EU-Dark_Petrol-Action-001-03.jpg" alt="" />
        <div ref={myRef2} className={divIsVisible2? 'visible product-first-div': 'product-first-div'}>
            <h1 className='product-title' >Pravo do MAX.</h1>
            <p className='product-p'>Simbol Yamahe – radikalno poboljšan!
                <br/>
                Opremljen instrumentima koji su povezani sa najvišim specifikacijama ikada predstavljenim na Yamaha skuteru.
                <br/>
                Vrhunski TFT ekran u boji od 7 inča nudi izbor između tri stila prikaza, dok preko Yamaha MyRide aplikacije možete pristupiti MyRide Link-u, koji omogućava povezivanje sa T-MAX-om, dajući vašem pametnom telefonu pristup muzici, vremenu, obaveštenjima i još mnogo toga.
                <br/>
                Uz Garmin navigaciju, dolazak do odredišta je brži i lakši.
                <br/>
                Zahvaljujući oštrijem novom dizajnu sa radikalno novim prednjim delom, T-MAX je najdinamičniji i najprivlačniji sportski skuter ikada napravljen od strane Yamahe.
                Nova prednja maska i minimalni dupli farovi daju ovom T-MAX-u izgled inspirisan motociklima iz segmenta supersporta, dok ga poboljšana ergonomija čini najudobnijim načinom kretanja.
                A moćni EURO5 motor od 560ccm od 35kW i ultra-glatki CVT menjač daju vam performanse motocikla uz udobnost skutera.
            </p>
        </div>
        <img ref={myRef3} className={divIsVisible3? 'visible product-img': 'product-img'} src="https://cdn2.yamaha-motor.eu/prod/product-assets/2022/XP500ADX/2022-Yamaha-XP500ADX-EU-Dark_Petrol-Action-002-03_Tablet.jpg" alt="" />
        <div ref={myRef4} className={divIsVisible4? 'visible product-details-div': 'product-details-div'}>
            <h1 className='product-details-title'>Detalji</h1>
            <p className='product-details-p'>
            ◌   Novi povezani TFT ekran, puna navigacija na mapi<br/><br/>
            ◌   560cc EURO5 motor<br/><br/>
            ◌   Novi sportski i dinamični dizajn karoserije<br/><br/>
            ◌   Novi far, sa integrisanim pokazivačima pravca<br/><br/>
            ◌   Poboljšana ergonomija za vozača i putnika<br/><br/>
            ◌   Električno podesivo vetrobransko staklo sa memorijom<br/><br/>
            ◌   Regulator brzine<br/><br/>
            ◌   Grejane ručke i sedište<br/><br/>
            ◌   Najbolje u klasi premium specifikacije<br/><br/>
            ◌   Pametni ključ za paljenje bez ključa<br/><br/>
            ◌   Lagani aluminijumski okvir<br/><br/>
            ◌   Sofisticirane elektronske tehnologije upravljanja<br/><br/>
            ◌   Prostrani odeljak za skladištenje<br/><br/>
            ◌   Centralno postolje sa električnom bravom protiv krađe<br/><br/>
            </p>
        </div>
        <img ref={myRef5} className={divIsVisible5? 'visible product-img': 'product-img'} src="https://cdn2.yamaha-motor.eu/prod/product-assets/2022/XP500ADX/2022-Yamaha-XP500ADX-EU-Dark_Petrol-Action-009-03.jpg" alt="" />
        <h1 ref={myRef6} className={divIsVisible6? 'visible caracteristic-title': 'caracteristic-title'}>Bitne karakteristike</h1>
        <div ref={myRef7} className={divIsVisible7? 'visible caracteristic-div': 'caracteristic-div'}>
            <h3 className='caracteristic-subtitle'>Novi farovi, sa integrisanim pokazivačima pravca</h3>
            <p className='caracteristic-text'>Pogledajte novo lice i shvatićete da to može biti samo TMAX Tech MAX! Dvostruka prednja svetla sa integrisanim pokazivačima pravca daju agresivniji izgled, dok novi dizajn farova sa jednostrukim sočivom generiše moćan svetlosni snop. Da bi se naglasio novi dinamični izgled ovog kultnog sportskog skutera, tu je potpuno novo zadnje svetlo T-dizajna sa integrisanim pokazivačima pravca.</p>
        </div>
        <div ref={myRef8} className={divIsVisible8? 'visible caracteristic-div': 'caracteristic-div'}>
            <h3 className='caracteristic-subtitle'>Novi sportski i dinamični dizajn</h3>
            <p className='caracteristic-text'>Dizajn TMAX Tech MAX-a inspirisan je svetom Yamaha supersportskih motocikala zahvaljujući novom aerodinamičkom telu. Tanji dvostruki LED farovi i nova aerodinamična krila su najkarakterističniji za TMAX Tech MAX. Lagani SpinForged točkovi i upravljač od kovanog aluminijuma naglašavaju vrhunske specifikacije ovog sportskog skutera.</p>
        </div>
        <div ref={myRef9} className={divIsVisible9? 'visible caracteristic-div': 'caracteristic-div'}>
            <h3 className='caracteristic-subtitle'>Novi sportski i dinamični dizajn</h3>
            <p className='caracteristic-text'>Dizajn TMAX Tech MAX-a inspirisan je svetom Yamaha supersportskih motocikala zahvaljujući novom aerodinamičkom telu. Tanji dvostruki LED farovi i nova aerodinamična krila su najkarakterističniji za TMAX Tech MAX. Lagani SpinForged točkovi i upravljač od kovanog aluminijuma naglašavaju vrhunske specifikacije ovog sportskog skutera.</p>
        </div>
        <div className='div-btn'>
            <a target='_blank' href="https://yamaha-barel.com/wp-content/uploads/2022/09/CENE-2022-MOTO.pdf"><button className='product-btn'>PREUZMI CENOVNIK</button></a>
            <h2 className='product-emai-btn' onClick={() => setOpenModal(true)}>ZAKAŽI TERMIN</h2>
        </div>
        <Modal open={openModal} onClose={() => setOpenModal(false) } />
    </div>
  )
}

export default Product