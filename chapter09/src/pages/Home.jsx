import { useState } from "react";

import Header from "../components/Header";
import ComButton from "../components/ComButton";
import DiaryList from "../components/DiaryList";

const Home = () => {
  const [pivotDate, setPrivotDate] = useState(new Date());

  return (
    <>
      <div>
        <Header
          title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
          leftChild={<ComButton text={"<"} />}
          rightChild={<ComButton text={">"} />}
        />
      </div>
      <DiaryList />
    </>
  );
};

export default Home;
