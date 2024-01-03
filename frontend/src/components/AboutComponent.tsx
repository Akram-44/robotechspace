// Assuming that 'getAboutData' returns the correct type
import { getAboutData } from '@/helpers/getAboutData';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function AboutComponent() {
    // Assuming this structure fits your data
    interface AboutData {
        id: string;
        attributes: {
            title: string;
            description: string;
            link_url: string;
            link_text: string;
        };
    }

    const [data, setData] = useState<AboutData[]>([]);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const aboutDataList = await getAboutData();
                setData(aboutDataList);
            } catch (error) {
                console.error('Error fetching about data:', error);
            }
        };

        if (typeof window !== 'undefined') {
            // Run the effect only in the browser environment
            fetchAboutData();
        }
    }, []);

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                        Robotech space
                    </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <svg
                            viewBox="0 0 52 24"
                            fill="currentColor"
                            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                        >
                            <defs>
                                <pattern
                                    id="27df4f81-c854-45de-942a-fe90f7a300f9"
                                    x="0"
                                    y="0"
                                    width=".135"
                                    height=".30"
                                >
                                    <circle cx="1" cy="1" r=".7" />
                                </pattern>
                            </defs>
                            <rect
                                fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                                width="52"
                                height="24"
                            />
                        </svg>
                        <span className="relative">The</span>
                    </span>{' '}
                    quick, brown fox jumps over a lazy dog
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
            </div>
            <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
                {data &&
                    data.map((item) => (
                        <div key={item?.id} className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
                            <div className="mr-4">
                                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-designColor">
                                    {/* icon*/}
                                </div>
                            </div>
                            <div>
                                <h6 className="mb-3 text-xl font-bold leading-5">{item?.attributes?.title}</h6>
                                <p className="mb-3 text-sm text-gray-900">{item?.attributes?.description}</p>
                                <Link
                                    href={item?.attributes.link_url}
                                    aria-label=""
                                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                >
                                    {item?.attributes.link_text}
                                </Link>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default AboutComponent;
