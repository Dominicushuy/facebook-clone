import axios from "axios";
export const updateprofilePicture = async (url, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/updateProfilePicture`,
      {
        url,
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
export const updateCover = async (url, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/updateCover`,
      {
        url,
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
export const addFriend = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/addFriend/${id}`,
      {},

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
export const cancelRequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/cancelRequest/${id}`,
      {},

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
export const follow = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/follow/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    return "ok";
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data.message;
  }
};
export const unfollow = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/unfollow/${id}`,
      {},

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
export const acceptRequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/acceptRequest/${id}`,
      {},

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
export const unfriend = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/unfriend/${id}`,
      {},

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
export const deleteRequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/deleteRequest/${id}`,
      {},

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
export const search = async (searchTerm, token) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_ENDPOINT}/search/${searchTerm}`,
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
export const addToSearchHistory = async (searchUser, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/addToSearchHistory`,
      { searchUser },

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
export const getSearchHistory = async (token) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/getSearchHistory`,

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
export const removeFromSearch = async (searchUser, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_API_ENDPOINT}/removeFromSearch`,
      { searchUser },

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
export const getFriendsPageInfos = async (token) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/getFriendsPageInfos`,

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

export const getPeopleYouMayKnow = async (token) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_ENDPOINT}/getPeopleYouMayKnow`,
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
