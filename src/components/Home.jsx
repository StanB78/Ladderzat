import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import React, { useEffect, useState } from "react";
import { deleteDoc, doc } from "firebase/firestore";
import '../home.css';

function Home  () {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsCollection = collection(db, "posts");
        const postsSnapshot = await getDocs(postsCollection);
        const postsList = postsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPosts(postsList);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;

const deletePost = async (postId) => {
  try {
    await deleteDoc(doc(db, "posts", postId));
    console.log("Post verwijderd!");
  } catch (error) {
    console.error("Error deleting post:", error);
  }
};

return (
    <>
    <div>
    <h2>Home pagina</h2>
    <div className="posts-container">
        {posts.length > 0 ? (
            posts.map(post => (
                <div key={post.id} className="post-card">
                    <h3>{post.titel}</h3>
                    <p>{post.beschrijving}</p>
                    <button onClick={() => deletePost(post.id)}>Verwijder</button>
                </div>
            ))
        ) : (
            <p>No posts available.</p>
        )}
        </div>
    </div>
    </>
)
}
export default Home;