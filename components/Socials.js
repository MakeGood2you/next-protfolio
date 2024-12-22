// links
import Link from 'next/link'

// icons
import {
    RiInstagramLine,
    RiFacebookLine,
    RiDribbbleLine,
    RiBehanceLine,
    RiLinkedinLine,
    RiGithubLine
} from 'react-icons/ri'

const Socials = () => {
    return (
        <div className={'flex items-center gap-x-5 text-xl'}>
            <Link href={'https://www.instagram.com/kobi_pertz/'} className={'hover:text-accent transition-all duration-300'}>
                <RiInstagramLine/>
            </Link>
            <Link href={'https://www.facebook.com/kobidf/'} className={'hover:text-accent transition-all duration-300'}>
                <RiFacebookLine/>
            </Link>
            <Link href={'https://www.linkedin.com/in/kobi-peretz-7648381ab/'} className={'hover:text-accent transition-all duration-300'}>
                <RiLinkedinLine/>
            </Link>
            <Link href={'https://github.com/MakeGood2you?tab=overview&from=2024-12-01&to=2024-12-17'} className={'hover:text-accent transition-all duration-300'}>
                <RiGithubLine/>
            </Link>
        </div>

    )
};

export default Socials;
