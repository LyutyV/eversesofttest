export interface IPokemon {
    name: string;
    url: string;
    imageUrl?: string;
    abilities?: {
        ability: {
            name: string;
        };
    }[];
    base_experience?: number;
    height?: number;
    weight?: number;
}
