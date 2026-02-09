
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { ProjectTable } from './components/ProjectTable';
import { MOCK_PROJECTS, MOCK_BENEFICIARIES, DISTRICT_ANALYTICS } from './constants';
import { ProjectType } from './types';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, Cell, PieChart, Pie 
} from 'recharts';
import { 
  Shield, 
  MapPin, 
  Globe, 
  Mail, 
  Phone, 
  Search, 
  Plus, 
  Download,
  Filter,
  ArrowRight,
  Settings as SettingsIcon,
  Bell,
  HardHat,
  Tractor,
  Laptop
} from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-12">
            <Dashboard />
            <ProjectTable 
              data={MOCK_PROJECTS.slice(0, 5)} 
              title="Recent Training Projects Across Sikkim Districts" 
            />
          </div>
        );
      case 'ddugky':
        const ddugkyData = MOCK_PROJECTS.filter(p => p.type === ProjectType.DDUGKY);
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">DDU-GKY Sikkim Division</h1>
                <p className="text-slate-500 font-medium">Monitoring Rural Youth Skills & Placement Tracking</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-all">
                  <Plus size={16} /> New Batch
                </button>
              </div>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                <h4 className="text-indigo-900 font-bold text-lg">Active Batches</h4>
                <p className="text-3xl font-black text-indigo-600 mt-2">{ddugkyData.length * 3}</p>
                <p className="text-indigo-400 text-xs font-medium mt-1 uppercase tracking-wider">Across 6 Districts</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <h4 className="text-emerald-900 font-bold text-lg">Placement Rate</h4>
                <p className="text-3xl font-black text-emerald-600 mt-2">72%</p>
                <p className="text-emerald-400 text-xs font-medium mt-1 uppercase tracking-wider">Target: 70% (MoRD)</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                <h4 className="text-amber-900 font-bold text-lg">Uncertified</h4>
                <p className="text-3xl font-black text-amber-600 mt-2">1,204</p>
                <p className="text-amber-400 text-xs font-medium mt-1 uppercase tracking-wider">Awaiting NCVT/SSC Exams</p>
              </div>
            </div>

            <ProjectTable 
              data={ddugkyData} 
              title="State DDU-GKY Project Inventory" 
            />
          </div>
        );
      case 'iti':
        const itiData = MOCK_PROJECTS.filter(p => p.type === ProjectType.ITI);
        return (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
            <header>
              <h1 className="text-2xl font-bold text-slate-900">Sikkim Industrial Training Hub</h1>
              <p className="text-slate-500 font-medium">Managing 5 Government ITIs and Affiliated Vocational Centers</p>
            </header>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               {[
                 { label: 'Engineering Trades', count: 12, icon: HardHat, color: 'blue' },
                 { label: 'Agro-Business', count: 4, icon: Tractor, color: 'emerald' },
                 { label: 'IT & Digital', count: 8, icon: Laptop, color: 'purple' }
               ].map((cat, i) => (
                 <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 flex items-center gap-4">
                    <div className={`p-4 rounded-xl bg-${cat.color}-50 text-${cat.color}-600`}>
                      <cat.icon size={28} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{cat.label}</h4>
                      <p className="text-slate-500 text-sm">{cat.count} Active Courses</p>
                    </div>
                 </div>
               ))}
            </div>

            <ProjectTable 
              data={itiData} 
              title="Sikkim ITI Institutional Performance" 
            />
          </div>
        );
      case 'analytics':
        return (
          <div className="space-y-8 animate-in fade-in duration-500">
            <header className="flex justify-between items-end">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">State Analytics Portal</h1>
                <p className="text-slate-500 font-medium">Aggregated District-wise Performance Metrics</p>
              </div>
              <button className="flex items-center gap-2 text-[#0F4C81] font-bold text-sm bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100">
                <Download size={16} /> Full Dataset (.csv)
              </button>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-slate-800">Enrollment by District</h3>
                  <Filter size={18} className="text-slate-400" />
                </div>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={DISTRICT_ANALYTICS} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                      <XAxis type="number" hide />
                      <YAxis type="category" dataKey="district" axisLine={false} tickLine={false} tick={{fontSize: 12, fontWeight: 600, fill: '#64748b'}} width={80} />
                      <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 8px 16px -4px rgba(0,0,0,0.1)'}} />
                      <Bar dataKey="enrolled" fill="#0F4C81" radius={[0, 4, 4, 0]} barSize={24} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-8">Placement Conversion</h3>
                <div className="h-[400px] flex flex-col items-center justify-center">
                   <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={DISTRICT_ANALYTICS}
                        cx="50%"
                        cy="50%"
                        innerRadius={100}
                        outerRadius={140}
                        paddingAngle={5}
                        dataKey="placed"
                        nameKey="district"
                      >
                        {DISTRICT_ANALYTICS.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={['#0F4C81', '#F18F01', '#2D6A4F', '#4338ca', '#ec4899', '#14b8a6'][index % 6]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        );
      case 'users':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
             <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Sikkim Beneficiary Directory</h1>
                <p className="text-slate-500 font-medium">Tracking candidate life-cycle from Mobilization to Post-Placement</p>
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" placeholder="Search by name/UID..." className="bg-white border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:ring-2 focus:ring-blue-500/20" />
                </div>
                <button className="bg-[#0F4C81] text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg shadow-blue-900/10 transition-all hover:-translate-y-0.5">
                  Register Candidate
                </button>
              </div>
            </header>

            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 text-[11px] font-bold uppercase tracking-widest">
                  <tr>
                    <th className="px-8 py-5">Full Name</th>
                    <th className="px-6 py-5">District</th>
                    <th className="px-6 py-5">Trade / Center</th>
                    <th className="px-6 py-5">Certification</th>
                    <th className="px-6 py-5">Current Status</th>
                    <th className="px-8 py-5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {MOCK_BENEFICIARIES.map((b) => (
                    <tr key={b.id} className="group hover:bg-slate-50 transition-colors">
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-3">
                           <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-bold text-[#0F4C81] text-xs">
                             {b.name.split(' ').map(n => n[0]).join('')}
                           </div>
                           <span className="font-semibold text-slate-900">{b.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-slate-600">{b.district}</td>
                      <td className="px-6 py-5">
                        <p className="text-sm font-medium text-slate-800">{b.trade}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase">{b.scheme}</p>
                      </td>
                      <td className="px-6 py-5">
                         {b.status === 'Certified' || b.status === 'Placed' ? (
                           <span className="flex items-center gap-1 text-emerald-600 font-bold text-xs"><Shield size={12} /> NCVT/SSC</span>
                         ) : <span className="text-slate-300 text-xs">Pending</span>}
                      </td>
                      <td className="px-6 py-5">
                        <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          b.status === 'Placed' ? 'bg-emerald-100 text-emerald-700' :
                          b.status === 'Training' ? 'bg-blue-100 text-blue-700' : 
                          b.status === 'Certified' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {b.status}
                        </span>
                      </td>
                      <td className="px-8 py-5 text-right">
                        <button className="text-slate-400 hover:text-[#0F4C81] transition-colors"><ArrowRight size={18} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
            <header className="text-center md:text-left">
              <h1 className="text-2xl font-bold text-slate-900">Portal Administration</h1>
              <p className="text-slate-500 font-medium">Configure MIS Access, API Keys and Regional Parameters</p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 space-y-6">
                <div className="bg-white p-8 rounded-3xl border border-slate-200 text-center shadow-sm">
                  <div className="relative inline-block mb-4">
                    <img src="https://ui-avatars.com/api/?name=Sikkim+Skill&background=0F4C81&color=fff&size=128" className="w-24 h-24 rounded-3xl shadow-xl shadow-blue-900/10 mx-auto" />
                    <button className="absolute -bottom-2 -right-2 bg-white p-2 rounded-xl border border-slate-100 shadow-lg text-[#0F4C81] hover:bg-slate-50">
                      <Plus size={14} />
                    </button>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">MIS Administrator</h3>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Skill Development Dept, Sikkim</p>
                </div>
                
                <div className="bg-slate-900 text-white p-6 rounded-3xl shadow-xl shadow-slate-900/10">
                   <h5 className="font-bold mb-4 flex items-center gap-2 text-sm"><Shield size={16} /> Security Status</h5>
                   <div className="space-y-4">
                      <div className="flex justify-between items-center text-xs">
                         <span className="text-slate-400">Database Sync</span>
                         <span className="text-emerald-400 font-bold">LIVE</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                         <span className="text-slate-400">Last Audit</span>
                         <span className="text-slate-100">2 Hours Ago</span>
                      </div>
                   </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                 <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2">
                      <SettingsIcon size={18} className="text-[#0F4C81]" /> Core Configuration
                    </h4>
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Bell size={18} /></div>
                           <div>
                              <p className="text-sm font-bold text-slate-800">Batch Alerts</p>
                              <p className="text-xs text-slate-500">Notify when DDU-GKY batches exceed timeline</p>
                           </div>
                        </div>
                        <div className="w-10 h-5 bg-blue-600 rounded-full relative"><div className="absolute top-0.5 right-0.5 w-4 h-4 bg-white rounded-full"></div></div>
                      </div>

                      <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                        <div className="flex items-center gap-3">
                           <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><Globe size={18} /></div>
                           <div>
                              <p className="text-sm font-bold text-slate-800">Public Dashboard Sync</p>
                              <p className="text-xs text-slate-500">Push real-time stats to state portal</p>
                           </div>
                        </div>
                        <div className="w-10 h-5 bg-slate-300 rounded-full relative"><div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full"></div></div>
                      </div>
                    </div>
                 </div>

                 <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                       <h4 className="font-bold text-slate-800 flex items-center gap-2">
                        <Globe size={18} className="text-[#0F4C81]" /> Government API Gateway
                      </h4>
                      <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded">CONNECTED</span>
                    </div>
                    <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl group relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Access Token (Production)</p>
                      <p className="text-xs font-mono text-slate-600 break-all leading-relaxed">SK_LIVE_2025_SDDS_9X2J_P88N_Q3X_9921_MIS_ACCESS</p>
                      <button className="mt-4 text-xs font-bold text-[#0F4C81] hover:text-[#F18F01] transition-colors flex items-center gap-1">
                        Rotate Token <ArrowRight size={12} />
                      </button>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div className="p-12 text-center text-slate-400">Work in progress...</div>;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="max-w-[1600px] mx-auto">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;
