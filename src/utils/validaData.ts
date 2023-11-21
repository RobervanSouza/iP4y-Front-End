import moment from "moment";

export const validaData = (date) => {
  return moment(date, "YYYY-MM-DD", true).isValid();
};
