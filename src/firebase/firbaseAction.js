import database from "./firebase.utills";

export const Adduser=(user)=>{

    return database.ref(`user/${user.uid}`).set({
        name:user.displayName,
        email:user.email
    });        
    
}

export const CreateUser =(user, {displayName})=>{
   
  const createdAt= Date.now();
  

return database.ref(`user/${user.uid}`).set({
    
    email:user.email,
    name:displayName,
    createdAt:createdAt
});       
}