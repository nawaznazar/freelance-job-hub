import { Routes, Route } from 'react-router-dom'

// Public
import Landing from './pages/public/Landing.jsx'
import Login from './pages/public/Login.jsx'
import Register from './pages/public/Register.jsx'
import ResetPassword from './pages/public/ResetPassword.jsx'

// Client
import ClientDashboard from './pages/client/Dashboard.jsx'
import PostJob from './pages/client/PostJob.jsx'
import ClientJobDetail from './pages/client/JobDetail.jsx'
import HireEscrow from './pages/client/HireEscrow.jsx'
import ClientMessages from './pages/client/Messages.jsx'
import ClientMilestones from './pages/client/Milestones.jsx'
import ClientPayments from './pages/client/Payments.jsx'
import ClientReviews from './pages/client/Reviews.jsx'
import ClientSettings from './pages/client/Settings.jsx'

// Freelancer
import FreelancerDashboard from './pages/freelancer/Dashboard.jsx'
import BrowseJobs from './pages/freelancer/BrowseJobs.jsx'
import FreelancerJobDetail from './pages/freelancer/JobDetail.jsx'
import ProposeTerms from './pages/freelancer/ProposeTerms.jsx'
import FreelancerMessages from './pages/freelancer/Messages.jsx'
import FreelancerMilestones from './pages/freelancer/Milestones.jsx'
import Payouts from './pages/freelancer/Payouts.jsx'
import FreelancerReviews from './pages/freelancer/Reviews.jsx'
import Profile from './pages/freelancer/Profile.jsx'
import FreelancerSettings from './pages/freelancer/Settings.jsx'

// Admin
import AdminLogin from './pages/admin/Login.jsx'
import AdminDashboard from './pages/admin/Dashboard.jsx'
import VerifyUsers from './pages/admin/VerifyUsers.jsx'
import AdminJobs from './pages/admin/Jobs.jsx'
import AdminJobDetail from './pages/admin/JobDetail.jsx'
import Disputes from './pages/admin/Disputes.jsx'
import DisputeDetail from './pages/admin/DisputeDetail.jsx'
import Reports from './pages/admin/Reports.jsx'

// Shared
import Messages from './pages/shared/Messages.jsx'
import Notifications from './pages/shared/Notifications.jsx'
import FileViewer from './pages/shared/FileViewer.jsx'
import NotFound from './pages/shared/NotFound.jsx'

export default function RoutesView(){
  return (
    <Routes>
      {/* Public */}
      <Route path='/' element={<Landing />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/auth/register' element={<Register />} />
      <Route path='/auth/reset' element={<ResetPassword />} />

      {/* Client */}
      <Route path='/client' element={<ClientDashboard />} />
      <Route path='/client/post' element={<PostJob />} />
      <Route path='/client/jobs/:id' element={<ClientJobDetail />} />
      <Route path='/client/hire' element={<HireEscrow />} />
      <Route path='/client/messages' element={<ClientMessages />} />
      <Route path='/client/milestones' element={<ClientMilestones />} />
      <Route path='/client/payments' element={<ClientPayments />} />
      <Route path='/client/reviews' element={<ClientReviews />} />
      <Route path='/client/settings' element={<ClientSettings />} />

      {/* Freelancer */}
      <Route path='/freelancer' element={<FreelancerDashboard />} />
      <Route path='/freelancer/browse' element={<BrowseJobs />} />
      <Route path='/freelancer/jobs/:id' element={<FreelancerJobDetail />} />
      <Route path='/freelancer/propose' element={<ProposeTerms />} />
      <Route path='/freelancer/messages' element={<FreelancerMessages />} />
      <Route path='/freelancer/milestones' element={<FreelancerMilestones />} />
      <Route path='/freelancer/payouts' element={<Payouts />} />
      <Route path='/freelancer/reviews' element={<FreelancerReviews />} />
      <Route path='/freelancer/profile' element={<Profile />} />
      <Route path='/freelancer/settings' element={<FreelancerSettings />} />

      {/* Admin */}
      <Route path='/admin/login' element={<AdminLogin />} />
      <Route path='/admin' element={<AdminDashboard />} />
      <Route path='/admin/verify' element={<VerifyUsers />} />
      <Route path='/admin/jobs' element={<AdminJobs />} />
      <Route path='/admin/jobs/:id' element={<AdminJobDetail />} />
      <Route path='/admin/disputes' element={<Disputes />} />
      <Route path='/admin/disputes/:id' element={<DisputeDetail />} />
      <Route path='/admin/reports' element={<Reports />} />

      {/* Shared */}
      <Route path='/messages' element={<Messages />} />
      <Route path='/notifications' element={<Notifications />} />
      <Route path='/files' element={<FileViewer />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
