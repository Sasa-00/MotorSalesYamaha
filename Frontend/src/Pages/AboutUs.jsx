import React from 'react'
import './../Styles/About.css'
import about1 from './../Assets/about/about1.jpg'
import about2 from './../Assets/about/about2.jpg'
import about3 from './../Assets/about/about3.jpg'
import about4 from './../Assets/about/about4.jpg'
import about5 from './../Assets/about/about5.jpg'
import about6 from './../Assets/about/about6.jpg'
import about7 from './../Assets/about/about7.jpg'
import about8 from './../Assets/about/about8.jpg'
import about9 from './../Assets/about/about9.jpg'

const AboutUs = () => {
  return (
    <div className='about-gradient'>
      <div className='about-container'>
        <h1 className='about-title'>Naša Priča</h1>
        <br />
        <hr />
        <br /><br />
        <div className='about-card'>
          <img className='about-card-img' src={about1} alt="motorcycle" />
          <div className='about-card-div'>
            <h1 className='about-card-year'>1955</h1>
            <h3 className='about-card-title'>YA-1 Motocikl</h3>
            <p className='about-card-p'>Prvi Yamahin motorizirani proizvod bio je motocikl YA-1 (125cc, 2-taktni, jednocilindrični, ulični bicikl). Pod nadimkom "Crveni vilin konjic", proizveden je i prodavan u Japanu. Potpuno novi YA-1 pobijedio je u prve dvije trke u kojima je učestvovao te godine.</p>
          </div>
        </div>
        <div className='about-card'>
          <img className='about-card-img' src={about2} alt="motorcycle" />
          <div className='about-card-div'>
            <h1 className='about-card-year'>1958</h1>
            <h3 className='about-card-title'>Motocikl YD1</h3>
            <p className='about-card-p'>Prve Yamaha motocikle prodate u SAD-u je uvezao Cooper Motors, nezavisni distributer. Modeli su bili YD1 (250cc, 2-taktni, dvocilindrični, streetbike) i MF-1 (50cc, 2-taktni, jednocilindrični, streetbike, step-through). Yamaha ulazi u svijet međunarodnih utrka takmičeći se na Grand Prixu Catalina u Kaliforniji. U ovom prvom pokušaju protiv iskusnih svjetskih trkaćih mašina, Yamaha je zauzela impresivno 6. mjesto. Ova utrka je bila prva utrka japanskog motocikla u SAD-u.</p>
          </div>
        </div>
        <div className='about-card'>
          <img className='about-card-img' src={about3} alt="motorcycle" />
          <div className='about-card-div'>
            <h1 className='about-card-year'>1960</h1>
            <h3 className='about-card-title'>Yamahin prvi vanbrodski motor</h3>
            <p className='about-card-p'>Yamaha predstavlja svoj prvi vanbrodski motor, P-7, za japansko tržište. Ubrzo je zamijenjen sofisticiranijim i kompaktnijim modelom P-3. Oba su imala prepoznatljive, jarko žute navlake. Yamaha International Corporation počela je prodavati motocikle u SAD-u, kao i Yamahine legendarne muzičke instrumente.</p>
          </div>
        </div>
        <div className='about-card'>
          <img className='about-card-img' src={about4} alt="motorcycle" />
          <div className='about-card-div'>
            <h1 className='about-card-year'>1961</h1>
            <h3 className='about-card-title'>World Grand Prix, RND 3</h3>
            <p className='about-card-p'>Yamahino prvo pojavljivanje u svjetskim GP cestovnim utrkama u 3. kolu VN Francuske. Zauzeo je 6. mjesto u klasi World GP 250cc u 4. kolu TT utrke Isle of Man u Britaniji.</p>
          </div>
        </div>
        <div className='about-card'>
          <img className='about-card-img' src={about5} alt="motorcycle" />
          <div className='about-card-div'>
            <h1 className='about-card-year'>1963</h1>
            <h3 className='about-card-title'>Yamaha sarađuje sa Toyotom</h3>
            <p className='about-card-p'>Yamaha sarađuje sa Toyotom na razvoju i proizvodnji Toyote 2000GT sportskog automobila. Modifikovani kabriolet 2000GT prikazan je u filmu o Džejmsu Bondu iz 1967. godine “You Only Live Twice”. Yamaha osvaja svoju prvu pobjedu u klasi 250cc na Grand Prixu u Daytoni.</p>
          </div>
        </div>
        <div className='about-card'>
          <img className='about-card-img' src={about6} alt="motorcycle" />
          <div className='about-card-div'>
            <h1 className='about-card-year'>1968</h1>
            <h3 className='about-card-title'>Yamaha prva motorna sanka</h3>
            <p className='about-card-p'>Predstavljen je prvi Yamahin motor za sanke, SL350 (2-taktni, dvocilindrični). Ovo je bila prva motorna sanka sa karburatorima sa kliznim ventilom. DT-1 Enduro je predstavljen. Prvi motocikl dvostruke namjene na svijetu imao je sposobnost vožnje i van nje. Njegov uticaj na motociklizam u SAD bio je ogroman.</p>
          </div>
        </div>
        <div className='about-card'>
          <img className='about-card-img' src={about7} alt="motorcycle" />
          <div className='about-card-div'>
            <h1 className='about-card-year'>1970</h1>
            <h3 className='about-card-title'>Yamahin prvi 4-taktni motocikl</h3>
            <p className='about-card-p'>Predstavljen je prvi Yamahin 4-taktni model motocikla, XS-1 (650cc vertikalni twin). Proizvodnja modela XS650 nastavila bi se kroz 1983. modelsku godinu, a motocikl je danas favoriziran kod kupaca.</p>
          </div>
        </div>
        <div className='about-card'>
          <img className='about-card-img' src={about8} alt="motorcycle" />
          <div className='about-card-div'>
            <h1 className='about-card-year'>1980</h1>
            <h3 className='about-card-title'>Cypress, CA</h3>
            <p className='about-card-p'>Nova kancelarija Yamaha Motor Corporation, SAD, otvorena je u Cypressu u Kaliforniji. Prvi Yamaha ATV sa 3 točka se prodaje u SAD... Tri-Moto (YT125). Predstavljen je G1-E model Golf automobila na električni pogon.</p>
          </div>
        </div>
        <div className='about-card'>
          <img className='about-card-img' src={about9} alt="motorcycle" />
          <div className='about-card-div'>
            <h1 className='about-card-year'>2008</h1>
            <h3 className='about-card-title'>MotoGP trostruka kruna</h3>
            <p className='about-card-p'>Yamaha osvaja MotoGP trostruku krunu šampionata proizvođača, timova i vozača. Yamahin vlasnički NanoXcel predstavljen je za WaveRunner trupove i palube. Konstruiran je korištenjem vrhunske nano-tehnologije za proizvodnju plovila koje je lakše i jače od konvencionalnih tehnologija.</p>
          </div>
        </div>
        <h3 className='about-last'>Ispiši istoriju sa nama...</h3>
      </div>
    </div>
  )
}

export default AboutUs
