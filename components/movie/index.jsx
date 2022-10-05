import { MovieWrap } from './styles';

const Movie = ({ title, img }) => {
    return (
        <MovieWrap>
            <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt="영화포스터" />
            <h4>{title}</h4>
        </MovieWrap>
    );
};

export default Movie;