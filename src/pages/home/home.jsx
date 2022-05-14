import Navbar from "../../components/navbar/navbar";
import { Banner } from "../../components/banner/banner";
import { Categories } from "../../components/categories/categories";
import { Trending } from "../../components/trending/trending";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Categories />
      <Trending />
      <p>Hello world this is my homepage</p>
      <p>I am just testing the waters</p>
    </div>
  );
};
