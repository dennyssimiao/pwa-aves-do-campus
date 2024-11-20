import React from "react";
import BirdDetail from "./BirdDetail";
import { getBirdDetailIconProperty } from "utils/birdDetailHelper";

interface BirdDetailIconProps {
    value: string;
}

const BirdDetailIcon: React.FC<BirdDetailIconProps> = ({ value }) => (
    <BirdDetail className={`${getBirdDetailIconProperty(value, "bgColor")}`}>
        <img src={getBirdDetailIconProperty(value, "iconPath")} alt="" className="h-full aspect-square" />
    </BirdDetail>
);

export default BirdDetailIcon;
