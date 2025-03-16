/* eslint-disable jsx-a11y/alt-text */
"use client"

import AnimatedBox from "./_components/Box"
import { FiPhone, FiMessageCircle, FiSmartphone } from "react-icons/fi"
import { FaTelegramPlane, FaInstagram } from "react-icons/fa"
import AnimatedText from "./_components/ShowText"
import Image from "next/image"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/@shadcn/ui/components/ui/accordion"
import faqs from "@/app/data/faq.json"

export default function Page() {
  const formatToPersian = (num) => {
    const persianNumbers = "۰۱۲۳۴۵۶۷۸۹"
    return num.toString().replace(/\d/g, (digit) => persianNumbers[digit])
  }

  return (
    <div className="mt-6">
      <section className="flex flex-col items-center gap-4">
        <Image
          alt="logo image"
          src={"/hami-team.jpg"}
          height={70}
          width={70}
          className="rounded-full w-16 md:w-14 lg:w-22 h-auto"
        />
        <AnimatedText />
        <div className="mt-8 flex flex-col gap-5 w-full md:w-150 px-4 sm:px-8 md:px-16">
          <AnimatedBox>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <FiPhone className="text-lg md:text-xl" />
                <p className="text-xs md:text-sm">پاسخگویی از 9 صبح تا 9 شب</p>
              </div>
              <p className="text-sm md:text-base">
                {formatToPersian("05191690169")}
              </p>
            </div>
          </AnimatedBox>

          <AnimatedBox>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <FiSmartphone className="text-lg md:text-xl" />
                <p className="text-xs md:text-sm">آقای مددی</p>
              </div>
              <p className="text-sm md:text-base">
                {formatToPersian("09353160169")}
              </p>
            </div>
          </AnimatedBox>

          <AnimatedBox>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <FiSmartphone className="text-lg md:text-xl" />
                <p className="text-xs md:text-sm">خانم عربی</p>
              </div>
              <p className="text-sm md:text-base">
                {formatToPersian("09353160169")}
              </p>
            </div>
          </AnimatedBox>

          <AnimatedBox>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-2">
                <FiMessageCircle className="text-lg md:text-xl" />
                <p className="text-xs md:text-sm">ارتباط با مدیریت</p>
              </div>
              <p className="text-sm md:text-base">
                {formatToPersian("09150100898")}
              </p>
            </div>
          </AnimatedBox>
        </div>
      </section>

      <section className="flex flex-col items-center mt-5">
        <h3 className="mt-10 text-lg">کانال ما در پیام رسان ها</h3>
        <div className="flex gap-4 mt-3">
          <Link
            href="https://www.instagram.com/hami.hotel?igsh=ZzNjemdjbjdxaGhs"
            target="_blank"
            className="bg-white p-1 rounded-full"
          >
            <FaInstagram className="text-pink-500" />
          </Link>
          <Link
            href="https://t.me/Hami_hotel"
            target="_blank"
            className="bg-white p-1 rounded-full"
          >
            <FaTelegramPlane className="text-blue-500" />
          </Link>
        </div>
      </section>

      <section>
        <h3 className="text-lg mt-10 ">سوالات متداول</h3>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl mx-auto mt-5"
          dir="rtl"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border border-gray-700 rounded-lg px-2 md:px-3 mb-4 last:border-b"
            >
              <AccordionTrigger className="text-base md:text-lg font-medium text-right hover:no-underline hover:cursor-pointer">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 text-xs dark:text-gray-300 leading-relaxed text-right transition-all duration-300 ">
                {faq.answer.split("\n").map((line, i) => (
                  <p key={i} className="mb-2">
                    {line}
                  </p>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <div className="relative flex items-center justify-center my-18">
        <hr className="w-60 md:w-250 border-t border-gray-300" />
        <span className="absolute mx-2 text-gray-600">⭐</span>
      </div>

      <p>اقامت خوبی را براتون آرزومندیم , حامی تیم</p>

      <section className="mt-10  flex flex-col items-center gap-5">
        <p className="font-bold">خط اصلی شرکت</p>
        <div className="border text-sky-400 flex items-center justify-between p-3 rounded">
          <div className="flex w-60 md:w-130 items-center gap-2   ">
            <FiPhone />
            <p>( رزرو داخلی شرکت )</p>
          </div>
          <p>{formatToPersian("05191690169")}</p>
        </div>
      </section>
    </div>
  )
}
