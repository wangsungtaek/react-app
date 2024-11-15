import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import useDiary from "../hooks/useDiary";

import Header from "../components/Header";
import Editor from "../components/Editor";
import ComButton from "../components/ComButton";

const Edit = () => {
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const { id } = useParams();

  const currentDiaryItem = useDiary(id);

  const onClickDelete = () => {
    if (confirm("정말 일기를 삭제하시겠습니까?")) {
      onDelete(id);
      nav("/", { replace: true });
    }
  };

  const onSubmit = (item) => {
    if (confirm("수정하시겠습니까?")) {
      onUpdate(id, item.createDate, item.emotionId, item.content);
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"수정하기"}
        leftChild={<ComButton text={"< 뒤로가기"} onClick={() => nav(-1)} />}
        rightChild={
          <ComButton
            text={"삭제하기"}
            type={"NAGATIVE"}
            onClick={onClickDelete}
          />
        }
      />

      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
