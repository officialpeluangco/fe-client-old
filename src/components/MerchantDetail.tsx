import { PartnerCardProps } from "@/types/partner"
import PartnerCard from "./PartnerCard"
import { useLoaderData } from "react-router-dom"

const MerchantDetail = () => {
    const load: PartnerCardProps = useLoaderData() as PartnerCardProps;
    console.log(load)
    
    return (
        <section className='w-screen h-screen flex justify-center items-center'>
            <PartnerCard data={load}  />
        </section>
    )
}

export default MerchantDetail