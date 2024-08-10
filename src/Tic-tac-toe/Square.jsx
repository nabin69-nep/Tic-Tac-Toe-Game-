const Square = (props) => {
  return (
    <div
    onClick={props.click}
      style={{
        border: "1px solid red",
        height: "100px",
        width: "100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
      }}
      className="square"
    >
      <h5>{props.value}</h5>
    </div>
  );
};
export default Square;
