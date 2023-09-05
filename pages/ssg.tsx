import React from "react";

interface SSGPageProps {
  staticData: string; // staticData의 타입을 정의
}

//staticData는 정적인 데이터를 나타내는 변수 (미리 정의된 데이터를 사용하여 페이지를 생성하는 방식을 보여주기 위해)
const SSGPage: React.FC<SSGPageProps> = ({ staticData }) => {
  return (
    <div>
      <h1>SSG Page</h1>
      <p>Static Data: {staticData}</p>
    </div>
  );
};

export async function getStaticProps() {
  const staticData = "This is static data.";
  return {
    props: {
      staticData,
    },
  };
}

export default SSGPage;
