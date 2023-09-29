function Post({ data }) {
    const { text, username, date } = data;

    return (
        <div style={{ backgroundColor: "red" }}>
            <p>{date}</p>
            <p>{text}</p>
            <p>{username}</p>
        </div>
    );
}

export default Post;
