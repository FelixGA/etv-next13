import Head from "../components/core/Head";
import getContent from "/utils/getContent";
import { useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
export default function datenschutzerklaerung(props) {
  //   const [getContent, SetGetContent] = useState(props.context);
  return (
    <div className="flex flex-col justify-between mx-6 py-6 text-center text-sm leading-8 bg-grey-lightest lg:mx-36 lg:pl-16 lg:text-2xl lg:h-screen lg:text-left 2xl:mx-72">
      <Head page={props.page} />
      {/* <p>
        Datenschutzerklärung Einleitung Mit der folgenden Datenschutzerklärung
        möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen
        Daten (nachfolgend auch kurz als „Daten“ bezeichnet) wir zu welchen
        Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt
        für alle von uns durchgeführten Verarbeitungen personenbezogener Daten,
        sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere
        auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer
        Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend
        zusammenfassend bezeichnet als „Onlineangebot“). Die verwendeten
        Begriffe sind nicht geschlechtsspezifisch. Stand: 1. März 2021
        Inhaltsübersicht Einleitung Verantwortlicher Übersicht der
        Verarbeitungen Maßgebliche Rechtsgrundlagen Sicherheitsmaßnahmen
        Übermittlung von personenbezogenen Daten Einsatz von Cookies
        Bereitstellung des Onlineangebotes und Webhosting Kontaktaufnahme
        Webanalyse, Monitoring und Optimierung Änderung und Aktualisierung der
        Datenschutzerklärung Rechte der betroffenen Personen
        Begriffsdefinitionen Verantwortlicher „Car Compare UG“ i.G. Paul Thiede
        Ernst-Mey-Str. 15 04229 Leipzig E-Mail-Adresse:
        Info@elektrotransportervergleich.de. Übersicht der Verarbeitungen Die
        nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die
        Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen
        Personen. Arten der verarbeiteten Daten Bestandsdaten (z.B. Namen,
        Adressen). Inhaltsdaten (z.B. Eingaben in Onlineformularen).
        Kontaktdaten (z.B. E-Mail, Telefonnummern). Meta-/Kommunikationsdaten
        (z.B. Geräte-Informationen, IP-Adressen). Nutzungsdaten (z.B. besuchte
        Webseiten, Interesse an Inhalten, Zugriffszeiten). Kategorien
        betroffener Personen Kommunikationspartner. Nutzer (z.B.
        Webseitenbesucher, Nutzer von Onlinediensten). Zwecke der Verarbeitung
        Kontaktanfragen und Kommunikation. Profile mit nutzerbezogenen
        Informationen (Erstellen von Nutzerprofilen). Reichweitenmessung (z.B.
        Zugriffsstatistiken, Erkennung wiederkehrender Besucher). Maßgebliche
        Rechtsgrundlagen Im Folgenden erhalten Sie eine Übersicht der
        Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogenen Daten
        verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen
        der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder
        Sitzland gelten können. Sollten ferner im Einzelfall speziellere
        Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der
        Datenschutzerklärung mit. Einwilligung (Art. 6 Abs. 1 S. 1 lit. a.
        DSGVO) – Die betroffene Person hat ihre Einwilligung in die Verarbeitung
        der sie betreffenden personenbezogenen Daten für einen spezifischen
        Zweck oder mehrere bestimmte Zwecke gegeben. Vertragserfüllung und
        vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b. DSGVO) – Die
        Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei
        die betroffene Person ist, oder zur Durchführung vorvertraglicher
        Maßnahmen erforderlich, die auf Anfrage der betroffenen Person erfolgen.
        Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO) – Die
        Verarbeitung ist zur Wahrung der berechtigten Interessen des
        Verantwortlichen oder eines Dritten erforderlich, sofern nicht die
        Interessen oder Grundrechte und Grundfreiheiten der betroffenen Person,
        die den Schutz personenbezogener Daten erfordern, überwiegen. Nationale
        Datenschutzregelungen in Deutschland: Zusätzlich zu den
        Datenschutzregelungen der Datenschutz-Grundverordnung gelten nationale
        Regelungen zum Datenschutz in Deutschland. Hierzu gehört insbesondere
        das Gesetz zum Schutz vor Missbrauch personenbezogener Daten bei der
        Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
        insbesondere Spezialregelungen zum Recht auf Auskunft, zum Recht auf
        Löschung, zum Widerspruchsrecht, zur Verarbeitung besonderer Kategorien
        personenbezogener Daten, zur Verarbeitung für andere Zwecke und zur
        Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall
        einschließlich Profiling. Des Weiteren regelt es die Datenverarbeitung
        für Zwecke des Beschäftigungsverhältnisses (§ 26 BDSG), insbesondere im
        Hinblick auf die Begründung, Durchführung oder Beendigung von
        Beschäftigungsverhältnissen sowie die Einwilligung von Beschäftigten.
        Ferner können Landesdatenschutzgesetze der einzelnen Bundesländer zur
        Anwendung gelangen. Sicherheitsmaßnahmen Wir treffen nach Maßgabe der
        gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der
        Implementierungskosten und der Art, des Umfangs, der Umstände und der
        Zwecke der Verarbeitung sowie der unterschiedlichen
        Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der Rechte
        und Freiheiten natürlicher Personen geeignete technische und
        organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau
        zu gewährleisten. Zu den Maßnahmen gehören insbesondere die Sicherung
        der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
        Kontrolle des physischen und elektronischen Zugangs zu den Daten als
        auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der
        Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir
        Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, die
        Löschung von Daten und Reaktionen auf die Gefährdung der Daten
        gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener
        Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software
        sowie Verfahren entsprechend dem Prinzip des Datenschutzes, durch
        Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.
        SSL-Verschlüsselung (https): Um Ihre via unser Online-Angebot
        übermittelten Daten zu schützen, nutzen wir eine SSL-Verschlüsselung.
        Sie erkennen derart verschlüsselte Verbindungen an dem Präfix https://
        in der Adresszeile Ihres Browsers. Übermittlung von personenbezogenen
        Daten Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt
        es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich
        selbstständige Organisationseinheiten oder Personen übermittelt oder sie
        ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten
        können z.B. mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von
        Diensten und Inhalten, die in eine Webseite eingebunden werden, gehören.
        In solchen Fall beachten wir die gesetzlichen Vorgaben und schließen
        insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz
        Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab. Einsatz von
        Cookies Cookies sind Textdateien, die Daten von besuchten Websites oder
        Domains enthalten und von einem Browser auf dem Computer des Benutzers
        gespeichert werden. Ein Cookie dient in erster Linie dazu, die
        Informationen über einen Benutzer während oder nach seinem Besuch
        innerhalb eines Onlineangebotes zu speichern. Zu den gespeicherten
        Angaben können z.B. die Spracheinstellungen auf einer Webseite, der
        Loginstatus, ein Warenkorb oder die Stelle, an der ein Video geschaut
        wurde, gehören. Zu dem Begriff der Cookies zählen wir ferner andere
        Technologien, die die gleichen Funktionen wie Cookies erfüllen (z.B.,
        wenn Angaben der Nutzer anhand pseudonymer Onlinekennzeichnungen
        gespeichert werden, auch als „Nutzer-IDs“ bezeichnet) Die folgenden
        Cookie-Typen und Funktionen werden unterschieden: Temporäre Cookies
        (auch: Session- oder Sitzungs-Cookies): Temporäre Cookies werden
        spätestens gelöscht, nachdem ein Nutzer ein Online-Angebot verlassen und
        seinen Browser geschlossen hat. Permanente Cookies: Permanente Cookies
        bleiben auch nach dem Schließen des Browsers gespeichert. So kann
        beispielsweise der Login-Status gespeichert oder bevorzugte Inhalte
        direkt angezeigt werden, wenn der Nutzer eine Website erneut besucht.
        Ebenso können die Interessen von Nutzern, die zur Reichweitenmessung
        oder zu Marketingzwecken verwendet werden, in einem solchen Cookie
        gespeichert werden. First-Party-Cookies: First-Party-Cookies werden von
        uns selbst gesetzt. Third-Party-Cookies (auch: Drittanbieter-Cookies):
        Drittanbieter-Cookies werden hauptsächlich von Werbetreibenden (sog.
        Dritten) verwendet, um Benutzerinformationen zu verarbeiten. Notwendige
        (auch: essentielle oder unbedingt erforderliche) Cookies: Cookies können
        zum einen für den Betrieb einer Webseite unbedingt erforderlich sein
        (z.B. um Logins oder andere Nutzereingaben zu speichern oder aus Gründen
        der Sicherheit). Statistik-, Marketing- und Personalisierungs-Cookies:
        Ferner werden Cookies im Regelfall auch im Rahmen der Reichweitenmessung
        eingesetzt sowie dann, wenn die Interessen eines Nutzers oder sein
        Verhalten (z.B. Betrachten bestimmter Inhalte, Nutzen von Funktionen
        etc.) auf einzelnen Webseiten in einem Nutzerprofil gespeichert werden.
        Solche Profile dienen dazu, den Nutzern z.B. Inhalte anzuzeigen, die
        ihren potentiellen Interessen entsprechen. Dieses Verfahren wird auch
        als „Tracking“, d.h., Nachverfolgung der potentiellen Interessen der
        Nutzer bezeichnet. Soweit wir Cookies oder „Tracking“-Technologien
        einsetzen, informieren wir Sie gesondert in unserer Datenschutzerklärung
        oder im Rahmen der Einholung einer Einwilligung. Hinweise zu
        Rechtsgrundlagen: Auf welcher Rechtsgrundlage wir Ihre personenbezogenen
        Daten mit Hilfe von Cookies verarbeiten, hängt davon ab, ob wir Sie um
        eine Einwilligung bitten. Falls dies zutrifft und Sie in die Nutzung von
        Cookies einwilligen, ist die Rechtsgrundlage der Verarbeitung Ihrer
        Daten die erklärte Einwilligung. Andernfalls werden die mithilfe von
        Cookies verarbeiteten Daten auf Grundlage unserer berechtigten
        Interessen (z.B. an einem betriebswirtschaftlichen Betrieb unseres
        Onlineangebotes und dessen Verbesserung) verarbeitet oder, wenn der
        Einsatz von Cookies erforderlich ist, um unsere vertraglichen
        Verpflichtungen zu erfüllen. Speicherdauer: Sofern wir Ihnen keine
        expliziten Angaben zur Speicherdauer von permanenten Cookies mitteilen
        (z. B. im Rahmen eines sog. Cookie-Opt-Ins), gehen Sie bitte davon aus,
        dass die Speicherdauer bis zu zwei Jahre betragen kann. Allgemeine
        Hinweise zum Widerruf und Widerspruch (Opt-Out): Abhängig davon, ob die
        Verarbeitung auf Grundlage einer Einwilligung oder gesetzlichen
        Erlaubnis erfolgt, haben Sie jederzeit die Möglichkeit, eine erteilte
        Einwilligung zu widerrufen oder der Verarbeitung Ihrer Daten durch
        Cookie-Technologien zu widersprechen (zusammenfassend als „Opt-Out“
        bezeichnet). Sie können Ihren Widerspruch zunächst mittels der
        Einstellungen Ihres Browsers erklären, z.B., indem Sie die Nutzung von
        Cookies deaktivieren (wobei hierdurch auch die Funktionsfähigkeit
        unseres Onlineangebotes eingeschränkt werden kann). Ein Widerspruch
        gegen den Einsatz von Cookies zu Zwecken des Onlinemarketings kann auch
        mittels einer Vielzahl von Diensten, vor allem im Fall des Trackings,
        über die Webseiten https://optout.aboutads.info und
        https://www.youronlinechoices.com/ erklärt werden. Daneben können Sie
        weitere Widerspruchshinweise im Rahmen der Angaben zu den eingesetzten
        Dienstleistern und Cookies erhalten. Verarbeitung von Cookie-Daten auf
        Grundlage einer Einwilligung: Wir setzen ein Verfahren zum
        Cookie-Einwilligungs-Management ein, in dessen Rahmen die Einwilligungen
        der Nutzer in den Einsatz von Cookies, bzw. der im Rahmen des
        Cookie-Einwilligungs-Management-Verfahrens genannten Verarbeitungen und
        Anbieter eingeholt sowie von den Nutzern verwaltet und widerrufen werden
        können. Hierbei wird die Einwilligungserklärung gespeichert, um deren
        Abfrage nicht erneut wiederholen zum müssen und die Einwilligung
        entsprechend der gesetzlichen Verpflichtung nachweisen zu können. Die
        Speicherung kann serverseitig und/oder in einem Cookie (sogenanntes
        Opt-In-Cookie, bzw. mithilfe vergleichbarer Technologien) erfolgen, um
        die Einwilligung einem Nutzer, bzw. dessen Gerät zuordnen zu können.
        Vorbehaltlich individueller Angaben zu den Anbietern von
        Cookie-Management-Diensten, gelten die folgenden Hinweise: Die Dauer der
        Speicherung der Einwilligung kann bis zu zwei Jahren betragen. Hierbei
        wird ein pseudonymer Nutzer-Identifikator gebildet und mit dem Zeitpunkt
        der Einwilligung, Angaben zur Reichweite der Einwilligung (z. B. welche
        Kategorien von Cookies und/oder Diensteanbieter) sowie dem Browser,
        System und verwendeten Endgerät gespeichert. Verarbeitete Datenarten:
        Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten,
        Zugriffszeiten), Meta-/Kommunikationsdaten (z.B. Geräte-Informationen,
        IP-Adressen). Betroffene Personen: Nutzer (z.B. Webseitenbesucher,
        Nutzer von Onlinediensten). Rechtsgrundlagen: Einwilligung (Art. 6 Abs.
        1 S. 1 lit. a. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
        f. DSGVO). Bereitstellung des Onlineangebotes und Webhosting Um unser
        Onlineangebot sicher und effizient bereitstellen zu können, nehmen wir
        die Leistungen von einem oder mehreren Webhosting-Anbietern in Anspruch,
        von deren Servern (bzw. von ihnen verwalteten Servern) das Onlineangebot
        abgerufen werden kann. Zu diesen Zwecken können wir Infrastruktur- und
        Plattformdienstleistungen, Rechenkapazität, Speicherplatz und
        Datenbankdienste sowie Sicherheitsleistungen und technische
        Wartungsleistungen in Anspruch nehmen. Zu den im Rahmen der
        Bereitstellung des Hostingangebotes verarbeiteten Daten können alle die
        Nutzer unseres Onlineangebotes betreffenden Angaben gehören, die im
        Rahmen der Nutzung und der Kommunikation anfallen. Hierzu gehören
        regelmäßig die IP-Adresse, die notwendig ist, um die Inhalte von
        Onlineangeboten an Browser ausliefern zu können, und alle innerhalb
        unseres Onlineangebotes oder von Webseiten getätigten Eingaben. Erhebung
        von Zugriffsdaten und Logfiles: Wir selbst (bzw. unser
        Webhostinganbieter) erheben Daten zu jedem Zugriff auf den Server
        (sogenannte Serverlogfiles). Zu den Serverlogfiles können die Adresse
        und Name der abgerufenen Webseiten und Dateien, Datum und Uhrzeit des
        Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf,
        Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL
        (die zuvor besuchte Seite) und im Regelfall IP-Adressen und der
        anfragende Provider gehören. Die Serverlogfiles können zum einen zu
        Zwecken der Sicherheit eingesetzt werden, z.B., um eine Überlastung der
        Server zu vermeiden (insbesondere im Fall von missbräuchlichen
        Angriffen, sogenannten DDoS-Attacken) und zum anderen, um die Auslastung
        der Server und ihre Stabilität sicherzustellen. Verarbeitete Datenarten:
        Inhaltsdaten (z.B. Eingaben in Onlineformularen), Nutzungsdaten (z.B.
        besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten),
        Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen).
        Betroffene Personen: Nutzer (z.B. Webseitenbesucher, Nutzer von
        Onlinediensten). Rechtsgrundlagen: Berechtigte Interessen (Art. 6 Abs. 1
        S. 1 lit. f. DSGVO). Kontaktaufnahme Bei der Kontaktaufnahme mit uns
        (z.B. per Kontaktformular, E-Mail, Telefon oder via soziale Medien)
        werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur
        Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen
        erforderlich ist. Die Beantwortung der Kontaktanfragen im Rahmen von
        vertraglichen oder vorvertraglichen Beziehungen erfolgt zur Erfüllung
        unserer vertraglichen Pflichten oder zur Beantwortung von
        (vor)vertraglichen Anfragen und im Übrigen auf Grundlage der
        berechtigten Interessen an der Beantwortung der Anfragen. Verarbeitete
        Datenarten: Bestandsdaten (z.B. Namen, Adressen), Kontaktdaten (z.B.
        E-Mail, Telefonnummern), Inhaltsdaten (z.B. Eingaben in
        Onlineformularen). Betroffene Personen: Kommunikationspartner. Zwecke
        der Verarbeitung: Kontaktanfragen und Kommunikation. Rechtsgrundlagen:
        Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit.
        b. DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
        Webanalyse, Monitoring und Optimierung Die Webanalyse (auch als
        „Reichweitenmessung“ bezeichnet) dient der Auswertung der Besucherströme
        unseres Onlineangebotes und kann Verhalten, Interessen oder
        demographische Informationen zu den Besuchern, wie z.B. das Alter oder
        das Geschlecht, als pseudonyme Werte umfassen. Mit Hilfe der
        Reichweitenanalyse können wir z.B. erkennen, zu welcher Zeit unser
        Onlineangebot oder dessen Funktionen oder Inhalte am häufigsten genutzt
        werden oder zur Wiederverwendung einladen. Ebenso können wir
        nachvollziehen, welche Bereiche der Optimierung bedürfen. Neben der
        Webanalyse können wir auch Testverfahren einsetzen, um z.B.
        unterschiedliche Versionen unseres Onlineangebotes oder seiner
        Bestandteile zu testen und optimieren. Zu diesen Zwecken können
        sogenannte Nutzerprofile angelegt und in einer Datei (sogenannte
        „Cookie“) gespeichert oder ähnliche Verfahren mit dem gleichen Zweck
        genutzt werden. Zu diesen Angaben können z.B. betrachtete Inhalte,
        besuchte Webseiten und dort genutzte Elemente und technische Angaben,
        wie der verwendete Browser, das verwendete Computersystem sowie Angaben
        zu Nutzungszeiten gehören. Sofern Nutzer in die Erhebung ihrer
        Standortdaten eingewilligt haben, können je nach Anbieter auch diese
        verarbeitet werden. Es werden ebenfalls die IP-Adressen der Nutzer
        gespeichert. Jedoch nutzen wir ein IP-Masking-Verfahren (d.h.,
        Pseudonymisierung durch Kürzung der IP-Adresse) zum Schutz der Nutzer.
        Generell werden die im Rahmen von Webanalyse, A/B-Testings und
        Optimierung keine Klardaten der Nutzer (wie z.B. E-Mail-Adressen oder
        Namen) gespeichert, sondern Pseudonyme. D.h., wir als auch die Anbieter
        der eingesetzten Software kennen nicht die tatsächliche Identität der
        Nutzer, sondern nur den für Zwecke der jeweiligen Verfahren in deren
        Profilen gespeicherten Angaben. Hinweise zu Rechtsgrundlagen: Sofern wir
        die Nutzer um deren Einwilligung in den Einsatz der Drittanbieter
        bitten, ist die Rechtsgrundlage der Verarbeitung von Daten die
        Einwilligung. Ansonsten werden die Daten der Nutzer auf Grundlage
        unserer berechtigten Interessen (d.h. Interesse an effizienten,
        wirtschaftlichen und empfängerfreundlichen Leistungen) verarbeitet. In
        diesem Zusammenhang möchten wir Sie auch auf die Informationen zur
        Verwendung von Cookies in dieser Datenschutzerklärung hinweisen.
        Verarbeitete Datenarten: Nutzungsdaten (z.B. besuchte Webseiten,
        Interesse an Inhalten, Zugriffszeiten), Meta-/Kommunikationsdaten (z.B.
        Geräte-Informationen, IP-Adressen). Betroffene Personen: Nutzer (z.B.
        Webseitenbesucher, Nutzer von Onlinediensten). Zwecke der Verarbeitung:
        Reichweitenmessung (z.B. Zugriffsstatistiken, Erkennung wiederkehrender
        Besucher), Profile mit nutzerbezogenen Informationen (Erstellen von
        Nutzerprofilen). Sicherheitsmaßnahmen: IP-Masking (Pseudonymisierung der
        IP-Adresse). Rechtsgrundlagen: Einwilligung (Art. 6 Abs. 1 S. 1 lit. a.
        DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f. DSGVO).
        Eingesetzte Dienste und Diensteanbieter: Google Analytics:
        Reichweitenmessung und Webanalyse; Dienstanbieter: Google Ireland
        Limited, Gordon House, Barrow Street, Dublin 4, Irland,
        Mutterunternehmen: Google LLC, 1600 Amphitheatre Parkway, Mountain View,
        CA 94043, USA; Website:
        https://marketingplatform.google.com/intl/de/about/analytics/;
        Datenschutzerklärung: https://policies.google.com/privacy. Änderung und
        Aktualisierung der Datenschutzerklärung Wir bitten Sie, sich regelmäßig
        über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen
        die Datenschutzerklärung an, sobald die Änderungen der von uns
        durchgeführten Datenverarbeitungen dies erforderlich machen. Wir
        informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung
        Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle
        Benachrichtigung erforderlich wird. Sofern wir in dieser
        Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen
        und Organisationen angeben, bitten wir zu beachten, dass die Adressen
        sich über die Zeit ändern können und bitten die Angaben vor
        Kontaktaufnahme zu prüfen. Rechte der betroffenen Personen Ihnen stehen
        als Betroffene nach der DSGVO verschiedene Rechte zu, die sich
        insbesondere aus Art. 15 bis 21 DSGVO ergeben: Widerspruchsrecht: Sie
        haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
        ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden
        personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f
        DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese
        Bestimmungen gestütztes Profiling. Werden die Sie betreffenden
        personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben,
        haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der
        Sie betreffenden personenbezogenen Daten zum Zwecke derartiger Werbung
        einzulegen; dies gilt auch für das Profiling, soweit es mit solcher
        Direktwerbung in Verbindung steht. Widerrufsrecht bei Einwilligungen:
        Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.
        Auskunftsrecht: Sie haben das Recht, eine Bestätigung darüber zu
        verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über
        diese Daten sowie auf weitere Informationen und Kopie der Daten
        entsprechend den gesetzlichen Vorgaben. Recht auf Berichtigung: Sie
        haben entsprechend den gesetzlichen Vorgaben das Recht, die
        Vervollständigung der Sie betreffenden Daten oder die Berichtigung der
        Sie betreffenden unrichtigen Daten zu verlangen. Recht auf Löschung und
        Einschränkung der Verarbeitung: Sie haben nach Maßgabe der gesetzlichen
        Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten
        unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der
        gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu
        verlangen. Recht auf Datenübertragbarkeit: Sie haben das Recht, Sie
        betreffende Daten, die Sie uns bereitgestellt haben, nach Maßgabe der
        gesetzlichen Vorgaben in einem strukturierten, gängigen und
        maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen
        anderen Verantwortlichen zu fordern. Beschwerde bei Aufsichtsbehörde:
        Sie haben unbeschadet eines anderweitigen verwaltungsrechtlichen oder
        gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
        Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
        Aufenthaltsorts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen
        Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie
        betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO
        verstößt. Begriffsdefinitionen In diesem Abschnitt erhalten Sie eine
        Übersicht über die in dieser Datenschutzerklärung verwendeten
        Begrifflichkeiten. Viele der Begriffe sind dem Gesetz entnommen und vor
        allem im Art. 4 DSGVO definiert. Die gesetzlichen Definitionen sind
        verbindlich. Die nachfolgenden Erläuterungen sollen dagegen vor allem
        dem Verständnis dienen. Die Begriffe sind alphabetisch sortiert.
        IP-Masking: Als „IP-Masking” wird eine Methode bezeichnet, bei der das
        letzte Oktett, d.h., die letzten beiden Zahlen einer IP-Adresse,
        gelöscht wird, damit die IP-Adresse nicht mehr der eindeutigen
        Identifizierung einer Person dienen kann. Daher ist das IP-Masking ein
        Mittel zur Pseudonymisierung von Verarbeitungsverfahren, insbesondere im
        Onlinemarketing Personenbezogene Daten: „Personenbezogene Daten“ sind
        alle Informationen, die sich auf eine identifizierte oder
        identifizierbare natürliche Person (im Folgenden „betroffene Person“)
        beziehen; als identifizierbar wird eine natürliche Person angesehen, die
        direkt oder indirekt, insbesondere mittels Zuordnung zu einer Kennung
        wie einem Namen, zu einer Kennnummer, zu Standortdaten, zu einer
        Online-Kennung (z.B. Cookie) oder zu einem oder mehreren besonderen
        Merkmalen identifiziert werden kann, die Ausdruck der physischen,
        physiologischen, genetischen, psychischen, wirtschaftlichen, kulturellen
        oder sozialen Identität dieser natürlichen Person sind. Profile mit
        nutzerbezogenen Informationen: Die Verarbeitung von „Profilen mit
        nutzerbezogenen Informationen“, bzw. kurz „Profilen“ umfasst jede Art
        der automatisierten Verarbeitung personenbezogener Daten, die darin
        besteht, dass diese personenbezogenen Daten verwendet werden, um
        bestimmte persönliche Aspekte, die sich auf eine natürliche Person
        beziehen (je nach Art der Profilbildung können dazu unterschiedliche
        Informationen betreffend die Demographie, Verhalten und Interessen, wie
        z.B. die Interaktion mit Webseiten und deren Inhalten, etc.) zu
        analysieren, zu bewerten oder, um sie vorherzusagen (z.B. die Interessen
        an bestimmten Inhalten oder Produkten, das Klickverhalten auf einer
        Webseite oder den Aufenthaltsort). Zu Zwecken des Profilings werden
        häufig Cookies und Web-Beacons eingesetzt. Reichweitenmessung: Die
        Reichweitenmessung (auch als Web Analytics bezeichnet) dient der
        Auswertung der Besucherströme eines Onlineangebotes und kann das
        Verhalten oder Interessen der Besucher an bestimmten Informationen, wie
        z.B. Inhalten von Webseiten, umfassen. Mit Hilfe der Reichweitenanalyse
        können Webseiteninhaber z.B. erkennen, zu welcher Zeit Besucher ihre
        Webseite besuchen und für welche Inhalte sie sich interessieren. Dadurch
        können sie z.B. die Inhalte der Webseite besser an die Bedürfnisse ihrer
        Besucher anpassen. Zu Zwecken der Reichweitenanalyse werden häufig
        pseudonyme Cookies und Web-Beacons eingesetzt, um wiederkehrende
        Besucher zu erkennen und so genauere Analysen zur Nutzung eines
        Onlineangebotes zu erhalten. Verantwortlicher: Als „Verantwortlicher“
        wird die natürliche oder juristische Person, Behörde, Einrichtung oder
        andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und
        Mittel der Verarbeitung von personenbezogenen Daten entscheidet,
        bezeichnet. Verarbeitung: „Verarbeitung“ ist jeder mit oder ohne Hilfe
        automatisierter Verfahren ausgeführte Vorgang oder jede solche
        Vorgangsreihe im Zusammenhang mit personenbezogenen Daten. Der Begriff
        reicht weit und umfasst praktisch jeden Umgang mit Daten, sei es das
        Erheben, das Auswerten, das Speichern, das Übermitteln oder das Löschen.
        Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas
        Schwenke
      </p> */}
    </div>
  );
}

export async function getStaticProps(context) {
  const pages = await getContent("pages", context.locale);
  let blogs = await getContent("blogs", context.locale);
  let carsreviews = await getContent("carsreview", context.locale);

  const page = pages.find((page) => page.path === "/datenschutzerklaerung");
  //   const datenschutzerklaerung = await serialize(
  //     page.content.find((content) => content.name === "Datenschutzerklärung")
  //       .markdown
  //   );

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      //   context: { datenschutzerklaerung },
      blogs,
      carsreviews,
    },
  };
}
