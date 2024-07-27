import toast from "react-hot-toast";
import { motion} from "framer-motion";
import FTCheckRoundTwo from "../assets/icons/FTCheckRoundTwo";
import FTClose from "../assets/icons/FTClose";
import FTWarningRound from "../assets/icons/FTWarningRound";
import FTCloseRound from "../assets/icons/FTCloseRound";

const useHotToast = () => {
  const ftToast = (
    variant: "success" | "warning" | "error" = "success",
    title: string,
    description: string
  ) => {
    const ftVariants = {
      open: { opacity: 1, scale: 1, x: 0 },
      closed: { opacity: 0, scale: 0.95, x: 40 },
    };
    const variantClasses = {
      success: " bg-green-50 border-l-green-400 border-green-400",
      warning: " bg-orange-50 border-l-orange-400 border-orange-400",
      error: " bg-red-50 border-l-red-400 border-red-400",
    };
    const variantIcons = {
      success: (
        <FTCheckRoundTwo
          classNames={{ path: "stroke-green-400", svg: "h-7 w-7" }}
        />
      ),
      warning: (
        <FTWarningRound
          classNames={{ path: "stroke-orange-400", svg: "h-7 w-7" }}
        />
      ),
      error: (
        <FTCloseRound
          classNames={{ path: "stroke-red-400", svg: "h-9 w-9" }}
        />
      ),
    };
    toast.custom((t) => (
      <motion.div
        initial={ftVariants.closed}
        variants={ftVariants}
        animate={t.visible ? "open" : "closed"}
      >
        <div
          className={`relative max-w-[400px] flex items-center gap-5 px-5 py-3 rounded-md border border-l-5 ${variantClasses[variant]}`}
        >
          <div>
            {variantIcons[variant]}
          </div>
          <div>
            <h5 className="text-slate-800 text-lg font-semibold">{title}</h5>
            <p className="text-slate-500 text-sm">{description}</p>
          </div>
          <div className="absolute right-2 top-2">
            <button onClick={() => toast.dismiss(t.id)}>
              <FTClose
                classNames={{ path: "stroke-slate-700", svg: "w-4 h-4" }}
              />
            </button>
          </div>
        </div>
      </motion.div>
    ));
  };
  return { ftToast };
};

export default useHotToast;
