import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewPost({ postsListState, setPostsListState }) {
    const [username, setUsername] = useState("");
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleClick = () => {
        let newPost = {
            username: username,
            text: inputValue,
            date: new Date().toDateString(),
        };
        setPostsListState([newPost, ...postsListState]);
        navigate("/");
    };

    return (
        <>
            <input
                type="text"
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <p>username below</p>
            <input
                type="text"
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
            <button onClick={handleClick}>Submit</button>
            <p>Current value: {inputValue}</p>
        </>
    );
}

export default NewPost;
