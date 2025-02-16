
// import React from 'react';
// import contactus9 from '../../assets/contactus9.png';

// const ContentContact = () => {
//   return (
//     <div className="flex bg-black text-[#9333ea] p-8">
//       {/* Left Section - Contact Us Form */}
//       <div className="flex-1 mr-8">
//         <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
//         <form className="space-y-4 bg-transparent bg-opacity-30 backdrop-blur-lg p-6 rounded-lg shadow-lg">
//           <div>
//             <label htmlFor="email" className="block text-[#9333ea]">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full p-2 mt-2 border border-[#9333ea] bg-transparent text-[#9333ea]"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="phone" className="block text-[#9333ea]">Phone Number</label>
//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               className="w-full p-2 mt-2 border border-[#9333ea] bg-transparent text-[#9333ea]"
//               required
//             />
//           </div>
//           <div>
//             <label htmlFor="message" className="block text-[#9333ea]">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               className="w-full p-2 mt-2 border border-[#9333ea] bg-transparent text-[#9333ea]"
//               rows="4"
//               required
//             />
//           </div>
//           <button type="submit" className="w-full bg-[#9333ea] text-white p-2 mt-4 rounded-md">
//             Send Message
//           </button>
//         </form>
//       </div>

//       {/* Right Section - Image */}
//       <div className="flex-none">
//         <img src={contactus9} alt="Contact Us" className="w-full h-auto max-w-md" />
//       </div>
//     </div>
//   );
// };

// // Ensure this is a default export
// export default ContentContact;
import React from 'react';
import contactus9 from '../../assets/contactus9.png';

const ContentContact = () => {
  return (
    <div className="flex bg-black text-[#9333ea] p-8">
      {/* Left Section - Contact Us Form */}
      <div className="flex-1 mr-8">
        <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
        <form className="space-y-4 bg-opacity-40 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-[#9333ea]">
          <div>
            <label htmlFor="email" className="block text-[#9333ea]">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mt-2 border border-[#9333ea] bg-transparent text-[#9333ea]"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-[#9333ea]">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full p-2 mt-2 border border-[#9333ea] bg-transparent text-[#9333ea]"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-[#9333ea]">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 mt-2 border border-[#9333ea] bg-transparent text-[#9333ea]"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="w-full bg-[#9333ea] text-white p-2 mt-4 rounded-md">
            Send Message
          </button>
        </form>
      </div>

      {/* Right Section - Image */}
      <div className="flex-none">
        <img
          src={contactus9}
          alt="Contact Us"
          className="w-full h-auto max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ContentContact;
