"use client";

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faShare } from "@fortawesome/free-solid-svg-icons";

import Landing from "@/components/Landing";

import quotesAll from "@/json/quotesAll.json";

export default function QuoteAuthors({ params }) {
    const id = params.id;

    const filterData = quotesAll.result.filter((item) => item.authorId === Number(id))
    const author = quotesAll.authors.filter((item) => item.authorId === Number(id))[0].author

    function copyText(text) {
        navigator.clipboard.writeText(text)
        toast.success("تم نسخ الاقتباسة", {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    function shareText(text) {
        navigator.share({
            title: "",
            text: text,
            url: window.location.href
        })
    }

    const showData = filterData.map((item, index) =>
        <div key={index} className={"px-6 py-6 mb-3" + ((filterData.length - 1) === index ? "" : " border-b border-stone-700 border-solid")} >
            <figure className="max-w-screen-md mx-auto text-center">
                <svg className="w-10 h-10 mx-auto mb-3 text-lime-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                    <p className="text-2xl italic font-medium">
                        {item.text}
                    </p>
                </blockquote>
                <p className="mt-5 block pr-3 font-medium">
                    {item.author}
                </p>
            </figure>
            <div className="flex justify-center items-center mt-5 gap-5">
                <button onClick={() => copyText(`'${item.text}' ${item.author}`)} className="text-lime-600 border-2 border-lime-600 hover:bg-lime-600 hover:text-white focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                    <FontAwesomeIcon icon={faCopy} />
                </button>
                <button onClick={() => shareText(`'${item.text}' ${item.author}`)} className="text-lime-600 border-2 border-lime-600 hover:bg-lime-600 hover:text-white focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center">
                    <FontAwesomeIcon icon={faShare} />
                </button>
            </div>
        </div>
    );

    return (
        <>
            <Landing title={author} text="" />
            <ToastContainer />
            <section className="pt-20 pb-20 relative px-4">
                <div className="container m-auto">
                    {showData}
                </div>
            </section>
        </>
    );
}