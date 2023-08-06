import "./Login.css";
import { Button } from "@mui/material";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1o2tfuF2VCREuBuS8Df1Ew2BiN_Pmi4qonMc0QQ1-5_SXZmubP-RO0XsUihoOZ7mjqg&usqp=CAU"
          alt="slack"
        />
        <h1>Sign in to Slack</h1>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}
export default Login;
