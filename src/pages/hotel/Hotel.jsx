import './Hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
import { useState } from 'react'

const Hotel = () => {

  const [slideNumber,setSlideNumber] = useState(0);
  const[open,setOpen] = useState(false)

  const photos = [
    {
      src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6zMUsEXCM22dy2qB_IWLeparNnbojZIHehw&usqp=CAU"
    },
    {
      src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq07PTtGFsrHn8196eixaljZkuQ5L77KCanQ&usqp=CAU"
    },
    {
      src : "https://hips.hearstapps.com/hmg-prod/images/edc040123house-call-herrero-007-64075a1657fdb.jpg"
    },
    {
      src : "https://www.thespruce.com/thmb/_wKNDMNEiBpkgSxsbzN17S18Flo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/NevaInteriorDesign-ae1442c5ee6b42fdb4fe39a99fe6f8b3.jpeg"
    },
    {
      src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrd8I1sre7oXyWCLDG3aJwGvQGXBvfQ2xI_A&usqp=CAU"
    },
    {
      src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS44MTMbHulu72ZMlSSMy5SCfl6Fg2Do8OtFQw4jmtps4KgcVn6BdbTa46brU9NJvlNxoQ&usqp=CAU"
    },
   
  ]

  const handleOpen = (i)=> {
    setSlideNumber(i);
    setOpen(true);
  }

  const handleMove = (direction) =>{
    let newSlideNumber;
    if(direction==="l")
    {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }
    setSlideNumber(newSlideNumber);
  };
  return (
    <div>
      <Navbar/>
      <Header type="List"/>
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(!open)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")}/>
           <div className="sliderWrapper">
             <img src={photos[slideNumber].src} alt="" className="sliderImg" />
           </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow'
          onClick={()=>handleMove("r")}/>

          </div>}
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className="hotelTitle">Abarnati Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Shivaji nagar st 100 Delhi</span>
          </div> 
          <span className="hotelDistance">
            Excellent location - 1km from center
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over $150 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
             {photos.map((photo,i)=>(
              <div className="hotelImgWrapper">
                <img src={photo.src} onClick={()=>handleOpen(i)} alt="" className="hotelImg" />
              </div>
             ))} 
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of delhi</h1> 
              <p className="hotelDesc">The Taj Mahal Hotel in New Delhi offers a range of luxurious room options. All rooms feature air conditioning and flat-screen TVs with cable channels. Complimentary high-speed internet keeps guests connected. A well-stocked mini-bar provides refreshments, while premium bedding ensures a restful sleep. Spacious en-suite bathrooms come with modern fixtures and plush toiletries. Electronic safes enhance security, and 24-hour room service offers dining in-room. Work desks cater to business travelers, and the rooms may offer scenic city or garden views. These well-appointed spaces blend modern convenience with classic elegance, providing a comfortable and inviting retreat for a memorable stay.</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 7-night stay!</h1>
              <span>
                Located in the heart of Delhi, this property has an excellent location score of 4.8!
              </span>
              <h2>
                <b>$600</b> (7 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
         <MailList/>
         <Footer/>
      </div>
    </div>
  )
}

export default Hotel