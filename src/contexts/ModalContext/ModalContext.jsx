import { createContext, useContext, useRef, useState } from "react";
import { TechsContext } from "../TechsContext/TechsContext";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const { searchUserData, createTech } = useContext(TechsContext);
  const [currentModal, setCurrentModal] = useState(null);
  const modalRef = useRef();
  function handleOutClick(e) {
    const target = e.target;
    if (!modalRef.current.contains(target)) {
      setCurrentModal(null);
      searchUserData();
    }
  }

  return (
    <ModalContext.Provider
      value={{
        currentModal,
        setCurrentModal,
        searchUserData,
        createTech,
        handleOutClick,
        modalRef,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
