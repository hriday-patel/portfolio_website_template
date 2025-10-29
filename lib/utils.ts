

import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import fs from 'fs/promises';
import path from "path";
import React from "react";
import matter from "gray-matter";
import { Playfair } from "next/font/google";

export function cn(...args: ClassValue[]){
    return twMerge(clsx(args));
}

export const playfair = Playfair({ subsets: ["latin"], weight: ["400", "700"] });

export function formateDate(date: string){
    const fromatedDate = new Date(date);
    return fromatedDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

// Don't worry this is me just using tailwindMerge and clsx both together. This is not necessary but rather optional so that when writing different types of classnames based on conditions or not, it looks clean and minimal. 

// twMerge is a package that helps you to solve conflicts that generally occur when two or more type of same classes are being written. The react gets confused and in some cases might throw an error. twMerge ensures that whichever class is written at last gets opted for application and applies on the component/element. 

//But one tweak of twMerge is that it doesnt allow you to write objects for classes that are based on conditions. However, you can still write condition based classes with the help of logical operators, some developers prefer to use the object method.
 
// Here, comes the clsx package that helps you to write object based conditional classes. So both together makes it pretty easy for developers to write clean and minimal classnames for the elements and components.