import { useState } from "react";
import Post from "../Post";
import { useNavigate } from "react-router-dom";

function Home({ postsListState, setPostsListState }) {
    const navigate = useNavigate();
    return (
        <>
            <h1>Hej</h1>
            {postsListState.length > 0 ? (
                postsListState.map((element, key) => (
                    <Post data={element} key={key} />
                ))
            ) : (
                <p>DU HAR INGA MEDDELANDEN ATT VISA</p>
            )}
            <button onClick={() => navigate("/newpost")}>ADD POST</button>
        </>
    );
}

export default Home;
