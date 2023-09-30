import React, { useRef, useState } from "react";

const Hello = () => {
  const [textColor, setTextColor] = useState(""); 
  const inputRef = useRef()

  const ClickMe = () => {
    // const inputElement = document.querySelector("input[type='text']");
    // const inputValue = inputElement.value;

    // console.log(inputRef.current.value)
    setTextColor(textColor +" " + inputRef.current.value);
  };

  return (
    <div>
      <h1 className={` ${textColor} `}>Hello World</h1>
      <br />
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={ClickMe}>Enter</button>
    </div>
  );
};

export default Hello;








// import React from "react";

// const Hello = () => {
//   var hh;

//   const ClickMe = () => {
//     var gg = document.querySelector("input[type='text']").value;
//     alert("the value is " + gg);
//     hh = gg;
//   };

//   return (
//     <div>
//       <h1 className="${hh}">Hello World</h1>
//       <br />
//       <input type="text" />
//       <br />
//       <button onClick={ClickMe}>Enter</button>
//     </div>
//   );
// };

// export default Hello;
