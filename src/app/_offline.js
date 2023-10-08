import Link from "next/link";

export default function offline() {
    return (
        <>
            <section className="pt-52 pb-5">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-3xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">لا يتوفر اتصال بالانترنت</h1>
                        <p className="mb-4 text-2xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">عفوا لقد حصل خطأ</p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                        لم يتم تحميل البيانات اللازمه بسبب انقطاع الانترنت
                        </p>
                        <Link href="/" className="inline-flex text-white bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
                            العوده الي الصفحه الرئيسيه
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
} 
