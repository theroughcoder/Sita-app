
import React from "react"
import { useDispatch } from "react-redux";
import { action } from "../redux/reducer/groupReducer";
import { TrashIcon } from "@heroicons/react/16/solid";
import { toast } from "react-toastify";

const Group = ({groupNo, groupInfo }) => {

    const dispatch = useDispatch();

    function changeHandler(e, type){

        dispatch(action.changeGroupInput({no: groupNo, type, value: e.target.value}))
    }
    function deleteHandle(){
        dispatch( action.deleteGroup(groupNo));
        toast.success(`Group deleted successfully`, {
            theme: "light",
        });
    }
    return (
        <div className="flex gap-3 items-center">
            <TrashIcon onClick={deleteHandle} className=" size-6 text-slate-800"/>
        <div className="flex gap-5 px-2 items-center h-10 bg-slate-200 rounded justify-center">
            <div className=" text-slate-700  " >Group {groupNo + 1}</div>
            <div> <input onChange={(e)=>changeHandler(e, "min")} className=" w-14 m-1 rounded" type="text" value={groupInfo[groupNo].min  }/> </div>
            <div> - </div>
            <div> <input onChange={(e)=>changeHandler(e, "max")} className=" w-14 m-1 rounded" type="text" value={groupInfo[groupNo].max }/> </div>
        </div>
        </div>
    )
};

export default Group;
