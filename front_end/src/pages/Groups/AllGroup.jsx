import "./AllGroup.css";
import "../home/home.css";
import React from "react";
import "../../components/feed/feed.css";




export default function AllGroup() {
    return (
        
        <div className="feed">
        <div className="partners">
        <figure className="snip1336">
          <img src="./image/bgpartner1.jpg" alt="Partner" />
          <figcaption>

            <h2>
              Name Group<span>No. of member</span>
            </h2>
           
            <a href="products.html" className="info">
             Join To Group
            </a>
          </figcaption>
        </figure>
       

        <figure className="snip1336">
        <img src="./image/bgpartner1.jpg" alt="Partner" />
        <figcaption>

          <h2>
            Name Group<span>No. of member</span>
          </h2>
         
          <a href="products.html" className="info">
           Join To Group
          </a>
        </figcaption>
      </figure>


      <figure className="snip1336">
      <img src="./image/bgpartner1.jpg" alt="Partner" />
      <figcaption>

        <h2>
          Name Group<span>No. of member</span>
        </h2>
       
        <a href="products.html" className="info">
         Join To Group
        </a>
      </figcaption>
    </figure>

    <figure className="snip1336">
    <img src="./image/bgpartner1.jpg" alt="Partner" />
    <figcaption>

      <h2>
        Name Group<span>No. of member</span>
      </h2>
     
      <a href="products.html" className="info">
       Join To Group
      </a>
    </figcaption>
  </figure>

  

      </div>
      
      </div>
      
    );
  }