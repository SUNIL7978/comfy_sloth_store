import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { GiDiamondHard } from "react-icons/gi";
import { MdWorkHistory } from "react-icons/md";

export const links = [
  {
    id: 1,
    url: "/",
    text: "Home",
  },
  {
    id: 2,
    url: "/about",
    text: "About",
  },
  {
    id: 3,
    url: "/products",
    text: "Products",
  },
];

export const services = [
  {
    id: 1,
    icon: <FaMapMarkedAlt />,
    title: "Mission",
    text: "Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "Career",
    text: "Do you have a passion for décor, and the drive to back it? We're looking for people like you to work with us! If you're interested in pursuing a career with comfy sloth, please write in to comfySloth@gmail.com.",
  },
  {
    id: 3,
    icon: <MdWorkHistory />,
    title: "History",
    text: "You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
