import Categories from "@/components/web/Categories";

import image from "@/images/4159264.webp";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
    return (
        <>
            <div className="container mx-auto relative h-screen p-10 mt-[120px] lg:mt-2 flex items-center justify-center">
                <div className="mx-4 flex flex-wrap md:justify-between justify-items-center items-center">
                    <div className="px-4">
                        <div className="hero-content">
                            <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark sm:text-[42px] lg:text-[40px] xl:text-3xl dark:text-white">
                                مرحبا بكم في موقع موعظة
                            </h1>
                            <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6">
                                اكتشف عالمًا من المعرفة والعلم مع موقعنا المخصص لتقديم محتوى إسلامي شامل ومتنوع. نقدم لك مجموعة واسعة من الأقسام التي تلبي احتياجاتك المختلفة، استمتع بمكتبة غنية من الكتب والمقالات، وابقَ على اطلاع بأوقات الصلاة والأحاديث النبوية. والمزيد ...
                            </p>
                            {/* <ul className="flex flex-wrap items-center">
                                <li>
                                    <a href="javascript:void(0)" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7">
                                        Get Started
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white">
                                        <span className="mr-2">
                                            <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={12} cy="12.6152" r={12} fill="#3758F9" />
                                                <rect x="7.99893" y="14.979" width="8.18182" height="1.63636" fill="white" />
                                                <rect x="11.2717" y="7.61523" width="1.63636" height="4.09091" fill="white" />
                                                <path d="M12.0898 14.1606L14.9241 11.0925H9.25557L12.0898 14.1606Z" fill="white" />
                                            </svg>
                                        </span>
                                        Download App
                                    </a>
                                </li>
                            </ul> */}
                            {/* <div className="clients pt-16">
                                <h6 className="mb-6 flex items-center text-xs font-normal text-body-color dark:text-dark-6">
                                    Some Of Our Clients
                                    <span className="ml-3 inline-block h-px w-8 bg-body-color" />
                                </h6>
                            </div> */}
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="lg:ml-auto lg:text-right">
                            <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                <img src={image.src} alt="hero" className="max-w-full lg:ml-auto up-and-down my-10" />
                                <span className="absolute -bottom-8 -left-8 z-[-1]">
                                    <svg width={93} height={93} viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                        <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <a
                    href="#categories"
                    className="go-down -bottom-24 text-lime-600 transition-colors text-xl hover:text-lime-700"
                >
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                </a>
            </div>



            <section className="overflow-hidden pb-12 pt-20 lg:pb-[90px] lg:pt-[120px] dark:bg-dark">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap items-center justify-between">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="-mx-3 flex items-center sm:-mx-4">
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="py-3 sm:py-4">
                                        <img src={image.src} alt className="w-full rounded-2xl" />
                                    </div>
                                    <div className="py-3 sm:py-4">
                                        <img src={image.src} alt className="w-full rounded-2xl" />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                    <div className="relative z-10 my-4">
                                        <img src={image.src} alt className="w-full rounded-2xl" />
                                        <span className="absolute -bottom-7 -right-7 z-[-1]">
                                            <svg width={134} height={106} viewBox="0 0 134 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="1.66667" cy={104} r="1.66667" transform="rotate(-90 1.66667 104)" fill="#3056D3" />
                                                <circle cx="16.3333" cy={104} r="1.66667" transform="rotate(-90 16.3333 104)" fill="#3056D3" />
                                                <circle cx={31} cy={104} r="1.66667" transform="rotate(-90 31 104)" fill="#3056D3" />
                                                <circle cx="45.6667" cy={104} r="1.66667" transform="rotate(-90 45.6667 104)" fill="#3056D3" />
                                                <circle cx="60.3334" cy={104} r="1.66667" transform="rotate(-90 60.3334 104)" fill="#3056D3" />
                                                <circle cx="88.6667" cy={104} r="1.66667" transform="rotate(-90 88.6667 104)" fill="#3056D3" />
                                                <circle cx="117.667" cy={104} r="1.66667" transform="rotate(-90 117.667 104)" fill="#3056D3" />
                                                <circle cx="74.6667" cy={104} r="1.66667" transform="rotate(-90 74.6667 104)" fill="#3056D3" />
                                                <circle cx={103} cy={104} r="1.66667" transform="rotate(-90 103 104)" fill="#3056D3" />
                                                <circle cx={132} cy={104} r="1.66667" transform="rotate(-90 132 104)" fill="#3056D3" />
                                                <circle cx="1.66667" cy="89.3333" r="1.66667" transform="rotate(-90 1.66667 89.3333)" fill="#3056D3" />
                                                <circle cx="16.3333" cy="89.3333" r="1.66667" transform="rotate(-90 16.3333 89.3333)" fill="#3056D3" />
                                                <circle cx={31} cy="89.3333" r="1.66667" transform="rotate(-90 31 89.3333)" fill="#3056D3" />
                                                <circle cx="45.6667" cy="89.3333" r="1.66667" transform="rotate(-90 45.6667 89.3333)" fill="#3056D3" />
                                                <circle cx="60.3333" cy="89.3338" r="1.66667" transform="rotate(-90 60.3333 89.3338)" fill="#3056D3" />
                                                <circle cx="88.6667" cy="89.3338" r="1.66667" transform="rotate(-90 88.6667 89.3338)" fill="#3056D3" />
                                                <circle cx="117.667" cy="89.3338" r="1.66667" transform="rotate(-90 117.667 89.3338)" fill="#3056D3" />
                                                <circle cx="74.6667" cy="89.3338" r="1.66667" transform="rotate(-90 74.6667 89.3338)" fill="#3056D3" />
                                                <circle cx={103} cy="89.3338" r="1.66667" transform="rotate(-90 103 89.3338)" fill="#3056D3" />
                                                <circle cx={132} cy="89.3338" r="1.66667" transform="rotate(-90 132 89.3338)" fill="#3056D3" />
                                                <circle cx="1.66667" cy="74.6673" r="1.66667" transform="rotate(-90 1.66667 74.6673)" fill="#3056D3" />
                                                <circle cx="1.66667" cy="31.0003" r="1.66667" transform="rotate(-90 1.66667 31.0003)" fill="#3056D3" />
                                                <circle cx="16.3333" cy="74.6668" r="1.66667" transform="rotate(-90 16.3333 74.6668)" fill="#3056D3" />
                                                <circle cx="16.3333" cy="31.0003" r="1.66667" transform="rotate(-90 16.3333 31.0003)" fill="#3056D3" />
                                                <circle cx={31} cy="74.6668" r="1.66667" transform="rotate(-90 31 74.6668)" fill="#3056D3" />
                                                <circle cx={31} cy="31.0003" r="1.66667" transform="rotate(-90 31 31.0003)" fill="#3056D3" />
                                                <circle cx="45.6667" cy="74.6668" r="1.66667" transform="rotate(-90 45.6667 74.6668)" fill="#3056D3" />
                                                <circle cx="45.6667" cy="31.0003" r="1.66667" transform="rotate(-90 45.6667 31.0003)" fill="#3056D3" />
                                                <circle cx="60.3333" cy="74.6668" r="1.66667" transform="rotate(-90 60.3333 74.6668)" fill="#3056D3" />
                                                <circle cx="60.3333" cy="30.9998" r="1.66667" transform="rotate(-90 60.3333 30.9998)" fill="#3056D3" />
                                                <circle cx="88.6667" cy="74.6668" r="1.66667" transform="rotate(-90 88.6667 74.6668)" fill="#3056D3" />
                                                <circle cx="88.6667" cy="30.9998" r="1.66667" transform="rotate(-90 88.6667 30.9998)" fill="#3056D3" />
                                                <circle cx="117.667" cy="74.6668" r="1.66667" transform="rotate(-90 117.667 74.6668)" fill="#3056D3" />
                                                <circle cx="117.667" cy="30.9998" r="1.66667" transform="rotate(-90 117.667 30.9998)" fill="#3056D3" />
                                                <circle cx="74.6667" cy="74.6668" r="1.66667" transform="rotate(-90 74.6667 74.6668)" fill="#3056D3" />
                                                <circle cx="74.6667" cy="30.9998" r="1.66667" transform="rotate(-90 74.6667 30.9998)" fill="#3056D3" />
                                                <circle cx={103} cy="74.6668" r="1.66667" transform="rotate(-90 103 74.6668)" fill="#3056D3" />
                                                <circle cx={103} cy="30.9998" r="1.66667" transform="rotate(-90 103 30.9998)" fill="#3056D3" />
                                                <circle cx={132} cy="74.6668" r="1.66667" transform="rotate(-90 132 74.6668)" fill="#3056D3" />
                                                <circle cx={132} cy="30.9998" r="1.66667" transform="rotate(-90 132 30.9998)" fill="#3056D3" />
                                                <circle cx="1.66667" cy="60.0003" r="1.66667" transform="rotate(-90 1.66667 60.0003)" fill="#3056D3" />
                                                <circle cx="1.66667" cy="16.3333" r="1.66667" transform="rotate(-90 1.66667 16.3333)" fill="#3056D3" />
                                                <circle cx="16.3333" cy="60.0003" r="1.66667" transform="rotate(-90 16.3333 60.0003)" fill="#3056D3" />
                                                <circle cx="16.3333" cy="16.3333" r="1.66667" transform="rotate(-90 16.3333 16.3333)" fill="#3056D3" />
                                                <circle cx={31} cy="60.0003" r="1.66667" transform="rotate(-90 31 60.0003)" fill="#3056D3" />
                                                <circle cx={31} cy="16.3333" r="1.66667" transform="rotate(-90 31 16.3333)" fill="#3056D3" />
                                                <circle cx="45.6667" cy="60.0003" r="1.66667" transform="rotate(-90 45.6667 60.0003)" fill="#3056D3" />
                                                <circle cx="45.6667" cy="16.3333" r="1.66667" transform="rotate(-90 45.6667 16.3333)" fill="#3056D3" />
                                                <circle cx="60.3333" cy="60.0003" r="1.66667" transform="rotate(-90 60.3333 60.0003)" fill="#3056D3" />
                                                <circle cx="60.3333" cy="16.3333" r="1.66667" transform="rotate(-90 60.3333 16.3333)" fill="#3056D3" />
                                                <circle cx="88.6667" cy="60.0003" r="1.66667" transform="rotate(-90 88.6667 60.0003)" fill="#3056D3" />
                                                <circle cx="88.6667" cy="16.3333" r="1.66667" transform="rotate(-90 88.6667 16.3333)" fill="#3056D3" />
                                                <circle cx="117.667" cy="60.0003" r="1.66667" transform="rotate(-90 117.667 60.0003)" fill="#3056D3" />
                                                <circle cx="117.667" cy="16.3333" r="1.66667" transform="rotate(-90 117.667 16.3333)" fill="#3056D3" />
                                                <circle cx="74.6667" cy="60.0003" r="1.66667" transform="rotate(-90 74.6667 60.0003)" fill="#3056D3" />
                                                <circle cx="74.6667" cy="16.3333" r="1.66667" transform="rotate(-90 74.6667 16.3333)" fill="#3056D3" />
                                                <circle cx={103} cy="60.0003" r="1.66667" transform="rotate(-90 103 60.0003)" fill="#3056D3" />
                                                <circle cx={103} cy="16.3333" r="1.66667" transform="rotate(-90 103 16.3333)" fill="#3056D3" />
                                                <circle cx={132} cy="60.0003" r="1.66667" transform="rotate(-90 132 60.0003)" fill="#3056D3" />
                                                <circle cx={132} cy="16.3333" r="1.66667" transform="rotate(-90 132 16.3333)" fill="#3056D3" />
                                                <circle cx="1.66667" cy="45.3333" r="1.66667" transform="rotate(-90 1.66667 45.3333)" fill="#3056D3" />
                                                <circle cx="1.66667" cy="1.66683" r="1.66667" transform="rotate(-90 1.66667 1.66683)" fill="#3056D3" />
                                                <circle cx="16.3333" cy="45.3333" r="1.66667" transform="rotate(-90 16.3333 45.3333)" fill="#3056D3" />
                                                <circle cx="16.3333" cy="1.66683" r="1.66667" transform="rotate(-90 16.3333 1.66683)" fill="#3056D3" />
                                                <circle cx={31} cy="45.3333" r="1.66667" transform="rotate(-90 31 45.3333)" fill="#3056D3" />
                                                <circle cx={31} cy="1.66683" r="1.66667" transform="rotate(-90 31 1.66683)" fill="#3056D3" />
                                                <circle cx="45.6667" cy="45.3333" r="1.66667" transform="rotate(-90 45.6667 45.3333)" fill="#3056D3" />
                                                <circle cx="45.6667" cy="1.66683" r="1.66667" transform="rotate(-90 45.6667 1.66683)" fill="#3056D3" />
                                                <circle cx="60.3333" cy="45.3338" r="1.66667" transform="rotate(-90 60.3333 45.3338)" fill="#3056D3" />
                                                <circle cx="60.3333" cy="1.66683" r="1.66667" transform="rotate(-90 60.3333 1.66683)" fill="#3056D3" />
                                                <circle cx="88.6667" cy="45.3338" r="1.66667" transform="rotate(-90 88.6667 45.3338)" fill="#3056D3" />
                                                <circle cx="88.6667" cy="1.66683" r="1.66667" transform="rotate(-90 88.6667 1.66683)" fill="#3056D3" />
                                                <circle cx="117.667" cy="45.3338" r="1.66667" transform="rotate(-90 117.667 45.3338)" fill="#3056D3" />
                                                <circle cx="117.667" cy="1.66683" r="1.66667" transform="rotate(-90 117.667 1.66683)" fill="#3056D3" />
                                                <circle cx="74.6667" cy="45.3338" r="1.66667" transform="rotate(-90 74.6667 45.3338)" fill="#3056D3" />
                                                <circle cx="74.6667" cy="1.66683" r="1.66667" transform="rotate(-90 74.6667 1.66683)" fill="#3056D3" />
                                                <circle cx={103} cy="45.3338" r="1.66667" transform="rotate(-90 103 45.3338)" fill="#3056D3" />
                                                <circle cx={103} cy="1.66683" r="1.66667" transform="rotate(-90 103 1.66683)" fill="#3056D3" />
                                                <circle cx={132} cy="45.3338" r="1.66667" transform="rotate(-90 132 45.3338)" fill="#3056D3" />
                                                <circle cx={132} cy="1.66683" r="1.66667" transform="rotate(-90 132 1.66683)" fill="#3056D3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="mt-10 lg:mt-0">
                                <span className="mb-4 block text-lg font-semibold text-primary">
                                    Why Choose Us
                                </span>
                                <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px] dark:text-white">
                                    Make your customers happy by giving services.
                                </h2>
                                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                                    It is a long established fact that a reader will be distracted
                                    by the readable content of a page when looking at its layout.
                                    The point of using Lorem Ipsum is that it has a more-or-less.
                                </p>
                                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                                    A domain name is one of the first steps to establishing your
                                    brand. Secure a consistent brand image with a domain name that
                                    matches your business.
                                </p>
                                <a href="javascript:void(0)" className="inline-flex bg-gradient-to-r from-green-600 to-lime-500 items-center justify-center rounded-md border border-transparent bg-primary px-7 py-3 text-center text-base font-medium text-white hover:bg-opacity-90">
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





            <Categories />










            <div className="container mx-auto px-4 mb-10">
                <div className="overflow-hidden rounded-sm bg-white dark:bg-[#191919] border border-gray-200 dark:border-stone-700">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/2">
                            <div className="relative z-10 py-10 sm:p-14 lg:pb-24">
                                <h2 className="mb-6 text-3xl font-semibold text-white sm:text-4xl md:text-[40px]/[48px]">
                                    Start Building <br />
                                    for Free
                                </h2>
                                <p className="max-w-[300px] text-base text-white">
                                    And because your company is unique, you will need an
                                    extensible identity solution.
                                </p>
                                <div>
                                    <span className="absolute bottom-0 right-0 z-[-1] rotate-180">
                                        <svg width={585} height={400} viewBox="0 0 585 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M585 -6H0V400C168.393 400 570.581 310.231 585 -6Z" fill="#3056D3" />
                                        </svg>
                                    </span>
                                    <span className="absolute right-22 top-0 z-[-2] rotate-180">
                                        <svg width={392} height={189} viewBox="0 0 392 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M391.516 189H0V28C301.088 -64.8 386.464 96.6667 391.516 189Z" fill="#13C296" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full self-center px-4 lg:w-1/2">
                            <div className="relative z-10 px-6 py-9 sm:p-10">
                                <h2 className="mb-6 text-3xl font-semibold text-dark sm:text-4xl dark:text-white">
                                    Subscribe Now
                                </h2>
                                <form className="flex flex-wrap pb-1 gap-2">
                                    <input type="email" className="mb-3 h-[50px] w-full max-w-[220px] rounded-md border border-stroke bg-white px-5 text-sm text-body-color outline-none focus:border-primary md:max-w-[315px] lg:max-w-[250px] xl:max-w-[315px] dark:border-dark-3 dark:bg-dark dark:text-dark-6" placeholder="Your work mail" />
                                    <button className="mb-3 h-[50px] bg-gradient-to-r from-green-600 to-lime-500 rounded-md border border-transparent bg-primary px-7 text-base font-medium text-white transition hover:bg-opacity-90">
                                        Submit
                                    </button>
                                </form>
                                <p className="text-sm text-body-color dark:text-dark-6">
                                    You will receive every news and pro tips.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
