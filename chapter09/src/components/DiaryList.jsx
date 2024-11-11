import { useContext } from "react";
import { DiaryStateContext } from "../App";
import "./DiaryList.css";

import ComButton from "./ComButton";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  console.log(DiaryStateContext);
  const { data } = useContext(DiaryStateContext);
  console.log(data);

  return (
    <div className="DiaryList">
      <div className="menu-wrapper">
        <select>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <ComButton text={"새 일기쓰기"} type={"POSITIVE"} />
      </div>

      <div className="DiaryItem-wrapper">
        {data.map((item) => (
          <DiaryItem
            key={item.id}
            createDate={new Date(item.createDate).toLocaleDateString()}
            content={item.content}
            emotionId={item.emotionId}
            onClick={() => {
              console.log(item.id);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
