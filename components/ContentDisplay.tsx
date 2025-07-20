
import React from 'react';
import { Category, ContentBlock } from '../types';

interface ContentDisplayProps {
  categories: Category[];
  contentRef: React.RefObject<HTMLDivElement>;
}

const renderWithBold = (text: string) => {
  if (!text) return null;
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i} className="font-semibold text-slate-900">{part}</strong> : part
      )}
    </>
  );
};

const ContentBlockRenderer: React.FC<{ block: ContentBlock }> = ({ block }) => {
  switch (block.type) {
    case 'heading':
      return <h2 className="text-3xl font-bold text-slate-800 mb-4 mt-8 border-b pb-2">{block.text}</h2>;
    case 'subheading':
      return <h3 className="text-xl font-semibold text-slate-700 mt-6 mb-3">{block.text}</h3>;
    case 'paragraph':
      return <p className="mb-4 text-slate-600 leading-relaxed">{block.text}</p>;
    case 'list':
      return (
        <ul className="space-y-3 list-disc list-inside text-slate-600 leading-relaxed">
          {block.items?.map((item, index) => (
            <li key={index}>
              {typeof item === 'string' ? (
                renderWithBold(item)
              ) : (
                <>
                  {renderWithBold(item.main)}
                  <ul className="space-y-2 list-['-_'] list-inside ml-6 mt-2">
                    {item.sublist.map((subItem, subIndex) => (
                      <li key={subIndex}>{renderWithBold(subItem)}</li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

const ContentDisplay: React.FC<ContentDisplayProps> = ({ categories, contentRef }) => {
  return (
    <main ref={contentRef} className="w-full md:w-3/4 lg:w-4/5 xl:w-5/6 p-4 md:p-8 lg:p-12 overflow-y-auto h-full md:h-[calc(100vh-4rem)]">
        {categories.map((category) => (
            <div key={category.id} className="mb-12">
                {category.subCategories.map((subCategory) => (
                    <section key={subCategory.id} id={subCategory.id} className="mb-10 p-6 bg-white rounded-lg shadow-sm scroll-mt-20">
                        <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
                           <span className="mr-3">{category.icon}</span> {subCategory.title}
                        </h2>
                        {subCategory.content.map((block, index) => (
                            <ContentBlockRenderer key={index} block={block} />
                        ))}
                    </section>
                ))}
            </div>
        ))}
    </main>
  );
};

export default ContentDisplay;
