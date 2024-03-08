import React from "react";
import { useState, useEffect } from "react";
import "../../src/StylingFiles/Pagination.css";
import taj from "../Images/tajhotel.jpeg";
import travel from "../Images/travel.webp";
export default function Service() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=30");
    const data = await res.json();
    if (data && data.products) {
      setProduct(data.products);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const selectPagehandler = (selectedpage) => {
    if (
      selectedpage >= 1 &&
      selectedpage <= product.length / 3 &&
      selectedpage !== page
    ) {
      setPage(selectedpage);
    }
  };
  return (
    <>
      <div className="container">
        <h4>The Impact of technology on the workspace:</h4>
        <h5>How technology is changing</h5>
        <br />
        {product.length === 0 && (
          <img src={taj} className="w-100 img-1" alt="not found" />
        )}
        {product.length > 0 &&
          product.slice(page * 1 - 1, page * 1).map((prod) => {
            return (
              <span>
                <img
                  className="w-100 img-1"
                  src={prod.thumbnail}
                  alt="image not found"
                ></img>
              </span>
            );
          })}
        <br />
        <p>
          Embarking on a journey is more than just traversing distances; it's a
          profound exploration of cultures, landscapes, and self-discovery. The
          anticipation builds with each step into the unknown, and the road
          becomes a storyteller, weaving tales of adventure and creating
          memories etched in time. Traveling unveils the beauty of diversity, as
          every destination unfolds a unique tapestry of traditions, flavors.
          <br />
          <br />
          It is a celebration of the extraordinary in the ordinary, where the
          joy lies not just in reaching a destination but in the transformative
          experiences along the way. Whether navigating bustling city streets or
          meandering through serene landscapes, each adventure is a chapter in
          the grand novel of life, expanding horizons and leaving an indelible
          mark on the soul.
        </p>
        <h2>Research Your Destination</h2>
        <p>
          Researching your destination is a crucial step in ensuring a smooth
          and enriching travel experience. Start by delving into reputable
          travel guides, both online and in print, to gather information on
          local attractions, cultural nuances, and recommended activities.
          Explore travel forums and blogs for firsthand experiences and valuable
          insights from fellow travelers. Utilize official tourism websites for
          up-to-date information on events, safety guidelines, and essential
          services. <br />
          <br />
          Take advantage of online maps to familiarize yourself with the
          geography of the area and pinpoint key landmarks. Engage with social
          media platforms to connect with locals or other travelers who can
          provide personalized recommendations. Keep abreast of travel
          advisories and check visa requirements to ensure a hassle-free
          journey. Ultimately, a well-researched destination plan allows you to
          make informed decisions, embrace the local culture, and make the most
          of your travel adventure.
        </p>
        <h2>Plan Your iternity</h2>
        <p>
          Crafting a well-thought-out itinerary is the cornerstone of a
          successful and fulfilling travel experience. Begin by outlining your
          priorities and interests, considering both must-see attractions and
          off-the-beaten-path gems. Allocate sufficient time for each activity,
          allowing room for spontaneity and unexpected discoveries. Strike a
          balance between sightseeing, cultural immersion, and relaxation,
          ensuring a diverse and enjoyable schedule. Research local cuisines and
          restaurants to savor authentic flavors, and plan meals around your
          daily activities. Incorporate downtime for rest and reflection,
          preventing burnout and fostering a deeper connection with the
          destination. <br />
          <br />
          Factor in transportation logistics, whether it's exploring on foot,
          using public transit, or renting a vehicle. Stay flexible, as
          unexpected opportunities often arise, enhancing the richness of your
          journey. Lastly, share your itinerary with fellow travelers or loved
          ones for safety, and keep a digital or printed copy handy.
        </p>
        <div className="div-2 col">
          "Explore the world, embrace the journey; for in travel, we find not
          just new places, but pieces of ourselves."
        </div>
        <br />
        <br />
        {product.length === 0 && (
          <img src={travel} className="w-100 img-1" alt="not found" />
        )}
        {product.length > 0 &&
          product.slice(page * 1 - 1 + 1, page * 1 + 1).map((prod) => {
            return (
              <span>
                <img
                  className="w-100 img-1"
                  src={prod.thumbnail}
                  alt="image not found"
                ></img>
              </span>
            );
          })}
        <br />
        <br />
        <h2>Pack Lightly and Smartly</h2>
        <p>
          Packing can be a daunting task, but with some careful planning and
          smart choices, you can pack light and efficiently. Start by making a
          packing list and sticking to it, focusing on versatile and comfortable
          clothing that can be mixed and matched. Invest in quality luggage and
          packing organizers to maximize space and minimize wrinkles.
        </p>
        <h2>Stay Safe and Healthy</h2>
        <p>
          Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy.
          This includes researching any required vaccinations or medications,
          staying hydrated, washing your hands frequently, and using sunscreen
          and insect repellent. It's also essential to keep your valuables safe
          and secure and to be aware of your surroundings at all times.
        </p>
        <h2>Immerse Yourself in the Local Culture</h2>
        <p>
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>

        <h2>Capture Memories</h2>
        <p>
          Finally, don't forget to capture memories of your journey. Whether
          it's through photographs, journaling, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it's also essential to be present in the
          moment and not let technology distract you from the beauty of your
          surroundings.
        </p>
      </div>
      <div>
        {product.length > 0 && (
          <div className="products">
            {product.slice(page * 3 - 3, page * 3).map((prod) => {
              return (
                <span>
                  <img
                    className="property"
                    src={prod.thumbnail}
                    alt="image not found"
                  ></img>
                </span>
              );
            })}
            <br />
            <br />
          </div>
        )}
        {product.length > 0 && (
          <div className="pagination">
            <span
              class={page > 1 ? "pagination1" : "disable pagination1"}
              onClick={() => {
                setPage(page - 1);
              }}
            >
              ⬅️
            </span>
            {[...Array(product.length / 3)].map((_, i) => {
              return (
                <span
                  className={
                    page === i + 1
                      ? "pagination_selected pagination1"
                      : "pagination1"
                  }
                  onClick={() => {
                    setPage(i + 1);
                  }}
                >
                  {i + 1}
                </span>
              );
            })}
            <span
              className={
                page < product.length / 3
                  ? "pagination1"
                  : "disable pagination1"
              }
              onClick={() => {
                setPage(page + 1);
              }}
            >
              ➡️
            </span>
          </div>
        )}
      </div>
    </>
  );
}
