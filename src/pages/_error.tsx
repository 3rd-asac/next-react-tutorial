import { GetServerSideProps } from 'next';
import * as React from 'react';

interface IError {
  statuscode: number;
}
const Error: React.FC<IError> = ({ statuscode }) => {
  return (
    <div>
      에러가 발생하였습니다.
      <br /> {statuscode}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res}) => {
  const statusCode = res.statusCode;

  return {
    props: {
      statusCode,
    },
  };
};

export default Error;
