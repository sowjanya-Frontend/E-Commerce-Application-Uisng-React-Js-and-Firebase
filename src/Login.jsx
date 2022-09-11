import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from './FireBase';
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector, useDispatch } from 'react-redux';
import { setUserName, removeUserName } from './store/user'
import { Toast } from "react-bootstrap";
import { useAlert } from "react-alert";

/**
 * @description: To display Login in or sign in page details
 * @return:sign in or login page design
 * @param void
 * @author: Sowjanya Kandra
 * @required: Login.jsx
*/

function Login() {
  const alert = useAlert();

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen

      return;
    }
    if (user) {
      navigate("/Home");
      dispatch(setUserName(email));
    }
  }, [user, loading]);

  return (
    <React.Fragment>

      <div className='auth-inner'>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="text"
            value={email}
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}

          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button
            className="btn btn-primary"
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
        </div>

        <div>
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to="/sign-up">Register</Link> now.
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
