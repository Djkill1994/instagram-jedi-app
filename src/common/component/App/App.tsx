import React from "react"
import "./App.scss"
import { Navbar } from "../Navbar/Navbar"
import { Header } from "../Header/Header"
import { PostsContainer } from "../../../features/post/components/PostsContainer/PostsContainer"

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <PostsContainer />
      </div>
    </div>
  )
}

export default App
