const CardStyle = {
    padding: "20px",
    width: "50%",
    boxShadow: "0px 0px 10px 0px #ccc",
    minHeight: "150px",
    margin: "50px auto",
    borderRadius: "10px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
}

function Card(props) {
    return (
        <div style={CardStyle}>
            {props.children}
        </div>
    )
}

export default Card