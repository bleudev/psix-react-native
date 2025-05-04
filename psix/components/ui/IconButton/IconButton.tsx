import { FunctionComponent } from "react";
import { Image, ImageSourcePropType } from "react-native";

import styles from "./IconButton.module.css";

type IconButtonProps = {
    icon: ImageSourcePropType;
    size?: number;
}

const IconButton: FunctionComponent<IconButtonProps> = ({icon, size = 24}) => {
    return (
        <div className={styles['container']}>
            <Image source={icon} style={{width: size, height: size}}/>
        </div>
    )
}

export default IconButton;