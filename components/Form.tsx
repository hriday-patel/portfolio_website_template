"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      className={cn("py-10 max-w-lg mx-auto w-full flex flex-col gap-6")}
      onSubmit={handleSubmit}
    >
      <div className={cn("flex flex-col gap-1")}>
        <label
          htmlFor="name"
          className={cn(
            "text-base font-medium text-black dark:text-white tracking-tight w-fit"
          )}
        >
          Full Name
        </label>
        <div className={cn("relative group")}>
          <span
            className={cn(
              "absolute text-base text-secondary-dark/50 dark:text-secondary-light/50",
              "top-1.5 left-2 group-focus-within:text-xs group-focus-within:top-1",
              "pointer-events-none transition-all duration-150 ease-in-out",
              formData.name && "text-xs top-1"
            )}
          >
            Meow *^_^*
          </span>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleData}
            className={cn(
              "px-2 py-2 pb-1 text-sm tracking-normal",
              "text-secondary-dark dark:text-secondary-light",
              "border border-primary-dark dark:border-primary-light rounded-md",
              "focus:ring focus:ring-primary-dark dark:focus:ring-primary-light focus:outline-none",
              "transition-all duration-500 ease-in-out z-10 w-full",
              "group-focus-within:pt-4",
              formData.name && "pt-4"
            )}
            required
          />
        </div>
      </div>
      <div className={cn("flex flex-col gap-1")}>
        <label
          htmlFor="email"
          className={cn(
            "text-base font-medium text-black dark:text-white tracking-tight w-fit"
          )}
        >
          Email Address
        </label>
        <div className={cn("relative group")}>
          <span
            className={cn(
              "absolute text-base text-secondary-dark/50 dark:text-secondary-light/50",
              "top-1.5 left-2 group-focus-within:text-xs group-focus-within:top-1",
              "pointer-events-none transition-all duration-150 ease-in-out",
              formData.email && "text-xs top-1"
            )}
          >
            Woof (‾◡◝)
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleData}
            id="email"
            className={cn(
              "px-2 py-2 pb-1 text-sm tracking-normal",
              "text-secondary-dark dark:text-secondary-light",
              "border border-primary-dark dark:border-primary-light rounded-md",
              "focus:ring focus:ring-primary-dark dark:focus:ring-primary-light focus:outline-none",
              "transition-all duration-500 ease-in-out z-10 w-full",
              "group-focus-within:pt-4",
              formData.email && "pt-4"
            )}
            required
          />
        </div>
      </div>
      <div className={cn("flex flex-col gap-1")}>
        <label
          htmlFor="message"
          className={cn(
            "text-base font-medium text-black dark:text-white tracking-tight"
          )}
        >
          Message
        </label>
        <textarea
          rows={5}
          name="message"
          id="message"
          value={formData.message}
          onChange={handleData}
          placeholder="Type your thoughts here..."
          className={cn(
            "px-2 py-1 text-sm tracking-normal",
            "text-secondary-dark dark:text-secondary-light",
            "border border-primary-dark dark:border-primary-light rounded-md",
            "focus:ring focus:ring-primary-dark dark:focus:ring-primary-light focus:outline-none",
            "transition duration-500 ease-linear resize-none"
          )}
          required
        />
      </div>
    </form>
  );
};
export default Form;
