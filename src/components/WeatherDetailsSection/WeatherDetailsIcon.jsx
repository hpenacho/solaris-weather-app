import IconStyler from "../../tools/IconStyler";
import { Grid } from "@mui/material";
import { Icon } from "@mui/material";

const WeatherDetailsIcon = ({ iconID, iconStyle }) => {

    return (
        <>
            {iconStyle === 'animated' &&
                <Icon sx={{ fontSize: 60 }}>
                    <IconStyler iconID={iconID} iconStyle={iconStyle} />
                </Icon>
            }

            {iconStyle === 'static' &&
                <>
                    <IconStyler iconID={iconID} iconStyle={'static'} />
                </>}

        </>
    )
}

export default WeatherDetailsIcon;