'use client'

import { TrendingUp, PieChart, BarChart3 } from 'lucide-react'

export function PortfolioGraphics() {
  const portfolioData = [
    { name: 'Actions', value: 35000, percentage: 37, color: 'bg-orange-500' },
    { name: 'Obligations', value: 28000, percentage: 30, color: 'bg-blue-500' },
    { name: 'Immobilier', value: 18000, percentage: 19, color: 'bg-green-500' },
    { name: 'Liquidités', value: 14000, percentage: 14, color: 'bg-slate-500' },
  ]

  const performanceData = [
    { month: 'Jan', value: 92000 },
    { month: 'Fév', value: 93500 },
    { month: 'Mar', value: 91800 },
    { month: 'Avr', value: 95000 },
    { month: 'Mai', value: 94200 },
    { month: 'Jun', value: 95000 },
  ]

  const maxValue = Math.max(...performanceData.map(d => d.value))

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Portefeuille & Investissements</h2>
        <p className="text-slate-600">Vue d&apos;ensemble de votre allocation d&apos;actifs et performance</p>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Allocation */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <PieChart className="w-6 h-6 text-orange-600" />
            <h3 className="text-lg font-bold text-slate-900">Allocation d&apos;actifs</h3>
          </div>
          <div className="space-y-4">
            {portfolioData.map((item) => (
              <div key={item.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-900 font-medium">{item.name}</span>
                  <div className="text-right">
                    <p className="font-bold text-slate-900">{item.value.toLocaleString('fr-FR')}€</p>
                    <p className="text-xs text-slate-500">{item.percentage}%</p>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className={`${item.color} h-2 rounded-full`} style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-slate-600 text-sm">Valeur totale du portefeuille</p>
            <p className="text-3xl font-bold text-orange-600">95 000€</p>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-orange-600" />
            <h3 className="text-lg font-bold text-slate-900">Performance (6 mois)</h3>
          </div>
          <div className="flex items-end justify-between h-48 gap-2 mb-4">
            {performanceData.map((data) => (
              <div key={data.month} className="flex-1 flex flex-col items-center">
                <div className="w-full bg-slate-200 rounded-t-lg relative group">
                  <div
                    className="w-full bg-gradient-to-t from-orange-600 to-orange-500 rounded-t-lg transition-all hover:from-orange-700 hover:to-orange-600 cursor-pointer relative"
                    style={{ height: `${(data.value / maxValue) * 100}%` }}
                  >
                    <div className="absolute -top-8 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap mx-auto w-fit">
                      {data.value.toLocaleString('fr-FR')}€
                    </div>
                  </div>
                </div>
                <span className="text-xs text-slate-600 mt-2 font-medium">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
            <div>
              <p className="text-xs text-slate-500">Plus haut</p>
              <p className="text-lg font-bold text-green-600">+4.8%</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Performance YTD</p>
              <p className="text-lg font-bold text-green-600">+3.3%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Investments */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-6 h-6 text-orange-600" />
          <h3 className="text-lg font-bold text-slate-900">Détail des placements</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: 'AMZN - Amazon Inc',
              allocation: 'Actions',
              value: 8500,
              change: '+12.5%',
              changeColor: 'text-green-600',
              icon: '📈',
            },
            {
              name: 'MSFT - Microsoft Corp',
              allocation: 'Actions',
              value: 7200,
              change: '+8.3%',
              changeColor: 'text-green-600',
              icon: '📈',
            },
            {
              name: 'ETF International',
              allocation: 'Obligations',
              value: 12500,
              change: '+2.1%',
              changeColor: 'text-green-600',
              icon: '📊',
            },
            {
              name: 'REIT Immobilier',
              allocation: 'Immobilier',
              value: 9800,
              change: '-1.2%',
              changeColor: 'text-red-600',
              icon: '🏢',
            },
            {
              name: 'Or Physique',
              allocation: 'Matières premières',
              value: 5600,
              change: '+5.8%',
              changeColor: 'text-green-600',
              icon: '💎',
            },
            {
              name: 'Compte Rémunéré',
              allocation: 'Liquidités',
              value: 14000,
              change: '+1.2%',
              changeColor: 'text-green-600',
              icon: '💰',
            },
          ].map((investment) => (
            <div key={investment.name} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <p className="font-semibold text-slate-900">{investment.name}</p>
                  <p className="text-xs text-slate-500">{investment.allocation}</p>
                </div>
                <span className="text-2xl">{investment.icon}</span>
              </div>
              <div className="flex justify-between items-end">
                <p className="text-lg font-bold text-slate-900">{investment.value.toLocaleString('fr-FR')}€</p>
                <p className={`font-semibold text-sm ${investment.changeColor}`}>{investment.change}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
