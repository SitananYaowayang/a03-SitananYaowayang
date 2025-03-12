import styles from './banner.module.css';
import Image from 'next/image';
export default function Banner(){
    return(
        <div className={styles.banner}>
            <Image src={'/img/banner1.jpg'} 
                alt = 'cover'
                fill= { true }
                objectFit='cover'/>

                <div className={styles.bannerText}>
                    <h1>where every event finds its venue</h1>
                    <h3>Book the perfect space for your wedding, conference, or special event.</h3>
                </div>
                

        </div>
    );
}