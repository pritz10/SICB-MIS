
import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart,
  Area
} from 'recharts';
import { 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  Briefcase, 
  ArrowUpRight, 
  ArrowDownRight,
  Sparkles
} from 'lucide-react';
import { DASHBOARD_CHART_DATA } from '../constants';
import { getSkillInsights } from '../services/geminiService';

const StatCard = ({ title, value, change, trend, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
      </div>
      <div className={`p-3 rounded-xl bg-${color}-50 text-${color}-600`}>
        <Icon size={24} />
      </div>
    </div>
    <div className="mt-4 flex items-center gap-2">
      <span className={`flex items-center text-sm font-medium ${trend === 'up' ? 'text-emerald-600' : 'text-rose-600'}`}>
        {trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        {change}%
      </span>
      <span className="text-xs text-slate-400">vs last quarter</span>
    </div>
  </div>
);

export const Dashboard: React.FC = () => {
  const [aiInsight, setAiInsight] = useState<string>("Analyzing Sikkim's skill trends...");
  const [isLoadingInsight, setIsLoadingInsight] = useState(false);

  const fetchInsights = async () => {
    setIsLoadingInsight(true);
    const result = await getSkillInsights("Sikkim State");
    setAiInsight(result || "Unable to fetch live insights.");
    setIsLoadingInsight(false);
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Sikkim Skill MIS Dashboard</h1>
          <p className="text-slate-500 font-medium italic">Official Skill Development Department Portal, Govt. of Sikkim</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">Download Annual Report</button>
          <button 
            onClick={fetchInsights}
            disabled={isLoadingInsight}
            className="flex items-center gap-2 px-4 py-2 bg-[#0F4C81] text-white rounded-lg text-sm font-medium hover:bg-[#0F4C81]/90 transition-all disabled:opacity-50"
          >
            <Sparkles size={16} className={isLoadingInsight ? "animate-spin" : ""} />
            {isLoadingInsight ? "Generating..." : "AI Regional Insights"}
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Enrolled" value="48,520" change="8.2" trend="up" icon={Users} color="blue" />
        <StatCard title="Trained Youth" value="32,105" change="12.4" trend="up" icon={TrendingUp} color="indigo" />
        <StatCard title="State Certified" value="28,490" change="4.1" trend="up" icon={CheckCircle2} color="emerald" />
        <StatCard title="Successful Placements" value="18,912" change="2.4" trend="up" icon={Briefcase} color="amber" />
      </div>

      {/* AI Insight Box */}
      <div className="bg-[#0F4C81]/5 border border-[#0F4C81]/10 p-6 rounded-2xl flex items-start gap-4">
        <div className="bg-[#0F4C81] p-2 rounded-lg shrink-0">
          <Sparkles className="text-white h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-[#0F4C81]">AI-Powered Strategic Insights</h4>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#0F4C81]/60">Powered by Gemini</span>
          </div>
          <p className="text-slate-700 text-sm mt-1 leading-relaxed">
            {aiInsight}
          </p>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-800">Sikkim Training Trends (2024-25)</h3>
            <select className="bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-500 rounded-lg p-2 focus:ring-0">
              <option>All Districts</option>
              <option>Gangtok</option>
              <option>Namchi</option>
              <option>Pakyong</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DASHBOARD_CHART_DATA}>
                <defs>
                  <linearGradient id="colorTrained" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0F4C81" stopOpacity={0.15}/>
                    <stop offset="95%" stopColor="#0F4C81" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="trained" stroke="#0F4C81" strokeWidth={3} fillOpacity={1} fill="url(#colorTrained)" animationDuration={1500} />
                <Area type="monotone" dataKey="placed" stroke="#F18F01" strokeWidth={3} fillOpacity={0} animationDuration={1500} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-bold text-slate-800">Placement Target Achievement</h3>
            <button className="text-xs font-semibold text-[#0F4C81] hover:underline">View All Projections</button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={DASHBOARD_CHART_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 12}} />
                <Tooltip 
                  cursor={{fill: '#F8FAFC'}}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="trained" fill="#0F4C81" radius={[4, 4, 0, 0]} barSize={16} />
                <Bar dataKey="placed" fill="#F18F01" radius={[4, 4, 0, 0]} barSize={16} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
