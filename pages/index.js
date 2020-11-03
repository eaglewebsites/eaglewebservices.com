import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

const Index = () => {
    const backgroundImage =
        'https://images.unsplash.com/photo-1545262722-9e0d80a0bc01?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1558&q=80'

    const backgroundStyle = `background-image:
    linear-gradient(to right, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),
    url('${backgroundImage}');`

    // style={{ backgroundImage: `url(${backgroundImage})` }}

    return (
        <Layout>
            <Head>
                <title>Eagle Web Services</title>
                <meta
                    name="description"
                    content="Eagle web services"
                />
            </Head>
            <section
                className="bg-cover bg-top"
                style={{
                    backgroundImage:
                        "linear-gradient(45deg, rgba(53,22,212,0.9), rgba(152,22,212,0.9)),url('https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')",
                }}
            >
                <div className="max-w-4xl mx-auto flex flex-wrap py-64 flex items-center justify-center">
                    <div className="w-full flex flex-col">
                        <h1 className="text-4xl md:text-6xl font-black leading-none text-white mb-4 text-center">
                            We build websites <br /> for small
                            businesses
                        </h1>
                        <p className="text-white font-thin text-xl md:text-2xl leading-tight text-center mb-8 px-4">
                            Eagle web services builds websites for
                            small businesses of all kinds. We help
                            design, develop, and host your website
                            with free updates.
                        </p>
                        <a
                            href="#"
                            className="mx-auto inline-block bg-green-500 text-center px-5 py-3 rounded-xl shadow-xl text-white font-semibold tracking-wide hover:bg-green-400"
                        >
                            Our Showcase
                        </a>
                    </div>
                </div>
                <div className="w-full -mt-24">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#ffffff"
                            fillOpacity="1"
                            d="M0,160L60,176C120,192,240,224,360,218.7C480,213,600,171,720,149.3C840,128,960,128,1080,154.7C1200,181,1320,235,1380,261.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </section>
        </Layout>
    )
}

export default Index
