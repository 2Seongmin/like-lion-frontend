const Textbook = (props) => {
    return (
        <div className="book">
            <h3 className="list1">{props.text}</h3>
            <img src={props.listimage} className="list2" alt="이미지" />
        </div>
    )
  };
  
  export default Textbook;