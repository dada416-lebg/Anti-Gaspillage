import React, { useState } from 'react';
import { FaAppleAlt, FaChartLine, FaLeaf, FaMoneyBillWave } from 'react-icons/fa';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface StatCard {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  details: {
    title: string;
    description: string;
    data: {
      label: string;
      value: string;
    }[];
    chart?: {
      type: 'bar' | 'line' | 'pie';
      data: {
        labels: string[];
        values: number[];
        colors?: string[];
      };
    };
  };
}

const stats: StatCard[] = [
  {
    title: "Gaspillage Annuel",
    value: "10 millions de tonnes",
    icon: <FaAppleAlt className="w-8 h-8" />,
    color: "bg-red-100",
    details: {
      title: "Analyse Détailée du Gaspillage Alimentaire",
      description: "Répartition et tendances du gaspillage alimentaire en France",
      data: [
        { label: "Ménages", value: "5.2 millions de tonnes" },
        { label: "Restauration", value: "1.6 millions de tonnes" },
        { label: "Distribution", value: "1.1 millions de tonnes" },
        { label: "Production", value: "2.1 millions de tonnes" }
      ],
      chart: {
        type: 'bar',
        data: {
          labels: ["Ménages", "Restauration", "Distribution", "Production"],
          values: [5.2, 1.6, 1.1, 2.1],
          colors: ["#EF4444", "#F97316", "#EAB308", "#22C55E"]
        }
      }
    }
  },
  {
    title: "Coût par Personne",
    value: "159€ par an",
    icon: <FaMoneyBillWave className="w-8 h-8" />,
    color: "bg-yellow-100",
    details: {
      title: "Impact Économique par Secteur",
      description: "Coût moyen du gaspillage alimentaire par personne et par secteur",
      data: [
        { label: "Ménages", value: "159€ par personne/an" },
        { label: "Restauration", value: "51€ par personne/an" },
        { label: "Distribution", value: "35€ par personne/an" },
        { label: "Production", value: "64€ par personne/an" }
      ],
      chart: {
        type: 'pie',
        data: {
          labels: ["Ménages", "Restauration", "Distribution", "Production"],
          values: [159, 51, 35, 64],
          colors: ["#F59E0B", "#F97316", "#EAB308", "#FBBF24"]
        }
      }
    }
  },
  {
    title: "Impact Environnemental",
    value: "15.3 Mt CO2",
    icon: <FaLeaf className="w-8 h-8" />,
    color: "bg-green-100",
    details: {
      title: "Impact Environnemental",
      description: "Émissions de CO2 par type d'aliment",
      data: [
        { label: "Fruits et Légumes", value: "4.2 Mt CO2" },
        { label: "Céréales", value: "3.8 Mt CO2" },
        { label: "Viandes", value: "3.5 Mt CO2" },
        { label: "Produits Laitiers", value: "3.8 Mt CO2" }
      ],
      chart: {
        type: 'line',
        data: {
          labels: ["Fruits et Légumes", "Céréales", "Viandes", "Produits Laitiers"],
          values: [4.2, 3.8, 3.5, 3.8],
          colors: ["#22C55E"]
        }
      }
    }
  },
  {
    title: "Évolution",
    value: "-12%",
    icon: <FaChartLine className="w-8 h-8" />,
    color: "bg-blue-100",
    details: {
      title: "Tendances du Gaspillage",
      description: "Évolution du gaspillage alimentaire",
      data: [
        { label: "2015", value: "10.9 Mt" },
        { label: "2018", value: "9.8 Mt" },
        { label: "2021", value: "9.6 Mt" },
        { label: "2024", value: "9.4 Mt" }
      ],
      chart: {
        type: 'line',
        data: {
          labels: ["2015", "2018", "2021", "2024"],
          values: [10.9, 9.8, 9.6, 9.4],
          colors: ["#3B82F6"]
        }
      }
    }
  }
];

const StatsSection: React.FC = () => {
  const [selectedStat, setSelectedStat] = useState<StatCard | null>(null);

  const renderChart = (chart: StatCard['details']['chart']) => {
    if (!chart) return null;

    const { type, data } = chart;
    const chartData = data.labels.map((label, index) => ({
      name: label,
      value: data.values[index]
    }));

    switch (type) {
      case 'bar':
        return (
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#EF4444">
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={data.colors?.[index] || '#3B82F6'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        );

      case 'line':
        return (
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke={data.colors?.[0] || '#3B82F6'} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );

      case 'pie':
        return (
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={data.colors?.[index] || '#3B82F6'} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Statistiques du Gaspillage Alimentaire</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              onClick={() => setSelectedStat(stat)}
              className="cursor-pointer transform transition-transform hover:scale-105"
            >
              <div className={`${stat.color} p-6 rounded-lg shadow-lg`}>
                <div className="flex items-center mb-4">
                  <div className="text-gray-700 mr-4">{stat.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{stat.title}</h3>
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-2">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-6">Répartition du Gaspillage</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Production</span>
                <span>32%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '32%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Distribution</span>
                <span>14%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '14%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Restauration</span>
                <span>14%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '14%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Consommation</span>
                <span>40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {selectedStat && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{selectedStat.details.title}</h3>
                <button
                  onClick={() => setSelectedStat(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-600 mb-6">{selectedStat.details.description}</p>
              
              {/* Graphique */}
              {selectedStat.details.chart && (
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  {renderChart(selectedStat.details.chart)}
                </div>
              )}

              {/* Données détaillées */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedStat.details.data.map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-4">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{item.label}</span>
                      <span className="font-bold text-gray-700">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsSection; 