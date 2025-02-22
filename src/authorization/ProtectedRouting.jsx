
import { useGetUserQuery } from "../features/RTK/loginApi";
import { ToastError } from "../components/ui/Toast";

const ProtectedRouting = ({ children, role = "user" }) => {
  const { data: user } = useGetUserQuery();
  if (user?.role === role) {
    return children;
  } else {
    ToastError("You don't have permission to access this page");
  }
};

export default ProtectedRouting

