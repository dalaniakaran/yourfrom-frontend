import { useRoutes } from "raviger";
import Home from "../Home";
import UserForm from "../UserForm";
const routes = {
  "/": () => <Home />,
  "/user-form": () => <UserForm />,
};
export default function AppRouter() {
  const routeResult = useRoutes(routes);
  return <>{routeResult}</>;
}
