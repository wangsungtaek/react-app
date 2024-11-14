import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { DiaryDispatchContext } from "../App";

import Header from "../components/Header";
import ComButton from "../components/ComButton";

import Editor from "../components/Editor";

const New = () => {
  const nav = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);

  const onSubmit = (diary) => {
    onCreate(diary.createDate, diary.emotionId, diary.content);
    nav("/", { replace: true });
  };

  return (
    <div className="New">
      <Header
        title={"새 일기 쓰기"}
        leftChild={<ComButton text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
