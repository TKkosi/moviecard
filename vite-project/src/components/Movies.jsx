const Movies = ({ id="sdsd", title="sdnsakn", year="1990", rate = "10" }) => {
    return (
        <div className="h-80 rounded-2xl flex flex-col justify-center items-center">
            <h1>{title}</h1>
            <p>{id}</p>
            <p>{year}</p>
            <p>rating : {rate}</p>
        </div>
    )
}

export default Movies