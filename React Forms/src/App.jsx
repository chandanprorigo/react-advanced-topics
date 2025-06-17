import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Login_useState from './components/Login_useInput.jsx';
import SignupFormAction from './form_actions/components/Signup.jsx';
// import Signup from './components/Signup.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Login /> */}
        {/* <Signup /> */}
        {/* <Login_useState /> */}

        {/* form actions in react 19 */}
        <SignupFormAction />
      </main>
    </>
  );
}

export default App;
