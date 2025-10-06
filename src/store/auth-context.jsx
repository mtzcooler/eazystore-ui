import { createContext, useEffect, useContext, useReducer } from "react";

// STEP 1
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Action types
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const authReducer = (prevState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...prevState,
        user: action.payload.user,
        jwtToken: action.payload.jwtToken,
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        ...prevState,
        user: null,
        jwtToken: null,
        isAuthenticated: false,
      };
    default:
      return prevState;
  }
};

export const AuthProvider = ({ children }) => {
  const initialAuthState = (() => {
    try {
      const user = localStorage.getItem("user");
      const jwtToken = localStorage.getItem("jwtToken");
      if (jwtToken && user) {
        return {
          user: JSON.parse(user),
          jwtToken,
          isAuthenticated: true,
        };
      }
    } catch (error) {
      console.error("Failed to load from localStorage:", error);
    }
    return {
      user: null,
      jwtToken: null,
      isAuthenticated: false,
    };
  })();

  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      if (authState.isAuthenticated) {
        localStorage.setItem("user", JSON.stringify(authState.user));
        localStorage.setItem("jwtToken", authState.jwtToken);
      } else {
        localStorage.removeItem("user");
        localStorage.removeItem("jwtToken");
      }
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  }, [authState]);

  // Action creators
  const loginSuccess = (user, jwtToken) => {
    dispatch({ type: LOGIN_SUCCESS, payload: { user, jwtToken } });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        jwtToken: authState.jwtToken,
        isAuthenticated: authState.isAuthenticated,
        loginSuccess,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
