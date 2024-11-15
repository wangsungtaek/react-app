import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Viewer from "../components/Viewer";
import ComButton from "../components/ComButton";

const Diary = () => {
  const { id } = useParams();
  const nav = useNavigate();

  const { data } = useContext(DiaryStateContext);

  const getCurrentDiary = () => {
    return data.find((item) => Number(item.id) === Number(id));
  };

  const diary = getCurrentDiary();

  return (
    <div>
      <Header
        title={`${new Date(diary.createDate).toLocaleDateString()} 기록`}
        leftChild={<ComButton text={"< 뒤로 가기"} onClick={() => nav("/")} />}
        rightChild={
          <ComButton text={"수정하기"} onClick={() => nav(`/edit/${id}`)} />
        }
      />
      <Viewer data={diary} />
    </div>
  );
};

export default Diary;
