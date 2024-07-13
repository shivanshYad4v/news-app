import React, { Component } from "react";
const Spinner = ()=>{
    return (
      <div className="flex justify-center items-center h-screen">
        <img
          className="w-32"
          src="https://media.tenor.com/_62bXB8gnzoAAAAj/loading.gif"
          alt="Loading..."
        />
      </div>
    );
}

export default Spinner;
