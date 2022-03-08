import { Navigate } from 'react-router-dom';
import * as stages from './redux/utils/constants';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children, path, stage }) => {
  let isStage = false;
  switch (path) {
    case 'trivia':
      isStage = stages.TRIVIA === stage;
      break;
    case 'result':
      isStage = stages.END_TRIVIA === stage;
      break;
    default:
      break;
  }

  return isStage ? children : <Navigate to={'/'} />;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
  stage: PropTypes.string.isRequired,
};

export default ProtectedRoute;
