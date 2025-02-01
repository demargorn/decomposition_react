// виджеты
const Widget = ({ title, children }) => {
   return (
      <div className='widget'>
         <h2 className='widget-title'>
            <a href='/title.domain'>{title}</a>
         </h2>
         {children}
      </div>
   );
};

export default Widget;
