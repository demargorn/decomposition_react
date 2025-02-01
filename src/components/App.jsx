import Headling from './Headling/Headling';
import Aside from './Aside/Aside';
import Widget from './Widget/Widget';
import Input from './Input/Input';
import AdvBlock from './AdvBlock/AdvBlock';
import WeatherWidget from './WeatherWidget/WeatherWidget';
import './App.css';

const news = [
   {
      id: 100,
      text: 'Путин упростил получение автомобильных номеров',
   },
   {
      id: 101,
      text: 'В команде Зеленского раскрыли план реформ в Украине ',
   },
   {
      id: 102,
      text: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
   },
   {
      id: 103,
      text: 'Суд закрыл дело Демпартии США против Росии',
   },
   {
      id: 104,
      text: 'В Украине призвали создать ракеты для удара по Москве',
   },
];

const App = () => {
   return (
      <main className='page'>
         <section className='header'>
            <Headling title='Сейчас в СМИ' news={news} />
            <Aside />
         </section>
         <section className='search-input'>
            <img src='/public/yandex-logo.png' alt='yandex-logo' className='logo-input' />
            <Input />
         </section>
         <section>
            <AdvBlock>
               <img
                  src='https://cdn.gamestatic.net/files/editor_uploads/Iseman3d/%D0%B2%D1%81%D1%8F%D0%BA%D0%BE%D0%B5/%D0%9D%D0%BE%D0%B2%D0%B0%D1%8F%D0%9F%D0%B0%D0%BF%D0%BA%D0%B0%201/%D0%B4%D1%8987%D1%805%D0%BA45%D0%BF5%D0%B56767.jpg'
                  alt='adv-image'
                  className='adv-image'
               />
            </AdvBlock>
         </section>
         <section className='widgets-bottom'>
            <WeatherWidget />
            <Widget title='Карта Германии'>
               <a href='' className='widget-map_item'>
                  Расписание
               </a>
            </Widget>
            <Widget title='Эфир'>
               <ul className='widget-ether-list'>
                  <li className='widget-ether-list_item'>
                     <a href=''>Управление как исскусство</a>
                  </li>
                  <li className='widget-ether-list_item'>
                     <a href=''>Ночь. Мир в это время</a>
                  </li>
                  <li className='widget-ether-list_item'>
                     <a href=''>Андрей Возн...</a>
                  </li>
               </ul>
            </Widget>
            <Widget title='Посещаемое'>
               <ul className='widget-visited-list'>
                  <li className='widget-visited-list_item'>
                     <a href=''>Недвижимость - о сталинках</a>
                  </li>
                  <li className='widget-visited-list_item'>
                     <a href=''>Маркет - люстры и светильники</a>
                  </li>
                  <li className='widget-visited-list_item'>
                     <a href=''>Авто.ру</a>
                  </li>
               </ul>
            </Widget>
            <Widget title='Телепрограмма'>
               <ul className='widget-tv-list'>
                  <li className='widget-tv-list_item'>
                     <a href=''>02:00 THT.Best</a>
                  </li>
                  <li className='widget-tv-list_item'>
                     <a href=''>02:15 Джинглики</a>
                  </li>
                  <li className='widget-tv-list_item'>
                     <a href=''>02:25 Наедине со всеми</a>
                  </li>
               </ul>
            </Widget>
         </section>
      </main>
   );
};

export default App;
