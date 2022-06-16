import axios from "axios";
import React, { createContext, useState } from "react";
import { url } from "../common/general";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [userInfo, setUserInfo] = useState({});
  const [collaboratorsInfo, setCollaboratorsInfo] = useState([]);
  // const [flagLogin, setFlagLogin] = useState(false);

  const login = async (body) => {
    let requestURL = url + "login";
    const usuario = await axios.post(requestURL, body, {
      auth: {
        username: "api-Test",
        password: "Holamundo",
      },
    });
    setUserInfo(usuario.data);
  };

  const getCollaborators = async () => {
    let requestURL = url + "colaboradores";

    const colaboradores = await axios.get(requestURL, {
      auth: {
        username: "api-Test",
        password: "Holamundo",
      },
    });
    setCollaboratorsInfo(colaboradores.data);
    // console.log(colaboradores.data);
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        // flagLogin,
        // setFlagLogin,
        collaboratorsInfo,
        setCollaboratorsInfo,
        getCollaborators,
        login,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
