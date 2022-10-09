import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { StyledLi } from "./style";
import { RiDeleteBin5Line } from "react-icons/ri";
export const TechsCards = () => {
  const [tech, setTech] = useState([]);
  const token = localStorage.getItem("authToken");

  const buscaDados = useCallback(() => {
    return api
      .get("/profile", {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((reponse) => {
        console.log(reponse.data.techs);
        setTech(reponse.data.techs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  useEffect(() => {
    buscaDados();
  }, [buscaDados]);

  function deleteTech(id_Tech) {
    console.log(id_Tech);
    //const techBackup = tech.find((techB) => techB.id === id_Tech);
    const removeTech = tech.filter((techRemove) => techRemove.id !== id_Tech);

    setTech(removeTech);

    api
      .delete(`/users/techs/${id_Tech}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
        setTech(tech);
      });
  }

  return (
    <>
      {" "}
      {tech.length === 0 ? (
        <h1>arry vazio</h1>
      ) : (
        tech.map((techs) => {
          return (
            <StyledLi key={techs.id}>
              <h2>{techs.title}</h2>
              <div>
                <p>{techs.status}</p>
                <button
                  type="button"
                  onClick={() => {
                    deleteTech(techs.id);
                  }}
                >
                  <RiDeleteBin5Line />
                </button>
              </div>
            </StyledLi>
          );
        })
      )}{" "}
    </>
  );
};
