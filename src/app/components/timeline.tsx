const TimeLine = () => {
    return (
        <div className="w-[150px] p-[30px] fixed bg-transparent pointer-events-none right-[20px] top-[50%] translate-y-[-50%] z-[1] flex justify-center items-center flex-col gap-[30px]">
            <div className="flex gap-[10px] items-start">
                <div className="w-[15px] h-[15px] bg-gray-300/60 rounded-full after:w-[1.5px] after:h-[50px] after:bg-white/60 after:absolute relative after:left-[7px] after:top-4 before:h-[50px] before:w-[1.5px] before:bg-white/0 before:absolute before:top-[-51px] before:left-[7px]">

                </div>
                <div className="w-[70px]">
                    <p className="font-[medium] text-gray-300 text-[14px]">About Me</p>
                    <p className="font-[light] text-gray-300 text-[10px]">information</p>
                </div>
            </div>

            <div className="flex gap-[10px] items-start">
                <div className="w-[15px] h-[15px] bg-gray-300/60 rounded-full after:w-[1.5px] after:h-[50px] after:bg-white/60 after:absolute relative after:left-[7px] after:top-4">

                </div>
                <div className="w-[70px]">
                    <p className="font-[medium] text-gray-300 text-[14px]">Skills</p>
                    <p className="font-[light] text-gray-300 text-[10px]">had</p>
                </div>
            </div>

            <div className="flex gap-[10px] items-start">
                <div className="w-[15px] h-[15px] bg-gray-300/60 rounded-full after:w-[1.5px] after:h-[50px] after:bg-white/60 after:absolute relative after:left-[7px] after:top-4">

                </div>
                <div className="w-[70px]">
                    <p className="font-[medium] text-gray-300 text-[14px]">Work</p>
                    <p className="font-[light] text-gray-300 text-[10px]">my project</p>
                </div>
            </div>

            <div className="flex gap-[10px] items-start">
                <div className="w-[15px] h-[15px] bg-gray-300/60 rounded-full after:w-[1.5px] after:h-[50px] after:bg-white/60 after:absolute relative after:left-[7px] after:top-4">

                </div>
                <div className="w-[70px]">
                    <p className="font-[medium] text-gray-300 text-[14px]">Experience</p>
                    <p className="font-[light] text-gray-300 text-[10px]">test</p>
                </div>
            </div>

            <div className="flex gap-[10px] items-start">
                <div className="w-[15px] h-[15px] bg-gray-300/60 rounded-full after:w-[1.5px] after:h-[50px] after:bg-white/0 after:absolute relative after:left-[7px] after:top-4">

                </div>
                <div className="w-[70px]">
                    <p className="font-[medium] text-gray-300 text-[14px]">Contact</p>
                    <p className="font-[light] text-gray-300 text-[10px]">for work</p>
                </div>
            </div>
        </div>
    )
}


export default TimeLine