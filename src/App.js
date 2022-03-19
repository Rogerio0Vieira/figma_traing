import "./App.css";

export default function App() {
  return (
    <div className="App">
      <section className={"LeftPanel"}>
        <LoginTitle className={"LoginTitle"} title={"Login"}/>
        <Description className={"Description"} primaryText={"Aqui você pode entrar na sua conta ou criar uma nova conta"}/>
        <Input className={"Input"} type={"text"} placeholder={"Seu email raro"}/>
        <Input className={"Input"} type={"password"} placeholder={"Informe sua senha"}/>

        <Helper className={"Helper"} helperText={"Esqueceu a senha?"}/>

        <DefaultButton buttonText={"Login"} />
      </section>
      <section className={"RightPanel"}>
        <div className={"Logo"}/>
        <FeaturedText className={"FeaturedText"} featuredText={"Experimente uma nova forma de gerenciar times de tecnologia"}/>
        <SecondaryText className={"SecondaryText"} secondaryText={"Gerencie alocações, feedbacks e saiba como seus colaboradores estão sentindo a empresa usando ciência de dados"}/>
      </section>
    </div>
  );
}

function DefaultButton(props) {
  return <button className="DefaultButton">{props.buttonText}</button>;
}

function DefaultSecondaryButton(props) {
  return <button className="DefaultSecondaryButton">{props.buttonText}</button>;
}

function LoginTitle(props) {
  return <h1 className={props.className}>{props.title}</h1>;
}

function Description(props) {
  return <p className={props.className}>{props.primaryText}</p>;
}

function FeaturedText(props) {
  return <p className={props.className}>{props.featuredText}</p>;
}
function SecondaryText(props) {
  return <p className={props.className}>{props.secondaryText}</p>;
}

function Input(props) {
  return (
    <form>
        <input className={props.className} type={props.type} placeholder={props.placeholder}/>
    </form>
  )
}

function Helper(props) {
  return <h3 className={props.className}>{props.helperText}</h3>;
}

function Modal(props) {
  
}