import './features.css'

const Featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
           <img src="https://www.ihcltata.com/content/dam/tajhotels/ihcl/taj/Taj-banner.jpg" className="featured" />
           <div className="featuredTitles">
            <h1>India</h1>
            <h2>Taj Properties</h2>
           </div>
        </div>
        <div className="featuredItem">
           <img src="https://www.telegraph.co.uk/content/dam/Travel/hotels/australia/new-south-wales/wolgan-valley-new-south-wales-australia-p.jpeg" alt="Indian-hotels" className="featured" />
           <div className="featuredTitles">
            <h1>Australia</h1>
            <h2>wales Properties</h2>
           </div>
        </div>
        <div className="featuredItem">
           <img src="https://www.telegraph.co.uk/content/dam/Travel/hotels/australia/new-south-wales/wolgan-valley-new-south-wales-australia-p.jpeg" className="featured" />
           <div className="featuredTitles">
            <h1>Dubai</h1>
            <h2>Hyatt Properties</h2>
           </div>
        </div>
    </div>
  )
}

export default Featured