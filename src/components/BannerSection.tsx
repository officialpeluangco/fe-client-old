import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

const BannerSection = () => {
    const plugin = useRef(
        Autoplay({ delay: 5000, stopOnInteraction: false })
    )


    return (
        <div className="w-full">
            <AspectRatio ratio={1190 / 250} className='w-full max-w-[1190px] flex justify-center items-center mx-auto px-3 md:px-0 mt-4 md:mt-0'>
                <div className='w-full h-full flex justify-center items-center'>
                    <Carousel
                        opts={{
                            loop: true
                        }}
                        plugins={[plugin.current]}
                    >
                        <CarouselContent>
                            <CarouselItem>
                                <img
                                    src="https://peluang-images.s3.ap-southeast-1.amazonaws.com/banner/Banner+Missnow.png"
                                    alt="banner"
                                    className='w-full h-full object-cover rounded-lg border-2 border-slate-100'
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <img
                                    src="https://peluang-images.s3.ap-southeast-1.amazonaws.com/banner/banner-kebuli-abuya.png"
                                    alt="banner"
                                    className='w-full h-full object-cover rounded-lg border-2 border-slate-100'
                                />
                            </CarouselItem>
                            <CarouselItem>
                                <img
                                    src="https://peluang-images.s3.ap-southeast-1.amazonaws.com/banner/banner-balkan-shawarma.png"
                                    alt="banner"
                                    className='w-full h-full object-cover rounded-lg border-2 border-slate-100'
                                />
                            </CarouselItem>
                        </CarouselContent>
                        {/* <CarouselPrevious />
                    <CarouselNext /> */}
                    </Carousel>
                </div>
            </AspectRatio>
        </div>
    )
}

export default BannerSection