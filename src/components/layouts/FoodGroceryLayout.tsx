import React from 'react';
import { ISubThemeDetail } from '../../core/types/Theme';
import Button from '../atoms/Button';
import Badge from '../atoms/Badge';
import { useLanguage } from '../../core/hooks/useLanguage';

interface LayoutProps {
  theme: ISubThemeDetail;
}

const FoodGroceryLayout: React.FC<LayoutProps> = ({ theme }) => {
  const { contentFocus } = theme;
  const { language } = useLanguage();

  const t = {
      en: {
          desc: "Fresh from local farms to your table.",
          cats: ["Vegetables", "Fruits", "Specials"],
          products: [
            { name: "Organic Avocados", badge: "Organic", badgeType: "success" },
            { name: "Sourdough Bread", badge: "Fresh", badgeType: "warning" },
            { name: "Farm Eggs (Doz)", badge: "Local", badgeType: "info" },
            { name: "Almond Milk", badge: null, badgeType: "neutral" }
          ],
          boxTitle: "Weekly Harvest Box",
          boxDesc: "Get 20% off your first subscription order.",
          boxBtn: "Subscribe"
      },
      tw: {
          desc: "從在地農場新鮮直送餐桌。",
          cats: ["蔬菜", "水果", "特價"],
          products: [
            { name: "有機酪梨", badge: "有機", badgeType: "success" },
            { name: "酸種麵包", badge: "新鮮", badgeType: "warning" },
            { name: "農場雞蛋 (打)", badge: "在地", badgeType: "info" },
            { name: "杏仁奶", badge: null, badgeType: "neutral" }
          ],
          boxTitle: "每週豐收箱",
          boxDesc: "首次訂閱享八折優惠。",
          boxBtn: "訂閱"
      }
  }[language];

  const products = [
      { price: "$4.99", img: "https://picsum.photos/200/200?random=food1" },
      { price: "$6.50", img: "https://picsum.photos/200/200?random=food2" },
      { price: "$5.25", img: "https://picsum.photos/200/200?random=food3" },
      { price: "$3.99", img: "https://picsum.photos/200/200?random=food4" }
  ].map((p, i) => ({ ...p, ...t.products[i] }));

  return (
    <div className="bg-green-50 dark:bg-green-950/30 p-8 font-sans transition-colors duration-300">
      <div className="flex justify-between items-end mb-8 border-b-2 border-green-200 dark:border-green-800 pb-4">
        <div>
            <h2 className="text-3xl font-bold text-green-900 dark:text-green-100">{contentFocus.title}</h2>
            <p className="text-green-700 dark:text-green-300">{t.desc}</p>
        </div>
        <div className="hidden md:flex gap-2">
            <Badge variant="outline" className="bg-white dark:bg-green-900 hover:bg-green-100 dark:hover:bg-green-800 cursor-pointer">{t.cats[0]}</Badge>
            <Badge variant="outline" className="bg-white dark:bg-green-900 hover:bg-green-100 dark:hover:bg-green-800 cursor-pointer">{t.cats[1]}</Badge>
            <Badge variant="success" className="bg-green-600 text-white border-none">{t.cats[2]}</Badge>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p, i) => (
            <div key={i} className="bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                    <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {p.badge && (
                        <div className="absolute top-2 left-2">
                            <Badge variant={p.badgeType as any} size="sm" className="shadow-sm">{p.badge}</Badge>
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-gray-800 dark:text-gray-100 text-sm md:text-base">{p.name}</h3>
                        <span className="font-bold text-green-600">{p.price}</span>
                    </div>
                    <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg mt-2">
                        {contentFocus.primaryCTA}
                    </Button>
                </div>
            </div>
        ))}
      </div>
      
      {contentFocus.showSpecials && (
          <div className="mt-12 bg-orange-100 dark:bg-orange-900/40 rounded-xl p-8 flex items-center justify-between border border-orange-200 dark:border-orange-800">
             <div>
                 <h3 className="text-2xl font-bold text-orange-900 dark:text-orange-100">{t.boxTitle}</h3>
                 <p className="text-orange-800 dark:text-orange-200">{t.boxDesc}</p>
             </div>
             <Button className="bg-orange-500 hover:bg-orange-600 text-white">{t.boxBtn}</Button>
          </div>
      )}
    </div>
  );
};

export default FoodGroceryLayout;