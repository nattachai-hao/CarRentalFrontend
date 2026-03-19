import styles from './topmenu.module.css'
import Image from 'next/image';
import TopMeanuItem from './TopMenuItem';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';

export default async function TopMeanu() {

    const session = await getServerSession(authOptions)

    return(
        <div className={styles.menucontainer}>
            <Image src={'/img/logo.png'}
            className={styles.logoimg}
            alt='logo'
            width={0}
            height={0}
            sizes='100vh'
            />
            <TopMeanuItem title='Select Car' pageRef='/car'/>
            <TopMeanuItem title='Reservations' pageRef='/reservations'/>
            <TopMeanuItem title='About' pageRef='/about/'/>
            <div className='flex flex-row absolute right-0 h-full'>
            <TopMeanuItem title='Cart' pageRef='/cart'/>
            {
                session? <Link href="/api/auth/signout">
                    <div className='flex items-center !px-2 text-cyan-600 text-sm !m-2'>
                        Sign-Out of {session.user?.name}
                    </div>
                </Link>
                : <Link href="/api/auth/signin">
                    <div className='flex items-center !px-2 text-cyan-600 text-sm'>
                        Sign-In
                    </div>
                    </Link>
            }
            </div>
        </div>
    );
}