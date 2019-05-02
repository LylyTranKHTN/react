import { store } from './../stores';
import { actGetUsers } from './../actions';

function getUsers(url = `https://reqres.in/api/users`) {
      // Default options are marked with *
        return fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => response.json())
        .then(response =>{
          store.dispatch(actGetUsers(response))
        })
      }

export default getUsers;