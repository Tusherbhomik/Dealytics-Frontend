import Link from 'next/link';
import { 
  LayoutDashboard, 
  BarChart2, 
  LineChart, 
  TrendingUp, 
  User, 
  FileText, 
  CreditCard, 
  Settings 
} from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="w-52 bg-[#0d1a2d] flex flex-col h-full">
      <div className="p-5">
        <h1 className="text-lg font-bold tracking-wider">DEALYTICS</h1>
      </div>
      
      <nav className="flex-1 px-3">
        <div className="mb-5">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white p-2 rounded hover:bg-white/10 transition-colors text-sm">
            <LayoutDashboard size={18} />
            <span>Dashboard</span>
          </Link>
          <Link href="/product-analytics" className="flex items-center gap-2 text-white/80 hover:text-white p-2 rounded hover:bg-white/10 transition-colors text-sm">
            <BarChart2 size={18} />
            <span>Product Analytics</span>
          </Link>
          <Link href="/custom-analytics" className="flex items-center gap-2 text-white/80 hover:text-white p-2 rounded hover:bg-white/10 transition-colors text-sm">
            <LineChart size={18} />
            <span>Custom Analytics</span>
          </Link>
          <Link href="/trending-deals" className="flex items-center gap-2 text-white/80 hover:text-white p-2 rounded hover:bg-white/10 transition-colors text-sm">
            <TrendingUp size={18} />
            <span>Trending Deals</span>
          </Link>
        </div>
        
        <div className="mb-2">
          <h2 className="text-xs uppercase text-white/50 px-2 mb-2">Account Pages</h2>
          <Link href="/profile" className="flex items-center gap-2 text-white/80 hover:text-white p-2 rounded hover:bg-white/10 transition-colors text-sm">
            <User size={18} />
            <span>Profile</span>
          </Link>
          <Link href="/my-reviews" className="flex items-center gap-2 text-white/80 hover:text-white p-2 rounded hover:bg-white/10 transition-colors text-sm">
            <FileText size={18} />
            <span>My Reviews</span>
          </Link>
          <Link href="/subscription" className="flex items-center gap-2 text-white/80 hover:text-white p-2 rounded hover:bg-white/10 transition-colors text-sm">
            <CreditCard size={18} />
            <span>Subscription</span>
          </Link>
          <Link href="/edit-profile" className="flex items-center gap-2 text-white/80 hover:text-white p-2 rounded hover:bg-white/10 transition-colors text-sm">
            <Settings size={18} />
            <span>Edit Profile</span>
          </Link>
        </div>
      </nav>
      
      <div className="p-3 mt-auto">
        <div className="bg-gradient-to-tr from-blue-900 to-blue-700 p-3 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">
              <span className="text-white">?</span>
            </div>
          </div>
          <p className="text-xs text-center mb-1">Need help?</p>
          <p className="text-xs text-center text-white/70">Please check our docs</p>
          <button className="mt-2 w-full py-1 text-xs bg-white/10 hover:bg-white/20 rounded transition-colors">
            DOCUMENTATION
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;