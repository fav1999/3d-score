function App() {
  return (
    <div className="wrapper">
      <header>
        <div className="headerLeft">
          <img src="/logo192.png" alt="Картинка не найдена"/>
          <div className="headerInfo">
            <h3>React 3D</h3>
            <p>Лучшие 3D-модели</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <svg />
            <span>3562 руб.</span>
          </li>
          <li>
            <svg />
          </li>
        </ul>
      </header>
      <div className="content">
        <h1>Все модели</h1>
      </div>
    </div>
  );
}

export default App;
