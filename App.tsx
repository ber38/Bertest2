
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentDisplay from './components/ContentDisplay';
import { knowledgeData } from './data/knowledgeBase';

const App: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Set the first item as active by default
    if (knowledgeData.length > 0 && knowledgeData[0].subCategories.length > 0) {
      setActiveId(knowledgeData[0].subCategories[0].id);
    }
    
    // The cleanup function for the previous observer
    if (observer.current) {
      observer.current.disconnect();
    }

    // Set up the Intersection Observer to track which section is visible
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
             // Find the entry that is most visible in the viewport
            const visibleEntries = entries.filter(e => e.isIntersecting);
            if (visibleEntries.length > 0) {
                // A simple approach: set the first intersecting element from the top as active.
                setActiveId(visibleEntries[0].target.id);
            }
          }
        });
      },
      // root is the viewport, rootMargin helps trigger before it's fully in view
      // threshold means the callback will run when 40% of the element is visible
      { root: contentRef.current, rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    
    const { current: currentObserver } = observer;

    // Observe all the section elements
    const elements = contentRef.current?.querySelectorAll('section[id]');
    if (elements) {
      elements.forEach((el) => currentObserver.observe(el));
    }

    // Cleanup on component unmount
    return () => {
      if (elements) {
        elements.forEach((el) => currentObserver.unobserve(el));
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col md:flex-row container mx-auto">
        <Sidebar categories={knowledgeData} activeId={activeId} />
        <div className="w-full border-l border-slate-200">
            <ContentDisplay categories={knowledgeData} contentRef={contentRef} />
        </div>
      </div>
    </div>
  );
};

export default App;
