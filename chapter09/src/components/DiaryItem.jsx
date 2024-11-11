import { getEmotionImage } from "../util/get-emotion-icon";
import ComButton from "./ComButton";

import "./DiaryItem.css";

const DiaryItem = ({ createDate, emotionId, content, onClick }) => {
  return (
    <div className="DiaryItem">
      <div className={`emotion-wrapper emotion-${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="content-wrapper">
        <div className="createDate">{createDate}</div>
        <div className="content">{content}</div>
      </div>
      <div className="button-wrapper">
        <ComButton text={"수정하기"} onClick={onClick} />
      </div>
    </div>
  );
};

export default DiaryItem;
