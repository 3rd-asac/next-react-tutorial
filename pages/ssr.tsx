import React from "react";

interface SSRPageProps {
  serverTime: string; // serverTime의 타입을 정의
}

const SSRPage: React.FC<SSRPageProps> = ({ serverTime }) => {
  return (
    <div>
      <h1>SSR Page</h1>
      <p>Server Time: {serverTime}</p>
    </div>
  );
};

export async function getServerSideProps() {
  const serverTime = new Date().toLocaleString();
  return {
    props: {
      serverTime,
    },
  };
}

export default SSRPage;
