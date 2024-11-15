import "./Viewer.css";
import { getEmotionImage } from "../util/get-emotion-icon";
import { emotionList } from "../util/constants";

const Viewer = ({ data }) => {
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(data.emotionId)
  );

  return (
    <div className="Viewer">
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_wrapper emotion_id_${data.emotionId}`}>
          <img className="emotion_img" src={getEmotionImage(data.emotionId)} />
          <div className="emotion_name">{emotionItem.emotionName}</div>
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content">{data.content}</div>
      </section>
    </div>
  );
};

export default Viewer;
