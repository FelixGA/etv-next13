import Image from "next/image";
import styles from "./BlogHeader.module.css";
import { AiOutlineEuro } from "react-icons/ai";
import { IoMegaphoneOutline } from "react-icons/io5";
import { BsQuestionDiamond } from "react-icons/bs";
import { MdOutlineChatBubbleOutline } from "react-icons/md";

export default function BlogHeader(props) {
  let linkNews = "";
  let linkReference = "";
  let linkFunding = "";
  let linkFaq = "";
  let textNews = "";
  let textReference = "";
  let textFunding = "";
  let textFaq = "";

  switch (props.prefix) {
    case "magazin":
      linkNews = "/magazin/neuigkeiten";
      linkReference = "/magazin/referenzen";
      linkFunding = "/magazin/foerderung";
      linkFaq = "https://www.ari-motors.com/magazin/haeufig_gestellte_fragen";
      textNews = "Neuigkeiten";
      textReference = "Referenzen";
      textFunding = "Förderung";
      textFaq = "Häufig gestellte Fragen";
      break;
    // case "en/blog":
    //   linkNews = "/en/blog/news";
    //   linkReference = "/en/blog/references";
    //   linkFunding = "";
    //   linkFaq = "/en/blog/faq";
    //   textNews = "News";
    //   textReference = "References";
    //   textFunding = "";
    //   textFaq = "FAQs";
    //   break;
    // case "es/revista":
    //   linkNews = "/es/revista/noticias";
    //   linkReference = "/es/revista/resenas";
    //   linkFunding = "/es/revista/subvenciones";
    //   linkFaq = "/es/revista/preguntasfrecuentes";
    //   textNews = "Noticias y novedades";
    //   textReference = "Reseñas";
    //   textFunding = "Ayudas y subvenciones";
    //   textFaq = "Preguntas frecuentes";
    //   break;
    // case "fr/blog":
    //   linkNews = "/fr/blog/nouveautes";
    //   linkReference = "/fr/blog/references";
    //   linkFunding = "/fr/blog/subventions";
    //   linkFaq = "/fr/blog/faq";
    //   textNews = "Nouveautés";
    //   textReference = "Références";
    //   textFunding = "Subventions";
    //   textFaq = "FAQ";
    //   break;
    // case "it/blog":
    //   linkNews = "/it/blog/novita";
    //   linkReference = "/it/blog/referenze";
    //   linkFunding = "/it/blog/incentivi";
    //   linkFaq = "/it/blog/faq";
    //   textNews = "Novità";
    //   textReference = "Referenze";
    //   textFunding = "Incentivi";
    //   textFaq = "Domande Frequenti";
    //   break;
    // case "cs/magazin":
    //   linkNews = "/cs/magazin/novinky";
    //   linkReference = "/cs/magazin/reference";
    //   linkFunding = "/cs/magazin/dotace";
    //   linkFaq = "/cs/magazin/casto_kladene_otazky";
    //   textNews = "Novinky";
    //   textReference = "Reference";
    //   textFunding = "Dotace";
    //   textFaq = "Často kladené otázky";
      break;
  }

  const posts = props.props.posts;

  const options = { year: "numeric", month: "long", day: "numeric" };

  const tiles = [];

  // for(let i = 0; i<4; i++){
  //     tiles.push(
  //     <a className={styles.el + i} href={`/${props.prefix}/${posts[i].attributes.category}/${posts[i].attributes.slug}`}>
  //         <img className={styles.daImage} src={posts[i].attributes.previewImage.data.attributes.url}/>
  //         <div className={styles.bottomText}>
  //             {posts[i].attributes.title}
  //             <a className={styles.link}> {posts[i].attributes.category} | {new Date(posts[i].attributes.publishedAt).toLocaleDateString(props.props.page.locale, options)}</a>
  //         </div>
  //     </a>)
  // }

  //fix category text
  const category = [];

  for (let i = 0; i < 4; i++) {
    switch (posts[i].attributes.category) {
      case "neuigkeiten":
        category.push("Neuigkeiten");
        break;
      case "foerderung":
        category.push("Förderung");
        break;
      case "haeufig_gestellte_fragen":
        category.push("Häufig gestellte Fragen");
        break;
      case "referenzen":
        category.push("Referenzen");
        break;

      // case "news":
      //   category.push("News");
      //   break;
      // case "subsidies":
      //   category.push("");
      //   break;
      // case "faq" && props.prefix == "/en/blog":
      //   category.push("FAQs");
      //   break;
      // case "references":
      //   category.push("References");
      //   break;

      // case "noticias":
      //   category.push("Noticias y novedades");
      //   break;
      // case "resenas":
      //   category.push("Reseñas");
      //   break;
      // case "subvenciones":
      //   category.push("Ayudas y subvenciones");
      //   break;
      // case "preguntasfrecuentes":
      //   category.push("Preguntas frecuentes");
      //   break;

      // case "nouveautes":
      //   category.push("Nouveautés");
      //   break;
      // case "subventions":
      //   category.push("Subventions");
      //   break;
      // case "faq" && props.prefix == "/fr/blog":
      //   category.push("FAQ");
      //   break;
      // case "references":
      //   category.push("Références");

      // case "faq" && props.prefix == "/it/blog":
      //   category.push("Domande Frequenti");
      //   break;
      // case "novita":
      //   category.push("Novità");
      //   break;
      // case "referenze":
      //   category.push("Referenze");
      //   break;
      // case "incentivi":
      //   category.push("Incentivi");
      //   break;

      // case "novinky":
      //   category.push("Novinky");
      //   break;
      // case "dotace":
      //   category.push("Dotace");
      //   break;
      // case "casto_kladene_otazky":
      //   category.push("Často kladené otázky");
      //   break;
      // case "reference":
      //   category.push("Reference");
      //   break;
    }
  }

  return (
    <div className={styles.container}>
      {tiles}

      {posts.length > 0 && (
        <a
          className={styles.el0}
          href={`/${props.prefix}/${posts[0].attributes.category}/${posts[0].attributes.slug}`}
        >
          <img
            className={styles.daImage}
            src={posts[0].attributes.previewImage.data.attributes.url}
          />
          <div className={styles.bottomText}>
            {posts[0].attributes.title}
            <a className={styles.link}>
              {category[0]} |{" "}
              {new Date(posts[0].attributes.publishedAt).toLocaleDateString(
                props.props.page.locale,
                options
              )}
            </a>
          </div>
        </a>
      )}
      {posts.length > 1 && (
        <a
          className={styles.el1}
          href={`/${props.prefix}/${posts[1].attributes.category}/${posts[1].attributes.slug}`}
        >
          <img
            className={styles.daImage}
            src={posts[1].attributes.previewImage.data.attributes.url}
          />
          <div className={styles.bottomText}>
            {posts[1].attributes.title}
            <a className={styles.link}>
              {category[1]} |{" "}
              {new Date(posts[1].attributes.publishedAt).toLocaleDateString(
                props.props.page.locale,
                options
              )}
            </a>
          </div>
        </a>
      )}
      {posts.length > 2 && (
        <a
          className={styles.el2}
          href={`/${props.prefix}/${posts[2].attributes.category}/${posts[2].attributes.slug}`}
        >
          <img
            className={styles.daImage}
            src={posts[2].attributes.previewImage.data.attributes.url}
          />
          <div className={styles.bottomText}>
            {props.props.posts[2].attributes.title}
            <a className={styles.link}>
              {category[2]} |{" "}
              {new Date(posts[2].attributes.publishedAt).toLocaleDateString(
                props.props.page.locale,
                options
              )}
            </a>
          </div>
        </a>
      )}
      {posts.length > 3 && (
        <a
          className={styles.el3}
          href={`/${props.prefix}/${posts[3].attributes.category}/${posts[3].attributes.slug}`}
        >
          <img
            className={styles.daImage}
            src={posts[3].attributes.previewImage.data.attributes.url}
          />
          <div className={styles.bottomText}>
            {posts[3].attributes.title}
            <a className={styles.link}>
              {category[3]} |{" "}
              {new Date(posts[3].attributes.publishedAt).toLocaleDateString(
                props.props.page.locale,
                options
              )}
            </a>
          </div>
        </a>
      )}
      {/* <div className={styles.el4}>
                <img src={props.props.posts[4].attributes.previewImage.data.attributes.url}/>
                <div className={styles.bottomText}>
                    {props.props.posts[4].attributes.title}
                    <br/>
                    <a className={styles.link}> {props.props.posts[4].attributes.category} | {new Date(props.props.posts[4].attributes.publishedAt).toLocaleDateString("de-DE", options)}</a>
                </div>
            </div> */}
      <div className={styles.linkTile}>
        {linkReference && (
          <div className={styles.linkTileLinks}>
            <MdOutlineChatBubbleOutline size={25} />
            <a className="mx-6" href={linkReference}>
              {textReference}
            </a>
          </div>
        )}
        {linkNews && (
          <div className={styles.linkTileLinks}>
            <IoMegaphoneOutline size={25} />
            <a className="mx-6" href={linkNews}>
              {textNews}
            </a>
          </div>
        )}
        {linkFunding && (
          <div className={styles.linkTileLinks}>
            <AiOutlineEuro size={25} />
            <a className="mx-6" href={linkFunding}>
              {textFunding}
            </a>
          </div>
        )}
        {linkFaq && (
          <div className={styles.linkTileLinks}>
            <BsQuestionDiamond size={25} />
            <a className="mx-6" href={linkFaq}>
              {textFaq}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
