export type Category = null | "ruwbouw" | "interieur";

export interface GridImage {
	src: string;
	title: string;
	description: string;
	project: string;
	category: Category;
}
