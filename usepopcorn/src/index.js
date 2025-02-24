import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";

// import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);

//   return (
//     <div>
//       <StarRating color="blue" onSetRating={setMovieRating} />
//       <p>This movies was rated {movieRating} stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <StarRating
//       maxRating={5}
//       className="test"
//       messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
//       defaultRating={3}
//     />

//     <Test />
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
