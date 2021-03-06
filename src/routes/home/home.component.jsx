import { Outlet } from "react-router-dom";

import { Directory } from "../../components/directory/directory.component";

export const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      id: 4,
      title: "piercings",
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/5dcb051e295710024a34c9b8/1627587660840-C82CFHYB9K8XQYMU69CV/Sarah+Ear+GOLD+Square.png?format=1000w",
    },
    {
      id: 5,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 6,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};
