// поисковая строка
import styles from './Input.module.css';

const Input = () => {
   return (
      <div className={styles['container']}>
         <nav className={styles['navigator']}>
            <a href='/videos'>Видео</a>
            <a href='/pictures'>Картинки</a>
            <a href='/news'>Новости</a>
            <a href='/carts'>Карты</a>
            <a href='/market'>Маркет</a>
            <a href='/translate'>Переводчик</a>
            <a href='/on-air'>Эфир</a>
            <a href='/other'>еще</a>
         </nav>
         <div className={styles['input-container']}>
            <input id='search' name='search' placeholder='' className={styles['input']} />
            <button className={styles['button']}>Найти</button>
         </div>
         <span className={styles['subinput-text']}>
            Найдется все. Например, <a href='#0'>фаза луны сегодня</a>
         </span>
      </div>
   );
};

export default Input;
