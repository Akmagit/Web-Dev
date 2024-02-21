export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    image: string;
    addressUrl: string;
    link: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Смарт-часы Apple Watch',
      price: 160739,
      description: 'Смарт-часы Apple Watch SE 2nd Gen 40 мм черный',
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/h6c/62711069311006/apple-watch-se-2nd-generation-40-mm-cernyj-106362731-1.jpg",
      addresUrl: 'https://kaspi.kz/shop/p/apple-watch-se-2nd-gen-40-mm-chernyi-106362731/?c=196220100#!/item',
      link: "https://t.me/c/1893348409/2"
    },
    {
      id: 2,
      name: 'Наушники',
      price: 23998,
      description: 'Наушники JBL Tune 510BT белый',
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h52/33973207105566/jbl-tune-510bt-belyj-101420096-1-Container.jpg",
      addresUrl: 'https://kaspi.kz/shop/p/jbl-tune-510bt-belyi-101420096/?c=196220100#!/item',
      link: "https://t.me/c/1893348409/3"
    },
    {
      id: 3,
      name: 'Морозильник',
      price: 157758,
      description: 'Морозильник Atlant М 7184-003 240 л белый',
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h25/h4e/49296067297310/atlant-m-7184-003-belyj-2800007-1-Container.jpg",
      addresUrl: 'https://kaspi.kz/shop/p/atlant-m-7184-003-240-l-belyi-2800007/?c=196220100#!/item',
      link: "https://t.me/c/1893348409/4"
    },
    {
      id: 4,
      name: 'Пылесос',
      price: 69400,
      description: 'Пылесос Karcher VC 3 Premium белый',
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/h21/31633788436510/karcher-vc-3-premium-belyj-3700709-1-Container.jpg",
      addresUrl: 'https://kaspi.kz/shop/p/karcher-vc-3-premium-belyi-3700709/?c=196220100#!/item',
      link: "https://t.me/c/1893348409/5"
    },
    {
      id: 5,
      name: 'Смартфон Samsung Galaxy',
      price: 104635,
      description: 'Смартфон Samsung Galaxy A23 6 ГБ/128 ГБ черный',
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg",
      addresUrl: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=196220100#!/item',
      link: "https://t.me/c/1893348409/6"
    },
    {
      id: 6,
      name: 'Смартфон Apple iPhone 13',
      price: 381895,
      description: 'Смартфон Apple iPhone 13 128Gb черный',
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h49/hc0/46392662523934/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg",
      addresUrl: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=196220100#!/item',
      link: "https://t.me/c/1893348409/8"
    },
    {
      id: 7,
      name: 'Смартфон Apple iPhone 14 Pro',
      price: 647000,
      description: 'Смартфон Apple iPhone 14 Pro 256Gb фиолетовый',
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4d/h62/62948396728350/apple-iphone-14-pro-128gb-fioletovyj-106363319-1.jpg",
      addresUrl: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-256gb-fioletovyi-106363319/?c=196220100#!/item',
      link: "https://t.me/c/1893348409/9"
    },
    {
      id: 8,
      name: 'Ноутбук Apple MacBook Air',
      price: 498977,
      description: 'Ноутбук Apple MacBook Air 13 MGND3 золотистый',
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h54/33286638272542/apple-macbook-air-2020-13-3-mgnd3-zolotistyj-100797576-1-Container.jpg",
      addresUrl: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgnd3-zolotistyi-100797576/?c=196220100#!/item',
      link: "https://t.me/c/1893348409/10"
    },
    {
      id: 9,
      name: 'Планшет Apple iPad',
      price: 159990,
      description: 'Планшет Apple iPad 2021 10.2 64Gb Wi-Fi серый',
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha9/h54/48110926659614/apple-ipad-2021-wi-fi-64gb-seryj-102301598-1-Container.jpg",
      addresUrl: 'https://kaspi.kz/shop/p/apple-ipad-2021-10-2-64gb-wi-fi-seryi-102301598/?c=196220100#!/item',
      link: "https://t.me/c/1893348409/12"
    },
    {
      id: 10,
      name: 'Кухонный гарнитур ELEGANT TAPESTRY',
      price: 392498 ,
      description: 'Кухонный гарнитур ELEGANT TAPESTRY Виола 3.0 бежевый-белый',
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1d/h6e/46894247870494/elegant-tapestry-viola-3-0-102745716-1.jpg",
      addresUrl: 'https://kaspi.kz/shop/p/elegant-tapestry-viola-3-0-bezhevyi-belyi-102745716/?c=196220100#!/item',
      link: "hhttps://t.me/c/1893348409/13"
    },
  ];
  
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */