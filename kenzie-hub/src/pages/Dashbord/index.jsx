import { useEffect, useState } from "react";
import { AllStructureDashbord } from "../../components/DashboardStructure/AllStructure";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { api } from "../../services/api";

export const Dashbord = () => {
  const [userData, setUserData] = useState([]);

  const token = localStorage.getItem("@KENZIEHUB-TOKEN");

  useEffect(() => {
    api
      .get("/profile")
      .then((reponse) => {
        console.log(reponse);
        setUserData([reponse]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  return (
    <>
      <Nav />

      {userData.length === 0 ? (
        <h1>loading</h1>
      ) : (
        <>
          <Header userData={userData} />
          <AllStructureDashbord userData={userData} />
        </>
      )}
    </>
  );
};
