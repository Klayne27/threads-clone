import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

function UserPage() {
  return (
    <>
      <UserHeader />
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
      <UserPost
        likes={1110}
        replies={441}
        postTitle={"This is my first thread"}
      />
    </>
  );
}

export default UserPage;
