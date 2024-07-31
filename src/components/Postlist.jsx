import { useContext } from "react";
import Post from "./Post";
import { Postlistdata } from "../store/postlist-store";

const Postlist = () => {
  const { postList } = useContext(Postlistdata);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
};

export default Postlist;
