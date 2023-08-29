import {useRef} from "react";
import axios from "axios";

const AddPostPage = () => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        axios.post("http://localhost:8000/api/post/create", {
            text: textAreaRef.current?.value
        }).then(() => {
            alert("Post added!");
        }).catch((reason) => {
            alert(reason);
        });
    }

    return (
        <div>
            <h1>Add Post Page</h1>

            <textarea ref={textAreaRef}></textarea>

            <button onClick={addPost}>Log Text</button>
        </div>
    )
}

export default AddPostPage;