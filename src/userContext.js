import React, { createContext, useContext } from "react";

const KarbarContext = createContext();

export const useKarbar = () => {
  return useContext(KarbarContext);
};

export const KarbarProvider = ({ children }) => {
  const karbar = [
    {
      id: 1,
      username: "Mr.Shokouhi",
      name: "مهندس شکوهی",
      role: "Manager",
      link: "***********",
      imgPath:
        "https://media.licdn.com/dms/image/C4D03AQH1dWdWGXhF_Q/profile-displayphoto-shrink_400_400/0/1538741468722?e=2147483647&v=beta&t=_V3kWuFVqaky1974mZ_gN-2USMEHx4xNhnN2iVxiORM",
    },
    {
      id: 2,
      username: "sadeqran",
      name: "صادق رنجبر",
      role: "developer",
      link: "sadeqran",
      imgPath: "https://avatars.githubusercontent.com/u/109485162?v=4",
    },
    {
      id: 3,
      username: "Rafiei",
      name: "ساسان رفیعی",
      role: "Network Administor",
      link: "336",
      imgPath:
        "https://media.licdn.com/dms/image/D4E03AQFa1Zor2EhVDA/profile-displayphoto-shrink_200_200/0/1689057902957?e=2147483647&v=beta&t=I9N3_4YZoKGoga3xZNen8AmTTP1A_hHppBt4JBtCxtY",
    },
    {
      id: 4,
      username: "Taghavi",
      name: "محمد تقوی",
      role: "Network Engineer",
      link: "335",
      imgPath:
        "https://media.licdn.com/dms/image/D4E03AQF6sQHDeNq0CQ/profile-displayphoto-shrink_200_200/0/1702271902765?e=2147483647&v=beta&t=GCdndkAyLNtvkK84rNz3Fm2_2Njk_JIn-rxUSwfac9o",
    },
    {
      id: 5,
      username: "AliMohammadi",
      name: "مرتضی علی محمدی",
      role: "Network Administrator",
      link: "334",
      imgPath:
        "https://media.licdn.com/dms/image/C4D03AQGmy3e_ktuzyA/profile-displayphoto-shrink_200_200/0/1576338471616?e=2147483647&v=beta&t=DdaT_HJ4JDH2MoZdKGnmnd7ZAI1ci5F-L8Czca4yCk0",
    },
    {
      id: 6,
      username: "shirinOlyaei",
      name: "شیرین علیایی",
      role: "User1",
      link: "****",
      imgPath:
        "https://media.licdn.com/dms/image/D4E03AQG5f_vRp8loAw/profile-displayphoto-shrink_200_200/0/1683794969087?e=2147483647&v=beta&t=9gNtU7J5K_HC0hVjH_l0Y3zlt5ZKehZylQTFEzqUVfM",
    },
  ];
  return (
    <KarbarContext.Provider value={karbar}>{children}</KarbarContext.Provider>
  );
};
