export const DateShow = (str) => {
  let date = new Date(str);
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
};

export const DateInput = (str) => {
  let date = new Date(str);
  let year = date.getFullYear();
  let act_month = date.getMonth() + 1;
  let month = act_month <= 9 ? "0" + act_month : act_month;
  let day = date.getDate() <= 9 ? "0" + date.getDate() : date.getDate();
  return `${year}-${month}-${day}`;
};

export const DateTimeInput = (str) => {
  let date = new Date(str);
  let year = date.getFullYear();
  let act_month = date.getMonth() + 1;
  let month = act_month <= 9 ? "0" + act_month : act_month;
  let day = date.getDate() <= 9 ? "0" + date.getDate() : date.getDate();

  let hours = date.getHours() <= 9 ? "0" + date.getHours() : date.getHours();
  let minutes =
    date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes();

  console.log(`${year}-${month}-${day}T${hours}:${minutes}`);

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export const TimeInput = (str) => {
  let date = new Date(str);

  let hours = date.getHours() <= 9 ? "0" + date.getHours() : date.getHours();
  let minutes =
    date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes();

  return `${hours}:${minutes}`;
};

export const TimeInputMinesOne = (str) => {
  let date = new Date(str);
  let houresmines = date.getHours() - 1;

  let hours = houresmines <= 9 ? "0" + houresmines : houresmines;
  let minutes =
    date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes();

  return `${hours}:${minutes}`;
};

export const subtractOneHour = (date) => {
  const newDate = new Date(date);
  newDate.setHours(date.getHours() - 1);
  return newDate;
};

export const CombineDateTime = (str = "", time) => {
  let date = DateInput(str);
  //"2023-05-13T11:00:00.000Z"
  return new Date(`${date}T${time}:00.000Z`);
};

export const DateInput2 = (str) => {
  let date = new Date(str);
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const GetAge = (date) => {
  let year_now = new Date().getFullYear();
  let user_year = new Date(date).getFullYear();
  return Math.abs(year_now - user_year);
};

export const AddDays = (date, numberOfDaysToAdd) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numberOfDaysToAdd);
  return DateInput(newDate);
};
