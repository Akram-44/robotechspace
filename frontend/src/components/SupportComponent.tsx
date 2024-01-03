'use client'
import React, { useState } from 'react'
import faq from '@/assets/Faq.png';
import Image from "next/image"; // Import the Image component
import { ChevronDown } from 'lucide-react';

function SupportComponent() {
    const [open, setOpening] = useState(false)

    return (
        <div className="">
            <div>
                <div className="mt-8 opacity-75">
                    <Image className="lg:hidden" src={faq} alt="faq" width={70} height={50} />
                </div>
                <div>
                    <div className="mx-auto text-center px-4 mt-12 text-2xl text-indigo-900 font-semibold">Frequently Asked Questions</div>
                    <dl className="mt-8 mx-auto max-w-screen-sm lg:max-w-screen-lg flex flex-col lg:flex-row lg:flex-wrap">
                        <div className="lg:w-1/2">
                            <div className="question-and-answer select-none cursor-pointer border-2 mx-8 my-3 px-6 py-4 rounded-lg text-sm group">
                                <dt className="question">
                                    <div className="flex justify-between">
                                        <div onClick={() => setOpening(!open)} className="text-indigo-800 font-semibold cursor-pointer">
                                            Do you accept Paypal?
                                        </div>
                                        <div>
                                            <ChevronDown />
                                        </div>
                                    </div>
                                </dt>
                                <dd className={`${open ? "" : "hidden"} answer mt-2 leading-snug text-gray-700`}>
                                    Yes, we do, along with AliPay, PayTM, and Payoneer.
                                </dd>
                            </div>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default SupportComponent