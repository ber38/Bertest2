
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <h1 className="text-2xl font-bold text-slate-800">
                        Synthèse de Connaissances
                    </h1>
                    <div className="flex items-center space-x-2 text-blue-600">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747h18M5.498 6.253h.01M18.498 6.253h.01M5.498 17.747h.01M18.498 17.747h.01M12 21.75a9.75 9.75 0 01-6.146-2.354M12 2.25a9.75 9.75 0 016.146 2.354" />
                        </svg>
                        <span className="font-semibold hidden sm:inline">FR</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
