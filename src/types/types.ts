export type FoodComponent = {
    food: FoodProps;
    handleDelete: (id: number) => void;
    handleEditFood: (food: FoodProps) => void;
};

export type FoodProps = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    available: boolean;
};