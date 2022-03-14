import Card from '@/Components/Common/Card';
import ProfileBodyMain from './Main/ProfileBodyMain';
import Sidebar from './Sidebar/Sidebar';

const PortfolioBody = () => (
  <Card flexDirection="row" border="none">
    <ProfileBodyMain />
    <Sidebar />
  </Card>
);

export default PortfolioBody;
