import React, { useState } from "react";
import AddForm from "./addForm";
import Table from "./table";

const CRM = () => {
  const [trainingList, setTrainingList] = useState([]);

  const onSubmit = (form) => {
    setTrainingList(
      [...trainingList, form].sort((first, second) => first.date - second.date)
    );
  };

  const handleDelete = (id) => {
    const filtered = trainingList.filter((training) => training.id !== id);
    setTrainingList(filtered);
  };

  return (
    <>
      <AddForm onSubmit={onSubmit} />
      <Table trainingList={trainingList} onDelete={handleDelete} />
    </>
  );
};

export default CRM;
