import { useContext, useEffect } from "react";
import { StyledLi } from "./style";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TechsContext } from "../../../../contexts/TechsContext/TechsContext";
export const TechsCards = () => {
  const { techs, searchUserData, deleteTech } = useContext(TechsContext);

  useEffect(() => {
    searchUserData();
  }, []);
  return (
    <>
      {" "}
      {techs.length === 0 ? (
        <h1>arry vazio</h1>
      ) : (
        techs.map((tech) => {
          return (
            <StyledLi key={tech.id}>
              <h2>{tech.title}</h2>
              <div>
                <p>{tech.status}</p>
                <button
                  type="button"
                  onClick={() => {
                    deleteTech(tech.id);
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
