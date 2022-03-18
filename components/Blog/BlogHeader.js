// import Image from "next/image";
// import styles from "./BlogHeader.module.css";
// import { AiOutlineEuro } from "react-icons/ai";
// import { IoMegaphoneOutline } from "react-icons/io5";
// import { BsQuestionDiamond } from "react-icons/bs";
// import { MdOutlineChatBubbleOutline } from "react-icons/md";

// export default function BlogHeader({ getBlogs }) {
//   console.log(getBlogs.length);
//   let linkNews = "";
//   let linkReference = "";
//   let linkFunding = "";
//   let linkFaq = "";
//   let textNews = "";
//   let textReference = "";
//   let textFunding = "";
//   let textFaq = "";

//   linkNews = "/magazin/neuigkeiten";
//   linkReference = "/magazin/referenzen";
//   linkFunding = "/magazin/foerderung";
//   linkFaq = "https://www.ari-motors.com/magazin/haeufig_gestellte_fragen";
//   textNews = "Neuigkeiten";
//   textReference = "Referenzen";
//   textFunding = "Förderung";
//   textFaq = "Häufig gestellte Fragen";
//   // switch (props.prefix) {
//   //   case "magazin":
//   //     linkNews = "/magazin/neuigkeiten";
//   //     linkReference = "/magazin/referenzen";
//   //     linkFunding = "/magazin/foerderung";
//   //     linkFaq = "https://www.ari-motors.com/magazin/haeufig_gestellte_fragen";
//   //     textNews = "Neuigkeiten";
//   //     textReference = "Referenzen";
//   //     textFunding = "Förderung";
//   //     textFaq = "Häufig gestellte Fragen";
//   //     break;
//   //   case "en/blog":
//   //     linkNews = "/en/blog/news";
//   //     linkReference = "/en/blog/references";
//   //     linkFunding = "";
//   //     linkFaq = "/en/blog/faq";
//   //     textNews = "News";
//   //     textReference = "References";
//   //     textFunding = "";
//   //     textFaq = "FAQs";
//   //     break;
//   //   case "es/revista":
//   //     linkNews = "/es/revista/noticias";
//   //     linkReference = "/es/revista/resenas";
//   //     linkFunding = "/es/revista/subvenciones";
//   //     linkFaq = "/es/revista/preguntasfrecuentes";
//   //     textNews = "Noticias y novedades";
//   //     textReference = "Reseñas";
//   //     textFunding = "Ayudas y subvenciones";
//   //     textFaq = "Preguntas frecuentes";
//   //     break;
//   //   case "fr/blog":
//   //     linkNews = "/fr/blog/nouveautes";
//   //     linkReference = "/fr/blog/references";
//   //     linkFunding = "/fr/blog/subventions";
//   //     linkFaq = "/fr/blog/faq";
//   //     textNews = "Nouveautés";
//   //     textReference = "Références";
//   //     textFunding = "Subventions";
//   //     textFaq = "FAQ";
//   //     break;
//   //   case "it/blog":
//   //     linkNews = "/it/blog/novita";
//   //     linkReference = "/it/blog/referenze";
//   //     linkFunding = "/it/blog/incentivi";
//   //     linkFaq = "/it/blog/faq";
//   //     textNews = "Novità";
//   //     textReference = "Referenze";
//   //     textFunding = "Incentivi";
//   //     textFaq = "Domande Frequenti";
//   //     break;
//   //   case "cs/magazin":
//   //     linkNews = "/cs/magazin/novinky";
//   //     linkReference = "/cs/magazin/reference";
//   //     linkFunding = "/cs/magazin/dotace";
//   //     linkFaq = "/cs/magazin/casto_kladene_otazky";
//   //     textNews = "Novinky";
//   //     textReference = "Reference";
//   //     textFunding = "Dotace";
//   //     textFaq = "Často kladené otázky";
//   //     break;
//   // }

//   //const posts = posts;

//   const options = { year: "numeric", month: "long", day: "numeric" };

//   const tiles = [];

//   for (let i = 0; i < 4; i++) {
//     tiles.push(
//       <a
//         className={styles.el + i}
//         href={`/magazin/${getBlogs[i].category}/${getBlogs[i].slug}`}
//       >
//         <img className={styles.daImage} src={getBlogs[i].src} />
//         <div className={styles.bottomText}>
//           {getBlogs[i].title}
//           <a className={styles.link}>
//             {getBlogs[i].category} |
//             {new Date(getBlogs[i].publishedAt)
//               .toLocaleDateString
//               // page.locale,
//               // options
//               ()}
//           </a>
//         </div>
//       </a>
//     );
//   }

//   //fix category text
//   const category = [];

//   for (let i = 0; i < 4; i++) {
//     switch (getBlogs[i].category) {
//       case "neuigkeiten":
//         category.push("Neuigkeiten");
//         break;
//       case "foerderung":
//         category.push("Förderung");
//         break;
//       case "haeufig_gestellte_fragen":
//         category.push("Häufig gestellte Fragen");
//         break;
//       case "referenzen":
//         category.push("Referenzen");
//         break;

//       // case "news":
//       //   category.push("News");
//       //   break;
//       // case "subsidies":
//       //   category.push("");
//       //   break;
//       // case "faq" && props.prefix == "/en/blog":
//       //   category.push("FAQs");
//       //   break;
//       // case "references":
//       //   category.push("References");
//       //   break;

//       // case "noticias":
//       //   category.push("Noticias y novedades");
//       //   break;
//       // case "resenas":
//       //   category.push("Reseñas");
//       //   break;
//       // case "subvenciones":
//       //   category.push("Ayudas y subvenciones");
//       //   break;
//       // case "preguntasfrecuentes":
//       //   category.push("Preguntas frecuentes");
//       //   break;

//       // case "nouveautes":
//       //   category.push("Nouveautés");
//       //   break;
//       // case "subventions":
//       //   category.push("Subventions");
//       //   break;
//       // case "faq" && props.prefix == "/fr/blog":
//       //   category.push("FAQ");
//       //   break;
//       // case "references":
//       //   category.push("Références");

//       // case "faq" && props.prefix == "/it/blog":
//       //   category.push("Domande Frequenti");
//       //   break;
//       // case "novita":
//       //   category.push("Novità");
//       //   break;
//       // case "referenze":
//       //   category.push("Referenze");
//       //   break;
//       // case "incentivi":
//       //   category.push("Incentivi");
//       //   break;

//       // case "novinky":
//       //   category.push("Novinky");
//       //   break;
//       // case "dotace":
//       //   category.push("Dotace");
//       //   break;
//       // case "casto_kladene_otazky":
//       //   category.push("Často kladené otázky");
//       //   break;
//       // case "reference":
//       //   category.push("Reference");
//       //   break;
//     }
//   }

//   return (
//     <div className={styles.container}>
//       {tiles}

//       {getBlogs.length > 0 && (
//         <a
//           className={styles.el0}
//           href={`/magazin/${getBlogs[0].category}/${getBlogs[0].slug}`}
//         >
//           <img className={styles.daImage} src={getBlogs[0].src} />
//           <div className={styles.bottomText}>
//             {getBlogs[0].title}
//             <a className={styles.link}>
//               {category[0]} |
//               {new Date(getBlogs[0].publishedAt)
//                 .toLocaleDateString
//                 // page.locale,
//                 // options
//                 ()}
//             </a>
//           </div>
//         </a>
//       )}

//       {getBlogs.length > 1 && (
//         <a
//           className={styles.el1}
//           href={`/magazin/${getBlogs[1].category}/${getBlogs[1].slug}`}
//         >
//           <img className={styles.daImage} src={getBlogs[1].src} />
//           <div className={styles.bottomText}>
//             {getBlogs[1].title}
//             <a className={styles.link}>
//               {category[1]} |
//               {new Date(getBlogs[1].publishedAt)
//                 .toLocaleDateString
//                 // page.locale,
//                 // options
//                 ()}
//             </a>
//           </div>
//         </a>
//       )}
//       {getBlogs.length > 2 && (
//         <a
//           className={styles.el2}
//           href={`/magazin/${getBlogs[2].category}/${getBlogs[2].slug}`}
//         >
//           <img className={styles.daImage} src={getBlogs[2].src} />
//           <div className={styles.bottomText}>
//             {getBlogs[2].title}
//             <a className={styles.link}>
//               {category[2]} |
//               {new Date(getBlogs[2].publishedAt)
//                 .toLocaleDateString
//                 // page.locale,
//                 // options
//                 ()}
//             </a>
//           </div>
//         </a>
//       )}
//       {getBlogs.length > 3 && (
//         <a
//           className={styles.el3}
//           href={`/magazin/${getBlogs[3].category}/${getBlogs[3].slug}`}
//         >
//           <img className={styles.daImage} src={getBlogs[3].src} />
//           <div className={styles.bottomText}>
//             {getBlogs[3].title}
//             <a className={styles.link}>
//               {category[3]} |
//               {new Date(getBlogs[3].publishedAt)
//                 .toLocaleDateString
//                 // page.locale,
//                 // options
//                 ()}
//             </a>
//           </div>
//         </a>
//       )}
//       <div className={styles.el4}>
//         <img src={getBlogs[4].src} />
//         <div className={styles.bottomText}>
//           {getBlogs[4].title}
//           <br />
//           <a className={styles.link}>
//             {" "}
//             {getBlogs[4].category} |{" "}
//             {new Date(getBlogs[4].publishedAt).toLocaleDateString(
//               "de-DE",
//               options
//             )}
//           </a>
//         </div>
//       </div>
//       <div className={styles.linkTile}>
//         {linkReference && (
//           <div className={styles.linkTileLinks}>
//             <MdOutlineChatBubbleOutline size={25} />
//             <a className="mx-6" href={linkReference}>
//               {textReference}
//             </a>
//           </div>
//         )}
//         {linkNews && (
//           <div className={styles.linkTileLinks}>
//             <IoMegaphoneOutline size={25} />
//             <a className="mx-6" href={linkNews}>
//               {textNews}
//             </a>
//           </div>
//         )}
//         {linkFunding && (
//           <div className={styles.linkTileLinks}>
//             <AiOutlineEuro size={25} />
//             <a className="mx-6" href={linkFunding}>
//               {textFunding}
//             </a>
//           </div>
//         )}
//         {linkFaq && (
//           <div className={styles.linkTileLinks}>
//             <BsQuestionDiamond size={25} />
//             <a className="mx-6" href={linkFaq}>
//               {textFaq}
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
