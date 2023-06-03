import { WORK } from "@/utils/const.data";
import Image from "next/image";
import React from "react";
import img from "@/assets/images/male1.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Work() {
  return (
    <div>
      {WORK.map((section) => (
        <div
          key={section.title}
          className="bg-gray-900 mt-6 rounded-2xl px-10 py-10 "
        >
          <h3 className="text-center text-2xl mb-10">{section.title}</h3>
          <motion.div
            className="container flex flex-col items-center space-y-10 sm:space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 sm:items-baseline"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {section.projects.map((project, i) => (
              <Project key={i} />
            ))}
          </motion.div>
          {/* <div className="flex flex-col items-center space-y-10 sm:space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 sm:items-baseline">
            {section.projects.map((project) => (
              <Project key={project.name} />
            ))}
          </div> */}
        </div>
      ))}
    </div>
  );
}

function Project() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={item}
      className="item bg-whit bg-gray-800 py-8 px-5 rounded-md max-w-md h-full"
    >
      <Image src={img} alt="Project" className="h-60 object-contain" />
      <div className="flex flex-col mt-8 capitalize">
        <h4 className="text-primary mb-1">name</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat porro
          maiores earum, quas temporibus quibusdam ipsum laborum, exercitationem
          expedita sed, molestiae deserunt neque doloremque eligendi unde ipsam
          id consequuntur illum.
        </p>
        <div className="bg-primary px-14 py-2 mt-4 rounded-3xl w-fit self-center">
          visit
        </div>
      </div>
    </motion.div>
  );
}
