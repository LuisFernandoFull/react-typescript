import { useContext } from "react";
import { AllStructureDashbord } from "../../components/DashboardStructure/AllStructure";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { DashbordContext } from "../../contexts/DashbordContext/DashbordContext";

export const Dashbord = () => {
  const { user } = useContext(DashbordContext);

  return (
    <>
      <Nav />

      {user.length === 0 ? (
        <h1>loading</h1>
      ) : (
        <>
          <Header />
          <AllStructureDashbord />
        </>
      )}
    </>
  );
};
