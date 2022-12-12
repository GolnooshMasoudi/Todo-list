import React from "react";
import FooterList from "./FooterList";

const Footer = () => {
  const linkList = [
    {
      link1: "Shop and Learn",
      link2: "Store",
      link3: "Mac",
      link4: "iPad",
    },

    {
      link1: "Services",
      link2: "Apple Music",
      link3: "Apple TV+",
      link4: "Apple Fitness+",
    },

    {
      link1: "Apple Store",
      link2: "Find a Store",
      link3: "Genius Bar",
      link4: "Today at Apple",
    },

    {
      link1: "Shop and Learn",
      link2: "Store",
      link3: "Mac",
      link4: "iPad",
    },
  ];

  return (
    <footer>
      {linkList.map((item, index) => (
        <FooterList key={index} {...item} />
      ))}
    </footer>
  );
};

export default Footer;
