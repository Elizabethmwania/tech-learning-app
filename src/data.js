import { v4 as uuid } from 'uuid';
import icon1 from "./assets/img/icon-8.png";
import icon2 from "./assets/img/icon-6.png";
import icon3 from "./assets/img/icon-7.png";
import icon4 from './assets/img/icon-1.png';
import icon5 from './assets/img/icon-2.png';
import icon6 from './assets/img/icon-3.png';
import icon7 from './assets/img/icon-4.png';
import trainer from "./assets/img/teacher.png";
import cover1 from './assets/img/bc-1.jpg';
import cover2 from './assets/img/bc-2.jpg';
import cover3 from './assets/img/bc-3.jpg';
import cover4 from './assets/img/bc-4.jpg';
import trainer11 from './assets/img/teacher.jpg';
import trainer1 from './assets/img/teacher-2.jpg';
import trainer2 from './assets/img/teacher-3.jpg';
import trainer3 from './assets/img/teacher-4.jpg';
import trainer4 from './assets/img/teacher-5.jpg';

// import cover5 from './assets/img/bc-5.jpg';
// import cover6 from './assets/img/bc-6.jpg';
// import cover7 from './assets/img/bc-7.jpg';




const data = [
    {

    }

]
export const courseData = {
  courses: [
    {
      id: uuid(),
      courseTrainerImage: trainer,
      courseTrainerName: 'Elizabeth Mwania',
      courseName: 'Blockchain',
      courseTopics: '6',
      courseLectures: '12',
      coursePrice: 'Free',
      courseTagColor: 'bg-tag-pop',
      courseTag: 'Popular',
      courseCover: cover1,
      courseColor: 'bg-tag-yellow'
    },
    {
      id: uuid(),
      courseTrainerImage: trainer,
      courseTrainerName: 'Fred Namisi',
      courseName: 'Data Science',
      courseTopics: '6',
      courseLectures: '12',
      coursePrice: 'Free',
      courseTagColor: 'bg-tag-pop',
      courseTag: 'Popular',
      courseCover: cover2,
      courseColor: 'bg-tag-green'
    },
    {
      id: uuid(),
      courseTrainerImage: trainer,
      courseTrainerName: 'Francis Mwangi',
      courseName: 'Application Development',
      courseTopics: '6',
      courseLectures: '12',
      coursePrice: 'Free',
      courseTagColor: 'bg-tag-pop',
      courseTag: 'Popular',
      courseCover: cover3,
      courseColor: 'bg-tag-green'
    },
    {
      id: uuid(),
      courseTrainerImage: trainer,
      courseTrainerName: 'Fred Namisi',
      courseName: 'Machine Learning',
      courseTopics: '6',
      courseLectures: '12',
      coursePrice: 'Free',
      courseTagColor: 'bg-tag-pop',
      courseTag: 'Popular',
      courseCover: cover4,
      courseColor: 'bg-tag-blue'
    },

  ], 

};
export const discoverData = {
  discovers: [
    {
      id: uuid(),
      discoverIcon: icon4,
      discoverTitle: 'Create an Account',
      discoverDetails: 
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero praesentium. Eveniet temporibus nisi, sapiente sit placeat ullam repellat alias soluta iste.',
    },
    {
      id: uuid(),
      discoverIcon: icon5,
      discoverTitle: 'Browse Course',
      discoverDetails: 
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero praesentium. Eveniet temporibus nisi, sapiente sit placeat ullam repellat alias soluta iste.',
    },
    {
      id: uuid(),
      discoverIcon: icon6,
      discoverTitle: 'Learn at your pace',
      discoverDetails: 
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero praesentium. Eveniet temporibus nisi, sapiente sit placeat ullam repellat alias soluta iste.',
    },
    {
      id: uuid(),
      discoverIcon: icon7,
      discoverTitle: 'Connect to employers',
      discoverDetails: 
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero praesentium. Eveniet temporibus nisi, sapiente sit placeat ullam repellat alias soluta iste.',
    },
  ],
};
export const aboutOfferData = {
  aboutOffers: [
     {
      id: uuid(),
      aboutOfferIcon: icon1,
      aboutOfferTitle: 'Learn a course',
      aboutOfferDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero praesentium. Eveniet temporibus nisi, sapiente sit placeat ullam repellat alias soluta iste.',
    },
     {
      aboutOfferIcon: icon2,
      aboutOfferTitle: 'Be an expert',
      aboutOfferDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero praesentium. Eveniet temporibus nisi, sapiente sit placeat ullam repellat alias soluta iste.',
    },
    {
      id: uuid(),
      aboutOfferIcon: icon3,
      aboutOfferTitle: 'Land your dream job',
      aboutOfferDetails:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, vero praesentium. Eveniet temporibus nisi, sapiente sit placeat ullam repellat alias soluta iste.',
    },
  ],
};

export const teachersData = {
  teachers: [
    {
      id: uuid(),
      name: 'Mr Mwangi',
      image: trainer1,
      description: 'A brief info about the teacher here.'
    },
    {
    id: uuid(),
      name: 'Mr Mwania',
      image: trainer2,
      description: 'A brief info about the teacher here.'
    },
    {
    id: uuid(),
      name: 'Mrs Mwania',
      image: trainer3,
      description: 'A brief info about the teacher here.'
    },
    {
    id: uuid(),
      name: 'Dr Manu',
      image: trainer4,
      description: 'A brief info about the teacher here.'
    },
    {
    id: uuid(),
      name: 'Prof Cate',
      image: trainer11,
      description: 'A brief info about the teacher here.'
    },
  ],
};
export default data;