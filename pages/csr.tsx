import React, { useState } from "react";

const CSRPage: React.FC = () => {
  const [clientTime, setClientTime] = useState<string>(""); // clientTime의 타입을 정의

  const handleButtonClick = () => {
    const time = new Date().toLocaleString();
    setClientTime(time);
  };

  return (
    <div>
      <h1>CSR Page</h1>
      <button onClick={handleButtonClick}>Show Client Time</button>
      <p>Client Time: {clientTime}</p>
    </div>
  );
};

export default CSRPage;
