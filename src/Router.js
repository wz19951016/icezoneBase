/*
 * @Author: wangzhong
 * @Date: 2020-06-16 14:43:59
 * @LastEditors: wangzhong
 * @LastEditTime: 2020-09-25 14:56:15
 * @FilePath: /ice/src/Router.js
 */ 
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import {history} from "./Loader.js"

console.log("iiiiiiiii")
console.log(history)


const Router = () => {
  console.log("##########")
  console.log(window.location.pathname)
  console.log(window.location)
  console.log("##########")
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/show"/>
        <Route path="/login" />
        <Route path="/create" />
        <Route path="/iframe" />
        <Redirect from="/zone/show/:id" to={`/show/user${window.location.pathname.split("/zone/show")[1]}`} />
        <Redirect from="/home" to={`/show/userzone`} />
        <Redirect from="/post/make" to={`/create/new`} />
        <Redirect from="/youth/post/show/:id" to={`/show/switch${window.location.pathname.split("/post/show")[1]}`} />
        <Redirect from="/post/show/:id" to={`/show/switch${window.location.pathname.split("/post/show")[1]}`} />
        <Redirect to={`/iframe${window.location.pathname}`} />
      </Switch>
    </BrowserRouter>
  )
}
export default Router
