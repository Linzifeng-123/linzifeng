(function () {
  const publications = [
    {
      year: 2026,
      journal: "Nature Synthesis",
      title: "Single-step synthesis of delaminated MXenes in deep eutectic solvents",
      note: "DOI: 10.1038/s44160-026-01019-2",
      featured: true,
    },
    {
      year: 2026,
      journal: "Angewandte Chemie International Edition",
      title: "All-Cyclic-Solvent Electrolyte Design Enables Ultra-Low-Temperature and Fast-Charging Sodium-Ion Batteries",
      note: "65(17), e21433",
      featured: true,
    },
    {
      year: 2026,
      journal: "Nature Communications",
      title: "Breaking Low-Temperature Barriers for High-Energy-Density Aqueous Sulfur-Based Batteries through Electrolyte Design",
      note: "17, Article number: 3167",
      featured: true,
    },
    {
      year: 2026,
      journal: "Joule",
      title: "High-voltage sulfur electrochemistry enabled by copper-ion mediation in non-aqueous batteries",
      note: "10(2), 102268",
      featured: true,
    },
    {
      year: 2026,
      journal: "Nano-Micro Letters",
      title: "Stabilizing the Anode and Cathode Interface Synchronously via Electrolyte-triggered Hydrogel Interphase for Zinc Metal Batteries",
      note: "18, Article number: 206",
      featured: true,
    },
    {
      year: 2025,
      journal: "Angewandte Chemie International Edition",
      title: "Solvent Chain-Length Engineering Enables All-Climate Sodium-ion Batteries",
      note: "64(45), e202514451",
      featured: true,
    },
    {
      year: 2025,
      journal: "Journal of Physical Chemistry Letters",
      title: "High zinc utilization enabled by MXene anode for flexible dual-plating Zn-Br2 microbatteries",
      note: "16(37), 9839-9848",
      featured: false,
    },
    {
      year: 2025,
      journal: "Nano-Micro Letters",
      title: "Tellurium-Terminated MXene Synthesis via One-Step Tellurium Etching",
      note: "18(1), Article number: 28",
      featured: false,
    },
    {
      year: 2025,
      journal: "Energy & Environmental Science",
      title: "A low-temperature aqueous Se-based battery with rapid reaction kinetics and unprecedented energy density",
      note: "18(12), 6180-6190",
      featured: true,
    },
    {
      year: 2025,
      journal: "ChemSusChem",
      title: "High-Entropy Electrolyte Design for Low-Temperature Supercapacitors",
      note: "18(7), e202402035",
      featured: false,
    },
    {
      year: 2025,
      journal: "ACS Nano",
      title: "Enabling Low-Temperature Zinc-Bromine Microbatteries with an Additive-Free Electrolyte Design",
      note: "19(9), 9340-9350",
      featured: false,
    },
    {
      year: 2025,
      journal: "Nature Nanotechnology",
      title: "Advanced Characterization of Confined Electrochemical Interface in Electrochemical Capacitors",
      note: "20(2), 196-208",
      featured: true,
    },
    {
      year: 2024,
      journal: "ACS Applied Energy Materials",
      title: "Activating Pseudocapacitive Charge Storage of Molten-Salt-Synthesized MXenes in Mild Aqueous Electrolytes",
      note: "7(24), 11518-11524",
      featured: false,
    },
    {
      year: 2024,
      journal: "Nature Communications",
      title: "A tripartite synergistic optimization strategy for zinc-iodine batteries",
      note: "15(1), 9702",
      featured: true,
    },
    {
      year: 2024,
      journal: "Batteries & Supercaps",
      title: "Influence of Surface Groups on Electrochemical Properties of Molten Salt Synthesized Ti3C2Tx in Mild Aqueous Electrolytes",
      note: "7(9), e202400153",
      featured: false,
    },
    {
      year: 2024,
      journal: "Advanced Functional Materials",
      title: "Tailoring Tribological Characteristics in Titanium Alloys by Laser Surface Texturing and 2D Ti3C2Tx MXene Nanocoating",
      note: "34(36), 2401231",
      featured: false,
    },
    {
      year: 2024,
      journal: "Nano Research",
      title: "Flexible MXene/sodium alginate composite fabric with high structural stability and oxidation resistance for electromagnetic interference shielding",
      note: "17(6), 5326-5335",
      featured: false,
    },
    {
      year: 2024,
      journal: "Advanced Energy Materials",
      title: "Ti2CTx MXene Cathode Host for Enhanced Zinc-Bromine Battery Performance",
      note: "14(20), 2304516",
      featured: false,
    },
    {
      year: 2024,
      journal: "Journal of Power Sources",
      title: "Designing high-chaos mixed-salt electrolytes for enhancing graphite-electrolyte interfacial stability in lithium-ion batteries",
      note: "607, 234611",
      featured: false,
    },
    {
      year: 2024,
      journal: "Electrochemistry Communications",
      title: "Enhanced electrochemical performance of molten salt synthesized V2CTx MXene@VOx composite in Zn ion aqueous electrolytes",
      note: "165, 107770",
      featured: false,
    },
    {
      year: 2024,
      journal: "Acta Physico-Chimica Sinica",
      title: "Molten Salt Derived Mo2CTx MXene with Excellent Catalytic Performance for Hydrogen Evolution Reaction",
      note: "40(9), 2306031",
      featured: false,
    },
    {
      year: 2023,
      journal: "中国材料进展",
      title: "热处理对Ti3C2Tx MXene材料电化学储锂性能的影响",
      note: "42(5), 369-374",
      featured: false,
    },
    {
      year: 2023,
      journal: "Progress in Natural Science: Materials International",
      title: "Improvement in hydrogen storage performance of Mg by mechanical grinding with molten salt etching Ti3C2Clx",
      note: "33(2), 211-224",
      featured: false,
    },
    {
      year: 2023,
      journal: "Small Methods",
      title: "Ti3C2Tx MXene with high pseudocapacitive activity and large potential window in a mild AlCl3 aqueous electrolyte",
      note: "7(8), 2201526",
      featured: false,
    },
    {
      year: 2023,
      journal: "Materials Research Letters",
      title: "Molten salt derived Mo2AlB2 with excellent HER catalytic performance",
      note: "11(7), 571-577",
      featured: false,
    },
    {
      year: 2023,
      journal: "Energy & Environmental Materials",
      title: "Molten salt shielded synthesis (MS3) of MXene in air",
      note: "6(2), e12328",
      featured: false,
    },
    {
      year: 2023,
      journal: "Chinese Chemical Letters",
      title: "Lithium storage properties of Ti3C2Tx (Tx = F, Cl, Br) MXenes",
      note: "34(4), 107426",
      featured: false,
    },
    {
      year: 2022,
      journal: "Science Bulletin",
      title: "Boosting the lithium-ion storage performance of perovskite SrxVO3-delta via Sr cation and O anion deficient engineering",
      note: "67(22), 2305-2315",
      featured: false,
    },
    {
      year: 2022,
      journal: "Advanced Materials Interfaces",
      title: "A method for deconvoluting and quantifying the real-time species fluxes and ionic currents using in situ electrochemical quartz crystal microbalance",
      note: "9(16), 2200112",
      featured: false,
    },
    {
      year: 2022,
      journal: "Electrochemistry Communications",
      title: "Influence of aqueous solutions treatment on the Li+ storage properties of molten salt derived Ti3C2Clx MXene",
      note: "136, 107236",
      featured: false,
    },
    {
      year: 2021,
      journal: "Nature Communications",
      title: "Li-ion storage properties of two-dimensional titanium-carbide synthesized via fast one-pot method in air atmosphere",
      note: "12(1), Article number: 5085",
      featured: true,
    },
    {
      year: 2021,
      journal: "Nano-Micro Letters",
      title: "Electrochemical Lithium Storage Performance of Molten Salt Derived V2SnC MAX Phase",
      note: "13(1), 158",
      featured: false,
    },
    {
      year: 2021,
      journal: "ChemElectroChem",
      title: "Molten Salt Derived Nb2CTx MXene Anode for Li-ion Batteries",
      note: "8(5), 957-962",
      featured: false,
    },
    {
      year: 2020,
      journal: "Nature Materials",
      title: "A general Lewis acidic etching route for preparing MXenes with enhanced electrochemical performance in non-aqueous electrolyte",
      note: "19(8), 894-899",
      featured: true,
    },
    {
      year: 2020,
      journal: "Advanced Functional Materials",
      title: "Robust High-Temperature Supercapacitors Based on SiC Nanowires",
      note: "31(8), 2008901",
      featured: false,
    },
    {
      year: 2020,
      journal: "Energy & Environmental Materials",
      title: "Computational Insights into Charge Storage Mechanisms of Supercapacitors",
      note: "3(3), 235-246",
      featured: false,
    },
    {
      year: 2020,
      journal: "Chemical Society Reviews",
      title: "Nanoporous carbon for electrochemical capacitive energy storage",
      note: "49(10), 3005-3039",
      featured: false,
    },
    {
      year: 2020,
      journal: "Trends in Chemistry",
      title: "MXenes as High-Rate Electrodes for Energy Storage",
      note: "2(7), 654-664",
      featured: false,
    },
    {
      year: 2019,
      journal: "Energy Storage Materials",
      title: "Electrochemical study of pseudocapacitive behavior of Ti3C2Tx MXene material in aqueous electrolytes",
      note: "18, 456-461",
      featured: false,
    },
    {
      year: 2019,
      journal: "Chinese Chemical Letters",
      title: "2020 roadmap on two-dimensional materials for energy storage and conversion",
      note: "30(12), 2053-2064",
      featured: false,
    },
    {
      year: 2019,
      journal: "Advanced Functional Materials",
      title: "3D Macroscopic Architectures from Self-Assembled MXene Hydrogels",
      note: "29(33), 1903960",
      featured: true,
    },
    {
      year: 2018,
      journal: "Advanced Materials",
      title: "Large Intercalation Pseudocapacitance in 2D VO2(B): Breaking through the Kinetic Barrier",
      note: "30(40), 1803594",
      featured: false,
    },
    {
      year: 2018,
      journal: "Materials Today",
      title: "Materials for supercapacitors: When Li-ion battery power is not enough",
      note: "21(4), 419-436",
      featured: false,
    },
    {
      year: 2018,
      journal: "Current Opinion in Electrochemistry",
      title: "Advanced analytical techniques to characterize materials for electrochemical capacitors",
      note: "9, 18-25",
      featured: false,
    },
    {
      year: 2017,
      journal: "Nature Energy",
      title: "Ultra-high-rate pseudocapacitive energy storage in two-dimensional transition metal carbides",
      note: "2(8), Article number: 17105",
      featured: true,
    },
    {
      year: 2017,
      journal: "Current Opinion in Electrochemistry",
      title: "Electrochemical double layer capacitors: What is next beyond the corner?",
      note: "6(1), 115-119",
      featured: false,
    },
    {
      year: 2016,
      journal: "Electrochemistry Communications",
      title: "Electrochemical and in-situ X-ray diffraction studies of Ti3C2Tx MXene in ionic liquid electrolyte",
      note: "72, 50-53",
      featured: false,
    },
    {
      year: 2016,
      journal: "Journal of Power Sources",
      title: "Capacitance of Ti3C2Tx MXene in ionic liquid electrolyte",
      note: "326, 575-579",
      featured: false,
    },
    {
      year: 2016,
      journal: "Electrochimica Acta",
      title: "Graphene-Based Supercapacitors Using Eutectic Ionic Liquid Mixture Electrolyte",
      note: "206, 446-451",
      featured: false,
    },
  ];

  const publicationAuthors = {
    "Single-step synthesis of delaminated MXenes in deep eutectic solvents":
      "Li Fangbing, Long Yu, Wu Zhitan, Ye Ruiqing, Li Zhiguo, Zhang Boya, Yu Jinyang, Wang Feifei, Chen Zihui, Geng Chuannan, Chi Sijia, Wang Li, Lin Zifeng*, Simon Patrice*, Tao Ying*, Yang Quan-Hong*",
    "All-Cyclic-Solvent Electrolyte Design Enables Ultra-Low-Temperature and Fast-Charging Sodium-Ion Batteries":
      "Luo Zongbin＃, Hu Linyu＃, Ye Yong, Ma Guoliang, Ding Yu, Fan Xinming*, Dai Chunlong*, Lin Zifeng*",
    "Breaking Low-Temperature Barriers for High-Energy-Density Aqueous Sulfur-Based Batteries through Electrolyte Design":
      "Zhou Haichuan, Hu Linyu*, Liu Guoqiang, Pi Yourui, Wan Fang, Liu Ying, Dai Chunlong*, Lin Zifeng*",
    "High-voltage sulfur electrochemistry enabled by copper-ion mediation in non-aqueous batteries":
      "Ding Yu, Dai Chunlong*, Wang Fei, Li Zhaohui, Zhou Haichuan, Luo Zongbin, Xu Maowen, Hu Linyu*, Lin Zifeng*",
    "Stabilizing the Anode and Cathode Interface Synchronously via Electrolyte-triggered Hydrogel Interphase for Zinc Metal Batteries":
      "Cai Xinze, Li Xin, Liang Jiahui, Qiu Jiazhen, Lin Wenkuo, Dai Chunlong, Lin Zifeng*, Zhao Jiangqi*",
    "Solvent Chain-Length Engineering Enables All-Climate Sodium-ion Batteries":
      "Luo Zongbin＃, Hu Linyu＃, Dai Chunlong*, Ma Guoliang, Ye Yong, Xu Kui*, Lin Zifeng*",
    "High zinc utilization enabled by MXene anode for flexible dual-plating Zn-Br2 microbatteries":
      "Wang Bin, Ma Guoliang, Zhao Jiangqi*, Lin Zifeng*",
    "Tellurium-Terminated MXene Synthesis via One-Step Tellurium Etching":
      "Ma Guoliang, Luo Zongbin, Shao Hui*, Shen Yanbin, Lin Zifeng*, Simon Patrice*",
    "A low-temperature aqueous Se-based battery with rapid reaction kinetics and unprecedented energy density":
      "Liu Guoqiang＃, Hu Linyu＃, Liu Ying*, Xu Maowen, Guo Jiajun, Zhou Haichuan, Ma Guoliang, Lin He, Su Zhenhuang, Liu Chang, Zhao Jiangqi, Dai Chunlong*, Lin Zifeng*",
    "High-Entropy Electrolyte Design for Low-Temperature Supercapacitors":
      "Dong Chenxi, Wang Yuan, Luo Zongbin, Dai Chunlong*, Lin Zifeng*",
    "Enabling Low-Temperature Zinc-Bromine Microbatteries with an Additive-Free Electrolyte Design":
      "Guo Jiajun＃, Hu Linyu＃, Wang Rui, Liu Guoqiang, Zhao Jiangqi, Dai Chunlong*, Lin Zifeng*",
    "Advanced Characterization of Confined Electrochemical Interface in Electrochemical Capacitors":
      "Ge Kangkang, Shao Hui*, Lin Zifeng*, Taberna Pierre-Louis*, Simon Patrice*",
    "Activating Pseudocapacitive Charge Storage of Molten-Salt-Synthesized MXenes in Mild Aqueous Electrolytes":
      "Wang Bin, Fan Qi, Xu Ligang, Liu Jie, Dai Chunlong, Tang Mingxue, Liang Kun, Taberna Pierre-Louis, Liu Ying, Simon Patrice*, Lin Zifeng*",
    "A tripartite synergistic optimization strategy for zinc-iodine batteries":
      "Yan Weibin, Liu Ying*, Qiu Jiazhen, Tan Feipeng, Liang Jiahui, Cai Xinze, Dai Chunlong, Zhao Jiangqi*, Lin Zifeng*",
    "Influence of Surface Groups on Electrochemical Properties of Molten Salt Synthesized Ti3C2Tx in Mild Aqueous Electrolytes":
      "Guan Bin, Ma Guoliang, Lin Zifeng*",
    "Tailoring Tribological Characteristics in Titanium Alloys by Laser Surface Texturing and 2D Ti3C2Tx MXene Nanocoating":
      "Zhang Qicheng, Li Yong, Liang Fei, Zhang Haoran, Wang Bin, Li Xiaopeng, Lin Zifeng*, Lin Yan*, Chen Xiang*",
    "Flexible MXene/sodium alginate composite fabric with high structural stability and oxidation resistance for electromagnetic interference shielding":
      "Zhang Hao-Wen, Yang Lu-Yao, Huang Meng-Lin, Cheng Ming-Hua, Feng Zhe-Sheng, Meng Fanbin*, Lin Zifeng*, Wang Yan*",
    "Ti2CTx MXene Cathode Host for Enhanced Zinc-Bromine Battery Performance":
      "Guo Jiajun, Ma Guoliang, Liu Guoqiang, Dai Chunlong*, Lin Zifeng*",
    "Designing high-chaos mixed-salt electrolytes for enhancing graphite-electrolyte interfacial stability in lithium-ion batteries":
      "Luo Zongbin, Wang Yuan, Huang Yueyan, Luo Hong*, Lin Zifeng*",
    "Enhanced electrochemical performance of molten salt synthesized V2CTx MXene@VOx composite in Zn ion aqueous electrolytes":
      "Wen Jinru, Dan Hongyan, Li Chunyang, Dai Chunlong, Lin Zifeng*",
    "Molten Salt Derived Mo2CTx MXene with Excellent Catalytic Performance for Hydrogen Evolution Reaction":
      "Li Yuqiong, Lan Bing, Guan Bin, Dai Chunlong, Zhang Fan*, Lin Zifeng*",
    "热处理对Ti3C2Tx MXene材料电化学储锂性能的影响":
      "Guan Bin, Liu Pengcheng, Lin Zifeng*",
    "Improvement in hydrogen storage performance of Mg by mechanical grinding with molten salt etching Ti3C2Clx":
      "Hu Shuaicheng, Lv Lijun, Yang Guo, Liu Wei, Miao Hong, Cheng Honghui*, Han Xingbo*, Lin Zifeng*",
    "Ti3C2Tx MXene with high pseudocapacitive activity and large potential window in a mild AlCl3 aqueous electrolyte":
      "Xian Yongqiu, Wang Bin, Lin Zifeng*",
    "Molten salt derived Mo2AlB2 with excellent HER catalytic performance":
      "Li Yuqiong, Lan Bing, Dai Chunlong, Li Siwei, Zhang Fan*, Lin Zifeng*",
    "Molten salt shielded synthesis (MS3) of MXene in air":
      "Chen Jinjin, Jin Qianqian, Li Youbing, Shao Hui, Liu Pengcheng, Liu Ying*, Taberna Pierre-Louis, Huang Qing, Lin Zifeng*, Simon Patrice*",
    "Lithium storage properties of Ti3C2Tx (Tx = F, Cl, Br) MXenes":
      "Liu Pengcheng, Xiao Peng, Lu Ming, Wang Hui, Jin Na, Lin Zifeng*",
    "Boosting the lithium-ion storage performance of perovskite SrxVO3-delta via Sr cation and O anion deficient engineering":
      "Li Xiaolei＃, Lin Zifeng＃, Jin Na, Yang Xiaojiao, Sun Lei, Wang Yuan, Xie Lei, Chen Xiping, Lei Li, Rozier Patrick, Simon Patrice, Liu Ying*",
    "A method for deconvoluting and quantifying the real-time species fluxes and ionic currents using in situ electrochemical quartz crystal microbalance":
      "Zheng Kai, Xian Yongqiu, Lin Zifeng*",
    "Influence of aqueous solutions treatment on the Li+ storage properties of molten salt derived Ti3C2Clx MXene":
      "Liu Pengcheng, Guan Bin, Lu Ming, Wang Hui, Lin Zifeng*",
    "Li-ion storage properties of two-dimensional titanium-carbide synthesized via fast one-pot method in air atmosphere":
      "Ma Guoliang＃, Shao Hui＃, Xu Jin, Liu Ying*, Huang Qing, Taberna Pierre-Louis, Simon Patrice*, Lin Zifeng*",
    "Electrochemical Lithium Storage Performance of Molten Salt Derived V2SnC MAX Phase":
      "Li Youbing＃, Ma Guoliang＃, Shao Hui, Xiao Peng, Lu Jun, Xu Jin, Hou Jinrong, Chen Ke, Zhang Xiao, Li Mian, Persson Per O. Å, Hultman Lars, Eklund Per, Du Shiyu, Chai Zhifang, Huang Zhengren, Jin Na, Ma Jiwei, Liu Ying, Lin Zifeng*, Huang Qing*",
    "Molten Salt Derived Nb2CTx MXene Anode for Li-ion Batteries":
      "Dong Hanyu, Xiao Peng, Jin Na, Wang Binbin, Liu Ying, Lin Zifeng*",
    "A general Lewis acidic etching route for preparing MXenes with enhanced electrochemical performance in non-aqueous electrolyte":
      "Li Youbing＃, Shao Hui＃, Lin Zifeng*, Lu Jun, Liu Liyuan, Duployer Benjamin, Persson Per O. Å, Eklund Per, Hultman Lars, Li Mian, Chen Ke, Zha Xian-Hu, Du Shiyu, Rozier Patrick, Chai Zhifang, Raymundo-Piñero Encarnacion, Taberna Pierre-Louis, Simon Patrice*, Huang Qing*",
    "Robust High-Temperature Supercapacitors Based on SiC Nanowires":
      "Li Xiaoxiao, Li Weijun, Liu Qiao, Chen Shanliang, Wang Lin, Gao Fengmei, Shao Gang, Tian Yun*, Lin Zifeng*, Yang Weiyou*",
    "Computational Insights into Charge Storage Mechanisms of Supercapacitors":
      "Xu Kui, Shao Hui, Lin Zifeng*, Merlet Céline, Feng Guang, Zhu Jixin*, Simon Patrice",
    "Nanoporous carbon for electrochemical capacitive energy storage":
      "Shao Hui＃, Wu Yih-Chyng＃, Lin Zifeng*, Taberna Pierre-Louis, Simon Patrice*",
    "MXenes as High-Rate Electrodes for Energy Storage":
      "Lin Zifeng, Shao Hui, Xu Kui, Taberna Pierre-Louis, Simon Patrice*",
    "Electrochemical study of pseudocapacitive behavior of Ti3C2Tx MXene material in aqueous electrolytes":
      "Shao Hui, Wu Yih-Chyng, Lin Zifeng*, Taberna Pierre-Louis, Simon Patrice*",
    "2020 roadmap on two-dimensional materials for energy storage and conversion":
      "Xu Baolin, Qi Shihan, Jin Mengmeng, Cai Xiaoyi, Lai Linfei*, Sun Zhouting, Han Xiaogang*, Lin Zifeng*, Shao Hui*, Peng Peng, Xiang Zhonghua*, ten Elshof Johan E.*, Tan Rou, Liu Chen, Zhang Zhaoxi, Duan Xiaochuan*, Ma Jianmin*",
    "3D Macroscopic Architectures from Self-Assembled MXene Hydrogels":
      "Shang Tongxin＃, Lin Zifeng＃, Qi Changsheng, Liu Xiaochen, Li Pei, Tao Ying*, Wu Zhitan, Li Dewang, Simon Patrice*, Yang Quan-Hong*",
    "Large Intercalation Pseudocapacitance in 2D VO2(B): Breaking through the Kinetic Barrier":
      "Xia Chuan＃, Lin Zifeng＃, Zhou Yungang＃, Zhao Chao, Liang Hanfeng, Rozier Patrick, Wang Zhiguo, Alshareef Husam N.*",
    "Materials for supercapacitors: When Li-ion battery power is not enough":
      "Lin Zifeng, Goikolea Eider, Balducci Andrea, Naoi Katsuhiko, Taberna Pierre-Louis, Salanne Mathieu, Yushin Gleb, Simon Patrice*",
    "Advanced analytical techniques to characterize materials for electrochemical capacitors":
      "Lin Zifeng, Taberna Pierre-Louis, Simon Patrice*",
    "Ultra-high-rate pseudocapacitive energy storage in two-dimensional transition metal carbides":
      "Lukatskaya Maria R.＃, Kota Sankalp＃, Lin Zifeng＃, Zhao Meng-Qiang, Shpigel Netanel, Levi Mikhael D., Halim Joseph, Taberna Pierre-Louis, Barsoum Michel W., Simon Patrice*, Gogotsi Yury*",
    "Electrochemical double layer capacitors: What is next beyond the corner?":
      "Lin Zifeng, Taberna Pierre-Louis, Simon Patrice*",
    "Electrochemical and in-situ X-ray diffraction studies of Ti3C2Tx MXene in ionic liquid electrolyte":
      "Lin Zifeng, Rozier Patrick, Duployer Benjamin, Taberna Pierre-Louis, Anasori Babak, Gogotsi Yury, Simon Patrice*",
    "Capacitance of Ti3C2Tx MXene in ionic liquid electrolyte":
      "Lin Zifeng, Barbara Daffos, Taberna Pierre-Louis, Van Aken Katherine L., Anasori Babak, Gogotsi Yury, Simon Patrice*",
    "Graphene-Based Supercapacitors Using Eutectic Ionic Liquid Mixture Electrolyte":
      "Lin Zifeng, Taberna Pierre-Louis, Simon Patrice*",
  };

  publications.forEach((publication) => {
    publication.authors = publicationAuthors[publication.title] || "";
  });

  const links = [
    {
      label: "Google Scholar",
      href: "https://scholar.google.com/citations?user=gp8iu5cAAAAJ&hl=en",
    },
    {
      label: "Web of Science",
      href: "https://webofscience.clarivate.cn/wos/author/record/J-3628-2017",
    },
  ];

  window.SITE_CONTENT = {
    links,
    publications,
    zh: {
      documentTitle: "林紫锋 | 四川大学材料科学与工程学院",
      languageToggle: "EN",
      nav: [
        ["about", "简介"],
        ["research", "研究方向"],
        ["publications", "通讯/一作论文"],
        ["honors", "项目与荣誉"],
        ["service", "学术任职"],
        ["contact", "联系"],
      ],
      hero: {
        name: "林紫锋",
        title: "四川大学材料科学与工程学院 研究员、博士生导师",
        subtitle: "国家级青年人才 · 四川省杰出青年基金获得者 · 四川省特聘专家",
        summary:
          "长期从事电化学储能器件与关键材料研究，聚焦 MXene 材料制备、电极界面设计和新型电化学储能体系。",
        primaryAction: "下载公开版简历",
        secondaryAction: "查看通讯/一作论文",
      },
      stats: [
        ["40+", "第一/通讯作者论文"],
        ["10+", "授权发明专利"],
        ["3", "国家自然科学基金项目"],
        ["2", "英文专著章节"],
      ],
      about: {
        eyebrow: "个人简介",
        heading: "围绕新型电源材料与化学开展研究",
        paragraphs: [
          "林紫锋，1986 年 10 月生，广东汕尾人。现任四川大学材料科学与工程学院研究员、博士生导师，入选国家级青年人才，获得四川省杰出青年基金和四川省特聘专家等支持。",
          "其研究聚焦超级电容器、锂离子电池、钠离子电池、水系电池等储能器件与关键材料。以通讯作者及第一作者在 Nature Materials、Nature Nanotechnology、Nature Energy、Nature Synthesis、Joule、Nature Communications、Angewandte Chemie International Edition 等期刊发表论文 40+ 篇，参与编写英文专著 2 本，获授权发明专利 10+ 件。",
          "代表性工作包括提出二维 MXene 材料制备新策略，发展电极结构与界面多尺度调控方法，并探索低温、高能量密度和快速反应动力学的新型储能体系。",
        ],
        educationTitle: "教育经历",
        education: [
          ["2013.10 - 2017.06", "法国图卢兹大学 CIRIMAT 研究中心，博士"],
          ["2010.09 - 2013.07", "中国科学院大学 / 中国科学院金属研究所，硕士"],
          ["2006.09 - 2010.07", "武汉科技大学材料与冶金学院，学士"],
        ],
        appointmentsTitle: "工作经历",
        appointments: [
          ["2020.09 - 至今", "四川大学材料科学与工程学院，长聘研究员"],
          ["2018.09 - 2020.09", "四川大学材料科学与工程学院，特聘研究员"],
          ["2017.06 - 2018.07", "法国图卢兹大学材料学院，博士后"],
        ],
      },
      research: {
        eyebrow: "Research",
        heading: "研究方向",
        items: [
          {
            title: "纳米结构材料及电化学储能应用",
            text: "发展二维 MXene、复合电极和功能化纳米材料，提升超级电容器及金属离子电池的容量、倍率和稳定性。",
          },
          {
            title: "电极界面设计及电化学机理研究",
            text: "结合原位表征、电化学分析和界面调控，理解离子传输、限域存储和赝电容反应机制。",
          },
          {
            title: "新型电化学储能体系探索",
            text: "面向低温、快充、高能量密度等场景，探索锂/钠离子、水系、硫基和锌基储能体系。",
          },
        ],
      },
      publications: {
        eyebrow: "Publications",
        heading: "通讯作者或第一作者论文",
        intro:
          "以下列出成果汇总中的通讯作者或第一作者论文（# 为共同第一作者，* 为通讯作者）。完整引用信息可通过 Google Scholar 和 Web of Science 查看。",
        allYears: "全部年份",
        showMore: "显示全部论文",
        showLess: "收起为重点论文",
      },
      honors: {
        eyebrow: "Projects & Honors",
        heading: "项目与荣誉",
        grantsTitle: "主持项目",
        grants: [
          "国家高层次人才特殊支持计划青年人才项目，2024.01 - 2026.12，主持",
          "国家自然科学基金面上项目，2025.01 - 2028.12，主持",
          "国家自然科学基金面上项目，2021.01 - 2024.12，主持",
          "国家自然科学基金青年项目，2020.01 - 2022.12，主持",
          "四川省自然科学基金杰出青年科学基金，2023.01 - 2025.12，主持",
        ],
        awardsTitle: "奖励与荣誉",
        awards: [
          "2025 年中国新型储能材料大会青年科学家奖",
          "2024、2025 Stanford-Elsevier 全球前 2% 科学家榜单",
          "2023 年国家高层次人才特殊支持计划青年人才项目",
          "2021 年英国皇家化学学会 Horizon Prize",
          "2020 年 IFAM 优秀青年科学家奖",
          "2020 年四川省金属学会冶金青年科技奖",
        ],
      },
      service: {
        eyebrow: "Academic Roles",
        heading: "学术任职",
        items: [
          "《Energy Storage Materials》编委",
          "《Nano-Micro Letters》《Materials Research Letters》《中国材料进展》《无机材料学报》等期刊青年编委",
          "《2D Materials》《New Carbon Materials》客座编辑",
          "中国微米纳米技术学会高级会员、中国电工学会高级会员",
        ],
      },
      contact: {
        eyebrow: "Contact",
        heading: "联系方式",
        emailLabel: "邮箱",
        addressLabel: "地址",
        address: "四川省成都市一环路南一段 24 号，四川大学材料科学与工程学院",
        linkTitle: "学术主页",
      },
      footer: "© 2026 林紫锋 · Sichuan University",
    },
    en: {
      documentTitle: "Zifeng Lin | Sichuan University",
      languageToggle: "中文",
      nav: [
        ["about", "About"],
        ["research", "Research"],
        ["publications", "First/Corresponding Publications"],
        ["honors", "Projects & Honors"],
        ["service", "Academic Roles"],
        ["contact", "Contact"],
      ],
      hero: {
        name: "Zifeng Lin",
        title: "Professor, College of Materials Science and Engineering, Sichuan University",
        subtitle: "National Young Talent · Distinguished Young Scholar of Sichuan Province",
        summary:
          "Researching electrochemical energy-storage materials and chemistries, with a focus on MXenes, electrode interfaces, and next-generation storage systems.",
        primaryAction: "Download Public CV",
        secondaryAction: "View First/Corresponding Publications",
      },
      stats: [
        ["40+", "first/corresponding-author papers"],
        ["10+", "authorized patents"],
        ["3", "NSFC projects"],
        ["2", "English book chapters"],
      ],
      about: {
        eyebrow: "About",
        heading: "New materials and chemistries for electrochemical energy storage",
        paragraphs: [
          "Prof. Zifeng Lin is a professor and doctoral supervisor at the College of Materials Science and Engineering, Sichuan University. He is a National Young Talent and a Distinguished Young Scholar of Sichuan Province.",
          "His research focuses on energy-storage devices and key materials for supercapacitors, lithium-ion batteries, sodium-ion batteries, and aqueous batteries. As first or corresponding author, he has published 40+ papers in journals including Nature Materials, Nature Nanotechnology, Nature Energy, Nature Synthesis, Joule, Nature Communications, and Angewandte Chemie International Edition. He has contributed to two English book chapters and holds 10+ authorized invention patents.",
          "His representative contributions include new strategies for two-dimensional MXene synthesis, multiscale regulation of electrode structures and interfaces, and new electrochemical systems for low-temperature, high-energy-density, and fast-kinetics storage.",
        ],
        educationTitle: "Education",
        education: [
          ["2013.10 - 2017.06", "Ph.D., CIRIMAT, University of Toulouse, France"],
          ["2010.09 - 2013.07", "M.S., University of Chinese Academy of Sciences / Institute of Metal Research"],
          ["2006.09 - 2010.07", "B.E., Wuhan University of Science and Technology"],
        ],
        appointmentsTitle: "Appointments",
        appointments: [
          ["2020.09 - Present", "Tenured Professor, Sichuan University"],
          ["2018.09 - 2020.09", "Pre-tenure Professor, Sichuan University"],
          ["2017.06 - 2018.07", "Postdoctoral Researcher, University of Toulouse"],
        ],
      },
      research: {
        eyebrow: "Research",
        heading: "Research Areas",
        items: [
          {
            title: "Nanostructured materials for energy storage",
            text: "Developing MXenes, composite electrodes, and functional nanomaterials for high-capacity, high-rate, and stable storage devices.",
          },
          {
            title: "Electrode interfaces and electrochemical mechanisms",
            text: "Combining in-situ characterization, electrochemical analysis, and interface engineering to understand ion transport and confined charge storage.",
          },
          {
            title: "Emerging electrochemical storage systems",
            text: "Exploring lithium/sodium-ion, aqueous, sulfur-based, and zinc-based systems for low-temperature operation, fast charging, and high energy density.",
          },
        ],
      },
      publications: {
        eyebrow: "Publications",
        heading: "Corresponding or First-Author Publications",
        intro:
          "A complete list of corresponding-author or first-author publications from the achievement summary. # indicates equal contribution and * indicates corresponding author in the source records.",
        allYears: "All years",
        showMore: "Show all publications",
        showLess: "Collapse to highlights",
      },
      honors: {
        eyebrow: "Projects & Honors",
        heading: "Projects & Honors",
        grantsTitle: "Selected Grants",
        grants: [
          "National Young Talent Program of China, 2024.01 - 2026.12, PI",
          "NSFC General Program, 2025.01 - 2028.12, PI",
          "NSFC General Program, 2021.01 - 2024.12, PI",
          "NSFC Young Scientists Fund, 2020.01 - 2022.12, PI",
          "Distinguished Young Scholar Fund of Sichuan Province, 2023.01 - 2025.12, PI",
        ],
        awardsTitle: "Honors",
        awards: [
          "Young Scientist Award, China New Energy Storage Materials Conference, 2025",
          "Stanford-Elsevier World's Top 2% Scientists list, 2024 and 2025",
          "National Young Talent Program of China, 2023",
          "Horizon Prize, Royal Society of Chemistry, 2021",
          "IFAM Young Scientist Award, 2020",
          "Sichuan Provincial Metallurgical Youth Science and Technology Award, 2020",
        ],
      },
      service: {
        eyebrow: "Academic Roles",
        heading: "Academic Roles",
        items: [
          "Editorial board member, Energy Storage Materials",
          "Young editorial board member for Nano-Micro Letters, Materials Research Letters, China Materials Progress, and Journal of Inorganic Materials",
          "Guest editor for 2D Materials and New Carbon Materials",
          "Senior member of professional societies in micro/nano technology and electrical engineering",
        ],
      },
      contact: {
        eyebrow: "Contact",
        heading: "Contact",
        emailLabel: "Email",
        addressLabel: "Address",
        address:
          "College of Materials Science and Engineering, Sichuan University, No. 24 South Section 1, Yihuan Road, Chengdu, Sichuan, China",
        linkTitle: "Academic Profiles",
      },
      footer: "© 2026 Zifeng Lin · Sichuan University",
    },
  };
})();
