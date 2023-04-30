import Image from "next/image";
const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Image width={200} height={200} src={'/loading.svg'}/>
        </div>
    );
}

export default Loading;