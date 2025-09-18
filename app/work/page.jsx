"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowRight, BsGithub } from "react-icons/bs";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { Image } from "next/image";

const projects = [
    {
        num: "01",
        category: "Front-end",
        title: "Sneaker eCommerce",
        description:
            "A sleek and responsive sneaker e-commerce website built with front-end technologies, featuring dynamic product displays, intuitive navigation, and a modern UI for a smooth and engaging shopping experience.",
        stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "JavaScript" }],
        image: "/public/assets/assets/work/sneakers.png",
        live: "",
        github: "https://github.com/Satyam-R4j/sneakers-eCommerce-site",
    },
    {
        num: "02",
        category: "Front-end",
        title: "Floating-mini-docs",
        description:
            "A lightweight front-end mini docs application with a floating-style manager UI, designed for quick access, seamless navigation, and an elegant, distraction-free reading experience.",
        stack: [
            { name: "React" },
            { name: "Tailwind.css" },
            { name: "framer-motion" },
        ],
        image: "/public/assets/assets/work/docs.png",
        live: "",
        github: "https://github.com/Satyam-R4j/floating-mini-docs",
    },
    {
        num: "03",
        category: "full-stack",
        title: "Linktree clone",
        description:
            "A modern front-end Linktree clone that provides a clean, responsive interface for managing and showcasing multiple links in one place, with customizable styling for a personalized touch.",
        stack: [
            { name: "Next" },
            { name: "Tailwind.css" },
            { name: "react-toastify" },
            { name: "mongoDB" },
        ],
        image: "/public/assets/assets/work/linktree.png",
        live: "",
        github: "https://github.com/Satyam-R4j/Linktree-clone-webapp",
    },
    {
        num: "04",
        category: "Front-end",
        title: "Codeclarify",
        description:
            "A front-end AI Code Reviewer web app with a clean, developer-friendly UI that analyzes code snippets, provides intelligent feedback, and enhances productivity through an interactive review experience..",
        stack: [
            { name: "React" },
            { name: "monaco-editor" },
            { name: "Tailwind.css" },
        ],
        image: "/public/assets/assets/work/codereview.png",
        live: "",
        github: "https://github.com/Satyam-R4j/Ai-code-reviewer",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div>
                            <div
                                className="text-8xl leading-none font-extrabold text-transparent"
                                style={{ WebkitTextStroke: "2px white" }}
                            >
                                {project.num}
                            </div>

                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">slide</div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
