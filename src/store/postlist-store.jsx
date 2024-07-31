import { createContext, useReducer } from "react";

export const Postlistdata = createContext({
  postList: [],
  addpost: () => {},
  deletepost: () => {},
});

const postlistreducer = (currpostlist, action) => {
  let newpostlist = currpostlist;
  if (action.type === "DELETE_POST") {
    newpostlist = currpostlist.filter(
      (post) => post.id != action.payload.postid
    );
  } else if (action.type === "ADD_POST") {
    newpostlist = [action.payload, ...currpostlist];
  }
  return newpostlist;
};

const PostlistProvider = ({ children }) => {
  const [postList, dispatchpostlist] = useReducer(
    postlistreducer,
    DEFAULT_POST
  );

  const addpost = (postuser, posttitle, postbody, posthashtag) => {
    dispatchpostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        user: postuser,
        title: posttitle,
        body: postbody,
        reaction: Math.floor(Math.random() * 90000),
        hashtag: posthashtag,
      },
    });
  };

  const deletepost = (postid) => {
    dispatchpostlist({
      type: "DELETE_POST",
      payload: { postid },
    });
  };

  return (
    <Postlistdata.Provider value={{ postList, addpost, deletepost }}>
      {children}
    </Postlistdata.Provider>
  );
};

const DEFAULT_POST = [
  {
    id: "1",
    user: "user@69",
    title: "I am feeling Great today",
    body: "Enjoying Vacations",
    reaction: "65561",
    hashtag: ["#swimming", "#vacations"],
  },
];

export default PostlistProvider;
