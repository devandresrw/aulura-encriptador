import clsx from "clsx"

interface ButtonProps {
    text?: string
    typebtn?: 'enviar' | 'encript' | 'copy' | 'disabled'
    onClick?: (event: any) => void
}

export default function ButtonAction({typebtn, onClick, text}: ButtonProps){
    return(
        <>
        <button className={clsx(`font-inter font-normal text-base
        p-6 flex text-center justify-center align-middle rounded-3xl 
        border border-solid transition-all duration-200 ease-in-out`,
            {
                [`bg-darkblue text-white hover:bg-darkblueh`]: typebtn === "enviar",
                [`border-darkblue text-darkblue hover:bg-bgazulh`]: typebtn === "encript",
                [`border-darkblue text-darkblue hover:bg-darkblue hover:text-white`]: typebtn === "copy"
            }
        )} onClick={onClick} type="submit">
            {text}
        </button>
        </>
    )
}