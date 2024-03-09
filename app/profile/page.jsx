"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

export default function MyProfile() {
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch(`/api/prompt/${session?.user.id}/posts`);
      const data = await response.json();
      setMyPosts(data);
    }
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  function handleEdit() {}
  async function handleDelete() {}

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}
