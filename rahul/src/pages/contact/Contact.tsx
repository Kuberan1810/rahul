
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="w-layout-blockcontainer container w-container py-12">
      <div className="hero-content max-w-xl mx-auto my-8">
        <h1 className="hero-title text-4xl mb-2">Get in Touch</h1>
        <p className="hero-description text-gray-600 mb-6">
          Have a project proposal, opportunity, or just want to connect? Send a message!
        </p>


        <form onSubmit={(e) => e.preventDefault()} className="w-full space-y-4 text-left">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name</label>
            <input 
              type="text" 
              placeholder="Max Voss" 
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              placeholder="voss@gmail.com" 
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-black transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea 
              rows={4} 
              placeholder="How can I help you?" 
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:border-black transition-colors"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="button-black w-full py-3 mt-2 rounded-xl"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;