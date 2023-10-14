import './header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBed, faCalendar, faCalendarDays, faCar, faLocation, faPerson, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons';
import { DateRangePicker } from 'react-date-range';
import { addDays, format} from 'date-fns';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {useNavigate} from "react-router-dom"
const Header = ({type}) => {
    const [destination,setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setdate] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
    ]);
    const [openOptions,setOpenOptions]=useState(false)
    const [options,setOptions]=useState({
        
            adults:1,
            children:0,
            room:1,

        
});
const navigate = useNavigate();

const handleSearch = () =>{
   navigate("/hotels", {state: { destination, date, options }});
}
  return (
    <div className='header'>
        <div className={type === "List" ? "headerContainer ListMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed}/>
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane}/>
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar}/>
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane}/>
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi}/>
                    <span>Airport Taxis</span>
                </div>
            </div>
            { type!=="List" &&
                <><h1 className="headerTitle">A lifetime of discounts?It's Genius.</h1>
            <p className="headerDesc">
                Get rewards for your travels - unlock instant savings of 15% or more with a free TravelPedia account
            </p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faLocation} className='headerIcon'/>
                    <input type='text' placeholder='Where are you going?' className='headerSearchInput' onChange={e=>setDestination(e.target.value)}/>
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
                    <span onClick={()=>setOpenDate(!openDate)}className='headerSearchDate'>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                    {openDate&&<DateRangePicker
                        onChange={item => setdate([item.selection])}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={date}
                        direction="horizontal"
                        className='date'
                        minDate={new Date()}/>};
                </div>
                <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
                    <span  onClick={()=>setOpenOptions(!openOptions)}className='headerSearchDate'>{`${options.adults} adults . ${options.children} children . ${options.room} room `}</span>
                    {openOptions&&<div className="options">
                        <div className="optionItem">
                            <span className='optionText'>Adults</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton" onClick={()=>{
                                    if(options.adults>1){
                                    setOptions(options=>
                                ({...options,adults:options.adults-1}))}
                                    }
                                }>-</button>
                                <span className="optionCounterNumber">{options.adults}</span>
                                <button className="optionCounterButton" onClick={()=>setOptions(options=>({...options,adults:options.adults+1}))} >+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className='optionText'>Children</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton" onClick={()=>{
                                    if(options.children>0){
                                    setOptions(options=>
                                ({...options,children:options.children-1}))}
                                    }
                                }>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterButton"
                                onClick={()=>setOptions(options=>({...options,children:options.children+1}))}>+</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <span className='optionText'>Room</span>
                            <div className="optionCounter">
                                <button className="optionCounterButton"
                                onClick={()=>{
                                    if(options.room>1){
                                    setOptions(options=>
                                ({...options,room:options.room-1}))}
                                    }
                                }>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterButton"
                                 onClick={()=>setOptions(options=>({...options,room:options.room+1}))}>+</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>Search</button>
                </div>
            </div></>}
        </div>
    </div>
  )
}

export default Header 