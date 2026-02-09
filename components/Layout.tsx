
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  PieChart, 
  Users, 
  Settings, 
  Menu, 
  X, 
  Bell,
  Search,
  MapPin
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'ddugky', label: 'DDU-GKY Sikkim', icon: GraduationCap },
    { id: 'iti', label: 'Sikkim ITIs', icon: BookOpen },
    { id: 'analytics', label: 'State Analytics', icon: PieChart },
    { id: 'users', label: 'Beneficiaries', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-slate-200 transition-all duration-300 flex flex-col`}>
        <div className="p-6 flex items-center gap-3">
          <div className="bg-[#0F4C81] p-2 rounded-lg">
            <GraduationCap className="text-white h-6 w-6" />
          </div>
          {isSidebarOpen && (
            <div className="flex flex-col">
              <span className="font-bold text-[#0F4C81] text-lg leading-tight">Skill Sikkim</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Govt. of Sikkim</span>
            </div>
          )}
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${
                activeTab === item.id 
                  ? 'bg-[#0F4C81] text-white' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <item.icon size={20} />
              {isSidebarOpen && <span className="font-medium">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
           <button 
             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
             className="w-full flex items-center gap-4 px-4 py-3 text-slate-400 hover:text-slate-600"
           >
             {isSidebarOpen ? <X size={20}/> : <Menu size={20}/>}
             {isSidebarOpen && <span>Collapse Sidebar</span>}
           </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4 flex-1">
             <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
                <input 
                  type="text" 
                  placeholder="Search Sikkim projects..." 
                  className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/20 focus:border-[#0F4C81]"
                />
             </div>
             <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <MapPin size={12} />
                <span>State HQ: Gangtok</span>
             </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-slate-500 hover:text-[#0F4C81]">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">5</span>
            </button>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-slate-900">Dept Admin</p>
                <p className="text-xs text-slate-500 font-medium">Skill Development Dept, Sikkim</p>
              </div>
              <img 
                src="https://picsum.photos/seed/sikkim-admin/40/40" 
                alt="Avatar" 
                className="h-10 w-10 rounded-full border border-slate-200"
              />
            </div>
          </div>
        </header>

        {/* Viewport */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
};
