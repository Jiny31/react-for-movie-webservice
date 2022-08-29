import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail(){
    const {id} = useParams();
    const [detailData, setdetailData] = useState([]);
    const getMovieData = async() =>{
        const json = await ( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        setdetailData(json.data.movie);
        console.log(detailData);
    }
    useEffect( ()=>{
        getMovieData();
    },[]);
    return (
        <div>
            <h1>{detailData.title_long}</h1>
            <hr/>
            <div>
                <img src={detailData.large_cover_image}/>
                <p>상영시간: {detailData.runtime} 분</p>
                <p>다운로드: {detailData.download_count} 회</p>
                <p>평점: {detailData.rating} 점</p>
            </div>
            {detailData.description_full}
        </div>
    )
   
}

export default Detail;