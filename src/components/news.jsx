import React from 'react';
import "./css/news.css";


const News = (props) => {
  
  return (
    <div>
      <div className='bigtitle'>전체뉴스</div>
        <table className="news">
            <tr>
                <td className='tablebox'>
                    <p className='channel'>{props.channel}</p>
                    <p className='title'>{props.title}</p>
                    <p className='contents'>{props.contents}</p>
                </td>
                <td>
                    <img src={props.image} alt="이미지"/>
                </td>
            </tr>
        </table>

        <table className="news">
            <tr>
                <td className='tablebox'>
                    <p className='channel'>{props.channel}</p>
                    <p className='title'>{props.title}</p>
                    <p className='contents'>{props.contents}</p>
                </td>
                <td>
                    <img src={props.image} alt="이미지"/>
                </td>
            </tr>
        </table>

        <table className="news">
            <tr>
                <td className='tablebox'>
                    <p className='channel'>{props.channel}</p>
                    <p className='title'>{props.title}</p>
                    <p className='contents'>{props.contents}</p>
                </td>
                <td>
                    <img src={props.image} alt="이미지"/>
                </td>
            </tr>
        </table>

        <table className="news">
            <tr>
                <td className='tablebox'>
                    <p className='channel'>{props.channel}</p>
                    <p className='title'>{props.title}</p>
                    <p className='contents'>{props.contents}</p>
                </td>
                <td>
                    <img src={props.image} alt="이미지"/>
                </td>
            </tr>
        </table>

        <table className="news">
            <tr>
                <td className='tablebox'>
                    <p className='channel'>{props.channel}</p>
                    <p className='title'>{props.title}</p>
                    <p className='contents'>{props.contents}</p>
                </td>
                <td>
                    <img src={props.image} alt="이미지"/>
                </td>
            </tr>
        </table>

    </div>
  )
};
export default News;
