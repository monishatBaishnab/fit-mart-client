import { extendVariants, Textarea, TextAreaProps } from "@nextui-org/react";

const FTTextArea : React.ComponentType<TextAreaProps> = extendVariants(Textarea, {
    variants: {
        color: {
            primary: {
                label: '!cursor-text !text-base font-medium text-slate-700',
                innerWrapper: "bg-transparent",
                input: '!text-base text-slate-600 placeholder:!text-slate-500',
                inputWrapper: [
                    "!bg-white !rounded-lg shadow-none !border !border-solid_border !transition",
                    "hover:bg-white hover:ring hover:ring-2 hover:ring-offset-2 hover:ring-indigo-600",
                    "group-data-[focused=true]:!bg-white group-data-[focus=true]:ring group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-indigo-600 group-data-[focus=true]:ring-offset-2",
                    "!cursor-text m-1",
                ],
                helperWrapper: '!mt-2'
            }
        }
    },
    defaultVariants: {
        color: 'primary',
        size: "lg",
        radius: "sm",
        labelPlacement: "outside",
    }
})

export default FTTextArea;