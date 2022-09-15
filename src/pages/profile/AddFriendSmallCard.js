import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addFriend, cancelRequest } from "../../functions/user";

export default function AddFriendSmallCard({ userId, token, item, getData }) {
  const navigate = useNavigate();
  const [isRequest, setIsRequest] = useState(() => {
    let init = false;
    if (
      item.requests &&
      item.requests.length > 0 &&
      item.requests.find((r) => r._id === userId)
    ) {
      init = true;
    }
    return init;
  });

  if (!item) return;

  let fullname = `${item.first_name} ${item.last_name}`;

  const cancelRequestHandler = async () => {
    const res = await cancelRequest(item._id, token);
    if (res === "ok") {
      setIsRequest((prev) => !prev);
    }
  };

  const addFriendHandler = async () => {
    const res = await addFriend(item._id, token);
    if (res === "ok") {
      setIsRequest((prev) => !prev);
    }
  };

  return (
    <div className="addfriendCard">
      <div className="addfriend_imgsmall">
        <img src={item.picture} alt="" />
        <div className="addfriend_infos">
          <div
            className="addfriend_name"
            onClick={() => navigate(`/profile/${item.username}`)}
          >
            {fullname.length > 11
              ? `${fullname.substring(0, 11)}...`
              : fullname}
          </div>
          <div
            className="light_blue_btn"
            onClick={() => {
              if (!isRequest) {
                addFriendHandler();
              } else {
                cancelRequestHandler();
              }
            }}
          >
            <img
              src="../../../icons/addFriend.png"
              alt=""
              className="filter_blue"
            />
            {!isRequest ? "Add Friend" : "Cancel Request"}
          </div>
        </div>
      </div>
    </div>
  );
}
