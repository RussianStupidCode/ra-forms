import React from "react";

const Table = ({ trainingList, onDelete }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Дата (ДД.ММ.ГГ)</th>
          <th scope="col">Пройдено км</th>
          <th scope="col">Действия</th>
        </tr>
      </thead>
      <tbody>
        {trainingList.map(({ date, distance, id }) => (
          <tr key={id}>
            <td>{date.format("DD.MM.YY")}</td>
            <td>{distance}</td>
            <td>
              <button onClick={() => onDelete(id)} className="btn btn-warning">
                <i className="bi bi-recycle"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
