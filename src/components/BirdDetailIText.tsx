import React from "react";
import BirdDetail from "./BirdDetail";
import { getBirdDetailTextProperty } from "utils/birdDetailHelper";

interface BirdDetailTextProps {
    value: string;
}

const BirdDetailText: React.FC<BirdDetailTextProps> = ({ value }) => (
    <BirdDetail className={`${getBirdDetailTextProperty(value, "bgColor")} ${getBirdDetailTextProperty(value, "textColor")}`}>
        <span className="h-full flex items-center justify-center aspect-square">
            {`${getBirdDetailTextProperty(value, "text")}`}
        </span>
    </BirdDetail>
);

export default BirdDetailText;
