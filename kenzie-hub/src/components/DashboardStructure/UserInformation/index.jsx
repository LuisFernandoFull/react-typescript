import { useContext } from "react";
import { DashbordContext } from "../../../contexts/DashbordContext/DashbordContext";

export const UserInformation = () => {
  const { user } = useContext(DashbordContext);

  return (
    <div>
      <>
        <h1>Olá{user.name}</h1>
        <p>{user.course_module}</p>
      </>
    </div>
  );
};
