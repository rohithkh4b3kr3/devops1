import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [Data, setData] = useState({
    message: "",
    status: "",
    time: "",
    date:"",
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/message")
      .then((res) => res.json())
      .then((data) =>
        setData({
          message: data.message || "No message",
          status: "Online",
          time: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
        })
      )
      .catch((err) => {
        console.log("Error fetching data:", err);
        setData({
          message: "Error connecting to server",
          status: "Offline",
          time: "--",
          date: "--",
        });
      });
  }, []);

  return (
    <>
    <h1 className="text-3xl text-cyan-300 text-semibold">
      Server Status: {Data.status} <br />
      Message: {Data.message} <br />
      Date: {Data.date} <br />
      Time: {Data.time} <br />
    </h1>
    </>
  );
}
