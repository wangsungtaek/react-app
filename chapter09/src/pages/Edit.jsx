import { useParams } from "react-router-dom";

const Edit = () => {
  return <div>`{useParams().id}번 일기입니다.`</div>;
};

export default Edit;
