"use client"

import Link from "next/link"
import NavBar from "@/components/nav-bar"
import { Button } from "@/components/ui/button"
import LoginModal from "@/components/login-modal"
import React from 'react'

// 获取分类数据
const getCategories = () => {
  return ['全部分类', '情感', '老年', '热点', '科技', '手机', '汽车', '观点', '育儿', '健康', '财经', '教育'];
};

// 获取公众号数据
const getAccounts = () => {
  return [
    {
      avatar: '/placeholder.jpg',
      name: '创业邦',
      readCount: 1526000,
      articles: [
        { title: '互联网巨头进军AI芯片，这家公司估值翻倍', readCount: 137000 },
        { title: '2.2亿美元！清华姚班天才创办的AI公司卖身', readCount: 124000 },
        { title: '投资人疯抢的AI医疗公司，估值50亿', readCount: 108000 },
        { title: '独家专访：AI创业者的成功之路', readCount: 98000 },
        { title: '创投周报：新一轮融资hotspots来袭', readCount: 92000 },
        { title: '深度分析：中国创业生态的变革之年', readCount: 88000 },
        { title: '创业者必读：如何打造百亿估值企业', readCount: 85000 }
      ]
    },
    {
      avatar: '/placeholder.jpg',
      name: '36氪',
      readCount: 2038000,
      articles: [
        { title: '独家丨字节跳动收购AI初创公司Manus', readCount: 156000 },
        { title: '爆款视频App发布，TikTok的又一个对手来了', readCount: 128000 },
        { title: '市值蒸发8000亿，巨头大裁员的背后', readCount: 142000 },
        { title: '36氪首发｜新能源汽车独角兽完成10亿融资', readCount: 118000 },
        { title: '解密：互联网巨头的元宇宙布局', readCount: 105000 },
        { title: '科技巨头财报解读：AI业务成新增长点', readCount: 98000 },
        { title: '独家对话：硅谷投资人眼中的中国创新', readCount: 92000 }
      ]
    },
    {
      avatar: '/placeholder.jpg',
      name: '量子位',
      readCount: 1862000,
      articles: [
        { title: 'OpenAI发布重磅模型Sora：文本生成视频', readCount: 156000 },
        { title: '谷歌最强AI模型Gemini发布，GPT-4coming soon', readCount: 147000 },
        { title: 'AI芯片独角兽，估值超200亿，将IPO', readCount: 132000 },
        { title: '最新突破：量子计算机实现千比特里程碑', readCount: 125000 },
        { title: 'AI研究最新进展：自主学习能力大幅提升', readCount: 118000 },
        { title: '深度解析：大模型训练的技术创新', readCount: 110000 },
        { title: '独家：国内AI实验室取得重大突破', readCount: 105000 }
      ]
    },
    {
      avatar: '/placeholder.jpg',
      name: '人民日报',
      readCount: 4581000,
      articles: [
        { title: '两会特别报道：科技创新引领QUALITY提升', readCount: 245000 },
        { title: '中国经济新动能：数字经济驱动转型hotspots转型', readCount: 198000 },
        { title: '聚焦乡村振兴：数字化赋能农业现代化', readCount: 185000 },
        { title: '深度观察：共同富裕道路上的中国实践', readCount: 176000 },
        { title: '权威解读：新发展格局下的改革开放', readCount: 165000 },
        { title: '民生聚焦：教育医疗住房三大领域改革', readCount: 158000 },
        { title: '全球视野：构建人类命运共同体', readCount: 152000 }
      ]
    },
    {
      avatar: '/placeholder.jpg',
      name: '新华社',
      readCount: 3825000,
      articles: [
        { title: '聚焦两会：代表委员热议科技自立自强', readCount: 215000 },
        { title: '深度观察：中国制造迈向中国创造', readCount: 186000 },
        { title: '权威解读：新时代中国特色社会主义', readCount: 175000 },
        { title: '全球瞭望：世界格局加速演变', readCount: 168000 },
        { title: '经济透视：QUALITY提升的新进展', readCount: 162000 },
        { title: '民生关注：共同富裕新进展', readCount: 155000 },
        { title: '科技创新：中国智造新突破', readCount: 148000 }
      ]
    },
    {
      avatar: '/placeholder.jpg',
      name: '财经杂志',
      readCount: 2156000,
      articles: [
        { title: '独家调查：新能源汽车产业链深度分析', readCount: 168000 },
        { title: '房地产市场新政策解读：重点城市将迎来新机遇', readCount: 145000 },
        { title: '数字人民币试点扩大，金融科技创新加速', readCount: 132000 },
        { title: '宏观经济分析：通胀压力下的货币政策', readCount: 128000 },
        { title: '产业观察：芯片产业国产化进程加快', readCount: 122000 },
        { title: '金融改革：资本市场全面注册制时代', readCount: 118000 },
        { title: '公司研究：互联网巨头转型新方向', readCount: 115000 }
      ]
    },
    {
      avatar: '/placeholder.jpg',
      name: '虎嗅网',
      readCount: 1935000,
      articles: [
        { title: '新消费品牌崛起：00后消费习惯大解析', readCount: 143000 },
        { title: '互联网医疗的春天：政策利好下的机遇与挑战', readCount: 126000 },
        { title: '元宇宙概念降温，资本市场转向何方？', readCount: 118000 },
        { title: '深度：社交平台的去中心化趋势', readCount: 112000 },
        { title: '观察：新一代创业者的生存法则', readCount: 108000 },
        { title: '独家：to B领域的创新机会', readCount: 102000 },
        { title: '解密：互联网大厂的新增长曲线', readCount: 98000 }
      ]
    },
    {
      avatar: '/placeholder.jpg',
      name: '教育视点',
      readCount: 1658000,
      articles: [
        { title: 'AI教育革命：智能化学习平台改变传统课堂', readCount: 125000 },
        { title: '双减政策一年后：教育行业格局重构', readCount: 118000 },
        { title: '高考改革新方向：综合素质评价体系完善', readCount: 106000 },
        { title: '深度：在线教育的下一个风口', readCount: 98000 },
        { title: '观察：教育公平的数字化实践', readCount: 92000 },
        { title: '独家：未来教育的发展趋势', readCount: 88000 },
        { title: '聚焦：国际教育合作新机遇', readCount: 85000 }
      ]
    },
    {
      avatar: '/placeholder.jpg',
      name: '科技日报',
      readCount: 2245000,
      articles: [
        { title: '国产芯片突破：14nm工艺实现量产', readCount: 178000 },
        { title: '量子通信网络建设提速：多地启动试点', readCount: 156000 },
        { title: '航天技术创新：新一代运载火箭研制成功', readCount: 142000 },
        { title: '深度：6G技术研发最新进展', readCount: 135000 },
        { title: '独家：国产操作系统发展现状', readCount: 128000 },
        { title: '聚焦：人工智能芯片新突破', readCount: 122000 },
        { title: '观察：科技创新助力碳中和', readCount: 118000 }
      ]
    },
    {
      avatar: '/placeholder.jpg',
      name: '健康时报',
      readCount: 1876000,
      articles: [
        { title: '最新研究：这些食物有助于预防认知障碍', readCount: 146000 },
        { title: '专家解读：如何科学应对亚健康', readCount: 132000 },
        { title: '重大突破：新型癌症早筛技术获批上市', readCount: 128000 },
        { title: '深度：后疫情时代的健康管理', readCount: 122000 },
        { title: '独家：精准医疗领域新进展', readCount: 118000 },
        { title: '观察：中医药创新发展之路', readCount: 112000 },
        { title: '聚焦：智慧医疗改变就医体验', readCount: 108000 }
      ]
    }
  ];
};

const categories = getCategories();
const accounts = getAccounts();

// 公众号详情弹窗组件
interface Article {
  title: string;
  readCount: number;
}

interface Account {
  avatar: string;
  name: string;
  readCount: number;
  articles: Article[];
}

interface AccountDetailModalProps {
  account: Account;
  open: boolean;
  onClose: () => void;
}

const AccountDetailModal: React.FC<AccountDetailModalProps> = ({ account, open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-4 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <img src={account.avatar} alt={account.name} className="w-16 h-16 rounded-xl object-cover" />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900">{account.name}</h2>
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
  const [selectedAccount, setSelectedAccount] = React.useState<Account | null>(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortOrder, setSortOrder] = React.useState('readDesc');
  const [activeCategory, setActiveCategory] = React.useState('全部分类');
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#1a2e3b] to-[#0f4a30] text-white">
      <NavBar />

      {/* 对标库内容区域 */}
      <section className="flex-1 flex mt-16 p-6 gap-6">
        {/* 左侧分类按钮 */}
        <div className="w-64 space-y-2 bg-gray-800 bg-opacity-50 rounded-lg p-4">
          <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">公众号分类</h3>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((category, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`w-full justify-center text-center font-normal transition-colors rounded-lg py-2 ${activeCategory === category ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-700/50 text-white hover:bg-gray-600'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
            ))}
          </div>
        </div>

        {/* 右侧卡片组 */}
        <div className="flex-1">
          <div className="mb-4 flex justify-between items-center">
            <h3 className="text-xl font-bold">热门公众号</h3>
            <div className="flex items-center">
              <span className="mr-2">排序:</span>
              <select
                className="bg-gray-700 text-white rounded p-1 focus:outline-none"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
              >
                <option value="readDesc">阅读量 ↓</option>
                <option value="readAsc">阅读量 ↑</option>
                <option value="latest">最新更新</option>
                <option value="name">名称排序</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            {accounts.map((account, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setSelectedAccount(account)}
            >
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <img
                    src={account.avatar}
                    alt={account.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <h4 className="font-bold text-white truncate">{account.name}</h4>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>近7日阅读:</span>
                  <span className="font-bold text-green-500">{(account.readCount / 10000).toFixed(1)}万+</span>
                </div>
                <div className="flex justify-between text-sm text-gray-300 mt-1">
                  <span>更新频率:</span>
                  <span>每日更新</span>
                </div>
                <div className="mt-3 text-sm text-gray-400 hover:text-gray-300 transition-colors">
                  点击查看最近7天文章数据
                </div>
              </div>
            </div>
            ))}
          </div>
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
};
