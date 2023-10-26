import { v4 as uuid } from 'uuid';

const elementsTree = 
[
  {
    id: uuid(),
    name: "div",
    chilldren: [
      {
        id: uuid(),
        name: "div",
        chilldren: [
          {
            id: uuid(),
            name: "button",
            properties: {
              text: "Login",
            },
            classes: "bg-green-600 w-96 text-white p-2 rounded-lg hover:bg-green-700 focus:border-4 focus:border-yellow-600",
          }
        ],
        classes: "p-10",
  
      },
      {
        id: uuid(),
        name: "div",
        chilldren: [
          {
            id: uuid(),
            name: "button",
            properties: {
              text: "Register",
            },
            classes: "bg-yellow-600 w-96 text-white p-2 rounded-lg hover:bg-yellow-700 focus:border-4 focus:border-yellow-600 animate-spin",
          },
          {
            id: uuid(),
            name: "button",
            properties: {
              text: "Register",
            },
            classes: "bg-yellow-600 w-96 text-white p-2 rounded-lg hover:bg-yellow-700 focus:border-4 focus:border-yellow-600",
          }
        ],
        classes: "p-10 flex flex-col gap-5",
  
      },
    ],
    classes: "m-10 w-full",
  
  }]


export default (state = {page:elementsTree}, action) =>{
    switch (action.type){
        case "UPDATE_PAGE":
            console.log(action.payload)
            return {...state, page:  action.payload}
        case "FETCH_ONE_PAGE":
            console.log(action.payload)
            return {...state, page: action.payload} 
            
        default: 
        return state
    }
}