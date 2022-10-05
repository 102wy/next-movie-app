import Link from 'next/link';
import { QueryClient, useQuery, dehydrate } from 'react-query';
import styled from 'styled-components';
import Loading from '../components/Loading';
import Movie from '../components/movie';
import { movieAPI } from '../shares/api';
import Seo from './seo';

export default function Home() {
  const { data, isLoading } = useQuery(['movie'], () => movieAPI.getPopular().then(res => res.data.results));
  console.log(data);
  if (isLoading) {
    return <Loading />
  }
  return (
    <Wrap>
      <Seo title='HOME' />
      {data?.map(movie => (
        <Link href={`/movies/${movie.original_title}/${movie.id}`} key={movie.id}>
          <a><Movie title={movie.original_title} img={movie.poster_path} /></a>
        </Link>
      ))}
    </Wrap>
  );
}
// export async function getServerSideProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(['movie'], () => movieAPI.getPopular().then(res => res.data.results))
//   return {
//     props: {
//       dehydrateState: dehydrate(queryClient),
//     }
//   }
// }

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  gap: 2rem;
`
