import { v4 as uuid } from 'uuid';

const elementsTree = 
// [
//   {
//     id: "card1",
//     name: "div",
//     children: [
//       {
//         id: "cardTitle",
//         name: "h2",
//         properties: {
//           text: "Card Title"
//         },
//         classes: "text-lg font-bold mb-2"
//       },
//       {
//         id: "cardContent",
//         name: "p",
//         properties: {
//           text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//         },
//         classes: "text-gray-700"
//       },
//       {
//         id: "cardButton",
//         name: "button",
//         properties: {
//           text: "Learn More",
//           onClick: "handleLearnMoreClick"
//         },
//         classes: "bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//       }
//     ],
//     classes: "bg-white p-6 rounded-md shadow-md"
//   }
// ]


[
  {
    id: uuid(),
    name: "div",
    children: [
      {
        id: uuid(),
        name: "div",
        children: [
          {
            id: uuid(),
            name: "button",
            children: [],
            properties: {
              text: "Login",
              name: 'loginBtn'
            },
            classes: "bg-green-600 w-96 text-white p-2 rounded-lg hover:bg-green-700 focus:border-4 focus:border-red-600",
          }
        ],
        classes: "p-10",
  
      },
      {
        id: uuid(),
        name: "div",
        children: [
          {
            id: uuid(),
            name: "button",
            children: [],
            properties: {
              text: "Register",
            },
            classes: "bg-yellow-600 w-96 text-white p-2 rounded-lg hover:bg-yellow-700 focus:border-4 focus:border-red-600",
          },
          {
            id: uuid(),
            name: "button",
            children: [],
            properties: {
              text: "Register",
              name: 'hahahahahahaha'
            },
            classes: "bg-yellow-600 w-96 text-white p-2 rounded-lg hover:bg-yellow-700 focus:border-4 focus:border-red-600",
          }
        ],
        classes: "p-10 flex flex-col gap-5",
  
      },
    ],
    classes: "m-10 w-full",
  
  }]


// export default (state = {page:elementsTree}, action) =>{
export default (state = [], action) =>{
    switch (action.type){
        case "UPDATE_PAGE":
            console.log(action.payload)
            // return {...state, page:  action.payload}
        // case "FETCH_ONE_PAGE":
        //     console.log(action.payload)
        //     return [...state,  action.payload]
            
        case "FETCH_ALL_PAGES":
            console.log(action.payload)
            return  action.payload 
            
        default: 
        return state
    }
}