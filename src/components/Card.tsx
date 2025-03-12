import styles from './card.module.css';
import Image from 'next/image';


export default function Productcard (){
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                 <Image src={'/img/venue.jpg'}
                alt = 'Product Picture'
                fill = {true}
                objectFit = 'cover'/>

            </div>
           
           <div className={styles.cardtext}>
                <h3>Luxury Event Spaces</h3>
                <p>Host your next event in our elegant venues, tailored for every occasion.</p>
           </div>
        </div>
    );
}