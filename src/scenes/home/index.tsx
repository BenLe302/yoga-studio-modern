import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <h1 className="text-6xl font-bold text-gray-900">
                {t('hero.title')}
                <span className="text-primary-500"> {t('hero.subtitle')}</span>
              </h1>
            </div>

            <p className="mt-8 text-sm text-gray-600">
              {t('hero.description')}
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link to="/register">
              <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
                {t('hero.joinNow')}
              </button>
            </Link>
            <Link
              to="/contact"
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            >
              <p>{t('hero.learnMore')}</p>
            </Link>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <div className="h-96 w-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
            <span className="text-6xl">🧘‍♀️</span>
          </div>
        </div>
      </motion.div>

      {/* SPONSORS */}
      <div className="h-[150px] w-full bg-primary-100 py-10">
        <div className="mx-auto w-5/6">
          <div className="flex w-3/5 items-center justify-between gap-8">
            <div className="text-2xl font-bold text-gray-500">Sponsor 1</div>
            <div className="text-2xl font-bold text-gray-500">Sponsor 2</div>
            <div className="text-2xl font-bold text-gray-500">Sponsor 3</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;