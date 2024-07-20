export default function Landing(props) {
    return (
        <>
            <section className="bg-bottom bg-cover w-full mt-10 flex items-center justify-center pt-20">
                <div className="z-1 relative text-center container">
                    <h3 className="text-3xl mb-3">{props.title}</h3>
                    <p className="text-ml m-auto px-32">{props.text}</p>
                </div>
            </section>
        </>
    );
}
