import React from "react";

const Input = (props) => {
  const { value, handleChange, text } = props;
  return (

      <input
        type="text"
        name="name"
        placeholder={text}
        className="px-3 py-2"
        style={{
          color: "#799ED1",
          fontSize: 16,
          paddingLeft: 15,
          minWidth:window.innerWidth > 800 ? 300 : 210,
          borderRadius: 20,
          border: "1px solid #799ED1",
        }}
        value={value}
        onChange={handleChange}
      ></input>
    
  );
};

export default Input;
