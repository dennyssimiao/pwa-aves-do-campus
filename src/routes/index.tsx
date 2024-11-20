import { useAuth } from 'contexts/AuthContext';

import UserRoutes from 'routes/UserRoutes';
import AdminRoutes from 'routes/AdminRoutes';
import LoginRoutes from './LoginRoutes';

import LoadingSpinner from 'components/LoadingSpinner';

const PwaRoutes: React.FC = () => {
    const { user, isAdmin, isLoading } = useAuth();

    if (isLoading) return <LoadingSpinner />;

    return (user == null || isAdmin == null) ?
        <LoginRoutes /> : isAdmin ? <AdminRoutes /> : <UserRoutes />;
};

export default PwaRoutes;