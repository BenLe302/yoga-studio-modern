import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto w-5/6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="justify-content items-center gap-16 md:flex">
            {/* LOGO AND DESCRIPTION */}
            <div className="mt-16 basis-1/2 md:mt-0">
              <div className="mb-4 text-2xl font-bold">🧘‍♀️ YogaStudio</div>
              <p className="my-5 text-gray-300">
                {t('footer.description')}
              </p>
              <p className="text-gray-400">
                {t('footer.copyright')}
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="mt-16 basis-1/4 md:mt-0">
              <h4 className="mb-4 font-bold text-primary-500">{t('footer.quickLinks')}</h4>
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block text-gray-300 transition-colors hover:text-primary-500"
                >
                  {t('nav.home')}
                </Link>
                <Link
                  to="/programs"
                  className="block text-gray-300 transition-colors hover:text-primary-500"
                >
                  {t('nav.programs')}
                </Link>
                <Link
                  to="/coaches"
                  className="block text-gray-300 transition-colors hover:text-primary-500"
                >
                  {t('nav.coaches')}
                </Link>
                <Link
                  to="/schedule"
                  className="block text-gray-300 transition-colors hover:text-primary-500"
                >
                  {t('nav.schedule')}
                </Link>
                <Link
                  to="/pricing"
                  className="block text-gray-300 transition-colors hover:text-primary-500"
                >
                  {t('nav.pricing')}
                </Link>
                <Link
                  to="/contact"
                  className="block text-gray-300 transition-colors hover:text-primary-500"
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </div>

            {/* SERVICES */}
            <div className="mt-16 basis-1/4 md:mt-0">
              <h4 className="mb-4 font-bold text-primary-500">{t('footer.services')}</h4>
              <div className="space-y-2">
                <p className="text-gray-300">{t('footer.personalTraining')}</p>
                <p className="text-gray-300">{t('footer.groupClasses')}</p>
                <p className="text-gray-300">{t('footer.nutritionCoaching')}</p>
                <p className="text-gray-300">{t('footer.fitnessAssessment')}</p>
                <p className="text-gray-300">{t('footer.recoveryServices')}</p>
                <Link
                  to="/shop"
                  className="block text-gray-300 transition-colors hover:text-primary-500"
                >
                  {t('footer.shop')}
                </Link>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="mt-16 basis-1/4 md:mt-0">
              <h4 className="mb-4 font-bold text-primary-500">{t('footer.contactInfo')}</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPinIcon className="h-5 w-5 text-primary-500" />
                  <p className="text-gray-300">
                    {t('footer.address')}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-primary-500" />
                  <p className="text-gray-300">{t('footer.phone')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-primary-500" />
                  <p className="text-gray-300">{t('footer.email')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <ClockIcon className="h-5 w-5 text-primary-500" />
                  <div className="text-gray-300">
                    <p>{t('footer.hoursWeekdays')}</p>
                    <p>{t('footer.hoursWeekends')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="border-t border-gray-800 bg-gray-950 py-6">
        <div className="mx-auto w-5/6">
          <div className="items-center justify-between md:flex">
            <div className="mb-4 text-center text-gray-400 md:mb-0 md:text-left">
              <p>{t('footer.madeWith')}</p>
            </div>
            <div className="flex justify-center gap-6 text-sm text-gray-400 md:justify-end">
              <Link
                to="/privacy"
                className="transition-colors hover:text-primary-500"
              >
                {t('footer.privacyPolicy')}
              </Link>
              <Link
                to="/terms"
                className="transition-colors hover:text-primary-500"
              >
                {t('footer.termsOfService')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;