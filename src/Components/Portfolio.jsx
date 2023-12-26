/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mlsa-3.jpeg";

const imageAltText = "image with all passion wishlist";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "My College Website using Tailwind CSS 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain tailwind css website UI and tooling to get started.",
    url: "https://aishwarya1735.github.io/College-Website/",
  },
  {
    title: "Portfolio Website using beginner Web Development",
    description:
      "Contributed sketch note imagery to portfolio website. These help provide visual representation of what is being taught.",
    url: "https://aishwarya1735.github.io/profilewebpage/",
  },
  {
    title: "My Pastel Calculator",
    description:
      "Created a Pastel themed calculator and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://aishwarya1735.github.io/PastelCalculator/",
  },
  {
    title: "Using Flask built a to-do app",
    description:
      "Built to-do app using Flask with python",
    url: "https://aishwarya1735.github.io/Flask-todo/",
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
