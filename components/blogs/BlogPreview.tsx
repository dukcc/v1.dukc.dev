"use client";

import Link from "next/link";
import { BlogMetadata } from "./BlogMetadata";
import { motion } from "framer-motion";
import Image from "next/image";
import moment from "moment";

export default function BlogPreview(props: BlogMetadata) {
  return (
    <motion.div
      initial={{ y: -25, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 200,
        duration: 0.4,
        damping: 20,
        delay: 0.1,
      }}
    >
      <Link
        href={`/blog/${props.slug}`}
        className="w-full h-auto flex max-[600px]:flex-col justify-between pb-36 gap-32 border-b border-stroke-1 group"
      >
        <div className="flex flex-col gap-16">
          <h3 className="text-3 w-full font-medium max-[540px]:text-body group-hover:text-selected group-hover:translate-x-4 ease-out duration-150">
            {props.title}
          </h3>
          <p className="text-sub w-full group-hover:text-selected group-hover:translate-x-4 ease-out duration-150">
            {props.type} - {moment(props.date).format("MMMM D, YYYY")}
          </p>
        </div>
        <Image
          src={props.image}
          className="rounded-in border border-stroke-2 bg-clip-padding w-full h-auto object-cover bg-no-repeat aspect-[16/2] max-[600px]:aspect-[16/8]"
          width={820}
          height={500}
          alt="head"
        />
      </Link>
    </motion.div>
  );
}
