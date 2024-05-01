import React from "react"

const Status = ({ status }) => {
  return (
    <div className=" bg-slate-500 rounded flex items-center h-10 ">
      {
       status && status.map((e) => <div key={e.id} className="w-20  text-slate-200 "> {"(" + e.id + ")"}{e.completed ? "True" : "False"}</div>)
      }
    </div>

  )
};

export default Status;
