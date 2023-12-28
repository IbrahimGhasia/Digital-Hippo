"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "../payload-types";

const AddToCartButton = ({ product }: { product: Product }) => {
	const [isSuccess, setIsSucces] = useState<boolean>(false);
	const { addItem } = useCart();

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsSucces(false);
		}, 2000);

		return () => clearTimeout(timeout);
	}, [isSuccess]);

	return (
		<Button
			onClick={() => {
				addItem(product);
				setIsSucces(true);
			}}
			size="lg"
			className="w-full"
		>
			{isSuccess ? "Added!" : "Add to cart"}
		</Button>
	);
};
export default AddToCartButton;
