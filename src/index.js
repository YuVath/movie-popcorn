import React, { useState } from "react";
import ReactDom from "react-dom/client";

import "./index.css";
import App from "./components/App";

// import StarRating from "./components/StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p>This movie was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDom.createRoot(document.getElementById(`root`));
root.render(
  <React.StrictMode>
    <App />

    {/* <StarRating
      maxRating={5}
      message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <StarRating
      maxRating={5}
      size={24}
      color="red"
      className="test"
      defaultRating={3}
    />
    <Test /> */}
  </React.StrictMode>
);
