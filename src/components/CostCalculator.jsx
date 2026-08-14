import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingDown, DollarSign, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CostCalculator({ onOpenDemoModal }) {
  const [monthlySpend, setMonthlySpend] = useState(15000);
  const [cloudProvider, setCloudProvider] = useState('AWS');
  const [workloadType, setWorkloadType] = useState('mixed');
  const [rightsizingEnabled, setRightsizingEnabled] = useState(true);
  const [spotEnabled, setSpotEnabled] = useState(false);

  // Calculate estimated savings percentage based on parameters
  let savingsRate = 0.22; // Base 22%
  if (workloadType === 'legacy') savingsRate += 0.12;
  if (workloadType === 'mixed') savingsRate += 0.08;
  if (workloadType === 'cloudnative') savingsRate += 0.05;

  if (rightsizingEnabled) savingsRate += 0.06;
  if (spotEnabled) savingsRate += 0.09;

  // Cap at 48% maximum realistic savings
  savingsRate = Math.min(savingsRate, 0.48);

  const monthlySavings = Math.round(monthlySpend * savingsRate);
  const newMonthlySpend = monthlySpend - monthlySavings;
  const annualSavings = monthlySavings * 12;

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-200/60 relative" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-200/60">
            <Calculator className="w-4 h-4 text-emerald-600" />
            Interactive Tool
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Cloud Cost Savings Estimator
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            See how much your organization can save on monthly AWS, GCP, or Azure spend through automated rightsizing, architectural optimization, and modern cloud governance.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Monthly Spend Range Slider */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-slate-300">
                  Current Monthly Cloud Spend:
                </label>
                <span className="text-2xl font-bold text-primary-light">
                  ${monthlySpend.toLocaleString()}/mo
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="150000"
                step="1000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>$2,000</span>
                <span>$50,000</span>
                <span>$100,000</span>
                <span>$150,000+</span>
              </div>
            </div>

            {/* Provider & Workload Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase">
                  Primary Cloud Provider
                </label>
                <select
                  value={cloudProvider}
                  onChange={(e) => setCloudProvider(e.target.value)}
                  className="w-full bg-slate-800 text-white font-medium px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="AWS">Amazon Web Services (AWS)</option>
                  <option value="GCP">Google Cloud Platform (GCP)</option>
                  <option value="Azure">Microsoft Azure</option>
                  <option value="Multi">Multi-Cloud Setup</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase">
                  Workload Architecture
                </label>
                <select
                  value={workloadType}
                  onChange={(e) => setWorkloadType(e.target.value)}
                  className="w-full bg-slate-800 text-white font-medium px-4 py-3 rounded-xl border border-slate-700 focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="legacy">Legacy VM / Monolith</option>
                  <option value="mixed">Hybrid / Mixed Infrastructure</option>
                  <option value="cloudnative">Containerized / Cloud Native</option>
                </select>
              </div>
            </div>

            {/* Optimization Toggles */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <label className="flex items-center gap-3 cursor-pointer text-sm text-slate-300">
                <input
                  type="checkbox"
                  checked={rightsizingEnabled}
                  onChange={(e) => setRightsizingEnabled(e.target.checked)}
                  className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary"
                />
                <span>Enable Automated Instance Rightsizing & Reserved Capacity</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer text-sm text-slate-300">
                <input
                  type="checkbox"
                  checked={spotEnabled}
                  onChange={(e) => setSpotEnabled(e.target.checked)}
                  className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary"
                />
                <span>Utilize Spot/Preemptible Instances for Fault-Tolerant Tasks</span>
              </label>
            </div>

          </div>

          {/* Output Display Column */}
          <div className="lg:col-span-5 bg-slate-800/90 p-6 sm:p-8 rounded-2xl border border-slate-700/80 flex flex-col justify-between h-full text-center lg:text-left">
            <div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-emerald-400 font-semibold text-sm mb-4">
                <TrendingDown className="w-5 h-5" />
                <span>Estimated Spend Reduction ({Math.round(savingsRate * 100)}%)</span>
              </div>

              <div className="mb-6">
                <span className="block text-xs uppercase text-slate-400 font-semibold mb-1">
                  Estimated Monthly Savings
                </span>
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  ${monthlySavings.toLocaleString()}
                  <span className="text-lg font-normal text-slate-400">/mo</span>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 py-4 my-4 border-y border-slate-700/80 text-left">
                <div>
                  <span className="block text-xs text-slate-400">New Monthly Bill</span>
                  <span className="text-xl font-bold text-slate-200">
                    ${newMonthlySpend.toLocaleString()}
                  </span>
                </div>
                <div>
                  <span className="block text-xs text-slate-400">Annual Savings</span>
                  <span className="text-xl font-bold text-emerald-400">
                    ${annualSavings.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenDemoModal}
                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl lift transition-all flex items-center justify-center gap-2 mt-2"
              >
                Claim Cost Audit
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-xs text-slate-400 text-center mt-3 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Guaranteed ROI with zero disruption to active services.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
