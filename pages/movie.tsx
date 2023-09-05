import React, { useState, useEffect } from "react";
import Movie from "./components/Movie"; // Movie 컴포넌트 가져옴

// 영화 데이터 타입 정의
interface MovieData {
  id: number;
  medium_cover_image: string;
  title: string;
  summary: string;
  genres: string[];
}

function App(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태
  const [movies, setMovies] = useState<MovieData[]>([]); // 영화 데이터

  // API에서 영화 데이터 가져옴
  const getMovies = async (): Promise<void> => {
    //페이지가 브라우저에 이미 로드된 상태에서 추가적 데이터를 불러오기 위해 API호출 (CSR)
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`,
    );

    //응답을 JSON으로 변환.
    const json = await response.json();
    //리액트는 상태가 업데이트 될 때마다 컴포넌트를 다시 렌더링하므로
    //가져온 영화 데이터로 상태를 업데이트, 이 부분에서 실제로 클라이언트 측 렌더링이 발생함.
    setMovies(json.data.movies);
    setLoading(false);
  };

  // 컴포넌트 마운트시 영화 데이터 로딩
  //useEffect는 클라이언트 속에서 동작하며, 컴포넌트의 라이프 사이클에 따른 사이드이펙트를 처리하는 훅, 페이지 브라우저에 로드된 후에 getMovies함수를 이용해 데이터를 가져오므로 CSR
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1> // 로딩 중일 때 표시
      ) : (
        <div>
          {movies.map((movie) => (
            // 각 영화 정보를 Movie 컴포넌트로 전달
            <Movie
              key={movie.id}
              id={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
