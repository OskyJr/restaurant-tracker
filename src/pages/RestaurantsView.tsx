import { useEffect, useState } from "react";
import { RestaurantCard, RestaurantCardProps } from "../components/RestaurantCard";
import { Box, useMediaQuery } from "@mui/material";
import { ViewEditRestaurantModal } from "../components/ViewEditRestaurantModal";
import theme from "../theme";

export interface RestaurantViewProps {
    restaurantList: RestaurantCardProps[];
}

export const RestaurantsView = (props: RestaurantViewProps): JSX.Element => {
    const { restaurantList } = props;

    const [data, setData] = useState<RestaurantCardProps[]>(restaurantList);
    const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
    const [editRestaurant, setEditRestaurant] = useState<Omit<RestaurantCardProps, 'onClickCallback'> | null>(null);

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const gridTemplateColumns = (): string => {
        if (isSmallScreen) {
            return 'repeat(1, 1fr)';
        }
        else if (isMediumScreen) {
            return 'repeat(2, 1fr)';
        }
        else {
            return 'repeat(3, 1fr)';
        }
    }

    useEffect(() => {
        setData(restaurantList);
    }, [props])

    const onViewMoreCallback = (id: string) => {
        setSelectedRestaurant(id);
    }

    const onCloseCallback = (_id: string, isOpen: boolean) => {
        if (!isOpen) {
            setSelectedRestaurant(null);
            setEditRestaurant(null);
        }
    }

    useEffect(() => {
        if (data && selectedRestaurant) {
            const temp = data.find((el) => el.id === selectedRestaurant);
            setEditRestaurant(temp as RestaurantCardProps);
        }
    }, [selectedRestaurant])

    return (
        <Box
            sx={{
                display: 'grid',
                gap: 2,
                gridTemplateColumns,
            }}
        >
            {
                data.map((el: RestaurantCardProps) => { return <RestaurantCard key={el.id} {...el} onClickCallback={onViewMoreCallback} /> })
            }
            {
                editRestaurant ? <ViewEditRestaurantModal {...editRestaurant} onClickCallback={onCloseCallback} /> : null
            }
        </Box>
    );
}