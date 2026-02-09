
import React from 'react';
import { ProjectData, ProjectType } from '../types';
import { MoreVertical, ExternalLink } from 'lucide-react';

interface ProjectTableProps {
  data: ProjectData[];
  title: string;
}

export const ProjectTable: React.FC<ProjectTableProps> = ({ data, title }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <h3 className="font-bold text-slate-800">{title}</h3>
        <div className="flex gap-2">
           <button className="px-3 py-1.5 text-xs font-medium border border-slate-200 rounded-lg hover:bg-slate-50">Filter</button>
           <button className="px-3 py-1.5 text-xs font-medium border border-slate-200 rounded-lg hover:bg-slate-50">Export</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-xs font-semibold uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Center / Project Name</th>
              <th className="px-6 py-4">State/District</th>
              <th className="px-6 py-4">Scheme</th>
              <th className="px-6 py-4">Enrollment</th>
              <th className="px-6 py-4">Placements</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((project) => (
              <tr key={project.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-900">{project.name}</td>
                <td className="px-6 py-4 text-sm text-slate-600">
                  {project.state}, {project.district}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${
                    project.type === ProjectType.DDUGKY ? 'bg-indigo-100 text-indigo-700' :
                    project.type === ProjectType.ITI ? 'bg-amber-100 text-amber-700' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    {project.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-semibold">{project.enrolled.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{project.placed.toLocaleString()}</span>
                    <span className="text-[10px] text-slate-400">({Math.round((project.placed / project.enrolled) * 100)}%)</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1.5">
                    <span className={`h-2 w-2 rounded-full ${
                      project.status === 'Active' ? 'bg-emerald-500' : 
                      project.status === 'Completed' ? 'bg-blue-500' : 'bg-slate-300'
                    }`}></span>
                    <span className="text-xs font-medium text-slate-600">{project.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    <button className="p-1 hover:bg-slate-200 rounded text-slate-400">
                      <ExternalLink size={14} />
                    </button>
                    <button className="p-1 hover:bg-slate-200 rounded text-slate-400">
                      <MoreVertical size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-500">Showing 1 to {data.length} of 420 projects</span>
        <div className="flex gap-1">
          <button className="px-3 py-1 text-xs font-medium bg-white border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50">Prev</button>
          <button className="px-3 py-1 text-xs font-medium bg-[#0F4C81] text-white rounded">1</button>
          <button className="px-3 py-1 text-xs font-medium bg-white border border-slate-200 rounded hover:bg-slate-50">2</button>
          <button className="px-3 py-1 text-xs font-medium bg-white border border-slate-200 rounded hover:bg-slate-50">3</button>
          <button className="px-3 py-1 text-xs font-medium bg-white border border-slate-200 rounded hover:bg-slate-50">Next</button>
        </div>
      </div>
    </div>
  );
};
