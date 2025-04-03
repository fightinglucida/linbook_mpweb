"use client"

import Link from "next/link"
import NavBar from "@/components/nav-bar"
import { Button } from "@/components/ui/button"
import LoginModal from "@/components/login-modal"
import React, { useEffect, useState, useMemo } from 'react'
import { 
  GlobeAltIcon, 
  CpuChipIcon, 
  BanknotesIcon, 
  HeartIcon as HeartIconSolid, 
  AcademicCapIcon, 
  UserGroupIcon, 
  FireIcon, 
  DevicePhoneMobileIcon, 
  TruckIcon, 
  ChatBubbleLeftRightIcon, 
  FaceSmileIcon 
} from '@heroicons/react/24/solid';

// 定义 Icon 类型
type IconType = React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & { title?: string | undefined; titleId?: string | undefined; } & React.RefAttributes<SVGSVGElement>>;

// 创建分类到图标的映射
const categoryIconMap: Record<string, IconType> = {
  '全部': GlobeAltIcon,
  '科技': CpuChipIcon,
  '财经': BanknotesIcon,
  '健康': HeartIconSolid,
  '教育': AcademicCapIcon,
  '情感': HeartIconSolid, 
  '老年': UserGroupIcon,
  '热点': FireIcon,
  '手机': DevicePhoneMobileIcon,
  '汽车': TruckIcon,
  '观点': ChatBubbleLeftRightIcon,
  '育儿': FaceSmileIcon, 
};

// 定义数据类型接口
interface Article {
  title: string;
  readCount: number;
}

interface Account {
  avatar: string;
  name: string;
  readCount: number;
  articles: Article[];
  category: string; 
}

// 公众号详情弹窗组件
interface AccountDetailModalProps {
  account: Account;
  open: boolean;
  onClose: () => void;
}

const AccountDetailModal: React.FC<AccountDetailModalProps> = ({ account, open, onClose }) => {
  if (!open) return null;
  if (!account) return null; 

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-4 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <img 
              src={account.avatar || '/default-avatar.png'} 
              alt={account.name}
              className="w-16 h-16 rounded-xl object-cover flex-shrink-0" 
              onError={(e) => { 
                if (e.currentTarget.src !== '/default-avatar.png') {
                  e.currentTarget.src = '/default-avatar.png'; 
                }
              }} 
            />
            <div className="flex-1 min-w-0"> 
              <h2 className="text-xl font-semibold text-gray-900 truncate">{account.name}</h2>
              <div className="flex items-center mt-1 text-sm text-gray-500">
                <span>过去7天阅读总量: </span>
                <span className="font-medium text-gray-900 ml-1">{account.readCount.toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">过去7天文章数据</h3>
          <div className="space-y-4">
            {account.articles.slice(0, 7).map((article, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 px-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <h4 className="font-medium text-gray-900 flex-1 truncate mr-4">{article.title}</h4>
                <div className="flex items-center text-sm text-gray-500 whitespace-nowrap">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span>{article.readCount.toLocaleString()} 阅读</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Benchmark() {
  const [categories, setCategories] = useState<string[]>([]);
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('readDesc');
  const [activeCategory, setActiveCategory] = useState('全部分类');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true); 
      try {
        const categoriesResponse = await fetch('/data/benchmark-categories.json');
        if (!categoriesResponse.ok) throw new Error('无法加载分类数据');
        const categoriesData = await categoriesResponse.json();

        const accountsResponse = await fetch('/data/benchmark-accounts.json');
        if (!accountsResponse.ok) throw new Error('无法加载公众号数据');
        const accountsData = await accountsResponse.json();

        setCategories(categoriesData);
        setAccounts(accountsData);

      } catch (error) {
        console.error('加载数据失败:', error);
      } finally {
        setIsLoading(false); 
      }
    };

    loadData();
  }, []);

  const filteredAccounts = useMemo(() => {
    let result = [...accounts];

    if (activeCategory !== '全部分类') {
      result = result.filter(account => account.category === activeCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase().trim(); 
      if (query) { 
        result = result.filter(account =>
          account.name.toLowerCase().includes(query)
        );
      }
    }

    result.sort((a, b) => {
      switch (sortOrder) {
        case 'readDesc':
          return b.readCount - a.readCount;
        case 'readAsc':
          return a.readCount - b.readCount;
        case 'name':
          return a.name.localeCompare(b.name, 'zh-CN');
        default:
          return b.readCount - a.readCount;
      }
    });

    return result;
  }, [accounts, activeCategory, searchQuery, sortOrder]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 sm:p-6 lg:p-8">
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="w-full lg:w-64 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 flex flex-col flex-shrink-0 self-start lg:sticky lg:top-6"> 
          <h3 className="text-lg font-semibold mb-4 text-center text-gray-200 border-b border-gray-700 pb-3"> 
            分类导航
          </h3>
          {categories.length > 1 ? (
            <div className="flex flex-col space-y-1 overflow-y-auto max-h-[calc(100vh-150px)] pr-1"> 
              {categories.map((category, index) => {
                const Icon = categoryIconMap[category] || GlobeAltIcon; 
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className={`w-full flex items-center justify-start text-left font-normal transition-colors rounded-lg py-2.5 px-3 text-sm gap-3 ${activeCategory === category ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-transparent text-gray-300 hover:bg-gray-700/50 hover:text-white'}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" /> 
                    <span className="truncate">{category}</span> 
                  </Button>
                );
              })}
            </div>
          ) : (
            <p className="text-center text-gray-400">暂无分类数据</p> 
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-100">公众号对标参考</h1>
            <div className="relative w-full sm:w-64">
              <input
                type="text"
                placeholder="搜索公众号名称..."
                className="bg-gray-700 text-white rounded-lg px-3 py-1.5 pl-8 w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="flex items-center w-full sm:w-auto">
              <span className="mr-2 whitespace-nowrap">排序:</span>
              <select
                className="bg-gray-700 text-white rounded p-1.5 focus:outline-none w-full sm:w-auto"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="readDesc">阅读量 ↓</option>
                <option value="readAsc">阅读量 ↑</option>
                <option value="name">名称排序</option>
              </select>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
            </div>
          ) : filteredAccounts.length === 0 ? (
            <div className="flex justify-center items-center h-64 text-gray-400">
              <p>没有找到符合条件的公众号</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
              {filteredAccounts.map((account, index) => (
                <div
                  key={`${account.name}-${index}`} 
                  className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col" 
                  onClick={() => setSelectedAccount(account)}
                >
                  <div className="p-4 flex-grow"> 
                    <div className="flex items-center mb-3">
                      <img
                        src={account.avatar || '/default-avatar.png'} 
                        alt={account.name}
                        className="w-10 h-10 rounded-full mr-3 object-cover flex-shrink-0" 
                        onError={(e) => { e.currentTarget.src = '/default-avatar.png'; }} 
                      />
                      <h4 className="font-bold text-white truncate flex-1 min-w-0">{account.name}</h4> 
                    </div>
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>近7日阅读:</span>
                      <span className="font-bold text-green-500 whitespace-nowrap">{(account.readCount / 10000).toFixed(1)}万+</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-300 mt-1">
                      <span>分类:</span>
                      <span className="truncate">{account.category}</span>
                    </div>
                  </div>
                  <div className="px-4 pb-3 text-xs text-gray-400 hover:text-gray-300 transition-colors text-center border-t border-gray-700 pt-2 mt-auto"> 
                    点击查看详情
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedAccount && (
        <AccountDetailModal
          account={selectedAccount}
          open={!!selectedAccount}
          onClose={() => setSelectedAccount(null)}
        />
      )}
    </div>
  );
}