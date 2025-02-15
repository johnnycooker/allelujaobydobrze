import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

interface MainLayoutProps {
	children: React.ReactNode;
	marginTop?: boolean;
}

const MainLayout = ({ children, marginTop = true }: MainLayoutProps) => {
	return (
		<div className="flex flex-col min-h-screen font-custom">
			<Navbar />
			<div className={marginTop ? "flex-grow pt-20" : "flex-grow"}>
				{children}
			</div>
			<Footer />
		</div>
	);
};

export default MainLayout;
