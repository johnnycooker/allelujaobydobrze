import React, { FC, useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

interface CategoryLink {
	name: string;
	url: string;
}

interface Category {
	name: string;
	numberOfLinks: number;
	links: CategoryLink[];
}

interface IconItem {
	name: string;
	icon: string;
	url: string;
	iconColor: string;
	iconHoverColor?: string;
	iconSizeValues?: {
		mobile: string;
		tablet: string;
		desktop: string;
	};
}

const categories: Category[] = [
	{
		links: [
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
		],
		name: "Kategoria 1",
		numberOfLinks: 5,
	},
	{
		links: [
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
		],
		name: "Kategoria 2",
		numberOfLinks: 5,
	},
	{
		links: [
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
		],
		name: "Kategoria 3",
		numberOfLinks: 5,
	},
	{
		links: [
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
			{
				name: "Link kategorii",
				url: "/podstrona",
			},
		],
		name: "Kategoria 4",
		numberOfLinks: 5,
	},
];
const icons: IconItem[] = [
	{
		icon: "FaFacebook",
		iconColor: "#4267B2",
		iconHoverColor: "#203D75",
		iconSizeValues: {
			mobile: "text-[20px]",
			tablet: "md:text-[22px]",
			desktop: "xl:text-[24px]",
		},
		name: "Facebook",
		url: "https://facebook.com",
	},
	{
		icon: "FaInstagram",
		iconColor: "#E1306C",
		iconHoverColor: "#B02254",
		iconSizeValues: {
			mobile: "text-[20px]",
			tablet: "md:text-[22px]",
			desktop: "xl:text-[24px]",
		},
		name: "Instagram",
		url: "https://instagram.com",
	},
];
const numberOfCategories: number = 4;

const iconMapping: Record<
	string,
	React.ComponentType<{ className?: string }>
> = {
	FaFacebook,
	FaInstagram,
};

// Komponent odpowiedzialny za pojedynczą ikonę
const IconLink: FC<{ iconItem: IconItem }> = ({ iconItem }) => {
	const [hover, setHover] = useState(false);
	const color =
		hover && iconItem.iconHoverColor
			? iconItem.iconHoverColor
			: iconItem.iconColor;

	const sizeClasses = iconItem.iconSizeValues
		? `${iconItem.iconSizeValues.mobile} ${iconItem.iconSizeValues.tablet} ${iconItem.iconSizeValues.desktop}`
		: "";

	const IconComponent = iconMapping[iconItem.icon];
	if (!IconComponent) return null;

	return (
		<Link href={iconItem.url} passHref legacyBehavior>
			<a
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				style={{ color: color, transition: "color 0.3s" }}
				className={`${sizeClasses} inline-block`}>
				<IconComponent />
			</a>
		</Link>
	);
};

const renderIcons = () =>
	icons.map((icon, i) => <IconLink key={i} iconItem={icon} />);

const Footer: FC = () => {
	return (
		<footer className={`w-full bg-[#f8f8f8]`}>
			{/* MOBILE layout */}
			<div className="md:hidden">
				<div className="px-[5px] md:px-[8px] xl:px-[10px] py-[5px] md:py-[8px] xl:py-[10px]">
					{categories.slice(0, numberOfCategories).map((cat, i) => (
						<div key={i} className="mb-4">
							<h4
								className={`mb-2 text-[#333333] text-[14px] md:text-[15px] xl:text-[16px] font-normal md:font-normal xl:font-normal`}>
								{cat.name}
							</h4>
							{cat.links.slice(0, cat.numberOfLinks).map((link, idx) => (
								<Link
									href={link.url}
									key={idx}
									className={`block text-[#333333] hover:text-[#555555] text-[12px] md:text-[13px] xl:text-[14px] font-normal md:font-normal xl:font-normal`}>
									{link.name}
								</Link>
							))}
						</div>
					))}
				</div>

				<div className="border-[#cccccc] border-[1px] md:border-[1px] xl:border-[1px] w-[100%] md:w-[100%] xl:w-[100%] mx-auto my-4" />

				<div className="px-[5px] md:px-[8px] xl:px-[10px] py-[5px] md:py-[8px] xl:py-[10px] flex justify-between items-center">
					<div className="flex flex-col">
						<img
							src="https://ladys-nails.eu/data/include/cms/Kierunek-Natura/Loga-marek/mohani.png?v=1716558057995"
							alt="Logo"
							className="w-[60px] md:w-[80px] xl:w-[100px] mb-2"
						/>
						<span className="text-[#333333] text-[8px] md:text-[10px] xl:text-[12px]">{`Strona internetowa © ${new Date().getFullYear()}`}</span>
						<span className="text-[#333333] text-[8px] md:text-[10px] xl:text-[12px]">{`Wszelkie prawa zastrzeżone.`}</span>
					</div>
					<div className="flex gap-[10px] md:gap-[10px] xl:gap-[10px]">
						{renderIcons()}
					</div>
				</div>
			</div>

			{/* TABLET layout */}
			<div className="hidden md:flex xl:hidden flex-col w-full">
				<div className="px-[5px] md:px-[8px] xl:px-[10px] py-[5px] md:py-[8px] xl:py-[10px] w-full grid grid-cols-2 gap-8">
					{categories.slice(0, numberOfCategories).map((cat, i) => (
						<div key={i}>
							<h4
								className={`mb-2 text-[#333333] text-[14px] md:text-[15px] xl:text-[16px] font-normal md:font-normal xl:font-normal`}>
								{cat.name}
							</h4>
							{cat.links.slice(0, cat.numberOfLinks).map((link, idx) => (
								<Link
									href={link.url}
									key={idx}
									className={`block text-[#333333] hover:text-[#555555] text-[12px] md:text-[13px] xl:text-[14px] font-normal md:font-normal xl:font-normal`}>
									{link.name}
								</Link>
							))}
						</div>
					))}
				</div>

				<div className="border-[#cccccc] border-[1px] md:border-[1px] xl:border-[1px] w-[100%] md:w-[100%] xl:w-[100%] mx-auto my-4" />

				<div className="px-[5px] md:px-[8px] xl:px-[10px] py-[5px] md:py-[8px] xl:py-[10px] w-full relative flex justify-between items-center">
					<img
						src="https://ladys-nails.eu/data/include/cms/Kierunek-Natura/Loga-marek/mohani.png?v=1716558057995"
						alt="Logo"
						className="w-[60px] md:w-[80px] xl:w-[100px] object-contain"
					/>
					<div className="absolute left-1/2 transform -translate-x-1/2 flex gap-[10px] md:gap-[10px] xl:gap-[10px]">
						{renderIcons()}
					</div>
					<div className="text-right flex flex-col">
						<span className="text-[#333333] text-[8px] md:text-[10px] xl:text-[12px]">{`Strona internetowa © ${new Date().getFullYear()}`}</span>
						<span className="text-[#333333] text-[8px] md:text-[10px] xl:text-[12px]">{`Wszelkie prawa zastrzeżone.`}</span>
					</div>
				</div>
			</div>

			{/* DESKTOP layout */}
			<div className="hidden xl:flex flex-col w-full">
				<div className="px-[5px] md:px-[8px] xl:px-[10px] py-[5px] md:py-[8px] xl:py-[10px] w-full">
					<div className="flex flex-wrap place-content-between gap-8">
						{categories.map((cat, i) => (
							<div key={i} className="min-w-[140px]">
								<h4
									className={`mb-2 text-[#333333] text-[14px] md:text-[15px] xl:text-[16px] font-normal md:font-normal xl:font-normal`}>
									{cat.name}
								</h4>
								{cat.links.slice(0, cat.numberOfLinks).map((link, idx) => (
									<Link
										href={link.url}
										key={idx}
										className={`block text-[#333333] hover:text-[#555555] text-[12px] md:text-[13px] xl:text-[14px] font-normal md:font-normal xl:font-normal`}>
										{link.name}
									</Link>
								))}
							</div>
						))}
					</div>
				</div>

				<div className="border-[#cccccc] border-[1px] md:border-[1px] xl:border-[1px] w-[100%] md:w-[100%] xl:w-[100%] mx-auto my-4" />

				<div className="px-[5px] md:px-[8px] xl:px-[10px] py-[5px] md:py-[8px] xl:py-[10px] w-full relative flex justify-between items-center">
					<img
						src="https://ladys-nails.eu/data/include/cms/Kierunek-Natura/Loga-marek/mohani.png?v=1716558057995"
						alt="Logo"
						className="w-[60px] md:w-[80px] xl:w-[100px] object-contain"
					/>
					<div className="absolute left-1/2 transform -translate-x-1/2 flex gap-[10px] md:gap-[10px] xl:gap-[10px]">
						{renderIcons()}
					</div>
					<div className="text-right flex flex-col">
						<span className="text-[#333333] text-[8px] md:text-[10px] xl:text-[12px]">{`Strona internetowa © ${new Date().getFullYear()}`}</span>
						<span className="text-[#333333] text-[8px] md:text-[10px] xl:text-[12px]">{`Wszelkie prawa zastrzeżone.`}</span>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
