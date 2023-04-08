import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "./store/slice/UserSlice";

export const DeleteAllUser = () => {
  
  const dispatch = useDispatch();
  // const data = useSelector((state)=>{
  //   return state.users
  // })
  const deleteAll =() => {
    // console.log('hi')
    dispatch(deleteUser())

  }
  return <button className="btn" onClick={deleteAll}>Delete All User</button>
};