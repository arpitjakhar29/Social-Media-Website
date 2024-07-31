import { useContext, useRef } from "react";
import { Postlistdata } from "../store/postlist-store";

const Createpost = () => {
  const { addpost } = useContext(Postlistdata);
  const userElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const hashtagElement = useRef();

  const handlesubmit = (e) => {
    e.preventDefault;
    const postuser = userElement.current.value;
    const posttitle = titleElement.current.value;
    const postbody = bodyElement.current.value;
    const posthashtag = hashtagElement.current.value.split(" ");

    userElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    hashtagElement.current.value = "";

    addpost(postuser, posttitle, postbody, posthashtag);
  };

  return (
    <form className="createpost" onSubmit={handlesubmit}>
      <div class="mb-3">
        <label for="user" class="form-label">
          Username
        </label>
        <input
          type="text"
          ref={userElement}
          class="form-control"
          id="user"
          placeholder="Enter your User ID"
        />
      </div>
      <div class="mb-3">
        <label for="title" class="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={titleElement}
          class="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div class="mb-3">
        <label for="body" class="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={bodyElement}
          rows="3"
          class="form-control"
          id="body"
          placeholder="Write about your post..."
        />
      </div>
      <div class="mb-3">
        <label for="hashtag" class="form-label">
          Hashtags
        </label>
        <input
          type="Text"
          ref={hashtagElement}
          class="form-control"
          id="hashtag"
          placeholder="Enter tags with space"
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default Createpost;
