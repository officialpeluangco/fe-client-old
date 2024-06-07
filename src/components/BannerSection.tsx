import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const BannerSection = () => {


    return (
        <div className="w-full">
            <AspectRatio ratio={1190 / 250} className='w-full max-w-[1190px] flex justify-center items-center mx-auto'>
                <div className='w-full h-full flex justify-center items-center'>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>
                                <img
                                    src="https://peluang-images.s3.ap-southeast-1.amazonaws.com/MISNOW/Banner+Missnow.png"
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