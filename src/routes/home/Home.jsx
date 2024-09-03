import { useFetch } from "../../hooks/useFetch";
import Blogs from "../../components/blogs/Blogs";

const Home = () => {
  const { data } = useFetch("/blogs", {}, []);

  return (
    <div>
      <Blogs data={data?.payload} />
    </div>
  );
};

export default Home;
