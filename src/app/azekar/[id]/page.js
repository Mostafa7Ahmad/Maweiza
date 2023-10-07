import Landing from "@/components/Landing";

export default async function Azekar({ params }) {
    const id = params.id;

    let dataAzekar = [];
    let dataAzekarArray = [];

    try {
        const response = await fetch('https://raw.githubusercontent.com/Alsarmad/Adhkar-json/main/adhkar.json')
        const data = await response.json();
        dataAzekar = data[id - 1];
        dataAzekarArray = data[id - 1].array;
    } catch (error) {
        console.log(error);
    }

    const showData = dataAzekarArray.map((azekar, index) =>
        <div key={index} className="px-6 py-6 text-xl">
            {azekar.text}
        </div>
    );

    return (
        <>
            <Landing title={dataAzekar.category} text="" />
                <section className="pt-20 pb-20 relative px-4">
                    <div className="container m-auto">
                        {showData}
                    </div>
                </section>
        </>
    );
}
