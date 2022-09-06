import moment from "moment";
import React, { useState, useEffect, useRef } from "react";
import { isValidDate, isValidDistance } from "../../../helpers/utils";

const AddForm = ({ onSubmit }) => {
  const currentId = useRef(0);

  const [form, setForm] = useState({ date: "", distance: "" });

  const onChange = ({ target }) => {
    const newForm = { ...form, [target.name]: target.value };
    setForm(newForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const outputForm = {
      date: moment(form.date, "DD.MM.YY", true),
      distance: Number(form.distance),
      id: currentId.current,
    };
    onSubmit(outputForm);

    currentId.current++;
  };

  const [valid, setValid] = useState(true);

  useEffect(() => {
    if (isValidDate(form.date) && isValidDistance(form.distance)) {
      setValid(false);
      return;
    }

    setValid(true);
  }, [form]);

  return (
    <form className="d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column mx-2">
        <label>Дата (ДД.ММ.ГГ)</label>
        <input name="date" onChange={onChange} />
      </div>

      <div className="d-flex flex-column mx-2">
        <label>Пройдено км</label>
        <input name="distance" onChange={onChange} />
      </div>

      <div className="d-flex flex-column mx-2 align-self-end">
        <button
          className="btn btn-primary"
          disabled={valid}
          onClick={handleSubmit}
        >
          OK
        </button>
      </div>
    </form>
  );
};

export default AddForm;
