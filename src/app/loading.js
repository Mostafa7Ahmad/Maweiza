import localStorage from 'local-storage';

export default function Loading() {
    return (
        <div className={"splash-screen" + (localStorage.get('theme') == "dark" ? " dark" : "")} >
            <div className="loader"></div>
        </div>
    );
}
