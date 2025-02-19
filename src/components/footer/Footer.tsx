import React, { FC, useState } from "react";
  import Link from "next/link";
  import {  } from "react-icons/fa";
  
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
    "links": [
      {
        "name": "Kim Jesteśmy",
        "url": "/podstrona"
      },
      {
        "name": "Nasza Misja",
        "url": "/podstrona"
      },
      {
        "name": "Zespół Ekspertów",
        "url": "/podstrona"
      },
      {
        "name": "Partnerzy i Współpraca",
        "url": "/podstrona"
      },
      {
        "name": "Certyfikaty i Nagrody",
        "url": "/podstrona"
      }
    ],
    "name": "O Nas",
    "numberOfLinks": 5
  },
  {
    "links": [
      {
        "name": "Audyt Energetyczny",
        "url": "/podstrona"
      },
      {
        "name": "Optymalizacja Energetyczna",
        "url": "/podstrona"
      },
      {
        "name": "Monitoring i Zarządzanie Energią",
        "url": "/podstrona"
      },
      {
        "name": "Instalacje Odnawialnych Źródeł Energii",
        "url": "/podstrona"
      },
      {
        "name": "Doradztwo Energetyczne",
        "url": "/podstrona"
      }
    ],
    "name": "Usługi",
    "numberOfLinks": 5
  },
  {
    "links": [
      {
        "name": "FAQ (Najczęściej Zadawane Pytania)",
        "url": "/podstrona"
      },
      {
        "name": "Kontakt",
        "url": "/podstrona"
      },
      {
        "name": "Polityka Prywatności",
        "url": "/podstrona"
      },
      {
        "name": "Warunki Korzystania",
        "url": "/podstrona"
      },
      {
        "name": "Pomoc Techniczna",
        "url": "/podstrona"
      }
    ],
    "name": "Wsparcie Klienta",
    "numberOfLinks": 5
  },
  {
    "links": [
      {
        "name": "Blog",
        "url": "/podstrona"
      },
      {
        "name": "Studia Przypadków",
        "url": "/podstrona"
      },
      {
        "name": "Przewodniki i E-booki",
        "url": "/podstrona"
      },
      {
        "name": "Aktualności Branżowe",
        "url": "/podstrona"
      },
      {
        "name": "Media i Publikacje",
        "url": "/podstrona"
      }
    ],
    "name": "Zasoby",
    "numberOfLinks": 5
  }
];
  const icons: IconItem[] = [];
  const numberOfCategories: number = 4;
 
  const iconMapping: Record<string, React.ComponentType<{ className?: string }>> = {
    
  };
  
  // Komponent odpowiedzialny za pojedynczą ikonę
  const IconLink: FC<{ iconItem: IconItem }> = ({ iconItem }) => {
    const [hover, setHover] = useState(false);
    const color = hover && iconItem.iconHoverColor
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
          className={`${sizeClasses} inline-block`}
        >
          <IconComponent />
        </a>
      </Link>
    );
  };
  
  const renderIcons = () => icons.map((icon, i) => <IconLink key={i} iconItem={icon} />);
  
  const Footer: FC = () => {
    return (
      <footer className={`w-full bg-[#212121]`}>
        {/* MOBILE layout */}
        <div className="md:hidden">
          
        <div className="px-[29px] md:px-[68px] xl:px-[206px] py-[25px] md:py-[39px] xl:py-[38px]">
          {categories.slice(0, numberOfCategories).map((cat, i) => (
            <div key={i} className="mb-4">
              <h4 className={`mb-2 text-[#ffffff] text-[14px] md:text-[15px] xl:text-[20px] font-normal md:font-normal xl:font-semibold`}>{cat.name}</h4>
              {cat.links.slice(0, cat.numberOfLinks).map((link, idx) => (
                <Link href={link.url} key={idx} className={`block text-[#808080] hover:text-[#e0e0e0] text-[12px] md:text-[13px] xl:text-[16px] font-normal md:font-normal xl:font-semibold`}>
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      
          <div className="border-[#616161] border-[1px] md:border-[1px] xl:border-[1px] w-[86%] md:w-[85%] xl:w-[80%] mx-auto my-4" />
          
        <div className="px-[27px] md:px-[60px] xl:px-[189px] py-[24px] md:py-[35px] xl:py-[50px] flex justify-between items-center">
          <div className="flex flex-col">
            <img src="https://i.postimg.cc/PJf14dFD/logo-admin.png" alt="Logo" className="w-[119px] md:w-[154px] xl:w-[193px] mb-2" />
            <span className="text-[#e3e3e3] text-[11px] md:text-[12px] xl:text-[16px] font-light md:font-light xl:font-normal">{`Energaztech © ${new Date().getFullYear()}`}</span>
            <span className="text-[#e3e3e3] text-[11px] md:text-[12px] xl:text-[16px] font-light md:font-light xl:font-normal">{`Wszelkie prawa zastrzeżone.`}</span>
          </div>
          <div className="flex gap-[10px] md:gap-[10px] xl:gap-[10px]">
            {renderIcons()}
          </div>
        </div>
      
        </div>
  
        {/* TABLET layout */}
        <div className="hidden md:flex xl:hidden flex-col w-full">
          
        <div className="px-[29px] md:px-[68px] xl:px-[206px] py-[25px] md:py-[39px] xl:py-[38px] w-full grid grid-cols-2 gap-8">
          {categories.slice(0, numberOfCategories).map((cat, i) => (
            <div key={i}>
              <h4 className={`mb-2 text-[#ffffff] text-[14px] md:text-[15px] xl:text-[20px] font-normal md:font-normal xl:font-semibold`}>{cat.name}</h4>
              {cat.links.slice(0, cat.numberOfLinks).map((link, idx) => (
                <Link href={link.url} key={idx} className={`block text-[#808080] hover:text-[#e0e0e0] text-[12px] md:text-[13px] xl:text-[16px] font-normal md:font-normal xl:font-semibold`}>
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      
          <div className="border-[#616161] border-[1px] md:border-[1px] xl:border-[1px] w-[86%] md:w-[85%] xl:w-[80%] mx-auto my-4" />
          
        <div className="px-[27px] md:px-[60px] xl:px-[189px] py-[24px] md:py-[35px] xl:py-[50px] w-full relative flex justify-between items-center">
          <img src="https://i.postimg.cc/PJf14dFD/logo-admin.png" alt="Logo" className="w-[119px] md:w-[154px] xl:w-[193px] object-contain" />
          <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-[10px] md:gap-[10px] xl:gap-[10px]">
            {renderIcons()}
          </div>
          <div className="text-right flex flex-col">
            <span className="text-[#e3e3e3] text-[11px] md:text-[12px] xl:text-[16px] font-light md:font-light xl:font-normal">{`Energaztech © ${new Date().getFullYear()}`}</span>
            <span className="text-[#e3e3e3] text-[11px] md:text-[12px] xl:text-[16px] font-light md:font-light xl:font-normal">{`Wszelkie prawa zastrzeżone.`}</span>
          </div>
        </div>
      
        </div>
  
        {/* DESKTOP layout */}
        <div className="hidden xl:flex flex-col w-full">
          
          <div className="px-[29px] md:px-[68px] xl:px-[206px] py-[25px] md:py-[39px] xl:py-[38px] w-full">
            <div className="flex flex-wrap place-content-between gap-8">
              {categories.map((cat, i) => (
                <div key={i} className="min-w-[140px]">
                  <h4 className={`mb-2 text-[#ffffff] text-[14px] md:text-[15px] xl:text-[20px] font-normal md:font-normal xl:font-semibold`}>{cat.name}</h4>
                  {cat.links.slice(0, cat.numberOfLinks).map((link, idx) => (
                    <Link href={link.url} key={idx} className={`block text-[#808080] hover:text-[#e0e0e0] text-[12px] md:text-[13px] xl:text-[16px] font-normal md:font-normal xl:font-semibold`}>
                      {link.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        
          <div className="border-[#616161] border-[1px] md:border-[1px] xl:border-[1px] w-[86%] md:w-[85%] xl:w-[80%] mx-auto my-4" />
          
          <div className="px-[27px] md:px-[60px] xl:px-[189px] py-[24px] md:py-[35px] xl:py-[50px] w-full relative flex justify-between items-center">
            <img src="https://i.postimg.cc/PJf14dFD/logo-admin.png" alt="Logo" className="w-[119px] md:w-[154px] xl:w-[193px] object-contain" />
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-[10px] md:gap-[10px] xl:gap-[10px]">
              {renderIcons()}
            </div>
            <div className="text-right flex flex-col">
              <span className="text-[#e3e3e3] text-[11px] md:text-[12px] xl:text-[16px] font-light md:font-light xl:font-normal">{`Energaztech © ${new Date().getFullYear()}`}</span>
              <span className="text-[#e3e3e3] text-[11px] md:text-[12px] xl:text-[16px] font-light md:font-light xl:font-normal">{`Wszelkie prawa zastrzeżone.`}</span>
            </div>
          </div>
        
        </div>
      </footer>
    );
  };
  
  export default Footer;
  