function Kon(props){
    const{ title, title1,thumbnailUrl,title2,title3} = props;
    return(
        <div className="card1">
        <img className= "react02"src= {thumbnailUrl}/>
        <h3>{title}</h3>
        <p>{title1}</p>
        <p>{title2}</p>
        <button>{title3}</button>
    </div>)
    };
export default Kon;