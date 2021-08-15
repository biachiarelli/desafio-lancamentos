const DateFormat = (props) => {
  function formatData(date) {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);
    const hour = date.substring(11, 19);
    let newDate = day + "/" + month + "/" + year + " " + hour;
    return newDate;
  }

  return formatData(props.date);
};

export default DateFormat;
