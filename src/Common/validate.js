import { MdError } from "react-icons/md";
export const checkValidData = (email, password) => {
   const isemailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
   const ispasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

   if (!isemailValid) return (
      <div className="flex flex-row">
         
         <p className="flex flex-row justify-start"><MdError />Email is not valid</p>
      </div>
   );

   if (!ispasswordValid) return (
      
         
      <p className=" flex flex-row justify-start"><MdError />Password is not valid</p>
      
   );

   return null;

};