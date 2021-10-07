import "./singlepost.css";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import axios from "axios"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useLocation } from "react-router";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost ] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/"+path);
      setPost(res.data)
    };
    getPost()
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            className="singlePostImg"
            src={post.photo}
            alt=""
          />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <EditIcon className="singlePostIcon"/>
            <DeleteIcon className="singlePostIcon"/>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <Link className="link" to={`/?user=${post.username}`}>
              <b className="singlePostAuthor">
                {post.username}
              </b>
            </Link>
          </span>&nbsp; &ndash; &nbsp;
          <span>{" "} {new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostContent">
          {post.desc}
        </p>
      </div>
    </div>
  );
}