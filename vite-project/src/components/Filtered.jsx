

const Filtered = ({title , Movies}) => {
    return (
        <div>
            {
                Movies.filter((movie) => movie.title.toLowerCase().includes(title.toLowerCase())).map((movie) => (
                    <Movies key={movie.id} movie={movie} />
                ))
                }
        </div>
    )
    }

export default Filtered