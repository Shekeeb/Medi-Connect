import React from 'react'

const Biography = ({ imageUrl }) => {
  return (
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt="about" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are?</h3>
        <p>
          Mediconnect Hospital offers exceptional medical care with a focus on excellence, compassion, and innovation. Our modern facility and skilled staff provide personalized treatment across specialties, prioritizing patient comfort and safety for optimal recovery.</p>
        <br />
        <p>
          Mediconnect Hospital is a beacon of hope and compassion, dedicated to promoting better health and wellness in our community. With unwavering excellence, we proudly serve as a trusted partner in healthcare.</p>
      </div>

    </div>
  )
}

export default Biography