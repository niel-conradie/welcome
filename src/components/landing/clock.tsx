import { useEffect, useState } from "react";

export default function Clock() {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const date = new Date();
      setHour(date.getHours());
      setMinutes(date.getMinutes());
      setSeconds(date.getSeconds());

      date.getHours() > 12 ? setTime("PM") : setTime("AM");

      setTimeout(updateClock, 1000);
    };

    updateClock();
  }, []);

  return (
    <div className="flex gap-x-2 text-4xl">
      <span className="w-10">{hour < 10 ? "0" + hour : hour}</span>
      <span>:</span>
      <span className="w-10">{minutes < 10 ? "0" + minutes : minutes}</span>
      <span>:</span>
      <span className="w-10">{seconds < 10 ? "0" + seconds : seconds}</span>
      <span className="pl-4">{time}</span>
    </div>
  );
}
