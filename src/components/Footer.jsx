import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

const links1 = [
    {
        name: "قران كريم",
        path: "/qaran",
    },
    {
        name: "تفسير القران",
        path: "/tafsir",
    },
    {
        name: "اسماء الله الحسني",
        path: "/names",
    },
    {
        name: "حديث",
        path: "/adith",
    },
    {
        name: "ادعيه والأذكار",
        path: "/azekar",
    },
    {
        name: "اقتباسات",
        path: "/quotes",
    }
]


const links2 = [
    {
        name: "كتب",
        path: "/books/1",
    },
    {
        name: "مقالات",
        path: "/articles/1",
    },
    {
        name: "خطب",
        path: "/khotab/1",
    },
    {
        name: "فتاوي",
        path: "/fatwa/1",
    },
    {
        name: "محاضرات صوتيه",
        path: "/audios/1",
    },
    {
        name: "محاضرات فديو",
        path: "/videos/1",
    }
]

function Footer() {
    const navLinks1 = links1.map((item, index) =>
        <li className={"py-5" + ((links1.length - 1) === index ? "" : " border-b border-stone-700 border-solid")} key={index} >
            <div className="hover:mr-2 transition-all">
                <FontAwesomeIcon className="text-lime-600" icon={faAngleDoubleLeft} />
                <Link className="text-gray-200 hover:text-white" href={item.path}>{item.name}</Link>
            </div>
        </li>
    )

    const navLinks2 = links2.map((item, index) =>
        <li className={"py-5" + ((links2.length - 1) === index ? "" : " border-b border-stone-700 border-solid")} key={index} >
            <div className="hover:mr-2 transition-all">
                <FontAwesomeIcon className="text-lime-600" icon={faAngleDoubleLeft} />
                <Link className="text-gray-200 hover:text-white" href={item.path}>{item.name}</Link>
            </div>
        </li>
    )
    return (
        <>
            <footer className="bg-[#191919] p-10 max-md:text-center pb-2">
                <div className="container m-auto px-3 md:grid md:gap-20 md:grid-cols-2 lg:grid-cols-4">
                    <div className="box text-xl">
                        <Image loading="lazy" quality={75} className="m-auto mb-3" width="200" height="250" src="/logo.png" alt="img" />
                        <p className="text text-gray-300">
                            موقع إسلامي يوجد به القرآن الكريم وتفسير القران الكريم والحديث الشريف واذكار وأدعيه والاقتباسات الاسلاميه واوقات الصلاه والمزيد
                        </p>
                        <div className="text-center text-gray-300 mt-5">
                            (صدقه جاريه)
                        </div>
                    </div>
                    <div className="box">
                        <ul className="links max-md:my-12">
                            {navLinks1}
                        </ul>
                    </div>
                    <div className="box">
                        <ul className="links max-md:my-12">
                            {navLinks2}
                        </ul>
                    </div>
                    <div className="box">
                        <div className="line text-gray-300 mb-5">
                            <p className="p-5 border-2 border-solid border-amber-300 text-amber-400">
                                <span className="text-xl">
                                    نسخه تجريبيه للموقع
                                </span>
                                <br />
                                تواصل معنا في حاله وجود اي خطا في الموقع او في المعلومات ليتم الاصلاح في اسرع وقت
                            </p>
                        </div>
                        <div className="line text-gray-300 my-10">
                            <p className="text-center md:text-xl"> مطور الموقع : مصطفي احمد </p>
                            <div className="mt-5 flex justify-center gap-2">
                                <a href="https://www.facebook.com/profile.php?id=100074054749083" className="text-lime-600 border border-lime-600 hover:bg-lime-600 hover:text-white focus:outline-none font-medium p-2.5 text-center inline-flex items-center">
                                    <FontAwesomeIcon className="w-4 h-4" icon={faFacebook} />
                                </a>
                                <a href="https://github.com/Mostafa7Ahmad/" className="text-lime-600 border border-lime-600 hover:bg-lime-600 hover:text-white focus:outline-none font-medium p-2.5 text-center inline-flex items-center">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="copyright text-center py-5 mt-5 text-white border-t border-solid border-stone-700">
                    <span> جميع الحقوق محفوظة © لموقع </span>
                    <span className="text-lime-600">موعظة</span>
                </p>
            </footer>
        </>
    );
}

export default Footer;