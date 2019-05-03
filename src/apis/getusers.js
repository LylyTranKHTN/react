import { store } from './../stores';
import { actGetUsers } from './../actions';

async function getUsers(url = `https://reqres.in/api/users`) {
      // Default options are marked with *
        return await fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => response.json())
        .then(response =>{
          store.dispatch(actGetUsers(response))
          console.log("res", response)
        })
      }

export default getUsers;