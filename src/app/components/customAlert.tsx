import { useContext } from "react"
import { AppContext } from "../index"
import { motion } from 'framer-motion'

const CustomAlert = () => {

    const ctx = useContext(AppContext)

    return (
        <motion.div initial={{ opacity: 0 }} animate={ctx.twoAlert.open ? { opacity: 1 } : { opacity: 0 }} className={`w-full h-full fixed flex justify-center items-center z-[1] ${ctx.twoAlert.open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            <div className="bg-white/40 backdrop-blur-[5px] w-[400px] h-[300px] rounded-[8px] flex justify-center items-center">
                <div className="flex flex-col gap-[10px] justify-center items-center">
                    <p>{ctx.twoAlert.title}</p>

                    {ctx.twoAlert.dialog ? <div className="flex gap-[10px]">
                        <div className="w-[100px] h-[40px] bg-green-500 flex justify-center items-center rounded-[8px] cursor-pointer">
                            <p className="font-[bold] text-green-200">Accept</p>
                        </div>

                        <div className="w-[100px] h-[40px] bg-red-500 flex justify-center items-center rounded-[8px] cursor-pointer">
                            <p className="font-[bold] text-red-200">Cancel</p>
                        </div>
                    </div> : <div onClick={() => {
                        ctx.two.fire('', false, false)
                    }} className="w-[100px] h-[40px] bg-green-500 flex justify-center items-center rounded-[8px] cursor-pointer">
                        <p className="font-[bold] text-green-200">Accept</p>
                    </div>}
                </div>
            </div>
        </motion.div>
    )
}

export default CustomAlert