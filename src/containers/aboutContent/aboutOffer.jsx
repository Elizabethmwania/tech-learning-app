import React from 'react'
import { aboutOfferData } from './../../data'

function AboutOffer(){
  return(
  <div className="grid sm:grid-cols-2 gap-8 lg:grid-cols-3 mt-12 mb-16 lg:mb-28 relative">
    {aboutOfferData.aboutOffers.map((aboutOffer) => (
    <div
      className="sm:col-span-1 col-span-full"
      data-aos="flip-right"
      data-aos-delay="100"
    >
      <div className=" p-4 rounded-r-lg border border-l-8 border-grayish-600 relative">
                 
        <span className="flex absolute -right-3 -top-8 md:-right-4 lg:-top-6">
          {/* <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-grayish-light"></span> */}
          <span className="relative inline-flex rounded-full p-3 md:px-4 md:py-3 bg-gray-100" key={aboutOffer.id}>
            <img
              src={aboutOffer.aboutOfferIcon}
              alt="icon"
              className="w-6 h-6 object-contain md:w-8 md:h-8 img-fluid"
            />
          </span>
        </span>
        <div>
          <h2 className="text-base font-bold text-primary-900 mb-2">
            {aboutOffer.aboutOfferTitle}
          </h2>
          <p className="text-xs font-medium">
            {aboutOffer.aboutOfferDetails}
          </p>
        </div>
                 
      </div>
    </div>
   ))}
  </div>
); 
}
export default AboutOffer;
