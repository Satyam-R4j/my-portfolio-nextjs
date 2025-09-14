"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Web Development",
        description:
            "I provide responsive, fast, and scalable web development solutions including frontend, backend, full-stack apps, e-commerce, API integration, optimization, and ongoing support.",
        href: "",
    },
    {
        num: "02",
        title: "Data Science",
        description:
            "I provide data-driven solutions through analysis, visualization, machine learning, and predictive modeling to turn raw data into actionable insights.",
        href: "",
    },
    {
        num: "03",
        title: "AI/ML/DL",
        description:
            "I build intelligent AI, ML, and deep learning solutions that automate processes, enhance decision-making, and unlock smarter digital experiences.",
        href: "",
    },
    {
        num: "04",
        title: "UI/UX Design",
        description:
            "I craft intuitive, engaging, and user-friendly UI/UX designs that deliver seamless digital experiences.",
        href: "",
    },
];

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center px-4 py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: "easeIn",
                        },
                    }}
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                <div className="w-full flex justify-between items-center ">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-red-500 transition-all duration-500">
                                        {service.num}
                                    </div>

                                    <Link href={service.href}>
                                        <BsArrowDownRight />
                                    </Link>
                                </div>
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
