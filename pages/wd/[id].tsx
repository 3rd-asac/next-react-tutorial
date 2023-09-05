import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import companies from "../../data/companies.json";

type Company = {
  id: string;
  companyName: string;
  title: string;
  location: string;
  mainTasks: string[];
};

interface CompanyPageProps {
  company: Company | null;
}

const CompanyPage: React.FC<CompanyPageProps> = ({ company }) => {
  const router = useRouter();
  const { query } = router;

  // 검색 페이지 로직
  if (query.country || query.job_sort) {
    const handleTagChange = (tag) => {
      const newQuery = {
        ...query,
        tag,
      };
      const newUrl = `/wd/${query.id}?${new URLSearchParams(
        newQuery,
      ).toString()}`;
      router.push(newUrl);
      console.log(newUrl);
    };

    return (
      <div>
        <button onClick={() => handleTagChange("연봉이 최고의 복지")}>
          연봉이 최고의 복지
        </button>
        {/* 나머지 필터 버튼도 위와 같이 구현 */}
      </div>
    );
  }

  // 디테일 페이지 로직
  if (!company) return <div>Company not found</div>;

  return (
    <div>
      <h1>
        {company.companyName} - {company.title}
      </h1>
      <p>Location: {company.location}</p>
      <ul>
        {company.mainTasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;

  if (typeof id !== "string") {
    return {
      notFound: true,
    };
  }

  const company = companies.find((c) => c.id === id);

  if (!company) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      company,
    },
  };
};

export default CompanyPage;
