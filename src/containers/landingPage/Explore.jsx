import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { Waves } from "../../components/svg/svg";
import book from '../../assets/img/book-rm.png';
import element from '../../assets/img/elem-bg.png';
import { courseData } from './../../data';

function Explore (){
  return(
  <section className="relative pb-10 bg-tag-section px-4 lg:px-0" style={{ backgroundImage: `url(${element})` }}>
    <Waves className="absolute bottom-0 -z-0 opacity-10" />
    <div className="max-w-6xl mx-auto z-50">
      <div className="max-w-3xl text-center mx-auto">
        <h2 className="tracking-wide leading-snug lg:leading-normal text-3xl md:text-4xl lg:text-5xl mb-5 font-bolder text-primary-900">
          Explore Courses
        </h2>
      </div>
      <div className="explore-content">
        
        <div
          className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5"
          data-aos="fade-up"
          data-aos-duration="1500">
        {courseData.courses.map((course) => (
              <div
                className="col-span-full sm:col-span-1 border rounded border-grayish-600 bg-primary-600 p-4 bg-grayish-ligh lg:my-5 flex flex-col space-y-4 hover:shadow-lg transition duration-300 ease-linear"
                key={course.id}
              >
                <div className="flex space-x-4 items-center">
                  <img
                    src={course.courseTrainerImage}
                    alt="teacher"
                    className="img-fluid rounded-full h-8 w-8 object-cover shadow"
                  />
                  <h5 className="text-sm font-bold tracking-wide">
                    {course.courseTrainerName}
                  </h5>
                </div>
                <p className="font-bold text-primary-amber text-center">
                  {course.courseName}
                </p>
                <div className="flex items-center flex-wrap justify-between">
                  <p className="flex space-x-2 items-center">
                    <FontAwesomeIcon icon={faBookOpen} size="xs" />
                    <span className="text-sm">{course.courseTopics} Courses</span>
                  </p>
                  <p className="flex space-x-2 items-center">
                    <FontAwesomeIcon icon={faFolderOpen} size="xs" />
                    <span className="text-sm">{course.courseLectures} Lectures</span>
                  </p>
                </div>
                <div className="book-cover relative ">
                  <img
                    src={book}
                    alt="book"
                    className="img-fluid w-full mt-3 rounded object- h-20 opacity-"
                  />
                  <p
                    className={`text-white bg-tag-blue absolute text-xs px-3 py-1  top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-2xl`}
                  >
                    {course.coursePrice}
                  </p>
                </div>
                <Link
              to=""
              className="text-primary-amber font-medium hover:underline"
            >
              Eplore!
            </Link>
              </div>
              
         ))}
          
        </div>
        {/* <div className="max-w-xl mx-auto text-center mt-4">
          <Button className="rounded-full !bg-primary-amber !py-3 ring ring-primary-900 ring-offset-2 shake-bottom text-center">
            <Link to="/courses">View All</Link>
          </Button>
        </div> */}
       
      </div>
    </div>
  </section>
);
}
export default Explore;
