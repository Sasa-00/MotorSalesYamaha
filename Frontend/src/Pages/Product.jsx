import React, { useEffect, useState } from 'react'
import './../Styles/Product.css'
import { useInView } from 'react-intersection-observer';
import Modal from '../Components/Modal';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MuiAlert from '../Components/MuiAlert';

const options = {
    threshold: 0.5,
    triggerOnce: true
  }

const Product = () => {

    const [openModal, setOpenModal] = useState(false)
    const [openResponse, setOpenResponse] = useState(false)
    const [data, setData] = useState({})
    const [price, setPrice] = useState("")


    const params = useParams();

    useEffect(()=>{
        let service = "";
        if(window.location.href.includes("motorcycle")){
            service = 'motorcycle'
            setPrice("https://yamaha-barel.com/wp-content/uploads/2022/09/CENE-2022-MOTO.pdf")
        }
        if(window.location.href.includes("atv")){
            service = 'atv'
            setPrice("https://yamaha-barel.com/wp-content/uploads/2022/09/ATV-Cenovnik-SRB-MPC-2022-2023.pdf")
        }
        if(window.location.href.includes("scooter")){
            service = 'scooter'
            setPrice("https://yamaha-barel.com/wp-content/uploads/2022/09/CENE-2022-MOTO.pdf")
        }
        if(window.location.href.includes("nautical")){
            service = 'nautical'
            setPrice("https://yamaha-barel.com/wp-content/uploads/2022/06/Cenovnik-VNB-01.06.22.pdf")
        }
        axios.get(`http://localhost:3030/${service}/${params.id}` )
            .then(response => {
            setData(response.data)
            }).catch(function (error) {
            console.log(error);
            })
        window.scrollTo(0, 0)
        },[])

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
        <img ref={myRef1} className={divIsVisible1? 'visible product-img': 'product-img'} src={data.FirstImg} alt="" />
        <div ref={myRef2} className={divIsVisible2? 'visible product-first-div': 'product-first-div'}>
            <h1 className='product-title' >{data.Slogan}</h1>
            {
                data.Text?.map((detail) => {
                    return (<><p className='product-p'>{detail}</p><br/></>)
                })
            }
        </div>
        <img ref={myRef3} className={divIsVisible3? 'visible product-img': 'product-img'} src={data.SecondImg} alt="" />
        <div ref={myRef4} className={divIsVisible4? 'visible product-details-div': 'product-details-div'}>
            <h1 className='product-details-title'>Detalji</h1>
            <ul className='product-details-p'>
            {
                data.Details?.map((detail) => {
                    return (<><li>{detail}</li><br/></>)
                })
            }
            </ul>
        </div>
        <img ref={myRef5} className={divIsVisible5? 'visible product-img': 'product-img'} src={data.ThirdImg} alt="" />
        <h1 ref={myRef6} className={divIsVisible6? 'visible caracteristic-title': 'caracteristic-title'}>Bitne karakteristike</h1>
        <div ref={myRef7} className={divIsVisible7? 'visible caracteristic-div': 'caracteristic-div'}>
            <h3 className='caracteristic-subtitle'>{data.CharTitleOne}</h3>
            <p className='caracteristic-text'>{data.CharTextOne}</p>
        </div>
        <div ref={myRef8} className={divIsVisible8? 'visible caracteristic-div': 'caracteristic-div'}>
            <h3 className='caracteristic-subtitle'>{data.CharTitleTwo}</h3>
            <p className='caracteristic-text'>{data.CharTextTwo}</p>
        </div>
        <div ref={myRef9} className={divIsVisible9? 'visible caracteristic-div': 'caracteristic-div'}>
            <h3 className='caracteristic-subtitle'>{data.CharTitleThree}</h3>
            <p className='caracteristic-text'>{data.CharTextThree}</p>
        </div>
        <div className='div-btn'>
            <a target='_blank' href={price}><button className='product-btn'>PREUZMI CENOVNIK</button></a>
            <h2 className='product-emai-btn' onClick={() => setOpenModal(true)}>ZAKAŽI TERMIN</h2>
        </div>
        <Modal setOpenResponse={setOpenResponse} open={openModal} onClose={() => setOpenModal(false) } />
        <div className={openResponse ? "alert alert-visible" : "alert"} >
        <MuiAlert text={'Uspešno ste zakazali test vožnju u našem salonu!'} />
        </div>
    </div>
  )
}

export default Product