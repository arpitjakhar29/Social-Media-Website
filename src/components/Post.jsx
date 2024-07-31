import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { Postlistdata } from "../store/postlist-store";

const Post = ({ post }) => {
  const { deletepost } = useContext(Postlistdata);

  return (
    <div class="card post-card " style={{ width: "18rem;" }}>
      <div class="card-body ">
        <h5 class="card-title">
          {post.title}
          <span class="deletebtn" onClick={() => deletepost(post.id)}>
            <MdDelete />
          </span>
        </h5>
        <p class="card-text">{post.body}</p>

        {post.hashtag.map((tag) => (
          <span class="badge text-bg-primary hashtag">{tag}</span>
        ))}
        <div class="alert alert-danger likecard" role="alert">
          Liked By {post.reaction} People!
        </div>
      </div>
    </div>
  );
};

export default Post;
