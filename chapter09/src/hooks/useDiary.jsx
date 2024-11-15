import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const nav = useNavigate();
  const [currentDiaryItem, setCurrentDiaryItem] = useState({});
  const { data } = useContext(DiaryStateContext);

  useEffect(() => {
    const currentDiary = data.find((item) => String(item.id) === String(id));
    if (!currentDiary) {
      alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
      return;
    }
    setCurrentDiaryItem(currentDiary);
  }, [id, data]);

  return currentDiaryItem;
};

export default useDiary;
