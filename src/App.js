function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img width={40} height={40} src="/img/atom.gif" alt="Логотип магазина"/>
          <div>
            <h3>React 3D</h3>
            <p>Лучшие 3D-модели</p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="shop">
            <img width={35} height={35} src="/img/shopping_buy.png" alt="Корзина покупок"/>
            <span>3562 руб.</span>
          </li>
          <li className="profile">
            <img width={35} height={35} src="/img/profile_user.png" alt="Пользователь"/>
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все модели</h1>
        <div className="card">
          <img width={130} height={130} src="/img/m3d/hand_3d.png" alt=""/>
          <p>Робо-рука biomechanical hand</p>
          <div className="cardBottom">
            <div className="cardBottomPrice">
              <span>Цена:</span>
              <b>1 300 руб.</b>
            </div>
            <button className="button">
              <img width={15} height={15} src="/img/new_create.png" alt="Plus"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
