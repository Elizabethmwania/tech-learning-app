import { Link } from 'react-router-dom';
import { discoverData } from './../../data'
function Discover () {
  return(
  <section className="py-16">
    <div className="max-w-6xl mx-auto px-4">
      <div className="offer_content">
        <div className="text-center max-w-3xl mx-auto  lg:px-0">
          <h5 className="text-white bg-white bg-opacity-20 rounded-full uppercase font-bold py-2 px-4 inline text-sm">
            Education for everyone
          </h5>
          <h2 className="tracking-wide leading-normal my-3 lg:leading-normal text-3xl md:text-4xl lg:text-5xl font-bolder text-primary-900">
            Discover How TechGurus Works
          </h2>
          <p className="text-grayish-600 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5 max-h-full py-4 mt-8">
              {discoverData.discovers.map((discover) => (
          <div
            className="col-span-full md:col-span-1 flex flex-col space-y-4 bg-primary-600 p-4 justify-center items-center border border-primary-fade rounded"
            data-aos="flip-up"
            data-aos-delay="100"
            
          >
            <div className="icon-box" key={discover.id}>
              <img src={discover.discoverIcon} alt="icon" className="img-fluid" />
            </div>
            <h3 className="font-bold tracking-wide text-primary-900 text-center">
              {discover.discoverTitle}
            </h3>
            <p className="text-grayish-600 text-sm text-center">
              {discover.discoverDetails}
            </p>
            <Link
              to="/sign-in"
              className="text-primary-amber font-medium hover:underline"
            >
              Start Now!
            </Link>
          </div>
              ))}
        </div>
      </div>
    </div>
  </section>

);
}
export default Discover;