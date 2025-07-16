// import React, { useState } from "react";
// import axios from "axios";
// import { FiSend } from "react-icons/fi";
// import Title from "../home/Title";

// const Contact = () => {
//   const [clientName, setClientName] = useState("");
//   const [email, setEmail] = useState("");
//   const [messages, setMessages] = useState("");

//   // ================= Error Messages Start here =================
//   const [errClientName, setErrClientName] = useState(false);
//   const [errEmail, setErrEmail] = useState(false);
//   const [errMessages, setErrMessage] = useState(false);
//   // ================= Error Messages End here ===================
//   const [seuccessMsg, setSuccessMsg] = useState("");
//   // ================= Email Validation Start here ===============
//   const EmailValidation = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
//   };
//   // ================= Email Validation End here =================

//   const handleName = (e) => {
//     setClientName(e.target.value);
//     setErrClientName(false);
//   };
//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//     setErrEmail(false);
//   };
//   const handleMessages = (e) => {
//     setMessages(e.target.value);
//     setErrMessage(false);
//   };

//   const handleSend = (e) => {
//     e.preventDefault();
//     if (!clientName) {
//       setErrClientName(true);
//     }
//     if (!email) {
//       setErrEmail(true);
//     } else {
//       if (!EmailValidation(email)) {
//         setErrEmail(true);
//       }
//     }
//     if (!messages) {
//       setErrMessage(true);
//     }
//     if (clientName && email && EmailValidation(email) && messages) {
//       axios.post("https://getform.io/f/e18ee560-5133-4cfe-9a48-eddb6f012a9f", {
//         name: clientName,
//         email: email,
//         message: messages,
//       });
//       setSuccessMsg(
//         `Hello dear ${clientName}, Your messages has been sent successfully. Thank you for your time!`
//       );
//       setClientName("");
//       setEmail("");
//       setMessages("");
//     }
//   };
//   return (
//     <div className='w-full'>
//       <Title title='Get' subTitle='in Touch' />
//       <div className='p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20'>
//         <div className='w-full lgl:w-1/2'>
//           <p className='flex gap-6 justify-between w-full text-lg text-gray-400 py-4 border-b-[1px] border-b-zinc-800'>
//             <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
//               Address:
//             </span>
//             Walvis Bay
//           </p>
//           <p className='flex justify-between w-full text-lg text-gray-400 py-4 border-b-[1px] border-b-zinc-800'>
//             <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
//               Phone:
//             </span>
//             +264 081 659 6713
//           </p>
//         </div>
//         <div className='w-full lgl:w-1/2'>
//           <p className='flex justify-between lgl:gap-6 w-full text-lg text-gray-400 py-4 border-b-[1px] border-b-zinc-800'>
//             <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
//               Email:
//             </span>
//             mikhael.fourie@gmail.com
//           </p>
//           <p className='flex justify-between w-full text-lg text-gray-400 py-4 border-b-[1px] border-b-zinc-800'>
//             <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
//               Freelance:
//             </span>
//             Available
//           </p>
//         </div>
//       </div>
//       <div className='w-full mt-10'>
//         <Title title='Send' subTitle='Messages' />
//         {seuccessMsg ? (
//           <p className='text-center text-base font-titleFont p-20 text-designColor'>
//             {seuccessMsg}
//           </p>
//         ) : (
//           <form
//             id='form'
//             action='https://getform.io/f/e18ee560-5133-4cfe-9a48-eddb6f012a9f'
//             method='POST'
//             className='p-6 flex flex-col gap-6'
//           >
//             <div className='w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10 justify-between'>
//               <input
//                 onChange={handleName}
//                 value={clientName}
//                 className={`${
//                   errClientName
//                     ? "border-red-600 focus-visible:border-red-600"
//                     : "border-zinc-600 focus-visible:border-designColor"
//                 } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-400 outline-none duration-300`}
//                 // className="w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300"
//                 type='text'
//                 placeholder='Full Name'
//               />
//               <input
//                 onChange={handleEmail}
//                 value={email}
//                 className={`${
//                   errEmail
//                     ? "border-red-600 focus-visible:border-red-600"
//                     : "border-zinc-600 focus-visible:border-designColor"
//                 } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-400 outline-none duration-300`}
//                 type='email'
//                 placeholder='Email Address'
//               />
//             </div>
//             <textarea
//               onChange={handleMessages}
//               value={messages}
//               className={`${
//                 errMessages
//                   ? "border-red-600 focus-visible:border-red-600"
//                   : "border-zinc-600 focus-visible:border-designColor"
//               } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-400 outline-none duration-300 resize-none`}
//               placeholder='Your Message'
//               rows='4'
//             ></textarea>
//             <button
//               onClick={handleSend}
//               className='text-base w-44 flex items-center gap-1 text-gray-400 hover:text-designColor duration-200'
//             >
//               Send Message{" "}
//               <span className='mt-1 text-designColor'>
//                 <FiSend />
//               </span>
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessage] = useState(false);

  const EmailValidation = (email) =>
    String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };

  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessage(false);
  };

  const handleSend = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!clientName) {
      setErrClientName(true);
      hasError = true;
    }

    if (!email || !EmailValidation(email)) {
      setErrEmail(true);
      hasError = true;
    }

    if (!messages) {
      setErrMessage(true);
      hasError = true;
    }

    if (hasError) return;

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: clientName,
          from_email: email,
          message: messages,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccessMsg(
            `Hello ${clientName}, your message was sent successfully.`
          );
          setClientName("");
          setEmail("");
          setMessages("");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setSuccessMsg("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className='w-full'>
      <Title title='Get' subTitle='in Touch' />
      <div className='p-6 w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 lgl:gap-20'>
        <div className='w-full lgl:w-1/2'>
          <p className='flex gap-6 justify-between w-full text-lg text-gray-400 py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Address:
            </span>
            Walvis Bay
          </p>
          <p className='flex justify-between w-full text-lg text-gray-400 py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Phone:
            </span>
            +264 081 659 6713
          </p>
        </div>
        <div className='w-full lgl:w-1/2'>
          <p className='flex justify-between lgl:gap-6 w-full text-lg text-gray-400 py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Email:
            </span>
            mikhael.fourie@gmail.com
          </p>
          <p className='flex justify-between w-full text-lg text-gray-400 py-4 border-b-[1px] border-b-zinc-800'>
            <span className='bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center'>
              Freelance:
            </span>
            Available
          </p>
        </div>
      </div>

      <div className='w-full mt-10'>
        <Title title='Send' subTitle='Messages' />
        {successMsg ? (
          <p className='text-center text-base font-titleFont p-20 text-designColor'>
            {successMsg}
          </p>
        ) : (
          <form onSubmit={handleSend} className='p-6 flex flex-col gap-6'>
            <div className='w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10 justify-between'>
              <input
                onChange={handleName}
                value={clientName}
                className={`${
                  errClientName
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-400 outline-none duration-300`}
                type='text'
                placeholder='Full Name'
              />
              <input
                onChange={handleEmail}
                value={email}
                className={`${
                  errEmail
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-400 outline-none duration-300`}
                type='email'
                placeholder='Email Address'
              />
            </div>
            <textarea
              onChange={handleMessages}
              value={messages}
              className={`${
                errMessages
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-400 outline-none duration-300 resize-none`}
              placeholder='Your Message'
              rows='4'
            ></textarea>
            <button
              type='submit'
              className='text-base w-44 flex items-center gap-1 text-gray-400 hover:text-designColor duration-200'
            >
              Send Message{" "}
              <span className='mt-1 text-designColor'>
                <FiSend />
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
