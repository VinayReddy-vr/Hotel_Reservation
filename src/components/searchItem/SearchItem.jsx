import './searchItem.css'

const SearchItem = () => {
  return (
   <div className="searchItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tdC46nbTVEoPoX_AtU_n-368wFtowAmcuA&usqp=CAU" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Aparna Apartments</h1>
                <span className="siDistance">1km from the center</span>
                <span className="siTaxiOp">Free airport Taxi</span>
                <span className="siSubTitle">
                    Studio Aptartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio .2 bathroom .king size bed
                </span>
                <span className="siCancelOp">
                    Free cancellation
                </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, lock this great price today hurry!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>4.7</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$150</span>
                    <span className="siTaxOp">Includes taxes and fees</span>
                    <button className="siCheckButton">See availability</button>
                </div>
            </div>
   </div>
  )
}

export default SearchItem