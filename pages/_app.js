import '../styles/tailwind.css'
import Head from 'next/head'
import Layout from '../components/Layout'

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                key="viewport"
            />
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
)

export default MyApp
