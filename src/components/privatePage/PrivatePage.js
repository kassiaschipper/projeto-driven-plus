import { Navigate } from "react-router-dom";

export default function PrivatePage({ children }) {
  const auth = JSON.parse(localStorage.getItem("drivenplus"));

  if (auth) {
    return <>{children}</>;
  } else {
    return <Navigate to="/" />;
  }
}
