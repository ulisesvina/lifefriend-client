import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex h-80 justify-center">
            <div className="text-center m-auto items-center">
                <h2 className="text-6xl">
                    Page not found
                </h2>
                <br />
                <div className="flex flex-col items-center justify-center mt-10">
                    <Link href="/">
                        <button className="text-xl bg-accent text-white py-2 px-4 rounded">
                            Go back to home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFound;