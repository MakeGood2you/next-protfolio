import Image from 'next/image'

const Avatar = () => {
    return (
        <div className='hidden xl:flex xl:max-w-none rounded-lg'>
            <Image
                src={'/avatar.png'}
                width={737}
                height={678}
                alt=''
                className='translate-z-0 w-full h-full opacity-80'
            />
        </div>
    )
};

export default Avatar;
