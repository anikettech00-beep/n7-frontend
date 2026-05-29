
"use client";
export default function CloudBased() {
    return (

        <section
            className="
            relative
            overflow-hidden
            bg-[#000D12]
            bg-[url('/images/CB7.svg')] bg-size-[50%] bg-no-repeat bg-left
     
            py-20
 
            after:hidden
            lg:after:block
            after:absolute
            after:right-0
            after:top-1/2
            after:z-0
            after:h-full
            after:w-1/2
            after:-translate-y-1/2
            after:bg-[url('/images/aml.svg')]
            after:bg-auto
            after:bg-right
            after:bg-no-repeat
            after:content-['']
        "
        >

            <div className="container-custom relative z-10 grid items-center lg:grid-cols-12">
                {/* Left Content */}
                <div className="lg:col-span-6">
                    <h1 className="text-2xl leading-tight text-white lg:text-[53px]">
                        A complete cloud-based core banking.
                    </h1>

                    <p className="max-w-82.5 mt-6 text-base  text-[#E9F4F9]/80">
                        Faster time to market with our cloud-based core banking
                        services
                    </p>

                    <div className="mt-9 flex flex-col items-start gap-8">
                        {/* Button */}
                        <button className="font-button rounded-lg [background:linear-gradient(106.53deg,#00B4FD_-5.68%,#003ACE_86.98%)] px-8 py-3 text-[15px] uppercase tracking-wide text-white transition-all duration-300 hover:bg-white hover:[background:white] hover:text-[#003ACE]">
                            Request Demo
                        </button>

                        {/* Learn More */}
                        <button
                            className="font-button group relative inline-flex items-center gap-2 pb-2 text-xs uppercase tracking-[2px] text-[#00B4FD]"
                        >
                            Learn More

                            <span className="absolute bottom-0 left-0 h-px w-8 bg-[#00B4FD] transition-all duration-300 group-hover:w-full" />

                            <img
                                src="/icons/rightarrow.svg"
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                    </div>
                </div>
                <div className="lg:col-span-6">
                    <div className="md:hidden hidden">
                        <img src="/images/aml.svg" />
                    </div>
                </div>
            </div>
        </section>
    );
}