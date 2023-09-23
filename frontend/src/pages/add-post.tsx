import {useRef, useState} from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useNavigate} from "react-router-dom";

const AddPostPage = () => {
    const [value, setValue] = useState("");
    const navigate = useNavigate()

    const addPost = () => {
        axios.post("http://localhost:8000/api/post/create", {
            text: value
        }).then(() => {
            navigate("/")
        }).catch((reason) => {
            alert(reason);
        });
    }

    return (
        <div>
            <h1>Add Post Page</h1>

            <ReactQuill theme="snow" value={value} onChange={setValue} />

            <button onClick={addPost}>Log Text</button>
        </div>
    )
}

export default AddPostPage;