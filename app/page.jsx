import { Button } from "@/components/ui/button";
import Social from "@/components/ui/Socials";
import { FiDownload } from "react-icons/fi";

export default function Home() {
    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-col items-center justify-between xl:pt-8 xl:pb-24">
                    <div className="text-center xl:text-left">
                        <span className="text-xl">Software Developer</span>
                        <h1 className="h1 mb-6">
                            Hello I'm <br />{" "}
                            <span className="text-red-500">Satyam-R4j</span>
                        </h1>
                        <p className="max-w-[500px] mx-9 text-white/80">
                            I excel at crafting elegant digital experience and I
                            am proficient in various programming language and
                            technologies.
                        </p>
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button
                                variant="outline"
                                size="lg"
                                className="uppercase flex items-center gap-2"
                            >
                                <span>Download CV.</span>
                                <FiDownload className="text-xl"></FiDownload>
                            </Button>
                            <div className="mb-8 xl:mb-0"><Social/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
