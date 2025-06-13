import { useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";

function UserPage() {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`api/users/profile/${username}`);
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error);
          return;
        }
        setUser(data);
      } catch (error) {
        showToast("Error", error, "error");
      }
    };
    getUser();
  }, [username, showToast]);

  if(!user) return null

  return (
    <>
      <UserHeader user={user} />
      <UserPost
        likes={1200}
        replies={331}
        postImg="/post1.png"
        postTitle={"Let's talk about threads"}
      />
      <UserPost
        likes={120}
        replies={21}
        postImg="/post2.png"
        postTitle={"Nice Tutorial"}
      />
      <UserPost
        likes={132}
        replies={21}
        postImg="/post3.png"
        postTitle={"I love this guy"}
      />
      <UserPost likes={1110} replies={441} postTitle={"This is my first thread"} />
    </>
  );
}

export default UserPage;
