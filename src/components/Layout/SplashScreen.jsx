
import Image from 'next/image';

export default function SplashScreen() {
    return (
        <>
            <div className='h-screen w-full flex items-center justify-center'>
                <Image src="/loading.gif" width={200} height={200} alt='' className='rounded-full' />
            </div>
        </>
    );
}
