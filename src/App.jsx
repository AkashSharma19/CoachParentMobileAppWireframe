import React, { useState } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Support from './pages/Support';
import Grades from './pages/Grades';
import Schedule from './pages/Schedule';
import Assignments from './pages/Assignments';
import LifeAtMU from './pages/LifeAtMU';
import Announcements from './pages/Announcements';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const navigateTo = (tab) => setActiveTab(tab);

  return (
    <div className="app-main">
      {activeTab === 'dashboard' && <Header />}
      
      <main className="content">
        {activeTab === 'dashboard' && <Dashboard navigateTo={navigateTo} />}
        {activeTab === 'schedule' && <Schedule onBack={() => navigateTo('dashboard')} />}
        {activeTab === 'grades' && <Grades onBack={() => navigateTo('dashboard')} />}
        {activeTab === 'assignments' && <Assignments onBack={() => navigateTo('dashboard')} />}
        {activeTab === 'support' && <Support onBack={() => navigateTo('dashboard')} />}
        {activeTab === 'life-mu' && <LifeAtMU onBack={() => navigateTo('dashboard')} />}
        {activeTab === 'announcements' && <Announcements onBack={() => navigateTo('dashboard')} />}
      </main>
    </div>
  );
}

export default App;
