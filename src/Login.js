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
        console.log(result);
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
          src="https://previews.us-east-1.widencdn.net/preview/48045879/assets/asset-view/120e11d9-89e2-4f3a-8989-8e60478c762d/thumbnail/eyJ3IjoyMDQ4LCJoIjoyMDQ4LCJzY29wZSI6ImFwcCJ9?Expires=1690185600&Signature=ExB5NU7Fu6NskrQYWKl8bJX6Uond~ZbFKPAcQwwfn75Dnuhj7lrDM~RRMb0eLIKp~jlOZMYE57epQw0Ok69H2vmTaEzQtQeIlt7ED1X3QZRvbOAIdNwFNlf89d-3R-fTZ-lrLC~9JdXt3IBj5reJLoO43SG8Q~kZIUERsQ3a5w7BS6phvZKaUzVvItIm70RwVDo9qh8eU4tM25CFfJTrZ--Wp073T0OOc1tZ~thyIj4sgsbAfjWck4rxBxgw1v6aDIuwee~XW0~c-LExJdlIeKdFpi4KuDFLzGPewYZScu-e9aEVJ-QUUZcib5ziqimDSOKb-Kf6zMuz3S7DpamYFA__&Key-Pair-Id=APKAJM7FVRD2EPOYUXBQ"
          alt="slack"
        />
        <h1>Sign in</h1>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}
export default Login;
