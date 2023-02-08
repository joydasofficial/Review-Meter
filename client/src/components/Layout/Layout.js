import React, { useState } from "react";
import "./Layout.css";

//components
import ReviewList from "../ReviewList/ReviewList";

//data
import ReviewData from "../../data/ReviewData";

const Layout = () => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [desc, setDesc] = useState("");
  const [flag, setFlag] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    ReviewData.push({
      title: title,
      rating: rating,
      desc: desc || "",
    });
    setFlag(!flag);
  };

  const handleReset = () => {
    setTitle('')
    setRating('')
    setDesc('')
  }

  return (
    <>
      <div className="review-input">
        <div className="main-container">
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title"
              className="input"
              required
            />
            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="select"
              required
            >
              <option value="">Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Enter Description"
              className="textarea"
            />
            <div className="button-container">
              <input type="button" className="button" onClick={handleReset} value='Reset' />
              <input type="submit" value="Save" className="button" />
            </div>
          </form>
        </div>
      </div>
      <div className="review-list">
        {ReviewData.length > 0 && <ReviewList />}
      </div>
    </>
  );
};

export default Layout;
