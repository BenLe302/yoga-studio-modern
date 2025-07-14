import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Benefit from "./Benefit";
import { Link } from "react-router-dom";
import { useStore } from "@/store/useStore";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Benefits = () => {
  const { t } = useTranslation();
  const { setSelectedPage } = useStore();
  
  const benefits: Array<BenefitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: t('benefits.facilities.title'),
      description: t('benefits.facilities.description'),
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: t('benefits.classes.title'),
      description: t('benefits.classes.description'),
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: t('benefits.trainers.title'),
      description: t('benefits.trainers.description'),
    },
  ];
  
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>{t('benefits.title')}</HText>
          <p className="my-5 text-sm">
            {t('benefits.description')}
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <div className="mx-auto">
            <div className="w-full h-64 bg-gradient-to-br from-primary-100 to-primary-300 rounded-lg flex items-center justify-center">
              <span className="text-6xl">🧘‍♀️</span>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <HText>
                  {t('benefits.membersTitle')}{" "}
                  <span className="text-primary-500">{t('benefits.fit')}</span>
                </HText>
              </motion.div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                {t('benefits.detailDescription1')}
              </p>
              <p className="mb-5">
                {t('benefits.detailDescription2')}
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <Link to="/register">
                <ActionButton>
                  {t('benefits.joinNow')}
                </ActionButton>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;