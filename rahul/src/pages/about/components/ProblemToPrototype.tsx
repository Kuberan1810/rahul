import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ChevronRight, 
  X, 
  ShieldAlert, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  Zap,
  MousePointer
} from 'lucide-react';
import tnstcMockup from '../../../assets/tnstc_mockup.png';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  type: string;
  badge: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  color: string;
  mockupType: 'image' | 'jira' | 'risk' | 'analytics' | 'blue-chart';
  image?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'tnstc',
    title: 'TNSTC',
    subtitle: 'A UX case study focused on simplifying bus search, booking, and journey management.',
    category: 'Public Transport UX',
    type: 'Web Application & Mobile',
    badge: 'Featured Case Study',
    description: 'Complete overhaul of Tamil Nadu State Transport Corporation portal. Redesigned end-to-end user journey for over 2 million daily commuters with modern search filters, live seat layout, and instant ticket generation.',
    problem: 'Outdated, cluttered interface with multi-step tedious form fields, high ticket drop-off rates (38%), and poor mobile responsiveness.',
    solution: 'Designed a unified single-fold search bar with dynamic date pickers, visual seat matrix selection, and simplified 2-step checkout.',
    impact: 'Reduced average booking time from 4.2 minutes to 1.1 minutes and boosted completion rate by 45%.',
    color: 'from-amber-500/20 to-orange-500/20',
    mockupType: 'image',
    image: tnstcMockup
  },
  {
    id: 'blue-growth',
    title: 'Growth Analytics',
    subtitle: 'Interactive traffic flow and user journey milestone visualization.',
    category: 'SaaS Dashboard',
    type: 'Data Visualization',
    badge: 'Growth Engine',
    description: 'Custom growth dashboard tracking conversion funnels, monthly retention cohorts, and feature utilization spikes across enterprise accounts.',
    problem: 'Product teams lacked visibility into where drop-offs occurred during new feature onboarding.',
    solution: 'Created vertical cohort stream visualization that highlights churn bottlenecks in real time.',
    impact: '+140% improvement in trial-to-paid conversion across 12,000 active workspace users.',
    color: 'from-blue-500/20 to-indigo-500/20',
    mockupType: 'blue-chart'
  },
  {
    id: 'jira-metrics',
    title: 'Resource Utilization',
    subtitle: 'Cross-tool productivity metrics and team workload allocation.',
    category: 'DevOps & Tooling',
    type: 'Enterprise Dashboard',
    badge: 'Efficiency Suite',
    description: 'Unified management interface connecting Jira, Confluence, and GitHub pull requests to monitor sprint velocity and team bandwidth.',
    problem: 'Fragmented metrics across 4 separate platforms leading to inaccurate delivery estimates.',
    solution: 'Engineered unified dashboard with aggregated utilization widgets and automated bottleneck alerts.',
    impact: 'Reduced sprint estimation variance by 32% and improved ticket closure velocity by 28%.',
    color: 'from-emerald-500/20 to-teal-500/20',
    mockupType: 'jira'
  },
  {
    id: 'risk-assessment',
    title: 'Risk Assessment',
    subtitle: 'AI-driven vulnerability and security risk score monitor.',
    category: 'Cybersecurity',
    type: 'Security Operation Center',
    badge: 'Threat Matrix',
    description: 'High-density security dashboard displaying live vulnerability scores, threat likelihood, and blast radius impact analysis.',
    problem: 'Security analysts overwhelmed by raw log noise without prioritized risk severity rankings.',
    solution: 'Introduced an 8.9 score radial gauge system with color-coded threat nodes and instant remediation paths.',
    impact: 'Accelerated critical vulnerability mean-time-to-resolution (MTTR) by 64%.',
    color: 'from-purple-500/20 to-pink-500/20',
    mockupType: 'risk'
  },
  {
    id: 'branch-analytics',
    title: 'Branch Pipeline',
    subtitle: 'Deployment trends and automated release health diagnostics.',
    category: 'CI/CD Monitoring',
    type: 'Developer Tooling',
    badge: 'Pipeline Insights',
    description: 'Real-time code branch tracker mapping release candidates, build status, and automated test coverage trends month over month.',
    problem: 'Deployment collisions and untracked bug regressions during concurrent release pushes.',
    solution: 'Built continuous trendline charts paired with branch health tables and rollback readiness triggers.',
    impact: 'Zero deployment rollbacks recorded across 4 consecutive major quarterly releases.',
    color: 'from-amber-500/20 to-yellow-500/20',
    mockupType: 'analytics'
  }
];

export const ProblemToPrototype: React.FC = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy>(caseStudies[0]);
  const [activeModal, setActiveModal] = useState<CaseStudy | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'problem' | 'solution' | 'impact'>('overview');

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 select-none">
      
      {/* Section Header */}
      <div className="mb-10 lg:mb-14">
        <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-gray-900 tracking-tight flex flex-wrap items-center gap-x-3 gap-y-2 leading-none">
          <span>From</span>
          <span className="inline-block transform -rotate-[-5deg] text-4xl sm:text-5xl lg:text-[64px] font-normal leading-none tracking-normal bg-gradient-to-b from-[#4E4E4E] to-[#B4B4B4] bg-clip-text text-transparent px-1">
            Problem
          </span>
          <span>to Prototype</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl font-normal">
          Transforming complex user challenges into intuitive, high-converting digital interfaces through structured UX research and rapid interactive prototyping.
        </p>
      </div>

      {/* Main Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Main Featured Card */}
        <div className="lg:col-span-7 bg-[#111114] text-white rounded-[32px] p-6 sm:p-8 border border-gray-800/80 shadow-2xl relative overflow-hidden flex flex-col justify-between group transition-all duration-300">
          
          {/* Subtle Ambient Background Light */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-80 h-80 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-80 h-80 bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          {/* Card Top Info */}
          <div className="relative z-10">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 text-gray-300 border border-white/10 backdrop-blur-md">
                {selectedCaseStudy.badge}
              </span>
              <span className="text-xs text-gray-400 font-medium">
                {selectedCaseStudy.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mt-4">
              {selectedCaseStudy.title}
            </h3>

            <p className="text-gray-300 text-sm sm:text-base mt-2 font-normal leading-relaxed max-w-xl">
              {selectedCaseStudy.subtitle}
            </p>

            {/* View Case Study Button */}
            <div className="mt-5">
              <button
                onClick={() => {
                  setActiveModal(selectedCaseStudy);
                  setActiveTab('overview');
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-medium text-xs sm:text-sm backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer active:scale-95 group/btn"
              >
                <span>View Details</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Card Bottom / Screen Mockup View */}
          <div className="relative z-10 mt-8 sm:mt-10 pt-4 flex items-center justify-center">
            {selectedCaseStudy.mockupType === 'image' && selectedCaseStudy.image ? (
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black/60 backdrop-blur-sm group-hover:scale-[1.02] transition-transform duration-500">
                {/* Macbook / Browser Top Bar */}
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 py-2 flex items-center gap-2 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="mx-auto bg-black/40 text-gray-400 text-[10px] sm:text-xs px-3 py-0.5 rounded-full font-mono border border-white/5 truncate max-w-[200px]">
                    tnstc.in/bus-search-v2
                  </div>
                </div>

                {/* Screenshot Frame */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-950">
                  <img
                    src={selectedCaseStudy.image}
                    alt={selectedCaseStudy.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent opacity-40 pointer-events-none" />
                </div>
              </div>
            ) : (
              /* Custom Live React Widget for switched study */
              <div 
                onClick={() => {
                  setActiveModal(selectedCaseStudy);
                  setActiveTab('overview');
                }}
                className="w-full max-w-xl rounded-2xl p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-xl cursor-pointer hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    <span className="text-sm font-semibold text-white">{selectedCaseStudy.badge}</span>
                  </div>
                  <span className="text-xs text-gray-400 font-mono">Interactive Prototype</span>
                </div>
                <div className="bg-black/50 rounded-xl p-4 border border-white/10 space-y-3">
                  <div className="text-xs text-gray-300 leading-relaxed font-sans">
                    {selectedCaseStudy.description}
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
                    <span className="text-amber-300 font-medium">Impact: {selectedCaseStudy.impact}</span>
                    <span className="text-gray-400 underline flex items-center gap-1">Explore Prototype <ChevronRight className="w-3 h-3" /></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Hint */}
          <div className="mt-4 flex items-center justify-between text-[11px] text-gray-500 font-medium pt-2 border-t border-white/5">
            <span className="flex items-center gap-1.5">
              <MousePointer className="w-3.5 h-3.5 text-amber-400" />
              Select any card on the right to switch preview
            </span>
            <span>UX Case Study 01</span>
          </div>

        </div>

        {/* Right Column: 4 Vertical Pill Showcase Cards */}
        <div className="lg:col-span-5 flex flex-row lg:grid lg:grid-cols-4 gap-3.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none items-stretch">
          
          {/* CARD 1: Blue Growth Pill */}
          <div
            onClick={() => setSelectedCaseStudy(caseStudies[1])}
            className={`h-[380px] sm:h-[420px] w-[130px] sm:w-[145px] lg:w-auto shrink-0 rounded-[34px] p-3.5 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 border ${
              selectedCaseStudy.id === caseStudies[1].id
                ? 'ring-2 ring-blue-500 border-blue-400 scale-[1.02] shadow-blue-500/20'
                : 'border-white/70 hover:border-blue-300'
            } bg-gradient-to-b from-[#b4d2ff] via-[#dbeafe] to-[#eff6ff] text-slate-800`}
          >
            {/* Top Bar Arrow Pill Graphic */}
            <div className="w-full bg-white/80 backdrop-blur-md rounded-[24px] p-2 flex flex-col items-center justify-center space-y-2 border border-white/60 shadow-sm">
              <div className="w-full h-24 bg-gradient-to-t from-blue-600 to-blue-400 rounded-xl relative overflow-hidden flex items-end justify-center p-2">
                <div className="w-4 bg-white/90 rounded-t-full h-16 animate-pulse" />
                <div className="w-4 bg-white/50 rounded-t-full h-10 ml-1.5" />
                <div className="w-4 bg-white/30 rounded-t-full h-6 ml-1.5" />
              </div>
            </div>

            {/* Middle Content */}
            <div className="my-auto py-2 text-center">
              <span className="text-[10px] uppercase font-bold tracking-wider text-blue-700 bg-blue-100/90 px-2 py-0.5 rounded-full inline-block mb-1">
                Traffic
              </span>
              <p className="text-xs font-bold text-slate-900 leading-tight">
                Flow & Cohorts
              </p>
            </div>

            {/* Bottom Jun Pill */}
            <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl py-2 px-3 text-center border border-white/80 shadow-sm">
              <span className="text-xs font-extrabold text-blue-700 uppercase tracking-wider">
                Jun
              </span>
            </div>
          </div>

          {/* CARD 2: Jira / Confluence Light Dashboard Pill */}
          <div
            onClick={() => setSelectedCaseStudy(caseStudies[2])}
            className={`h-[380px] sm:h-[420px] w-[130px] sm:w-[145px] lg:w-auto shrink-0 rounded-[34px] p-3 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 border ${
              selectedCaseStudy.id === caseStudies[2].id
                ? 'ring-2 ring-teal-500 border-teal-400 scale-[1.02] shadow-teal-500/20'
                : 'border-white/80 hover:border-teal-300'
            } bg-white/95 text-gray-800 backdrop-blur-md`}
          >
            {/* Top Pill Metrics */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center bg-gray-100/80 rounded-full px-2.5 py-1 text-[9px] font-bold text-gray-700">
                <span>Reports</span>
                <span className="text-emerald-600">94%</span>
              </div>
              <div className="flex justify-between items-center bg-gray-100/80 rounded-full px-2.5 py-1 text-[9px] font-bold text-gray-700">
                <span>Tickets</span>
                <span className="text-emerald-600">92%</span>
              </div>
            </div>

            {/* Jira / Confluence Utilization Progress Bars */}
            <div className="my-2 space-y-2">
              <div className="bg-gradient-to-r from-teal-700 to-cyan-600 text-white rounded-xl p-2 text-left shadow-sm">
                <div className="text-[9px] font-semibold opacity-90">Jira</div>
                <div className="text-xs font-bold">74% <span className="text-[8px] font-normal opacity-80">Utilization</span></div>
              </div>
              <div className="bg-gradient-to-r from-teal-800 to-teal-600 text-white rounded-xl p-2 text-left shadow-sm">
                <div className="text-[9px] font-semibold opacity-90">Confluence</div>
                <div className="text-xs font-bold">63% <span className="text-[8px] font-normal opacity-80">Utilization</span></div>
              </div>
            </div>

            {/* Pie Chart Widget & List Items */}
            <div className="flex flex-col items-center">
              {/* SVG Pie Chart */}
              <div className="w-12 h-12 relative my-1">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E2E8F0"
                    strokeWidth="4"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 14.1 23.3"
                    fill="none"
                    stroke="#0EA5E9"
                    strokeWidth="4.5"
                  />
                  <path
                    d="M32.1 25.38 a 15.9155 15.9155 0 0 1 -25.3 -1.2"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="4.5"
                  />
                  <path
                    d="M6.8 24.18 a 15.9155 15.9155 0 0 1 11.2 -22.1"
                    fill="none"
                    stroke="#EC4899"
                    strokeWidth="4.5"
                  />
                </svg>
              </div>
              <div className="w-full space-y-1 mt-1 text-[9px] font-medium text-gray-600">
                <div className="flex justify-between items-center px-1">
                  <span>Issue</span>
                </div>
                <div className="flex justify-between items-center px-1">
                  <span>Custom pr</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: Risk Assessment Dark Gauge Pill */}
          <div
            onClick={() => setSelectedCaseStudy(caseStudies[3])}
            className={`h-[380px] sm:h-[420px] w-[130px] sm:w-[145px] lg:w-auto shrink-0 rounded-[34px] p-3 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 border ${
              selectedCaseStudy.id === caseStudies[3].id
                ? 'ring-2 ring-pink-500 border-pink-400 scale-[1.02] shadow-pink-500/20'
                : 'border-slate-700/80 hover:border-pink-400/60'
            } bg-[#0D1322] text-white`}
          >
            {/* Top Action Badge */}
            <div className="bg-slate-800/90 rounded-full px-2.5 py-1 flex items-center justify-center gap-1 border border-slate-700">
              <ShieldAlert className="w-3 h-3 text-pink-400" />
              <span className="text-[8px] font-bold tracking-wide uppercase text-slate-200">Export Report</span>
            </div>

            {/* Gauge Circle Widget */}
            <div className="my-auto text-center flex flex-col items-center">
              <span className="text-[9px] text-slate-400 font-medium mb-1">Risk Assessment</span>
              
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="#1E293B"
                    strokeWidth="3.5"
                  />
                  <circle
                    cx="18"
                    cy="18"
                    r="14"
                    fill="none"
                    stroke="url(#pinkGradient)"
                    strokeWidth="3.5"
                    strokeDasharray="75, 100"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="pinkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F43F5E" />
                      <stop offset="100%" stopColor="#FB7185" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute text-center">
                  <span className="text-sm font-extrabold text-white leading-none block">8.9</span>
                  <span className="text-[7px] text-pink-400 uppercase font-bold tracking-tighter">Score</span>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="w-full mt-3 space-y-1.5 text-left text-[8px] font-medium text-slate-300">
                <div>
                  <div className="flex justify-between mb-0.5">
                    <span>Likelihood</span>
                  </div>
                  <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-pink-500 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-0.5">
                    <span>Impact</span>
                  </div>
                  <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-3/5 h-full bg-amber-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Flow Node */}
            <div className="bg-slate-800/80 rounded-xl p-2 border border-slate-700/80 flex items-center justify-center gap-1.5">
              <Zap className="w-3 h-3 text-amber-400" />
              <span className="text-[9px] font-semibold text-slate-300">Threat Matrix</span>
            </div>
          </div>

          {/* CARD 4: Analytics Line Chart Light Pill */}
          <div
            onClick={() => setSelectedCaseStudy(caseStudies[4])}
            className={`h-[380px] sm:h-[420px] w-[130px] sm:w-[145px] lg:w-auto shrink-0 rounded-[34px] p-3 flex flex-col justify-between cursor-pointer transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 border ${
              selectedCaseStudy.id === caseStudies[4].id
                ? 'ring-2 ring-amber-500 border-amber-400 scale-[1.02] shadow-amber-500/20'
                : 'border-white/80 hover:border-amber-300'
            } bg-white/95 text-gray-800 backdrop-blur-md`}
          >
            {/* Top SVG Curve Graphic */}
            <div className="w-full h-28 relative pt-2">
              <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
                {/* Benchmark Dashed Line */}
                <line x1="0" y1="35" x2="100" y2="25" stroke="#3B82F6" strokeWidth="2" strokeDasharray="3,3" />
                {/* Curved Main Line */}
                <path
                  d="M 0 45 Q 30 10, 60 20 T 100 15"
                  fill="none"
                  stroke="#D97706"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
                {/* May Tag Dot */}
                <circle cx="60" cy="20" r="3.5" fill="#D97706" />
              </svg>
              <span className="text-[9px] font-bold text-gray-500 block text-left mt-1 pl-1">May</span>
            </div>

            {/* Bottom Metrics Table */}
            <div className="bg-gray-50 rounded-xl p-2.5 border border-gray-200/80 space-y-1 text-left">
              <div className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Branches</div>
              <div className="flex justify-between items-center text-xs font-extrabold text-gray-800 pt-1 border-t border-gray-200">
                <span>Active</span>
                <span className="text-amber-600">18</span>
              </div>
              <div className="flex justify-between items-center text-xs font-extrabold text-gray-800">
                <span>Merged</span>
                <span className="text-gray-900">42</span>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="bg-gray-900 text-white rounded-full py-1.5 px-2 text-center text-[9px] font-bold tracking-wide">
              View Insights
            </div>
          </div>

        </div>

      </div>

      {/* Expanded Modal for Case Study Deep Dive */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-[#141418] text-white w-full max-w-3xl rounded-3xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh] relative">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-800/80 flex items-start justify-between bg-gradient-to-r from-gray-900 via-[#18181f] to-gray-900">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  {activeModal.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                  {activeModal.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{activeModal.subtitle}</p>
              </div>

              <button
                onClick={() => setActiveModal(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex border-b border-gray-800 px-6 bg-[#18181f]/60 text-xs sm:text-sm font-medium">
              {(['overview', 'problem', 'solution', 'impact'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 px-4 capitalize transition-all border-b-2 font-semibold cursor-pointer ${
                    activeTab === tab
                      ? 'border-amber-400 text-amber-400 bg-white/5'
                      : 'border-transparent text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Modal Content Body */}
            <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm sm:text-base text-gray-300 leading-relaxed">
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    Executive Summary
                  </h4>
                  <p>{activeModal.description}</p>
                  
                  {activeModal.image && (
                    <div className="rounded-xl overflow-hidden border border-gray-800 mt-4 shadow-xl">
                      <img src={activeModal.image} alt={activeModal.title} className="w-full h-auto" />
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-800">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <span className="text-xs text-gray-400 uppercase font-semibold block">Domain Category</span>
                      <span className="text-sm font-bold text-white">{activeModal.category}</span>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <span className="text-xs text-gray-400 uppercase font-semibold block">Platform & Tech</span>
                      <span className="text-sm font-bold text-white">{activeModal.type}</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'problem' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-red-400 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5" />
                    The Friction & User Pain Points
                  </h4>
                  <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-200">
                    {activeModal.problem}
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400 pl-4 list-disc">
                    <li>High cognitive load during multi-step user onboarding flows.</li>
                    <li>Inconsistent component hierarchy across legacy web surfaces.</li>
                    <li>Lack of real-time visual feedback on user inputs.</li>
                  </ul>
                </div>
              )}

              {activeTab === 'solution' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    UX Strategy & Prototype Solution
                  </h4>
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200">
                    {activeModal.solution}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-xs">
                      <span className="font-bold text-white block mb-1">⚡ Rapid Wireframing</span>
                      Iterated through 15 high-fidelity layout concepts in Figma.
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/10 text-xs">
                      <span className="font-bold text-white block mb-1">🎯 Usability Testing</span>
                      Validated with 40+ real users before code implementation.
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'impact' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-amber-400 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Measured Quantitative Results
                  </h4>
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/20 via-orange-500/10 to-transparent border border-amber-500/30 text-amber-100 text-lg font-bold">
                    {activeModal.impact}
                  </div>
                  <p className="text-xs text-gray-400">
                    Metrics collected post-launch across 30-day analytics period showing sustained engagement improvements.
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-gray-800 bg-[#18181f] flex justify-end gap-3">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default ProblemToPrototype;
