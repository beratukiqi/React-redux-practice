import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import { useState } from "react";

function App() {
    const [postsListState, setPostsListState] = useState([]);

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    exact
                    element={
                        <Home
                            postsListState={postsListState}
                            setPostsListState={setPostsListState}
                        />
                    }
                />
                <Route
                    path="/newpost"
                    exact
                    element={
                        <NewPost
                            postsListState={postsListState}
                            setPostsListState={setPostsListState}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
