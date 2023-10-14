import './list.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import {useLocation} from "react-router-dom"
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange, DateRangePicker } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem'

const List = () => {
  const location = useLocation()
  console.log(location);
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options) 
  const [openDate, setOpenDate] = useState(false)
  return (
    <div>
      <Navbar/>
      <Header type="List"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
             <div className="listItem">
              <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
              {openDate&&<DateRange
                        onChange={item => setDate([item.selection])}
                        ranges={date}
                        minDate={new Date()}
               />} 
             </div>
             <div className="listItem">
              <label>Options</label>
              <div className="listOptionItem">
                <span className="listOptionText">
                  Min price <small>per night</small>
                </span>
                <input type='number' className='listOptionsInput'/>
              </div>
              <div className="listOptionItem">
                <span className="listOptionText">
                  Max price <small>per night</small>
                </span>
                <input type='number' className='listOptionsInput'/>
              </div>
              <div className="listOptionItem">
                <span className="listOptionText">
                 Adult
                </span>
                <input type="number" min={1} placeholder={options.adults} className='listOptionsInput'/>
              </div>
              <div className="listOptionItem">
                <span className="listOptionText">
                  Children
                </span>
                <input type="number" min={0} placeholder={options.children}className='listOptionsInput'/>
              </div>
              <div className="listOptionItem">
                <span className="listOptionText">
                 Room
                </span>
                <input type="number" min={1}placeholder={options.room}className='listOptionsInput'/>
              </div>
             </div>
             <button>Search</button>
             </div>
             <div className="listResults">
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
             </div>
        </div>
      </div>
    </div>
  )
}

export default List