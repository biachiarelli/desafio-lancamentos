const MaxLength = (props) => {
  function maxLength(text, MAX_LENGTH) {
    let textReturn = "";
    if (text && text.length > MAX_LENGTH) {
      textReturn = text.substring(0, MAX_LENGTH) + "...";
    } else {
      textReturn = text;
    }

    return textReturn;
  }
  return maxLength(props.text, props.length);
};

export default MaxLength;
