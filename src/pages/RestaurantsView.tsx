import { useEffect, useState } from "react";
import RestaurantCard, { RestaurantCardProps } from "../components/RestaurantCard";
import { Box } from "@mui/material";

export interface RestaurantViewProps {
    restaurantList: RestaurantCardProps[];
}

export const RestaurantView = (props: RestaurantViewProps): JSX.Element => {
    const { restaurantList } = props;

    const [data, setData] = useState<RestaurantCardProps[]>(restaurantList);

    useEffect(() => {
        setData(restaurantList);
    }, [props])

    return (
        <Box
            sx={{
                display: 'grid',
                gap: 1,
                gridTemplateColumns: 'repeat(3, 1fr)',
            }}
        >
            {
                data.map((el: RestaurantCardProps) => { return <RestaurantCard key={el.id} {...el} /> })
            }
        </Box>
    );
}