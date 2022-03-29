import course1 from "../assets/images/courses-1.jpg";
import course2 from "../assets/images/courses-2.jpg";
import course3 from "../assets/images/courses-3.jpg";
import course4 from "../assets/images/courses-4.jpg";
import course5 from "../assets/images/courses-5.jpg";
import course6 from "../assets/images/courses-6.jpg";
import latest1 from "../assets/images/latest-1.jpg";

import latest2 from "../assets/images/latest-2.jpeg";
import latest3 from "../assets/images/latest-3.jpg";
import { BsPerson } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";

import user1 from "../assets/images/user-2.jpg";
import richard from "../assets/images/richard.jpg";
import tony from "../assets/images/tony.jpg";

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
  {
    id: 5,
    img: course5,
    name: "KATE HUDSON",
    title: "Learn Ethical Hacking from Scratch Your Stepping",
    rating: 1,
    price: 223,
    student: {
      personImg: <BsPerson className="icon" />,
      count: 15,
    },
  },
  {
    id: 6,
    img: course6,
    name: "Jhon Doe",
    title: "The Complete Salesforce Classic Administrator",
    rating: 1,
    price: 63,
    student: {
      personImg: <BsPerson className="icon" />,
      count: 5,
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

export const testimonialData = [
  {
    id: 0,
    imgurl: user1,
    name: "Animal Magnetism",
    feedback:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    company: "",
  },
  {
    id: 1,
    imgurl: richard,
    name: "Richard",
    feedback:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    company: "",
  },
  {
    id: 2,
    imgurl: tony,
    name: "Tony Stern",
    feedback:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    company: "",
  },
];
