import { extendVariants, Textarea, TextAreaProps } from "@nextui-org/react";

const FTTextArea : React.ComponentType<TextAreaProps> = extendVariants(Textarea, {
    variants: {
        color: {
            primary: {
                label: '!cursor-text !text-base font-medium',
                innerWrapper: "bg-transparent",
                input: '!text-base',
                inputWrapper: [
                    "!bg-white !rounded-lg shadow-none !border !border-solid_border !transition",
                    "hover:bg-white hover:ring hover:ring-2 hover:ring-offset-2 hover:ring-llms-primary",
                    "group-data-[focused=true]:!bg-white group-data-[focus=true]:ring group-data-[focus=true]:ring-2 group-data-[focus=true]:ring-llms-primary group-data-[focus=true]:ring-offset-2",
                    "!cursor-text m-1",
                ],
                helperWrapper: '!mt-4'
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