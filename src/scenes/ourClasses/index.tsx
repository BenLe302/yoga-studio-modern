import { SelectedPage, ClassType } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
import { useStore } from "@/store/useStore";
import { useTranslation } from "react-i18next";

// Placeholder images - in a real app these would be actual image imports
const placeholderImages = [
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=450&h=380&fit=crop",
  "https://images.unsplash.com/photo-1506629905607-d9c8e8c2e3b8?w=450&h=380&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=450&h=380&fit=crop",
  "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=450&h=380&fit=crop",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=450&h=380&fit=crop",
  "https://images.unsplash.com/photo-1506629905607-d9c8e8c2e3b8?w=450&h=380&fit=crop"
];

const classesConfig = [
  {
    nameKey: "ourClasses.weightTraining",
    descriptionKey: "ourClasses.weightTrainingDesc",
    image: placeholderImages[0],
  },
  {
    nameKey: "ourClasses.yoga",
    image: placeholderImages[1],
  },
  {
    nameKey: "ourClasses.abCore",
    descriptionKey: "ourClasses.abCoreDesc",
    image: placeholderImages[2],
  },
  {
    nameKey: "ourClasses.adventure",
    descriptionKey: "ourClasses.adventureDesc",
    image: placeholderImages[3],
  },
  {
    nameKey: "ourClasses.fitness",
    image: placeholderImages[4],
  },
  {
    nameKey: "ourClasses.training",
    descriptionKey: "ourClasses.trainingDesc",
    image: placeholderImages[5],
  },
];

type Props = {};

const OurClasses = ({}: Props) => {
  const { t } = useTranslation();
  const setSelectedPage = useStore((state) => state.setSelectedPage);
  
  const classes: Array<ClassType> = classesConfig.map(config => ({
    name: t(config.nameKey),
    description: config.descriptionKey ? t(config.descriptionKey) : undefined,
    image: config.image,
  }));
  
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>{t("ourClasses.title")}</HText>
            <p className="py-5">
              {t("ourClasses.description")}
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;