const News = (props) => {
    return (
        <table className="news">
            <tr>
                <td>
                    <h4>{props.channel}</h4>
                    <h3>{props.title}</h3>
                    <h5>{props.contents}</h5>
                </td>
                <td>
                    <img src={props.image} alt="이미지" />
                </td>
            </tr>
        </table>
    )
};
export default News;