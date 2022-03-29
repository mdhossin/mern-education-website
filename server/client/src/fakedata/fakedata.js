import course1 from "../assets/images/courses-1.jpg";
import course2 from "../assets/images/courses-2.jpg";
import course3 from "../assets/images/courses-3.jpg";
import course4 from "../assets/images/courses-4.jpg";
import latest1 from "../assets/images/latest-1.jpg";
import latest2 from "../assets/images/latest-2.jpeg";
import latest3 from "../assets/images/latest-3.jpg";
import { BsPerson } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";

export const servicesData = [
  {
    id: 1,
    img: course1,
    name: "AFELL LIBERIA",
    title: "The Complete Shopify Aliexpress Dropship",
    rating: 4,
    price: 45,
    student: {
      personImg: <BsPerson className="icon" />,
      count: 77,
    },
  },
  {
    id: 2,
    img: course2,
    name: "JHON WICK",
    title: "The Real Estate Financial Modeling Bootcamp",
    rating: 3,
    price: 12,
    student: {
      personImg: <BsPerson className="icon" />,
      count: 22,
    },
  },
  {
    id: 3,
    img: course3,
    name: "MAISON LE LOU",
    title: "Microsoft SQL Server 2022 for Everyone Learning",
    rating: 5,
    price: 55,
    student: {
      personImg: <BsPerson className="icon" />,
      count: 30,
    },
  },
  {
    id: 4,
    img: course4,
    name: "PETER JACKSON",
    title: "Learn React JS and Web API by creating a Full Stack",
    rating: 4,
    price: 23,
    student: {
      personImg: <BsPerson className="icon" />,
      count: 11,
    },
  },
];

export const latestNews = [
  {
    id: 1,
    img: latest1,

    title: "How to Learn English Fast and Easy",
    desc: "Scelerisque ante platea nullam himenaeos quam sollicitudin ullamcorper sodales tristique",

    date: {
      dateLogo: <CgCalendarDates className="icon" />,
      time: "5 JULY 2022",
    },
  },
  {
    id: 2,
    img: latest2,

    title: "How to Learn Faster and Remember",
    desc: "Scelerisque ante platea nullam himenaeos quam sollicitudin ullamcorper sodales tristique",

    date: {
      dateLogo: <CgCalendarDates className="icon" />,
      time: "17 JULY 2022",
    },
  },
  {
    id: 3,
    img: latest3,

    title: "Online Courses from Top Universities",
    desc: "Scelerisque ante platea nullam himenaeos quam sollicitudin ullamcorper sodales tristique",

    date: {
      dateLogo: <CgCalendarDates className="icon" />,
      time: "17 JULY 2019",
    },
  },
];
