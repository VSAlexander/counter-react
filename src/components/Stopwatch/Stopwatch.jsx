import { useRef, useState } from 'react';

// realization of transforming values from Stopwatch's state into time;

function secondsToTime(secs) {
  secs = Math.round(secs);
  const hours = Math.floor(secs / (60 * 60));

  const divisor_for_minutes = secs % (60 * 60);
  const minutes = Math.floor(divisor_for_minutes / 60);

  const divisor_for_seconds = divisor_for_minutes % 60;
  const seconds = Math.ceil(divisor_for_seconds);

  return `${hours}h ${minutes}m ${seconds}s`;
}

/////

export function Stopwatch() {
  const stopwatchId = useRef(null); // instead of using global variable let stopwatchId = null or const [stopwatchId, setStopwatchId] = useState(null);
  const startBtn = useRef();

  const [time, setTime] = useState(0);

  const handleStartBtn = () => {
    stopwatchId.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    startBtn.current.disabled = true;
  };

  const handleStopBtn = () => {
    clearInterval(stopwatchId.current);
    startBtn.current.disabled = false;
  };

  const handleRefreshBtn = () => {
    setTime(0);
  };

  return (
    <>
      <p className="h1 mb-4 text-center">{secondsToTime(time)}</p>

      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-danger btn-lg me-2" onClick={handleStopBtn}>
          Stop
        </button>
        <button type="button" ref={startBtn} className="btn btn-success btn-lg me-2" onClick={handleStartBtn}>
          Start
        </button>
        <button type="button" className="btn btn-warning btn-lg" onClick={handleRefreshBtn}>
          Refresh
        </button>
      </div>
    </>
  );
}
