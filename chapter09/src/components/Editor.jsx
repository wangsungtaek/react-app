import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ComButton from "./ComButton";
import "./Editor.css";

import EmotionItem from "./emotionItem";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();
  const [diary, setDiary] = useState({
    createDate: new Date().getTime(),
    emotionId: 3,
    content: "",
  });
  console.log("###Editor render", initData);

  useEffect(() => {
    console.log("## diary", diary);

    if (
      typeof initData === "object" &&
      initData !== null &&
      Object.keys(initData).length > 0
    ) {
      console.log("## initData", initData);
      setDiary({
        ...initData,
      });
    }
  }, [initData]);

  const onSubmitButtonClick = () => {
    onSubmit(diary);
  };

  const changeData = (e) => {
    if (e.target.name === "createDate") {
      setDiary({
        ...diary,
        createDate: new Date(e.target.value).getTime(),
      });
      return;
    }
    setDiary({ ...diary, [e.target.name]: e.target.value });
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createDate"
          type="date"
          value={new Date(diary.createDate).toISOString().split("T")[0]}
          onChange={changeData}
        />
      </section>

      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === diary.emotionId}
              onClick={() =>
                changeData({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
            />
          ))}
        </div>
      </section>

      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          placeholder="오늘은 어땠나요?"
          value={diary.content}
          onChange={changeData}
        />
      </section>
      <section className="button_section">
        <ComButton text={"취소하기"} onClick={() => nav(-1)} />
        <ComButton
          text={"작성완료"}
          type={"POSITIVE"}
          onClick={onSubmitButtonClick}
        />
      </section>
    </div>
  );
};

export default Editor;
