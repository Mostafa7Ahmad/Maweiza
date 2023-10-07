import Link from "next/link";

export default function Custom500() {
    return (
        <>
            <section className="pt-52 pb-5">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="text-xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500 mb-10">500</h1>
                        <p className="text-lg tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white mb-5">خطا خادم</p>
                        <p className="font-light text-gray-500 dark:text-gray-400 mb-2">
                            تواصل مع مطور الموقع اذا استمرت هذه المشكله
                        </p>
                        <Link to="/" className="inline-flex text-white bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
                            العوده الي الصفحه الرئيسيه
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}