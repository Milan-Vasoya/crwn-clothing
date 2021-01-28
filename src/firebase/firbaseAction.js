import database from "./firebase.utills";

export const Adduser = (user) => {
  const createdAt = Date.now();
  return database.ref(`users/${user.uid}`).set({
    name: user.displayName,
    email: user.email,
    createdAt: createdAt,
  });
};

export const AddOrGetUserToDb = (user) => {
  const userRef = database
    .ref(`users/${user.uid}`)
    .once("value")
    .then((snapshot) => snapshot.val());

  if (!userRef) {
    const createdAt = Date.now();
    return database.ref(`users/${user.uid}`).set({
      name: user.displayName,
      email: user.email,
      createdAt: createdAt,
    });
  }
  return userRef;
};

export const CreateUser = (user, { displayName }) => {
  const createdAt = Date.now();

  return database.ref(`users/${user.uid}`).set({
    email: user.email,
    name: displayName,
    createdAt: createdAt,
  });
};

export const AddCollections = (objs) => {
  objs.forEach((obj) =>
    database.ref(`collections/${obj.title.toLowerCase()}`).set(obj)
  );
};

export const GetCollections = () => {
  return database
    .ref(`collections`)
    .once("value")
    .then((snapshot) => snapshot.val());
};

