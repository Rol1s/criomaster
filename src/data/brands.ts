import type { Brand } from '@/types';

export const brands: Brand[] = [
  {
    slug: 'lg',
    name: 'LG',
    country: 'Южная Корея',
    description:
      'Холодильники LG отличаются инверторным линейным компрессором и системой DoorCooling+. Наиболее распространённые поломки связаны с платой управления, вентилятором системы No Frost и утечкой фреона в запененной части корпуса. Наши мастера имеют опыт работы со всеми линейками LG, включая модели с функцией InstaView.',
    commonIssues: [
      'Выход из строя линейного инверторного компрессора',
      'Намерзание льда в морозильной камере (неисправность системы No Frost)',
      'Ошибки на дисплее (dH, Er IF, Er SS)',
      'Утечка фреона в запененной части',
      'Шум вентилятора',
    ],
    popularModels: ['LG GA-B509CQTL', 'LG GC-B247JMUV', 'LG GR-H802HMHZ', 'LG GA-B459SMHZ'],
    repairFeatures:
      'При ремонте холодильников LG особое внимание уделяется диагностике инверторной платы и линейного компрессора. Мы используем оригинальные диагностические коды LG для точного определения неисправности.',
    priceFrom: 1500,
    relatedServices: ['zamena-kompressora', 'remont-platy-upravleniya', 'remont-no-frost', 'zapravka-freonom'],
    metaTitle: 'Ремонт холодильников LG в Москве — от 1 500 ₽ | КриоМастер',
    metaDescription:
      'Профессиональный ремонт холодильников LG на дому в Москве. Диагностика бесплатно. Оригинальные запчасти. Гарантия 12 месяцев.',
  },
  {
    slug: 'samsung',
    name: 'Samsung',
    country: 'Южная Корея',
    description:
      'Холодильники Samsung оснащены цифровым инверторным компрессором с технологией Twin Cooling Plus. Частые проблемы: обмерзание испарителя, выход из строя платы управления, утечка фреона. Мы обслуживаем все модели Samsung, включая French Door и Side-by-Side.',
    commonIssues: [
      'Обмерзание задней стенки (неисправность оттайки)',
      'Утечка фреона в районе испарителя',
      'Неисправность платы инверторного управления',
      'Поломка льдогенератора',
      'Ошибки 5E, 1E, 22E на дисплее',
    ],
    popularModels: ['Samsung RB37A5200SA', 'Samsung RT43K6000S8', 'Samsung RS62R5031B4', 'Samsung RB34T670FBN'],
    repairFeatures:
      'Ремонт холодильников Samsung требует знания специфики инверторного управления и системы Twin Cooling. Мы работаем с сервисными бюллетенями Samsung для устранения типовых заводских дефектов.',
    priceFrom: 1500,
    relatedServices: ['zamena-kompressora', 'remont-no-frost', 'remont-platy-upravleniya', 'zapravka-freonom'],
    metaTitle: 'Ремонт холодильников Samsung в Москве — от 1 500 ₽ | КриоМастер',
    metaDescription:
      'Ремонт холодильников Samsung с гарантией. Устранение намерзания, замена компрессора, ремонт плат. Бесплатная диагностика.',
  },
  {
    slug: 'bosch',
    name: 'Bosch',
    country: 'Германия',
    description:
      'Холодильники Bosch — эталон немецкого качества с системой VitaFresh и технологией SuperCooling. Несмотря на высокую надёжность, с годами возникают проблемы с термостатом, уплотнителями и электроникой. Наши специалисты имеют сертификаты для работы с техникой BSH.',
    commonIssues: [
      'Неисправность термостата или электронного блока',
      'Износ уплотнителя двери',
      'Шумная работа компрессора',
      'Засор дренажной системы',
      'Некорректная работа системы No Frost',
    ],
    popularModels: ['Bosch KGN39VL25R', 'Bosch KGN56VI20R', 'Bosch KIS87AF30R', 'Bosch KGN39XI28R'],
    repairFeatures:
      'При ремонте техники Bosch мы используем запчасти, рекомендованные производителем. Знание сервисных кодов и доступ к технической документации BSH обеспечивают высокую точность диагностики.',
    priceFrom: 1800,
    relatedServices: ['zamena-termostata', 'ustranenie-protechek', 'remont-no-frost', 'remont-platy-upravleniya'],
    metaTitle: 'Ремонт холодильников Bosch в Москве — от 1 800 ₽ | КриоМастер',
    metaDescription:
      'Ремонт холодильников Bosch на дому. Оригинальные запчасти BSH. Бесплатный выезд и диагностика. Гарантия до 12 месяцев.',
  },
  {
    slug: 'indesit',
    name: 'Indesit',
    country: 'Италия',
    description:
      'Indesit — один из самых популярных бюджетных брендов. Холодильники этой марки надёжны, но при длительной эксплуатации часто требуют замены термостата, устранения утечек и обслуживания дренажной системы. Мы ремонтируем все модели Indesit, включая серии BI и DS.',
    commonIssues: [
      'Утечка фреона в контуре обогрева двери',
      'Неисправность термостата (компрессор не отключается)',
      'Засор капиллярной трубки',
      'Износ уплотнителя',
      'Шум при работе компрессора',
    ],
    popularModels: ['Indesit DS 4200 W', 'Indesit BI 18 NF', 'Indesit ITR 5200 W', 'Indesit EF 20'],
    repairFeatures:
      'Ремонт холодильников Indesit часто связан с типовыми проблемами линейки. Знание слабых мест конкретных моделей позволяет нам быстро и точно ставить диагноз.',
    priceFrom: 1200,
    relatedServices: ['zapravka-freonom', 'zamena-termostata', 'ustranenie-protechek', 'zamena-kompressora'],
    metaTitle: 'Ремонт холодильников Indesit в Москве — от 1 200 ₽ | КриоМастер',
    metaDescription:
      'Ремонт холодильников Indesit: замена термостата, устранение утечек, заправка фреоном. Быстрый выезд. Гарантия.',
  },
  {
    slug: 'liebherr',
    name: 'Liebherr',
    country: 'Германия / Австрия',
    description:
      'Liebherr — премиальные холодильники с технологиями BioFresh и DuoCooling. Требуют квалифицированного подхода к ремонту из-за сложной электроники и нестандартных компонентов. Наши инженеры проходили обучение по технике Liebherr.',
    commonIssues: [
      'Неисправность электронного блока управления',
      'Выход из строя компрессора (SECOP / Embraco)',
      'Проблемы с системой DuoCooling',
      'Ошибки на дисплее',
      'Утечка хладагента R600a',
    ],
    popularModels: ['Liebherr CNef 4815', 'Liebherr CBNef 5735', 'Liebherr CTPesf 3016', 'Liebherr IKB 3560'],
    repairFeatures:
      'Ремонт Liebherr требует использования специализированного диагностического оборудования и оригинальных запчастей. Мы имеем прямой доступ к каталогу комплектующих Liebherr.',
    priceFrom: 2000,
    relatedServices: ['remont-platy-upravleniya', 'zamena-kompressora', 'zapravka-freonom', 'remont-no-frost'],
    metaTitle: 'Ремонт холодильников Liebherr в Москве — от 2 000 ₽ | КриоМастер',
    metaDescription:
      'Ремонт премиальных холодильников Liebherr. Сертифицированные мастера. Оригинальные запчасти. Гарантия 12 месяцев.',
  },
  {
    slug: 'atlant',
    name: 'ATLANT',
    country: 'Беларусь',
    description:
      'ATLANT — надёжные холодильники отечественного производства с простой конструкцией и доступными запчастями. Типичные поломки: выход из строя пускозащитного реле, утечка фреона, засор капиллярной трубки. Ремонт, как правило, занимает не более 1-2 часов.',
    commonIssues: [
      'Выход из строя пускозащитного реле',
      'Утечка фреона по сварным швам',
      'Засор капиллярной трубки',
      'Неисправность термостата',
      'Износ уплотнителя двери',
    ],
    popularModels: ['ATLANT ХМ 4208-000', 'ATLANT ХМ 4426-009 ND', 'ATLANT МХ 2822-80', 'ATLANT ХМ 4625-101'],
    repairFeatures:
      'Холодильники ATLANT отличаются ремонтопригодностью и доступностью запчастей. Это позволяет выполнить большинство ремонтов за один визит мастера.',
    priceFrom: 1000,
    relatedServices: ['zapravka-freonom', 'zamena-kompressora', 'zamena-termostata', 'ustranenie-protechek'],
    metaTitle: 'Ремонт холодильников ATLANT в Москве — от 1 000 ₽ | КриоМастер',
    metaDescription:
      'Ремонт холодильников ATLANT на дому. Доступные цены, быстрый выезд, гарантия. Все запчасти в наличии.',
  },
  {
    slug: 'beko',
    name: 'Beko',
    country: 'Турция',
    description:
      'Beko — популярный бренд среднего ценового сегмента с технологиями HarvestFresh и NeoFrost Dual Cooling. Частые неисправности связаны с системой No Frost, электроникой и утечками хладагента. Ремонтируем все актуальные модели.',
    commonIssues: [
      'Намерзание льда (неисправность оттайки)',
      'Шумная работа вентилятора',
      'Неисправность электронного модуля',
      'Утечка фреона',
      'Проблемы с дренажной системой',
    ],
    popularModels: ['Beko RCNK356E20BW', 'Beko B3RCNK402HX', 'Beko CNMV5335EA0W', 'Beko RDSK240M00W'],
    repairFeatures:
      'Ремонт холодильников Beko включает работу с системой NeoFrost и электронными модулями управления. Используем сертифицированные аналоги запчастей.',
    priceFrom: 1200,
    relatedServices: ['remont-no-frost', 'zapravka-freonom', 'remont-platy-upravleniya', 'ustranenie-protechek'],
    metaTitle: 'Ремонт холодильников Beko в Москве — от 1 200 ₽ | КриоМастер',
    metaDescription:
      'Ремонт холодильников Beko с гарантией 12 месяцев. Устранение намерзания, замена вентилятора, ремонт электроники.',
  },
  {
    slug: 'whirlpool',
    name: 'Whirlpool',
    country: 'США',
    description:
      'Whirlpool — один из крупнейших мировых производителей бытовой техники. Холодильники этой марки отличаются технологией 6th Sense и системой Total No Frost. Наиболее частые проблемы: некорректная работа платы управления, утечка хладагента, выход из строя компрессора.',
    commonIssues: [
      'Неисправность платы 6th Sense',
      'Утечка фреона',
      'Выход из строя компрессора Embraco',
      'Проблемы с системой Total No Frost',
      'Засор дренажного канала',
    ],
    popularModels: ['Whirlpool WTNF 902 W', 'Whirlpool WQ9 B2L', 'Whirlpool BLF 8121 OX', 'Whirlpool W7 921O OX'],
    repairFeatures:
      'При ремонте Whirlpool мы учитываем специфику системы 6th Sense и используем диагностические режимы, заложенные производителем.',
    priceFrom: 1500,
    relatedServices: ['remont-platy-upravleniya', 'zapravka-freonom', 'zamena-kompressora', 'remont-no-frost'],
    metaTitle: 'Ремонт холодильников Whirlpool в Москве — от 1 500 ₽ | КриоМастер',
    metaDescription:
      'Ремонт холодильников Whirlpool на дому в Москве. Диагностика 6th Sense, замена компрессора, устранение утечек.',
  },
  {
    slug: 'electrolux',
    name: 'Electrolux',
    country: 'Швеция',
    description:
      'Electrolux — шведский бренд с технологиями TwinTech и CustomFlex. Холодильники отличаются тихой работой и энергоэффективностью. Среди характерных поломок: неисправность электронного модуля, проблемы с системой NoFrost, износ уплотнителя.',
    commonIssues: [
      'Неисправность электронного модуля управления',
      'Обмерзание испарителя',
      'Шум компрессора',
      'Износ дверного уплотнителя',
      'Поломка вентилятора морозильной камеры',
    ],
    popularModels: ['Electrolux EN3854MOX', 'Electrolux ENN92841AW', 'Electrolux ERF4162AOX', 'Electrolux EAL6140WOU'],
    repairFeatures:
      'Ремонт Electrolux требует знания системы TwinTech с двумя независимыми контурами охлаждения. Наши инженеры работают с технической документацией Electrolux.',
    priceFrom: 1500,
    relatedServices: ['remont-platy-upravleniya', 'remont-no-frost', 'zamena-kompressora', 'ustranenie-protechek'],
    metaTitle: 'Ремонт холодильников Electrolux в Москве — от 1 500 ₽ | КриоМастер',
    metaDescription:
      'Профессиональный ремонт холодильников Electrolux. Работа с системой TwinTech. Гарантия 12 месяцев.',
  },
  {
    slug: 'haier',
    name: 'Haier',
    country: 'Китай',
    description:
      'Haier — крупнейший мировой производитель бытовой техники, чьи холодильники отличаются технологией ABT-антибактериальной обработки и инверторными компрессорами. Типичные проблемы: сбои электроники, неисправность инверторного модуля, утечка хладагента.',
    commonIssues: [
      'Неисправность инверторной платы',
      'Утечка фреона R600a',
      'Обмерзание испарителя (Total No Frost)',
      'Ошибки на дисплее',
      'Шумная работа при первичном запуске',
    ],
    popularModels: ['Haier C2F637CWRG', 'Haier CEF537ASD', 'Haier HTF-610DM7RU', 'Haier A2F635CWMV'],
    repairFeatures:
      'Ремонт холодильников Haier включает работу с инверторными системами последнего поколения. Мы используем оригинальные комплектующие Haier.',
    priceFrom: 1500,
    relatedServices: ['remont-platy-upravleniya', 'zapravka-freonom', 'remont-no-frost', 'zamena-kompressora'],
    metaTitle: 'Ремонт холодильников Haier в Москве — от 1 500 ₽ | КриоМастер',
    metaDescription:
      'Ремонт холодильников Haier на дому. Работа с инверторными системами. Оригинальные запчасти. Гарантия 12 месяцев.',
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
