import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "./DiaryList.css";

import ComButton from "./ComButton";
import DiaryItem from "./DiaryItem";

const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createDate) - Number(b.createDate);
      } else {
        return Number(b.createDate) - Number(a.createDate);
      }
    });
  };

  return (
    <div className="DiaryList">
      <div className="menu-wrapper">
        <select onChange={onChangeSortType}>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <ComButton
          onClick={() => nav("/new")}
          text={"새 일기쓰기"}
          type={"POSITIVE"}
        />
      </div>

      <div className="DiaryItem-wrapper">
        {getSortedData().map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
