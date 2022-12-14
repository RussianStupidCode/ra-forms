import moment from "moment";

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

const isValidDate = (dateString) => {
  return moment(dateString, "YYYY-MM-DD", true).isValid();
};

const isValidDistance = (distance) => {
  if (!distance) {
    return false;
  }

  return !isNaN(Number(distance));
};

export { hexToRgb, isValidDate, isValidDistance };
