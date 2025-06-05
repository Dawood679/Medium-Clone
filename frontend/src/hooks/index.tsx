import axios from "axios";
import { useEffect, useState } from "react";
import { BECKEND_URL } from "../Components/config";

const useBlogs = () => {
  const [loading, setloading] = useState(true);
  const [blogs, setblogs] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${BECKEND_URL}/api/v1/post/bulk`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        const posts = response.data.post1;

        setblogs(posts);
        setloading(false);
      })
      .catch((error) => {
        setloading(false);
        console.error(
          "Error fetching blogs:",
          error.response?.data || error.message
        );
      });
  }, []);

  return {
    loading,
    blogs,
  };
};

export default useBlogs;

interface Blog {
  id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog | null>(null); // ✅ initialize as null

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${BECKEND_URL}/api/v1/post/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        const post = response.data.post1; // ✅ no `.post1` anymore
        setBlogs(post);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error(
          "Error fetching blog:",
          error.response?.data || error.message
        );
      });
  }, [id]); // ✅ include `id` in dependencies

  return {
    loading,
    blogs,
  };
};

export const userdata = () => {
  
  
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [blogs, setblogs] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${BECKEND_URL}/api/v1/post`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        const posts = response.data.user1.name;

        setblogs(posts);
        
      })
      .catch((error) => {
        
        console.error(
          "Error fetching blogs:",
          error.response?.data || error.message
        );
      });
  }, []);

  return {
    
    blogs,
  };
};





export const userdata2 = () => {
  
  
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const [blogs, setblogs] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${BECKEND_URL}/api/v1/post`, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        const posts = response.data.user1;

        setblogs(posts);
        
      })
      .catch((error) => {
        
        console.error(
          "Error fetching blogs:",
          error.response?.data || error.message
        );
      });
  }, []);

  return {
    
    blogs,
  };
};
