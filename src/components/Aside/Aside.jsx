import styles from './Aside.module.css';

const Aside = () => {
   return (
      <div className={styles['aside']}>
         <img src='public/react-icon.svg' alt='aside-logo' className={styles['logo']} />
         <h2 className={styles['title']}>
            <a href='/aside'>Работа над ошибками</a>
         </h2>
         <span className={styles['text']}>
            <a href='/aside'>Смотрите на Яндексе и запоминайте</a>
         </span>
      </div>
   );
};

export default Aside;
