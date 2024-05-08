const Text = (props) => {
    return (
        <div className="titletext">
            <h1>{props.maintitle}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    )
  };
  
  export default Text;