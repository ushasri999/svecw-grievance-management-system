import React from 'react';

const Contacts = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      {/* Image Section - 1 part */}
      <div className="w-full h-2/5 overflow-hidden mb-4">
        {/* Replace 'contacts.png' with your actual image path */}
        <img src="contacts.png" alt="Contact Us" className="w-full h-full object-cover" />
      </div>
      
      {/* Form Section - 3 parts */}
      <div className="w-full max-w-md h-3/5 flex items-center">
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form className="flex flex-col">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name:</label>
              <input type="text" id="name" name="name" required className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email:</label>
              <input type="email" id="email" name="email" required className="mt-1 p-2 w-full border rounded-md" />
            </div>
            <div className="mb-4">
              <label htmlFor="problem" className="block text-sm font-medium text-gray-600">Problem:</label>
              <textarea id="problem" name="problem" rows="4" required className="mt-1 p-2 w-full border rounded-md"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
