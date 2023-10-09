import Link from "next/link";

export default function Books() {
    return (
        <>
            <section className="pt-52 pb-5">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <p className="text-lg tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white mb-5"> ستتوفر قريبا </p>
                        <p className="font-light text-gray-500 dark:text-gray-400 mb-2">
                        جاري العمل عليها ورفعا بعد الانتهاء منها
                        </p>
                        <Link href="/" className="inline-flex text-white bg-lime-600 hover:bg-lime-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">
                            عوده
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}