import Categories from "@/components/Categories";

import image from "@/images/4159264.webp";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <>
            <section className="bg-bottom relative bg-cover w-full h-screen flex items-center justify-center p-10">
                <div className="z-1 mt-20 relative flex flex-col-reverse md:flex-row md:justify-around">
                        <div className="flex text-center justify-center md:text-right flex-col">
                            <h3 className="text-2xl mb-3">
                                مرحبا بكم في موقع موعظة
                            </h3>
                            <p className="text-ml md:max-w-[700px]">
                                موقع إسلامي يوجد به القرآن الكريم وتفسير القران
                                الكريم والحديث الشريف واذكار وأدعيه والاقتباسات
                                الاسلاميه واوقات الصلاه والمزيد
                            </p>
                        </div>
                    
                    <img
                        alt=""
                        className="m-auto mt-5 up-and-down"
                        src={image.src}
                    />
                </div>
                <a
                    href="#categories"
                    className="go-down text-lime-600 transition-colors text-xl hover:text-lime-700"
                >
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                </a>
            </section>
            <Categories />
        </>
    );
}
