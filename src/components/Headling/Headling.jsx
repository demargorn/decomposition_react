//новостная шапка сайта
import styles from './Headling.module.css';

const Headling = ({ title, news }) => {
   return (
      <div className={styles['headling']}>
         <h2 className={styles['title']}>
            <a href='#'>{title}</a>
         </h2>
         <div className={styles['body']}>
            <ul className={styles['news-list']}>
               {news.map((n) => (
                  <li key={n.id}>
                     <a href='#'>{n.text}</a>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Headling;
