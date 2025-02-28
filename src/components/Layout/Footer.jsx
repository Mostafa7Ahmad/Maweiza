import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { links1, links2, links3 } from "@/data/links";

function Footer() {
    return (
        <>
            <div className="md:pb-12">
                <footer className="mx-auto block container bg-white dark:bg-[#191919] border rounded-xl dark:border dark:border-stone-700 shadow-[0_0_20px_rgb(0_0_0_/_5%)] p-10 max-md:text-center pb-2">
                    <div className="px-3 md:grid md:gap-20 md:grid-cols-2 lg:grid-cols-4">
                        <div className="box text-xl">
                            <Image
                                loading="lazy"
                                quality={75}
                                className="m-auto mb-3"
                                width="200"
                                height="250"
                                src="/logo.png"
                                alt="img"
                            />
                            <p className="text text-gray-800 dark:text-gray-300 text-sm">
                                موقع إسلامي يوجد به القرآن الكريم وتفسير القران
                                الكريم والحديث الشريف واذكار وأدعيه والاقتباسات
                                الاسلاميه واوقات الصلاه والمزيد
                            </p>
                        </div>
                        <div className="box"><ul className="links max-md:my-12">{links1.map((item, index) => (
                            <li
                                className={
                                    "py-5" +
                                    (links1.length - 1 === index
                                        ? ""
                                        : " border-b border-stone-200 dark:border-stone-700 border-solid")
                                }
                                key={index}
                            >
                                <div className="hover:mr-2 flex items-center transition-all">
                                    <FontAwesomeIcon
                                        className="text-sm max-h-3 text-lime-600"
                                        icon={faAngleDoubleLeft}
                                    />
                                    <Link
                                        className="text-gray-800 dark:text-gray-300"
                                        href={item.path}
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                            </li>
                        ))}</ul></div>
                        <div className="box"><ul className="links max-md:my-12">{links2.map((item, index) => (
                            <li
                                className={
                                    "py-5" +
                                    (links2.length - 1 === index
                                        ? ""
                                        : " border-b border-stone-200 dark:border-stone-700 border-solid")
                                }
                                key={index}
                            >
                                <div className="hover:mr-2 flex items-center transition-all">
                                    <FontAwesomeIcon
                                        className="text-sm max-h-3 text-lime-600"
                                        icon={faAngleDoubleLeft}
                                    />
                                    <Link
                                        className="text-gray-800 dark:text-gray-300"
                                        href={item.path}
                                    >
                                        {item.name}
                                    </Link>
                                </div>
                            </li>
                        ))}</ul></div>
                        <div className="box">
                            <ul className="links max-md:my-12">{links3.map((item, index) => (
                                <li
                                    className={
                                        "py-5" +
                                        (links3.length - 1 === index ? "" : " border-b border-stone-200 dark:border-stone-700 border-solid")
                                    }
                                    key={index}
                                >
                                    <div className="hover:mr-2 flex items-center transition-all">
                                        <FontAwesomeIcon
                                            className="text-sm max-h-3 text-lime-600"
                                            icon={faAngleDoubleLeft}
                                        />
                                        <Link
                                            className="text-gray-800 dark:text-gray-300"
                                            href={item.path}>
                                            {item.name}
                                        </Link>
                                    </div>
                                </li>
                            ))}</ul>
                            <div className="line text-gray-800 dark:text-gray-300 my-10">
                                <p className="text-center md:text-ml">
                                    مطور الموقع : مصطفي احمد
                                </p>
                                <div className="mt-5 flex justify-center gap-2">
                                    <a
                                        href="https://www.facebook.com/profile.php?id=100074054749083"
                                        className="text-lime-600 border dark:border-stone-700 hover:bg-lime-600 hover:text-white focus:outline-none font-medium p-2.5 text-center inline-flex items-center"
                                    >
                                        <FontAwesomeIcon
                                            className="w-4 h-4"
                                            icon={faFacebook}
                                        />
                                    </a>
                                    <a
                                        href="https://github.com/Mostafa7Ahmad/"
                                        className="text-lime-600 border dark:border-stone-700 hover:bg-lime-600 hover:text-white focus:outline-none font-medium p-2.5 text-center inline-flex items-center">
                                        <FontAwesomeIcon icon={faGithub} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="copyright text-center py-5 mt-5 text-gray-800 dark:text-gray-300 border-t border-solid border-stone-200 dark:border-stone-700">
                        <span> جميع الحقوق محفوظة © لموقع </span>
                        <span className="text-lime-600">موعظة</span>
                    </p>
                </footer>
            </div>
        </>
    );
}

export default Footer;
