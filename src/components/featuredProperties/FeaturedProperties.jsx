import './featuredProperties.css'
import React from 'react'

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
            <img src="https://d1bb1mccaihlpl.cloudfront.net/variants/p4o43exqhp30qkb0uwku3ygygjfz/5495488087431af32265aaaaa1b8a274541d70555aa4d7c01d8d0fed27e7c152" alt="" className="fpimg" />
            <span className="fpname">Taj Banjara</span>
            <span className="fpcity">Hyderabad</span>
            <span className="fpprice">Starting from $120</span>
            <div className="fpRating">
                <button>4.9</button>
                <span>Excellent</span>
            </div>
      </div>
      <div className="fpItem">
            <img src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/jumeirah-beach-hotel/room/ocean-deluxe/jumeirah-beach-hotel-ocean-deluxe-room-4_16-9_landscape.jpg?h=1080&w=1920" alt="" className="fpimg" />
            <span className="fpname">Jumeirah Beach Hotel</span>
            <span className="fpcity">Dubai</span>
            <span className="fpprice">Starting from $300</span>
            <div className="fpRating">
                <button>4.6</button>
                <span>Excellent</span>
            </div>
      </div>
      <div className="fpItem">
            <img src="https://media.cnn.com/api/v1/images/stellar/prod/140127103354-peninsula-shanghai-actual-river-room.jpg?q=w_3320,h_2041,x_0,y_0,c_fill/w_1280" alt="" className="fpimg" />
            <span className="fpname">Hilton Hotels & Resorts</span>
            <span className="fpcity">Australia</span>
            <span className="fpprice">Starting from $190</span>
            <div className="fpRating">
                <button>4.2</button>
                <span>Very Good</span>
            </div>
      </div>
      <div className="fpItem">
            <img src="https://media.radissonhotels.net/image/radisson-blu-hotel-indore/guestroom/16256-116514-f64878631_3xl.jpg" alt="" className="fpimg" />
            <span className="fpname">Radison Blu Hotel</span>
            <span className="fpcity">Delhi</span>
            <span className="fpprice">Starting from $164</span>
            <div className="fpRating">
                <button>4.6</button>
                <span>Excellent</span>
            </div>
      </div>
    </div>
  )
}

export default FeaturedProperties