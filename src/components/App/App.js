import "./App.css";
import logo from "../../images/Ксюша.jpg";
import first from "../../images/1.jpg";

function App() {

    return (
        <div className="app">
            <img className="logo" src={logo} alt="logo"></img>
            <h1 className="name">Зиннатуллина Ксения</h1>
            <p className="about_me">Информация обо мне</p>
            <p className="about_card">Мои услуги</p>
            <div className="card">
                <img className="card_img" src={first} alt="first"></img>
                <h2 className="card_text">Вид услуги</h2>
                <p className="card_cost">100$</p>
            </div>
            <div className="card">
                <img className="card_img" src={first} alt="first"></img>
                <h2 className="card_text">Вид услуги</h2>
                <p className="card_cost">100$</p>
            </div>
            <div className="card">
                <img className="card_img" src={first} alt="first"></img>
                <h2 className="card_text">Вид услуги</h2>
                <p className="card_cost">100$</p>
            </div>
            <div className="card">
                <img className="card_img" src={first} alt="first"></img>
                <h2 className="card_text">Вид услуги</h2>
                <p className="card_cost">100$</p>
            </div>
            <div className="otzivy">
                <h1 className="otzivy_title">Отзывы</h1>
                <p className="otzivy_text">Очень круто, спасибо!</p>
            </div>
        </div>
    );
}

export default App;