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

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setloading] = useState(true);
  const [blogs, setblogs] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${BECKEND_URL}/api/v1/post/${id}`, {
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
