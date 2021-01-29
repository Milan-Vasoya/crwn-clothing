import database from "./firebase.utills";

export const AddOrGetUserToDb = (user) => {
  // console.log('displaname',displayName,'user',user)
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

export const CreateUser = (user, { displayName: { displayName } }) => {
  const createdAt = Date.now();

  return database
    .ref(`users/${user.uid}`)
    .set({
      email: user.email,
      name: displayName,
      createdAt: createdAt,
    })
    .then(() => database.ref(`users/${user.uid}`).once("value"))
    .then((user) => user.val());
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
