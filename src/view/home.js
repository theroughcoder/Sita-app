import React, { useEffect, useState } from "react"
import Group from "../component/group";
import { ExclamationCircleIcon, FolderMinusIcon, PlusIcon, ShieldCheckIcon } from "@heroicons/react/16/solid";
import Status from "../component/status";
import { useDispatch, useSelector } from "react-redux";
import {action, groupSelector} from  "../redux/reducer/groupReducer"
import { validation } from "../functions/validation";
import { toast } from "react-toastify";

const Home = (props) => {

    const dispatch = useDispatch();
    const groupInfo = useSelector(groupSelector);
   

    const [status, setStatus] = useState([]);
    
    
    function AddGroupHandle(){
        let size = groupInfo.length
        dispatch( action.addGroup(size));

        toast.success(`Group added successfully`, {
            theme: "light",
        });
    }
    function showStatusHandle(){

        if(validation(groupInfo) == false){

            statusHandle(status);
        }

    }
    
    function statusHandle(status){
        let list = [...groupInfo];
        
        list.forEach((ele, i)=> {
            
            let statusArr =  status.slice(ele.min-1, ele.max);
            list[i] = {...list[i], status: statusArr}
            
            console.log(list[i].status);
        })
        dispatch(action.updateGroup(list));
    } 

    useEffect(()=> {
        
        async function fetchStatus(){
            
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                let data = await response.json();
                setStatus(data.slice( 0 , 10))
                
            }catch(err){
                console.log(err);
            }
        }

        fetchStatus();
        }, [])

        const [error , setError] = useState("");
        useEffect(()=> {
            
            let result = validation(groupInfo)
            if( result ){
                setError(result.message);
            }else{
                setError("")
            }
        }, [groupInfo])
  return (
    <div className=" max-w-5xl m-auto bg-white rounded-xl  min-h-96 p-5">
      <h1 className=" text-4xl my-10  text-slate-700">Home</h1>
      <div className="grid grid-cols-3 gap-1 ">
        <div className="flex flex-col gap-2">
            {
                groupInfo.map((ele, i)=> < Group key={i} groupNo={i} groupInfo={groupInfo} />)
            }
            
        </div>
        <div className="w-full  col-span-2 flex flex-col gap-2">
            {
                groupInfo.map((e, i)=> <Status key={i} status={e.status}/>)
            }
            
        </div>
      </div>
        <div  className="mt-5 text-red-400  items-center  flex gap-3">
              {error && <div className="flex gap-3 items-center"> <ExclamationCircleIcon className=" size-5" />  {error} </div>}
        </div>
        <div onClick={AddGroupHandle} className="mt-1 text-slate-700 items-center  flex gap-3">
            <PlusIcon className=" text-slate-700 size-8  "/>
            ADD GROUP
        </div>
        <button onClick={showStatusHandle} className="mt-3 bg-teal-300 text-slate-100  rounded px-6 py-2 text-slate-700 items-center  flex gap-3">
            <FolderMinusIcon className=" text-slate-100 size-6  "/>
            SHOW STATUS
        </button>
    </div>
  )
};

export default Home;
