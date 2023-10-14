import React from 'react'
import './propertyList.css'

const PropertyList = () => {
  return (
    <div className='pList'>
       <div className="pListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7iinST-ICS-awhD59ApWB4Ty4Y_CwwyHeQ&usqp=CAU" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>Star Hotels</h2>
            </div>
       </div>
       <div className="pListItem">
            <img src="https://collectiveclemson.b-cdn.net/wp-content/uploads/2023/07/The-Collective-at-Clemson-Off-Campus-Apartments-Near-Clemson-University-Fully-Furnished-2-Story-Floor-Plans-Living-Room-and-Kitchen-Guest-Half-Bath.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Apartments</h1>
                <h2>shelly Apartments</h2>
            </div>
       </div>
       <div className="pListItem">
            <img src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Resorts</h1>
                <h2>Alex Resorts</h2>
            </div>
       </div>
       <div className="pListItem">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxaO8Z45BJ3R1SAn5a3xOPpYqvK_jWpinrfQ&usqp=CAU" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Villas</h1>
                <h2>clemson Villas</h2>
            </div>
       </div>
       <div className="pListItem">
            <img src="https://static.wixstatic.com/media/3ffa1d_35ac4f6b1fa245858e61e527bbc011b0~mv2.jpg/v1/fill/w_1199,h_800,al_c/3ffa1d_35ac4f6b1fa245858e61e527bbc011b0~mv2.jpg" alt="" className="pListImg" />
            <div className="pListTitles">
                <h1>Cabins</h1>
                <h2>Carolina cabins</h2>
            </div>
       </div>
    </div>
  )
}

export default PropertyList