"use client";
import Navbar from '@/Components/Navbar';
import SalesOverview from '@/Components/SalesOverview';
import Sales from '@/Components/Sales';
import Testimonials from '@/Components/Testimonials';
import PricingComponent from '@/Components/PricingComponent';
import FinanceExperience from '@/Components/FinanceExperience';
import Main from '@/Components/Main'; // استيراد المكون Main
import { motion } from 'framer-motion'; // استيراد مكون motion من framer-motion

export default function Home() {
  // إعدادات الأنيميشن لتأثير التلاشي والظهور من الأسفل
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    },
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true, amount: 0.5 }}
      >
        <Main /> 
      </motion.div>

      
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
        >
          <SalesOverview />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Navbar />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Sales />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Testimonials />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
        >
          <PricingComponent />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true, amount: 0.5 }}
        >
          <FinanceExperience />
        </motion.div>
    </div>
  );
}
