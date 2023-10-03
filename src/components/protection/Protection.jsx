import React from 'react'
import {isLogin} from "./../../funcs/utils"
import { Navigate, Outlet } from 'react-router-dom';
export default function Protection() {

  const isUserLogin = isLogin('Mohammad');
  console.log(isUserLogin);
  return (
    <>
        {isUserLogin ? (
            <Outlet/>
        ):(
            <Navigate to={'/'}/>
        )}
    </>
  )
}
