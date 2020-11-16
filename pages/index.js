import Layout from '../components/layout';
import Head from 'next/head'

function Home() {
	return(
		<Layout>
			<Head>
				<title>next crud</title>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
		</Layout>
	);
}

export default Home;