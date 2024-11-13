import { useState, useContext, useEffect } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import ComButton from "../components/ComButton";
import DiaryList from "../components/DiaryList";

const getMonthlyData = (data, pivotDate) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return data.filter((item) => {
    return beginTime <= item.createDate && endTime >= item.createDate;
  });
};

const Home = () => {
  const { data } = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  const filterdData = getMonthlyData(data, pivotDate);

  return (
    <>
      <div>
        <Header
          title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
          leftChild={<ComButton text={"<"} onClick={onDecreaseMonth} />}
          rightChild={<ComButton text={">"} onClick={onIncreaseMonth} />}
        />
      </div>
      <DiaryList data={filterdData} />
    </>
  );
};

export default Home;
