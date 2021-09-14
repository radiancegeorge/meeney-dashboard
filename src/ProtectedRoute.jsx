import { Route, Redirect } from "react-router-dom";
import FeedContainer from "./components/FeedContainer";
const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isProtected = true;

  return (
    <Route
      {...rest}
      render={({ ...props }) => {
        return isProtected ? (
          <FeedContainer>
            <Component {...props} />
          </FeedContainer>
        ) : (
          <Redirect to="/auth" />
        );
      }}
    />
  );
};

export default ProtectedRoute;
