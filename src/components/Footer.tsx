import React from 'react';

const Footer: React.FC = () => {
    
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; 2025 Scholarship Finder. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="#" className="hover:text-gray-400">Facebook</a>
                    <a href="#" className="hover:text-gray-400">Twitter</a>
                    <a href="#" className="hover:text-gray-400">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
    