import React from "react";
import Link from "next/link";
import Image from "next/image";

// Movie 컴포넌트의 props 타입 정의
interface MovieProps {
  id: number;
  medium_cover_image: string;
  title: string;
  summary: string;
  genres: string[];
}

const Movie: React.FC<MovieProps> = ({
  id,
  medium_cover_image,
  title,
  summary,
  genres,
}) => {
  return (
    <div>
      <Image src={medium_cover_image} alt={title} width={300} height={450} />
      <h2>
        <Link href={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>{genres?.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
};

export default Movie;
