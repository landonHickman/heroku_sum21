import axios from "axios";
import React, { useState, useEffect } from "react";
const Things = () => {
  const [things, setThings] = useState([]);
  useEffect(() => {
    getThings();
  }, []);
  const getThings = async () => {
    try {
      let res = await axios.get("/api/things");
      setThings(res.data);
    } catch (err) {
      alert("err on axios");
    }
  };
  const renderThings = () => {
    return things.map((thing) => {
      return (
        <div key={thing.id}>
          <h1>Name: {thing.name}</h1>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Things Page</h1>
      {renderThings()}
    </div>
  );
};
export default Things;