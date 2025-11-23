import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [Data, setData] = useState({
    message: "",
    status: "",
    time: "",
    date: "",
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
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-6 rounded-xl border border-cyan-300/40 bg-neutral-900/40 backdrop-blur-sm w-full max-w-md shadow-[0_0_20px_rgba(34,211,238,0.15)]"
      >
        <h1 className="text-3xl font-semibold text-cyan-300 mb-4 text-center">
          Server Dashboard
        </h1>

        <div className="space-y-3 text-cyan-100 text-lg">
          <p className="flex justify-between">
            <span className="text-cyan-300/70">Status:</span>
            <span
              className={
                Data.status === "Online"
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              {Data.status}
            </span>
          </p>

          <p className="flex justify-between">
            <span className="text-cyan-300/70">Message:</span>
            <span className="text-cyan-200">{Data.message}</span>
          </p>

          <p className="flex justify-between">
            <span className="text-cyan-300/70">Date:</span>
            <span>{Data.date}</span>
          </p>

          <p className="flex justify-between">
            <span className="text-cyan-300/70">Time:</span>
            <span>{Data.time}</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
