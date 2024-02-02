import { Layout } from 'antd';
import AppHeader from "./Components/layout/AppHeader.jsx";
import AppSider from "./Components/layout/AppSider.jsx";
import AppContent from "./Components/layout/AppContent.jsx";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': 'gQXff+w9YoEj9Zfriq2W6Xwal4R0Azvxsz1deIKoT1Q='
  }
};
fetch('https://openapiv1.coinstats.app/coins', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

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