import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { AdminDashboard } from '@/components/dashboards/AdminDashboard';
import { ModelDashboard } from '@/components/dashboards/ModelDashboard';
import { AgencyDashboard } from '@/components/dashboards/AgencyDashboard';
import { BrandDashboard } from '@/components/dashboards/BrandDashboard';
import { Loader2 } from 'lucide-react';

const Dashboard = () => {
  const { user, userRole, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-accent" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  // Route to correct dashboard based on role
  switch (userRole) {
    case 'admin':
      return <AdminDashboard />;
    case 'model':
      return <ModelDashboard />;
    case 'agency':
      return <AgencyDashboard />;
    case 'brand':
      return <BrandDashboard />;
    default:
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">No Role Assigned</h2>
            <p className="text-muted-foreground">Please contact support to assign a role to your account.</p>
          </div>
        </div>
      );
  }
};

export default Dashboard;
