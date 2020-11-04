import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import { Check } from 'react-feather'

const Index = () => {
    const [positionY, setPositionY] = useState(0)

    useEffect(() => {
        const scrollY = window.addEventListener('scroll', (event) => {
            setPositionY(event.target.documentElement.scrollTop)
        })
    }, [])

    const features = [
        {
            title: 'Free Updates',
            description:
                'All changes and updates are unlimited & free. Send us a note and will make the change.',
        },
        {
            title: 'Designed for your business',
            description: `We design sites to match your brand and industry. You won't be charged until you love it.`,
        },
        {
            title: 'Fast & Mobile Friendly',
            description: `All of our sites are mobile friendly and are fast and snappy - No long loading times.`,
        },
        {
            title: 'Search Engine Optimized',
            description: `We follow best optimization practices, to help customers find your business online.`,
        },
    ]

    const x = 0
    const y = 100
    const styles = {
        transform: `translate(0px, ${positionY / 2}px)`,
        backgroundImage:
            'linear-gradient(' +
            positionY / 3 +
            "deg, rgba(53,22,212,0.9), rgba(152,22,212,0.9)),url('https://images.unsplash.com/photo-1508766917616-d22f3f1eea14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')",
    }

    return (
        <Layout>
            <Head>
                <title>Eagle Web Services</title>
                <meta
                    name="description"
                    content="Eagle web services"
                />
            </Head>
            <section className="relative overflow-hidden">
                <div className="max-w-4xl mx-auto flex flex-wrap py-64 flex items-center justify-center relative z-40">
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
                <div
                    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                    style={styles}
                ></div>
                <div className="w-full relative">
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
            <section className="bg-white pt-12 pb-24 relative">
                <div className="flex flex-wrap container mx-auto p-4">
                    <div className="w-full md:w-2/5 pr-8 mb-12 md:mb-0">
                        <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-2"></div>
                        <p className="text-xl leading-none font-extrabold mb-2">
                            Features you will love
                        </p>
                        <p className="antialiased text-gray-700 pr-6">
                            Eagle web services builds websites for
                            small businesses of all kinds. We help
                            design, develop, and host your website
                            with free updates.
                        </p>
                    </div>
                    <div className="w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {features.map(({ title, description }) => (
                            <div>
                                <p className="font-bold text-gray-900 flex">
                                    {title}
                                </p>
                                <p className="antialiased text-gray-700">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-blue-600 py-24">
                <div className="max-w-2xl mx-auto flex flex-wrap p-4">
                    <div className="w-full">
                        <p className="text-2xl leading-none font-extrabold mb-2 text-center">
                            What does the process look like?
                        </p>
                        <p className="text-center">
                            Glad you asked! Here is a outline of what
                            you can expect to get started.
                        </p>
                    </div>
                </div>
                <div className="max-w-2xl mx-auto p-4">
                    <Step>
                        <div className="w-full md:w-1/5">Step 1</div>
                        <div className="w-full md:flex-1">
                            <p>
                                First, we will gather some information
                                about you such as your business name,
                                contact info, current website, ect.
                            </p>
                        </div>
                    </Step>
                    <Step>
                        <div className="w-full md:w-1/5">Step 2</div>
                        <div className="w-full md:flex-1">
                            <p>
                                After getting some information about
                                your and your business, we will then
                                collect digital assets such as your
                                logo, pictures, and any other media.
                            </p>
                            <p>
                                We also make use of stock imagery, so
                                if you don't have many photos, don't
                                worry, we can search through millions
                                for you.
                            </p>
                        </div>
                    </Step>
                    <Step>
                        <div className="w-full md:w-1/5">Step 3</div>
                        <div className="w-full md:flex-1">
                            <p>
                                Now that we have everything we need,
                                we will start building the home page
                                of your new site, and then send you a
                                test link to review
                            </p>
                            <p>
                                We will start with just the home page
                                to make sure you are liking the
                                general "feel" of the website before
                                designing & building the remaining
                                pages.
                            </p>
                        </div>
                    </Step>
                    <Step>
                        <div className="w-full md:w-1/5">
                            Go live!
                        </div>
                        <div className="w-full md:flex-1">
                            <p>
                                Your entire website will be available
                                at a demo URL before we go live. We
                                can either purchase a domain and
                                manage on your behalf, or we can help
                                update your account.
                            </p>
                            <p>
                                Once you are completely ready, we will
                                flip the switch and your new site will
                                be live!
                            </p>
                        </div>
                    </Step>
                </div>
            </section>
        </Layout>
    )
}

const Step = ({ children }) => (
    <div className="w-full flex flex-wrap">{children}</div>
)

export default Index
