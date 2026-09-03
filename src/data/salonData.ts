import logoImg from '../assets/images/LOGO.jpg';
import heroVideo from '../assets/images/LANDING PAGE VIDEO.mp4';
import work1Full from '../assets/images/Work done 1.jpg';
import work1Before from '../assets/images/work1_before.jpg';
import work1After from '../assets/images/work1_after.jpg';
import work2Full from '../assets/images/Work done 2.jpg';
import work2Before from '../assets/images/work2_before.jpg';
import work2After from '../assets/images/work2_after.jpg';
import work3Full from '../assets/images/Work done 3.jpg';
import work3Before from '../assets/images/work3_before.jpg';
import work3After from '../assets/images/work3_after.jpg';
import work3Product from '../assets/images/work3_product.jpg';
import work4Full from '../assets/images/Work done 4.jpg';
import work4Before from '../assets/images/work4_before.jpg';
import work4After from '../assets/images/work4_after.jpg';
import { ServiceItem, TransformationItem, SpecialOffer, Testimonial } from '../types';

export const salonAssets = {
  logo: logoImg,
  heroVideo: heroVideo,
  work1: {
    full: work1Full,
    before: work1Before,
    after: work1After,
  },
  work2: {
    full: work2Full,
    before: work2Before,
    after: work2After,
  },
  work3: {
    full: work3Full,
    before: work3Before,
    after: work3After,
    product: work3Product,
  },
  work4: {
    full: work4Full,
    before: work4Before,
    after: work4After,
  },
};

export const salonContact = {
  name: 'Surika Haarstilis & Kleurspesialis',
  salonVenue: 'Reflexions Salon',
  fullName: 'Surika Haarstilis & Kleurspesialis @ Reflexions Salon',
  phone: '083 514 9285',
  phoneClean: '+27835149285',
  email: 'surikasalon28@gmail.com',
  address: 'Oostville Sentrum, H/v Louis Fourie & Garret Str, Winkel Nr.2, Voorbaai, Mosselbaai, 6500',
  addressShort: 'Winkel Nr.2, Oostville Sentrum, Voorbaai, Mosselbaai',
  mapsLink: 'https://maps.google.com/?q=Oostville+Sentrum+Louis+Fourie+Mossel+Bay+South+Africa',
  facebook: 'https://www.facebook.com/profile.php?id=61591472762767&rdid=oFE2kF0T4YLlqQ71&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F14ngsPqH6Hp%2F#',
  taglineAfrikaans: 'Surika bied persoonlike haarkleur, snywerk en behandelings vir pragtige, selfversekerde hare altyd.',
  taglineEnglish: 'Surika offers personalised hair colouring, cutting and treatments for beautiful, confident hair always.',
  hours: {
    tueFri: '08:30 – 17:00',
    sat: '08:30 – 13:00',
    sunMon: 'Gesluit / Closed',
  },
};

export const specialsList: SpecialOffer[] = [
  {
    id: 'sny-blaas',
    title: { af: 'Sny & Blaas', en: 'Cut & Blowdry' },
    discount: '20% AFSLAG',
    quote: { af: 'Voel fris, voel fantasties!', en: 'Feel refreshed, feel fantastic!' },
    description: {
      af: 'Presisie haarsnit aangepas by jou gesigvorm en styl, afgerond met ’n luukse volume-ryke blaas.',
      en: 'Precision haircut customized to your facial profile and lifestyle, finished with a salon-grade blowout.',
    },
    badge: { af: 'Gunsteling', en: 'Favorite' },
  },
  {
    id: 'blaas',
    title: { af: 'Blaas / Styling', en: 'Blowout & Styling' },
    discount: '20% AFSLAG',
    quote: { af: 'Glans, volume en selfvertroue!', en: 'Shine, volume and confidence!' },
    description: {
      af: 'Luukse wasbeurt, kopmassering en glansryke professionele stilering vir enige geleentheid of bederf.',
      en: 'Luxury wash, relaxing scalp massage, and sleek volume blowout for any special event or self-care treat.',
    },
  },
  {
    id: 'kleur-diens',
    title: { af: 'Kleur Diens', en: 'Colour Service' },
    discount: '20% AFSLAG',
    quote: { af: 'Nuwe kleur, nuwe jy!', en: 'New colour, new you!' },
    description: {
      af: 'Hoogtepunte (highlights), volkop kleur, balayage of kreatiewe Elumen tegnieke met sagte Goldwell formulerings.',
      en: 'Highlights, full tint, balayage or creative Goldwell Elumen techniques with caring, gentle formulation.',
    },
    badge: { af: 'Kleurspesialis', en: 'Color Master' },
  },
  {
    id: 'behandelings',
    title: { af: 'Haarbehandelings', en: 'Hair Treatments' },
    discount: '20% AFSLAG',
    quote: { af: 'Gesonde haar is pragtige haar!', en: 'Healthy hair is gorgeous hair!' },
    description: {
      af: 'Diep voedende proteïen- en vogbehandelings om beskadigde hare te herstel en glans te vernuwe.',
      en: 'Deep nourishing protein & moisture restoration treatments that revive damaged, dry locks into silky velvet.',
    },
  },
];

export const specialBonus = {
  title: {
    af: 'GRATIS GESKENK',
    en: 'COMPLIMENTARY GIFT',
  },
  condition: {
    af: 'By enige kleurdiens ter waarde van R800+',
    en: 'With any colour service valued at R800+',
  },
  motto: {
    af: 'Vier Jou • Beloon Jouself • Jy Is Dit Werd',
    en: 'Celebrate You • Reward Yourself • You Deserve It',
  },
  sub: {
    af: 'Augustus is vir vroue – deur vroue! Jou tyd, jou skoonheid, jou maand!',
    en: 'Empowering women with beautiful hair! Your time, your beauty, your radiant confidence!',
  },
};

export const transformations: TransformationItem[] = [
  {
    id: 'work-1',
    title: {
      af: 'Volkop Highlights – Karamell Blonde',
      en: 'Full Head Highlights – Caramel Blonde',
    },
    tagline: {
      af: 'Helderder • Sagter • Pragtig Jy',
      en: 'Brighter • Softer • Beautifully You',
    },
    category: 'highlights',
    beforeText: {
      af: 'Verbleikte, uitgegroeide kleur met dowwe skakerings en verlies aan tekstuur.',
      en: 'Faded, grown-out color with dull tones and lack of multidimensional texture.',
    },
    afterText: {
      af: 'Volkop hoogtepunte in ’n luukse, warm karamel-blonde skakering met pragtige glans en beweging.',
      en: 'Full head highlights in a luminous caramel blonde tone with silky shine and soft bouncy movement.',
    },
    productUsed: 'Goldwell LightDimensions SilkLift & Dualsenses Bond Pro',
    formulaHighlight: {
      af: 'Presisie fyn weef-tegniek met warm karamel & heuning glansers vir ’n naatlose natuurlike oorgang.',
      en: 'Micro-weave foiling with warm caramel & honey glossing for a seamless, sun-kissed natural grow-out.',
    },
    imageSrc: salonAssets.work1.full,
    beforeImageSrc: salonAssets.work1.before,
    afterImageSrc: salonAssets.work1.after,
    promise: {
      af: 'Natuurlike dimensie wat jou gelaat laat straal.',
      en: 'Natural dimension that illuminates your natural facial radiance.',
    },
  },
  {
    id: 'work-2',
    title: {
      af: 'Helder & Sagte Blonde Transformasie',
      en: 'Bright & Seamless Blonde Transformation',
    },
    tagline: {
      af: 'Meer as net ’n kleur, dis ’n transformasie',
      en: 'More than just a colour, it\'s a transformation',
    },
    category: 'bleach-tone',
    beforeText: {
      af: 'Grys uitgroei gemeng met oneweredige koperagtige en verouderde kleurpigmente.',
      en: 'Uneven brassy banding, visible gray root regrowth, and dry fragile ends.',
    },
    afterText: {
      af: 'Opgehelder, sag gemeng en foutloos getoon vir ’n stylvolle, moderne blonde styl.',
      en: 'Brightened, blended & beautifully toned into a sophisticated, healthy blonde with brilliant shine.',
    },
    productUsed: 'Goldwell SilkLift Bleach, Topchic, Colorance & Dualsenses',
    formulaHighlight: {
      af: 'Silklift Bleach gekombineer met Topchic en Colorance semi-permanente toner vir maksimum haarbeskerming.',
      en: 'SilkLift Bleach paired with Topchic base and Colorance gentle toner to maintain hair integrity.',
    },
    imageSrc: salonAssets.work2.full,
    beforeImageSrc: salonAssets.work2.before,
    afterImageSrc: salonAssets.work2.after,
    promise: {
      af: 'Deskundige kleurtegnieke • Premium Goldwell produkte • Stralende resultate.',
      en: 'Expert colour techniques • Premium Goldwell products • Radiant, healthy results.',
    },
  },
  {
    id: 'work-3',
    title: {
      af: 'Goldwell Elumen Violet Violet op Swart Basis',
      en: 'Goldwell Elumen Violet Violet on Black Base',
    },
    tagline: {
      af: 'Violet Energie • Dapper Skoonheid • Jy',
      en: 'Violet Energy • Bold Beauty • You',
    },
    category: 'creative-color',
    beforeText: {
      af: 'Plat, dowwe donker hare sonder lewe of ligweerkaatsing.',
      en: 'Flat, lifeless dark hair with dull porous ends and lack of light reflection.',
    },
    afterText: {
      af: 'Intense, glansryke violet linte wat gloei in die sonlig teen ’n diep fluweelswart agtergrond.',
      en: 'Intense magnetic violet purple ribbons that glow under sunlight against a silky raven black base.',
    },
    productUsed: 'Goldwell ELUMEN VV@all & Elumen Lock Treatment',
    formulaHighlight: {
      af: 'Fisiese ioon-kleur sonder ammoniak of oksidasie vir ongeëwenaarde glans en lewendige duursaamheid.',
      en: 'Non-oxidative ionic high-performance color without ammonia for mirror-like shine and incredible longevity.',
    },
    imageSrc: salonAssets.work3.full,
    beforeImageSrc: salonAssets.work3.before,
    afterImageSrc: salonAssets.work3.after,
    productImageSrc: salonAssets.work3.product,
    promise: {
      af: 'Selfvertroue in elke haarstring met kreatiewe elikserglans.',
      en: 'Confidence in every strand with vibrant, light-catching creative elixir shine.',
    },
  },
  {
    id: 'work-4',
    title: {
      af: 'Lewendige Rooi met Donkerder Basis',
      en: 'Vibrant Red with a Darker Base',
    },
    tagline: {
      af: 'Ryk • Dapper • Pragtig – Kleur wat koppe laat draai!',
      en: 'Rich • Bold • Beautiful – Color that turns heads!',
    },
    category: 'vibrant-red',
    beforeText: {
      af: 'Verbleikte rooibruin tint met dowwe afwerking en duidelike worteluitgroei.',
      en: 'Faded, washed-out burgundy red with visible root regrowth and dull texture.',
    },
    afterText: {
      af: 'Intense robynrooi met donker basis vir ongelooflike diepte, volume en glansende styl.',
      en: 'Vibrant cherry ruby red with an espresso darker root base for multidimensional optical depth.',
    },
    productUsed: 'Goldwell Topchic MaxReds & Colorance Acidic Color Gloss',
    formulaHighlight: {
      af: 'Spesiale pigmente wat rooi pigmente diep in die haarkorteks anker vir langdurige helderheid.',
      en: 'Specialized red dye molecules locked deep into the hair fiber to prevent color fading.',
    },
    imageSrc: salonAssets.work4.full,
    beforeImageSrc: salonAssets.work4.before,
    afterImageSrc: salonAssets.work4.after,
    promise: {
      af: 'Dapper kleur, pragtige jy, met fluweelglans.',
      en: 'Bold color, beautiful you, with velvety shine.',
    },
  },
];

export const servicesList: ServiceItem[] = [
  {
    id: 's-cut-blow',
    category: 'cut',
    name: { af: 'Dames Sny & Blaas Styl', en: 'Ladies Cut & Blowdry' },
    description: {
      af: 'Konsultasie, ontspannende sjampoe met kopmassering, presisie snit en luukse salon blaas.',
      en: 'Detailed consultation, relaxing scalp cleanse, precision haircut and signature salon blowout.',
    },
    price: 'Vanaf R380',
    duration: '60 min',
    featured: true,
  },
  {
    id: 's-blow',
    category: 'styling',
    name: { af: 'Luukse Blaas & Stilering', en: 'Luxury Blowout & Styling' },
    description: {
      af: 'Volledige wasbeurt, opknapper en glansryke blaaswerk vir volume, krul of gladde afwerking.',
      en: 'Complete wash, conditioning and high-shine blowout for bouncy volume or smooth silk finish.',
    },
    price: 'Vanaf R220',
    duration: '45 min',
  },
  {
    id: 's-highlights-full',
    category: 'color',
    name: { af: 'Volkop Highlights / Balayage', en: 'Full Head Highlights / Balayage' },
    description: {
      af: 'Fyn pasgemaakte foelie-tegniek of handgeskilderde balayage met Goldwell SilkLift & toner.',
      en: 'Customized full foil placement or freehand painted balayage with Goldwell SilkLift and gloss toner.',
    },
    price: 'Vanaf R850',
    duration: '150 min',
    featured: true,
    popular: true,
  },
  {
    id: 's-highlights-half',
    category: 'color',
    name: { af: 'Halfkop Highlights & Toning', en: 'Half Head Highlights & Toning' },
    description: {
      af: 'Helder die kroon- en gesigraamwerk op vir ’n natuurlike, verfrissende son-gesoende voorkoms.',
      en: 'Brighten crown, parting and face-framing ribbons for an instant dimensional refresh.',
    },
    price: 'Vanaf R680',
    duration: '120 min',
  },
  {
    id: 's-root-tint',
    category: 'color',
    name: { af: 'Wortel Kleur & Grysdekking', en: 'Root Tint & Grey Coverage' },
    description: {
      af: '100% perfekte grysdekking en natuurlike meng met Goldwell Topchic sagte formules.',
      en: '100% reliable grey coverage and natural root blending with gentle Goldwell Topchic.',
    },
    price: 'Vanaf R520',
    duration: '90 min',
  },
  {
    id: 's-elumen',
    category: 'color',
    name: { af: 'Goldwell Elumen Spesialis Kleur', en: 'Goldwell Elumen Creative Color' },
    description: {
      af: 'Ioon-gebaseerde lewendige kleure (Violet, Koper, Rooi, Blou) met spieëlglans en lang duursaamheid.',
      en: 'Ammonia-free ionic magnet technology delivering luminous fantasy shades with mirror gloss.',
    },
    price: 'Vanaf R920',
    duration: '150 min',
    featured: true,
  },
  {
    id: 's-treatment-deep',
    category: 'treatment',
    name: { af: 'Intensiewe Bond Pro & Keratien Herstel', en: 'Intense Bond Pro & Keratin Repair' },
    description: {
      af: 'Herstel chemies behandelde of brose hare binne minute met gevorderde proteïen bindings.',
      en: 'Strengthens fragile hair bonds and restores elasticity for silky, unbreakable softness.',
    },
    price: 'Vanaf R280',
    duration: '30 min',
  },
  {
    id: 's-gent-cut',
    category: 'cut',
    name: { af: 'Mans Snit & Baard Netjiesmaak', en: 'Gents Cut & Clean Up' },
    description: {
      af: 'Skerp stylering, oor- en nekhare skoonmaak en verfrissende wasbeurt.',
      en: 'Tailored men\'s scissor & clipper haircut with refreshing scalp rinse and styling.',
    },
    price: 'Vanaf R200',
    duration: '35 min',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Anelise van der Merwe',
    role: { af: 'Kliënt al 3 jaar • Mosselbaai', en: 'Client for 3 years • Mossel Bay' },
    service: { af: 'Volkop Highlights & Elumen', en: 'Full Highlights & Elumen' },
    comment: {
      af: 'Surika is sonder twyfel die beste kleurspesialis in Mosselbaai! My hare was dof en breekbaar, maar sy het my blonde kleur so sagkens en mooi gedoen. Ek kry daagliks komplimente.',
      en: 'Surika is without doubt the top colour specialist in Mossel Bay! My hair was dull and fragile, but she transformed it so gently. I receive compliments every single day.',
    },
    rating: 5,
  },
  {
    id: 't-2',
    name: 'Chantal Du Plessis',
    role: { af: 'Gereelde besoeker • Hartenbos', en: 'Regular client • Hartenbos' },
    service: { af: 'Elumen Violet & Stylering', en: 'Elumen Violet & Styling' },
    comment: {
      af: 'Die Elumen Violet wat Surika op my swart hare gedoen het is asemrowend! Dit blink soos sy en beskadig glad nie my hare nie. Die atmosfeer by Reflexions Salon is altyd warm en rustig.',
      en: 'The Elumen Violet Surika applied to my dark hair is pure magic! It shines like glass without any damage. Reflexions Salon has the friendliest, most relaxing vibe.',
    },
    rating: 5,
  },
  {
    id: 't-3',
    name: 'Marietjie Coetzee',
    role: { af: 'Kliënt • Dana Bay', en: 'Client • Dana Bay' },
    service: { af: 'Sny & Blaas + Behandeling', en: 'Cut & Blow + Deep Treatment' },
    comment: {
      af: 'Surika luister werklik na wat jy wil hê en gee eerlike, professionele raad. Sy verstaan hoe om haartekstuur te laat herleef. Ek stap elke keer soos ’n nuwe mens uit!',
      en: 'Surika truly listens to what you desire and provides honest, master advice. She understands hair physics completely. I walk out feeling like royalty every time!',
    },
    rating: 5,
  },
];

export const faqs = [
  {
    question: {
      af: 'Hoekom gebruik Surika Goldwell haarkleurstelsels?',
      en: 'Why does Surika use Goldwell hair colour systems?',
    },
    answer: {
      af: 'Goldwell is wêreldwyd bekend vir die sagste verligters (SilkLift), kleurryke Elumen sonder oksidasie, en ongeëwenaarde glans. Dit bewaar die natuurlike integriteit van jou hare terwyl dit intense, duursame kleur lewer.',
      en: 'Goldwell is celebrated globally for its protective lighteners (SilkLift), ammonia-free ionic Elumen pigments, and unmatched luster. It shields hair health while delivering radiant, long-lasting tones.',
    },
  },
  {
    question: {
      af: 'Waar presies is die salon geleë in Mosselbaai?',
      en: 'Where exactly is the salon located in Mossel Bay?',
    },
    answer: {
      af: 'Surika werk by Reflexions Salon binne Oostville Sentrum, op die hoek van Louis Fourie & Garret Straat, Winkel Nr.2, Voorbaai, Mosselbaai (baie naby aan Langeberg Mall en gerieflike gratis parkering reg voor die deur).',
      en: 'Surika is situated inside Reflexions Salon at Oostville Sentrum, corner of Louis Fourie & Garret Street, Shop No.2, Voorbaai, Mossel Bay (conveniently close to Langeberg Mall with ample free doorstep parking).',
    },
  },
  {
    question: {
      af: 'Hoe bespreek ek ’n afspraak by Surika?',
      en: 'How do I book an appointment with Surika?',
    },
    answer: {
      af: 'Jy kan direk op WhatsApp boodskap stuur na 083 514 9285 deur die groen knoppie op hierdie webtuiste te druk, of skakel ons gerus. Ons bespreek graag jou verlangde diens en tydgleuf.',
      en: 'You can directly send a WhatsApp message to 083 514 9285 using the quick booking buttons on this website, or give us a phone call. We gladly schedule your preferred slot.',
    },
  },
  {
    question: {
      af: 'Is konsultasies beskikbaar voor groot kleurveranderinge?',
      en: 'Are consultations available before major color changes?',
    },
    answer: {
      af: 'Ja beslis! Vir dramatiese transformasies, donker na blond, of kreatiewe Elumen kleure, doen Surika graag ’n deeglike voor-konsultasie en string-toets sodat jou hare gesond bly.',
      en: 'Absolutely! For dramatic transformations, black to blonde, or vivid Elumen shades, Surika performs personalized strand assessments to ensure ultimate hair safety.',
    },
  },
];
