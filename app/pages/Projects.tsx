'use client'

import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

export const ProjectCards = () => {
  const cardData = [
    {
      title: "CodeSaathi",
      description:
        "CodeSaathi is a real-time collaborative coding platform that connects developers with live cursor tracking, instant updates, and integrated chat. Featuring secure authentication, file synchronization, and MongoDB integration, it's the perfect companion for remote teams working together on code.",
      imageUrl: "/codesaathi.png",
      githubUrl: "https://github.com/vishwasvk35/CodeSync",
      deployment: "https://codesarthi.onrender.com/",
      skills: ["React", "Node.js", "MongoDB", "WebSocket"]
    },
    {
      title: "Weather Web App",
      description:
        "A simple weather web app that provides real-time weather updates and forecasts. Built with React, this app fetches data from a weather API and displays it in a user-friendly interface. Users can search for any location to get current weather conditions",
      imageUrl: "/weatherWebapp.png",
      githubUrl: "https://github.com/vishwasvk35/WeatherWebapp",
      deployment: null,
      skills: ["React", "JavaScript", "API", "CSS"]
    },
    {
      title: "Recipe Finder",
      description: "Recipe Finder is a comprehensive platform for food enthusiasts to explore, manage, and share their favorite recipes. This application showcases the power of modern web development by integrating a responsive frontend, robust backend, and efficient database management",
      imageUrl: "/RecipeFinder.png",
      githubUrl: "https://github.com/vishwasvk35/recipe_app",
      deployment: null,
      skills: ["React", "Node.js", "Express", "MongoDB"]
    },
  ];

  return (
    <section className="flex justify-center w-full mt-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid">
        <p className="text-5xl font-primary text-center dark:text-white">
          Featured Projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cardData.map((card, index) => (
            <ProjectCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ title, description, imageUrl, githubUrl, deployment, skills }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-zinc-900 dark:border-zinc-700 border-black/[0.1] w-full min-h-[34rem] rounded-xl p-5 border flex flex-col gap-5">
        <div className="space-y-3">
          <CardItem
            as="p"
            translateZ="50"
            className="text-lg font-primary text-neutral-600 dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 font-secondary text-md max-w-sm dark:text-neutral-300 min-h-[10rem]"
          >
            {description}
          </CardItem>
        </div>

        <CardItem translateZ="100" className="w-full">
          <Image
            src={imageUrl}
            width={600}
            height={800}
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <CardItem translateZ="80" className="w-full flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 font-secondary bg-gray-200 dark:bg-gray-700 text-neutral-800 dark:text-neutral-200 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
        </CardItem>

        <div className="flex justify-between items-center mt-auto">
          <CardItem
            translateZ={20}
            as="button"
            className="px-3 py-1.5 rounded-xl font-secondary bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Link href={githubUrl} target="_blank">
              Github
            </Link>
          </CardItem>
          {deployment ? (
            <CardItem
              translateZ={20}
              as="a"
              href={deployment}
              target="_blank"
              className="px-3 py-1.5 rounded-xl font-secondary dark:bg-indigo-800 text-xs font-normal dark:text-white"
            >
              Try Now
            </CardItem>
          ) : null}
        </div>
      </CardBody>
    </CardContainer>
  );
};