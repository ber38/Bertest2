
import React from 'react';
import { Category } from '../types';

interface SidebarProps {
  categories: Category[];
  activeId: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, activeId }) => {
  return (
    <aside className="w-full md:w-1/4 lg:w-1/5 xl:w-1/6 p-4 md:p-6 md:sticky top-16 h-full md:h-[calc(100vh-4rem)] md:overflow-y-auto">
      <nav className="space-y-6">
        {categories.map((category) => (
          <div key={category.id}>
            <h2 className="flex items-center space-x-3 mb-3">
              <span className="text-blue-600">{category.icon}</span>
              <span className="text-lg font-bold uppercase tracking-wider text-slate-700">{category.title}</span>
            </h2>
            <ul className="space-y-2 border-l-2 border-slate-200 pl-4">
              {category.subCategories.map((subCategory) => (
                <li key={subCategory.id}>
                  <a
                    href={`#${subCategory.id}`}
                    className={`block py-1 text-sm font-medium transition-colors duration-200 ${
                      activeId === subCategory.id
                        ? 'text-blue-600 -ml-4 pl-3.5 border-l-2 border-blue-600 font-semibold'
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {subCategory.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
