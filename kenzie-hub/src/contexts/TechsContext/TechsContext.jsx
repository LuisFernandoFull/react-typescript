import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const TechsContext = createContext({});

export const TechsProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);

  const searchUserData = async () => {
    try {
      const response = await api.get("/profile");

      setTechs(response.data.techs);
    } catch (error) {
      console.error(error);
    }
  };

  const createTech = async (data) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await api.post("/users/techs", data);
      toast.success("Tecnologia criada com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
        toastId: 1,
      });
    } catch (error) {
      console.log(error);
      toast.error(`${error.response.data.message}`, {
        position: toast.POSITION.TOP_RIGHT,
        toastId: 1,
      });
    }
  };

  const deleteTech = async (id_Tech) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await api.delete(`/users/techs/${id_Tech}`);

      const removeTech = techs.filter(
        (techRemove) => techRemove.id !== id_Tech
      );

      setTechs(removeTech);
    } catch (error) {
      console.error(error);
      setTechs(techs);
    }
  };
  return (
    <TechsContext.Provider
      value={{ techs, searchUserData, createTech, deleteTech }}
    >
      {children}
    </TechsContext.Provider>
  );
};
