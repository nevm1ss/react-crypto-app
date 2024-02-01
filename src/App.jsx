import { Layout } from 'antd';
import AppHeader from "./Components/layout/AppHeader.jsx";
import AppSider from "./Components/layout/AppSider.jsx";
import AppContent from "./Components/layout/AppContent.jsx";

export default function App() {
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  )
}