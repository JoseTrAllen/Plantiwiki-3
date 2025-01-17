"use strict";

import { fetchUsers } from "./src/api/usersApi";

export const verifyUser = async (user, password) => {
  const users = await fetchUsers();
  const isValid = users.find(
    (u) => u.email === user && u.password === password
  );

  if (isValid) {
    console.log("Usuario correcto");
    console.log(isValid.email, isValid.password);

    window.location.href = `/userProfile.html?username=${isValid.username}`;
  } else {
    console.log(user, password);

    console.log("Usuario o contraseña incorrecta");
  }
};
