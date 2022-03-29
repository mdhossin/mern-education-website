import course1 from "../assets/images/courses-1.jpg";
import course2 from "../assets/images/courses-2.jpg";
import course3 from "../assets/images/courses-3.jpg";
import course4 from "../assets/images/courses-4.jpg";
import { BsPerson } from "react-icons/bs";

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
