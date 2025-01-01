import React from 'react';
import Form from './Form';

const LeftSidebar = () => {
    return (
        <div className="w-full max-w-[400px] h-auto border left-sidebar mx-auto sm:w-[90%] md:max-w-[370px]">
            <div className="h-full w-full border p-4 sm:p-3">
                <h1 className="text-[1.25rem] md:text-[1.5rem] font-semibold text-center mb-3 text-gray-500">
                    Step 2/3
                </h1>
                <h1 className="text-[1rem] md:text-[1.25rem] font-semibold text-gray-900 mb-2">
                    Create your business profile
                </h1>
                <p className="mt-2 text-gray-500 text-[1rem] sm:text-[0.875rem] md:text-[1rem] leading-relaxed">
                    Your Profile is your first Impression. It is the face of your services. Customers rely on it to learn about your expertise and decide
                    if you're the right fit for their needs. Ensure it's accurate, professional, and showcases your strengths.
                </p>

                {/* form */}
                <Form  />
            </div>
        </div>
    );
};

export default LeftSidebar;
