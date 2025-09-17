import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { fadeIn } from "../framermotion/variants";


const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  // Initialize EmailJS
  useEffect(() => {
 // console.log("Public Key:",import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY || "Not Set"); //check if env variable is loaded
  const publicKey = import.meta.env?.REACT_APP_EMAILJS_PUBLIC_KEY || "Enter_Your_Public_Key_Here";
  emailjs.init(publicKey);
}, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }
    if (!message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleName = (e) => {
    setName(e.target.value);
    if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
    if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsLoading(true);
    try {
      // Add dynamic time field
      form.current.time.value = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      });
      const response = await emailjs.sendForm(
        "Enter_service_id", //service
        "Enter_template_id", //template
        form.current
      );

      console.log("SUCCESS!", response.status, response.text);
      setName("");
      setEmail("");
      setMessage("");
      setErrors({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="w-full bg-gradient-to-r from-amber-500/20 to-pink-500/20 p-4 sm:p-6 rounded-lg border-none border-orange/30 shadow-md hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5 sm:gap-6">
        {/* Hidden Time Input */}
        <input
          type="hidden"
          name="time"
          value={new Date().toLocaleString("en-US", {
            timeZone: "Asia/Kolkata",
            dateStyle: "medium",
            timeStyle: "short",
          })}
        />

        {/* Name Input */}
        <div className="relative">
          <motion.input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={name}
            onChange={handleName}
            disabled={isLoading}
            className={`w-full h-12 sm:h-14 rounded-lg bg-white/90 border ${
              errors.name
                ? "border-red-500"
                : "border-orange/30 hover:border-amber-500/50"
            } px-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300 disabled:opacity-50`}
            whileFocus={{ scale: 1.02 }}
            whileHover={{ boxShadow: "0 2px 8px rgba(245, 158, 11, 0.2)" }}
          />
          {errors.name && (
            <motion.p
              className="text-red-500 text-xs mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {errors.name}
            </motion.p>
          )}
        </div>

        {/* Email Input */}
        <div className="relative">
          <motion.input
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmail}
            disabled={isLoading}
            className={`w-full h-12 sm:h-14 rounded-lg bg-white/90 border ${
              errors.email
                ? "border-red-500"
                : "border-orange/30 hover:border-amber-500/50"
            } px-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300 disabled:opacity-50`}
            whileFocus={{ scale: 1.02 }}
            whileHover={{ boxShadow: "0 2px 8px rgba(245, 158, 11, 0.2)" }}
          />
          {errors.email && (
            <motion.p
              className="text-red-500 text-xs mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {errors.email}
            </motion.p>
          )}
        </div>

        {/* Message Textarea */}
        <div className="relative">
          <motion.textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={handleMessage}
            disabled={isLoading}
            className={`w-full rounded-lg bg-white/90 border ${
              errors.message
                ? "border-red-500"
                : "border-orange/30 hover:border-amber-500/50"
            } p-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all duration-300 resize-none disabled:opacity-50`}
            whileFocus={{ scale: 1.02 }}
            whileHover={{ boxShadow: "0 2px 8px rgba(245, 158, 11, 0.2)" }}
          />
          {errors.message && (
            <motion.p
              className="text-red-500 text-xs mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {errors.message}
            </motion.p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isLoading}
          className="w-full h-12 sm:h-14 rounded-lg bg-gradient-to-r from-amber-500 to-pink-500 text-white font-bold text-lg sm:text-xl hover:from-amber-500/80 hover:to-pink-500/80 hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isLoading ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;