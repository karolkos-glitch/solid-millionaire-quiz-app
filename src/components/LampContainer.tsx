import { Motion } from "solid-motionone";
import { Component, JSX } from "solid-js";

const LampContainer: Component<{ children: JSX.Element }> = (props) => {
    return (
        <div
            class={
                "relative z-0 flex h-[50%] w-full flex-col items-center justify-center rounded-md bg-slate-950"
            }
        >
            <div class="isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center ">
                <Motion.div
                    initial={{ opacity: 0.5, width: "10rem" }}
                    animate={{ opacity: 1, width: "20rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        easing: "ease-in-out",
                    }}
                    style={{
                        "background-image": `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    class="bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
                >
                    <div class="absolute bottom-0 left-0 z-20 h-40 w-[100%] bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div class="absolute bottom-0 left-0 z-20 h-[100%]  w-40 bg-slate-950 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </Motion.div>
                <Motion.div
                    initial={{ opacity: 0.5, width: "10rem" }}
                    animate={{ opacity: 1, width: "20rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        easing: "ease-in-out",
                    }}
                    style={{
                        "background-image": `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    class="bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div class="absolute  bottom-0 right-0 z-20 h-[100%]  w-40 bg-slate-950 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div class="absolute  bottom-0 right-0 z-20 h-40 w-[100%] bg-slate-950 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </Motion.div>
                <div class="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
                <div class="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div class="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
                <Motion.div
                    initial={{ width: "8rem" }}
                    animate={{ width: "16rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        easing: "ease-in-out",
                    }}
                    class="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
                ></Motion.div>
                <Motion.div
                    initial={{ width: "10rem" }}
                    animate={{ width: "20rem" }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        easing: "ease-in-out",
                    }}
                    class="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
                ></Motion.div>
                <div class="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
            </div>
            <div class="absolute top-48 z-50 flex h-full w-screen flex-col items-center px-5">
                {props.children}
            </div>
        </div>
    );
};

export default LampContainer;
