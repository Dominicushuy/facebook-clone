import { Dots } from "../../svg";
import { stories } from "../../data/home";
import AddFriendSmallCard from "./AddFriendSmallCard";
import { getPeopleYouMayKnow } from "../../functions/user";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
export default function PplYouMayKnow({ userId, token }) {
  // const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // setLoading(true);
    let res = await getPeopleYouMayKnow(token);
    if (res.status === "ok") {
      setUsers(res.data.users);
    }
    // setLoading(false);
  };

  return (
    <div className="pplumayknow">
      <div className="pplumayknow_header">
        People You May Know
        <div className="post_header_right ppl_circle hover1">
          <Dots />
        </div>
      </div>
      <div className="pplumayknow_list">
        {/* {loading
          ? Array.from(new Array(5), (val, i) => i + 1).map((id, i) => (
              <Skeleton
                key={i}
                width="150px"
                height="240px"
                containerClassName="avatar-skeleton"
                style={{ borderRadius: "10px" }}
              />
            ))
          : users.map((item, i) => (
              <AddFriendSmallCard
                item={item}
                key={i}
                userId={userId}
                getData={getData}
                token={token}
              />
            ))} */}
        {users.length > 0 &&
          users.map((item, i) => (
            <AddFriendSmallCard
              item={item}
              key={i}
              userId={userId}
              getData={getData}
              token={token}
            />
          ))}
      </div>
    </div>
  );
}
