const TitlePage = (props) => {
  return (
    <div className="TitlePage">
      {props.title && <h1 className="TitlePage-title">{props.title}</h1>}
      {props.subtitle && (
        <h2 className="TitlePage-subtitle">{props.subtitle}</h2>
      )}
    </div>
  );
};

export default TitlePage;
