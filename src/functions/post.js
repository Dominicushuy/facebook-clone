import axios from "axios";
export const createPost = async (
  type,
  background,
  text,
  images,
  user,
  token
) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/createPost`,
      {
        type,
        background,
        text,
        images,
        user,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return { status: "ok", data };
  } catch (error) {
    return error.response.data.message;
  }
};
export const reactPost = async (postId, react, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/reactPost`,
      {
        postId,
        react,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
export const getReacts = async (postId, token) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/getReacts/${postId}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const comment = async (postId, comment, image, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/comment`,
      {
        postId,
        comment,
        image,
      },

      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const savePost = async (postId, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/savePost/${postId}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
export const deletePost = async (postId, token) => {
  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_API_ENDPOINT}/deletePost/${postId}`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
