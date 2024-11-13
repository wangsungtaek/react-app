import { getEmotionImage } from "../util/get-emotion-icon";
import ComButton from "./ComButton";

import { useNavigate } from "react-router-dom";

import "./DiaryItem.css";

const DiaryItem = ({ id, createDate, emotionId, content, onClick }) => {
  const nav = useNavigate();
  return (
    <div className="DiaryItem">
      <div
        className={`emotion-wrapper emotion-${emotionId}`}
        onClick={() => nav(`diary/${id}`)}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="content-wrapper" onClick={() => nav(`diary/${id}`)}>
        <div className="createDate">
          {new Date(createDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button-wrapper" onClick={() => nav(`edit/${id}`)}>
        <ComButton text={"수정하기"} onClick={onClick} />
      </div>
    </div>
  );
};

export default DiaryItem;
