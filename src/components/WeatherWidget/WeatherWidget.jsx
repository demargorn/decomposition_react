import Widget from '../Widget/Widget';
import styles from './WeatherWidget.module.css';

const WeatherWidget = (props) => {
   return (
      <Widget {...props} title='Погода'>
         <div className={styles['container']}>
            <img src='/public/sun-icon.svg' alt='weather-icon' className={styles['icon']} />
            <strong className={styles['main-temperature']}>+17</strong>
            <div className={styles['span-container']}>
               <span>Утром +17</span>
               <span>Вечером +20</span>
            </div>
         </div>
      </Widget>
   );
};

export default WeatherWidget;
