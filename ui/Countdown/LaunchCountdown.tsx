'use client'
import { useState, useEffect } from "react";
import moment from "moment";

type TimeRemaining = {
  weeks: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const LaunchCountdown = ({ targetDate }: { targetDate: Date }) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const difference = moment(targetDate).diff(now);
      const duration = moment.duration(difference);
      const weeks = Math.floor(duration.asWeeks());
      const days = duration.days();
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      setTimeRemaining({ days, hours, minutes, seconds, weeks });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="mx-auto w-full max-w-xl">
      <div className="grid grid-cols-4 md:grid-cols-5 items-end text-white text-center justify-items-center content-center justify-center mx-auto font-[bubblegum-pop-highlight]">
        <div className="flex flex-col justify-items-center content-center justify-center bg-blue-700 p-2.5 w-24">
          <div className="text-2xl md:text-4xl font-bold">{timeRemaining.weeks % 100}</div>
          <div className="text-xs font-semibold md:p-1 font-[owners]">weeks</div>
        </div>
        <div className="flex flex-col justify-items-center content-center justify-center bg-blue-700 p-2.5 w-24">
          <div className="text-2xl md:text-4xl font-bold">{timeRemaining.days}</div>
          <div className="text-xs font-semibold md:p-1 font-[owners]">days</div>
        </div>
        <div className="flex flex-col justify-items-center content-center justify-center bg-blue-700 p-2.5 w-24">
          <div className="text-2xl md:text-4xl font-bold">{timeRemaining.hours}</div>
          <div className="text-xs font-semibold md:p-1 font-[owners]">hours</div>
        </div>
        <div className="flex flex-col justify-items-center content-center justify-center bg-blue-700 p-2.5 w-24">
          <div className="text-2xl md:text-4xl font-bold">{timeRemaining.minutes}</div>
          <div className="text-xs font-semibold md:p-1 font-[owners]">minutes</div>
        </div>
        <div className="hidden md:flex flex-col justify-items-center content-center justify-center bg-blue-700 p-2.5 w-24">
          <div className="text-2xl md:text-4xl font-bold">{timeRemaining.seconds}</div>
          <div className="text-xs font-semibold md:p-1 font-[owners]">seconds</div>
        </div>
      </div>
    </div>
  );
};

export default LaunchCountdown;
