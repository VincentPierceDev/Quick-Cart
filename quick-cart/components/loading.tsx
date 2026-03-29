'use client'

export default function Loading() {
    return(
        <div className={"inline-flex items-center text-gray-400 font-semibold user-select-none"}>
            <span>Loading Items</span>
            <span className="bounce-dot">.</span>
            <span id="middle-dot" className="bounce-dot">.</span>
            <span id="last-dot" className="bounce-dot">.</span>
            <style jsx>{`
                .bounce-dot {
                    display: inline-block;
                    animation: bounce 1.4s infinite ease-in-out;
                }

                #middle-dot {
                    animation-delay: 0.2s;
                }

                #last-dot {
                    animation-delay: 0.4s;
                }

                @keyframes bounce {
                    0%, 80%, 100% {
                        translate: 0%;
                    }
                    40% {
                        translate: 50%;
                    }
                }
            `}</style>
        </div>
    )

}