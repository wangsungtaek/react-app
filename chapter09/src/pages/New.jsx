import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import ComButton from "../components/ComButton";

import Editor from "../components/Editor";

const New = () => {
  const nav = useNavigate();
  return (
    <div className="New">
      <Header
        title={"새 일기 쓰기"}
        leftChild={<ComButton text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
      />
      <Editor />
    </div>
  );
};

export default New;
