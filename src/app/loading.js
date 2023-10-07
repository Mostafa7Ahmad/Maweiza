export default function Loading() {
    return (
        <div className="fixed top-0 left-0 right-0 h-screen w-full overflow-hidden flex flex-col items-center bg-white dark:bg-black justify-center z-50">
            <div className="loading ease-linear rounded-full border-4 border-t-4 border-t-lime-600 border-gray-200 h-12 w-12 mb-4" />
            <h2 className="text-center text-black dark:text-white text-xl font-semibold">جاري التحميل ...</h2>
        </div>
    )
}