import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import { movieAPI } from '../../shares/api';
import Seo from '../seo';

const Detail = ({ movieID }) => {
    const router = useRouter();
    const [title, id] = movieID || [];
    console.log(id)
    const { data, isLoading } = useQuery(['movie'], (id) => movieAPI.getDetail(id).then(res => res.data));
    console.log(data);
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <Seo title={title} />
            {title}
        </div>
    );
};

export function getServerSideProps({ params: { movieID } }) {
    return {
        props: {
            movieID,
        },
    }
}

export default Detail;