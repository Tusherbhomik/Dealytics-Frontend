'use client';

import { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

interface AnalyticsChartProps {
  chartType: string;
}

// Create a proper interface for the chart data
interface ChartDataPoint {
  name: string;
  mySales: number;
  competitorSales: number;
}

const AnalyticsChart = ({ chartType }: AnalyticsChartProps) => {
  // Use the defined interface instead of any[]
  const [data, setData] = useState<ChartDataPoint[]>([]);

  useEffect(() => {
    // Generate mock data
    const generateData = (): ChartDataPoint[] => {
      const mockData: ChartDataPoint[] = [];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
      for (let i = 0; i < 12; i++) {
        mockData.push({
          name: months[i],
          mySales: Math.floor(Math.random() * 300) + 100,
          competitorSales: Math.floor(Math.random() * 350) + 150,
        });
      }
      
      return mockData;
    };

    setData(generateData());
  }, []);

  // Function to render the appropriate chart based on chartType
  const renderChart = () => {
    switch (chartType) {
      case 'line':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3f5f" />
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip contentStyle={{ backgroundColor: '#1a2b4b', borderColor: '#2a3f5f' }} />
              <Legend />
              <Line type="monotone" dataKey="mySales" stroke="#3b82f6" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="competitorSales" stroke="#ec4899" />
            </LineChart>
          </ResponsiveContainer>
        );

      case 'area':
      case 'xy':
      default:
        return (
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <defs>
                <linearGradient id="colorMySales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                </linearGradient>
                <linearGradient id="colorCompetitorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ec4899" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a3f5f" />
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip contentStyle={{ backgroundColor: '#1a2b4b', borderColor: '#2a3f5f' }} />
              <Legend />
              <Area
                type="monotone"
                dataKey="mySales"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorMySales)"
              />
              <Area
                type="monotone"
                dataKey="competitorSales"
                stroke="#ec4899"
                fillOpacity={1}
                fill="url(#colorCompetitorSales)"
              />
            </AreaChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div className="bg-[#0d1a2d] p-4 rounded-lg">
      {data.length > 0 ? renderChart() : (
        <div className="flex items-center justify-center h-96 text-gray-400">
          Loading chart data...
        </div>
      )}
    </div>
  );
};

export default AnalyticsChart;