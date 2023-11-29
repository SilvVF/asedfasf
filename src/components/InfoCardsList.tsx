import {MachineData} from "../App";
import InfoCard from "./InfoCard";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {useState} from "react";


function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
export type InfoCardListParams = {
    items: MachineData[]
}

export const InfoCardList = ({items}: InfoCardListParams) => {

    const [offset, setOffset] = useState(0)

    const [animationParent] = useAutoAnimate()


    return (
        <div style={{
            display: "flex",
            alignItems: "stretch",
        }}>
            <text
                onClick={()=>{setOffset((prev) => prev - 1)}}
            >
                left
            </text>
            <ul ref={animationParent}>
                {
                    items.slice(offset, offset + 2).map((item: MachineData) =>
                        <li key={item.id}>
                            <InfoCard
                                imageUrl={item.imageUrl}
                                titleText={item.name}
                                desc={item.description}
                                onClick={() => {}}
                            />
                        </li>
                    )
                }
            </ul>
            <text
                onClick={()=>{setOffset((prev) => prev + 1)}}
            >
                right
            </text>
        </div>
    )
}

export default InfoCardList