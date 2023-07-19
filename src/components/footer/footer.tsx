import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/contentWrapper";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Welcome to our Movies and TV Shows Application! Explore a wide
          selection of movies and TV shows, and find your next favorite
          entertainment content. Our platform offers a vast collection of titles
          across various genres, ensuring there's something for everyone.
          Discover new releases, popular series, timeless classics, and much
          more. Immerse yourself in captivating stories, brilliant performances,
          and cinematic adventures. Whether you're a fan of thrilling action
          movies, heartwarming dramas, hilarious comedies, or gripping TV shows,
          our application has it all. Indulge in the world of entertainment and
          enhance your viewing experience. Stay up to date with the latest
          releases, browse through our extensive catalog, and create your own
          personalized watchlist. Dive into the world of movies and TV shows
          with our user-friendly interface and seamless navigation. Start your
          journey now and unlock a world of endless entertainment possibilities.
          Sit back, relax, and enjoy the magic of movies and TV shows on our
          application! Happy watching!
        </div>
        <div className="socialIcons">
          <span className="icon">
            <FaFacebookF />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
