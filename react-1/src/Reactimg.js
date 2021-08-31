function Reactimg(props){
    const{ title, thumbnailUrl} = props;
    return(
    <div> 
        <div className="react02-1">{title}</div>
        <img className= "react02"src= {thumbnailUrl}/>
    </div>)
    };
export default Reactimg;