import React, { useState, useEffect } from "react";

const Timmer = () => {
  const [targetTime] = useState(new Date("2024-08-01T00:00:00")); 
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  function calculateRemainingTime() {
    const currentTime = new Date();
    const difference = targetTime - currentTime;
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    // Clear interval on unmount to avoid memory leaks
    return () => clearInterval(timer);
  }, []); // Run only once on mount

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-row justify-evenly w-full">
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl font-bold">{remainingTime.days}</div>
          <div className="text-xl font-bold">DAYS</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl font-bold">{remainingTime.hours}</div>
          <div className="text-xl font-bold">HOURS</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl font-bold">{remainingTime.minutes}</div>
          <div className="text-xl font-bold">MINUTES</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-5xl font-bold">{remainingTime.seconds}</div>
          <div className="text-xl font-bold">SECONDS</div>
        </div>
      </div>
    </div>
  );
};

export default Timmer;
