"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const Banner = () => {
    const slides = [
        {
            id: 1,
            title: "Share Your Startup Ideas With The World",
            description:
                "Post innovative business concepts, explore ideas from creators, and inspire future entrepreneurs.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 2,
            title: "Discover Innovative Solutions",
            description:
                "Explore startup concepts across AI, FinTech, EdTech, HealthTech, and more.",
            image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
        },
        {
            id: 3,
            title: "Join Conversations Around Big Ideas",
            description:
                "Engage with startup enthusiasts through discussions, feedback, and community-driven innovation.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
        },
    ];

    return (
        <div className="w-full relative bg-base-100">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                }}
                navigation={false}
                className="mySwiper rounded-2xl md:rounded-3xl overflow-hidden max-w-7xl mx-auto shadow-xl shadow-base-200"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                            className="hero min-h-[70vh] lg:min-h-[75vh] relative"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        >
                            <div className="hero-overlay bg-linear-to-r from-slate-950/90 via-blue-950/80 to-slate-900/30"></div>

                            {/* Content */}
                            <div className="hero-content justify-start text-left text-white w-full px-6 sm:px-12 lg:px-20 z-10 py-20">
                                <div className="max-w-2xl space-y-6">
                                    <div className="badge badge-outline border-white/20 text-white px-4 py-4 bg-white/10 backdrop-blur-md">
                                        🚀 Startup Innovation Platform
                                    </div>

                                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none md:leading-[1.1] bg-linear-to-r from-white via-white to-white/80 bg-clip-text">
                                        {slide.title}
                                    </h1>

                                    <p className="text-sm sm:text-lg text-white/85 font-medium max-w-xl leading-relaxed">
                                        {slide.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        <span className="badge badge-outline text-white">
                                            Tech
                                        </span>

                                        <span className="badge badge-outline text-white">
                                            FinTech
                                        </span>

                                        <span className="badge badge-outline text-white">
                                            EdTech
                                        </span>

                                        <span className="badge badge-outline text-white">
                                            SaaS
                                        </span>
                                    </div>

                                    <div className="pt-2">
                                        <Link  href={'/ideas'} className="btn bg-white hover:bg-base-200 text-[#082a5e] border-none font-bold rounded-xl px-8 shadow-lg shadow-[#082a5e]/20 transition-all duration-300 hover:scale-[1.02] btn-sm sm:btn-md">
                                            Explore Ideas
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;