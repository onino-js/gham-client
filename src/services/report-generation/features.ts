import contactStore from "../../stores/contact.store";
import {
  bigTitle,
  titleCase,
  crossCase,
  titleCaseC,
  resCase,
  resCaseC,
} from "./styles";

export const reportFeatures = () => {
  return `<tr>
  <td colspan="12" bgcolor="#ffff99" width="708" height="30">
    ${bigTitle("CARACT&Eacute;RISTIQUES INSTALLATION")}
  </td>
</tr>
<tr>
  <td colspan="8" bgcolor="#ffff99" width="470" height="11">
    <p class="western" align="center"><span style="color: #007826;"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;"><strong>Branchements</strong></span></span></span></p>
  </td>
  <td colspan="2" bgcolor="#ffff99" width="112">
    <p class="western" align="center"><span style="color: #007826;"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;"><strong>Compteur</strong></span></span></span></p>
  </td>
  <td colspan="2" bgcolor="#ffff99" width="111">
    <p class="western" align="center"><span style="color: #007826;"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;"><strong>Arriv&eacute;e</strong></span></span></span></p>
  </td>
</tr>
<tr>
  <td colspan="2" width="111" height="11">
  ${titleCase("Individuel:")}
  </td>
  <td colspan="2" width="112">
      ${crossCase(contactStore.linking === "INDIVIDUEL" ? "X" : "")}
  </td>
  <td colspan="2" width="112">
    ${titleCase("Collectif:")}
  </td>
  <td colspan="2" width="112">
    ${crossCase(contactStore.linking === "COLLECTIF" ? "X" : "")}
  </td>
  <td width="52">
    ${titleCaseC("Marque")}
  </td>
  <td width="52">
    ${titleCaseC("Type")}
  </td>
  <td width="52">
    ${titleCaseC("Nature")}
  </td>
  <td width="51">
    ${titleCaseC("Diam&egrave;tre")}
  </td>
</tr>
<tr>
  <td colspan="2" width="111" height="11">
    ${titleCase("Improductif:")}
  </td>
  <td colspan="2" width="112">
    ${crossCase(contactStore.linking === "IMPRODUCTIF" ? "X" : "")}
  </td>
  <td colspan="2" width="112">
    ${titleCase("Nombre d&rsquo;ann&eacute;e:")}
  </td>
  <td colspan="2" width="112">
    ${resCase(contactStore.nbOfYears.toString())}
  </td>
  <td width="52">
     ${resCase(contactStore.compteurBrand)}
  </td>
  <td width="52">
    ${resCase(contactStore.compteurType)}  
  </td>
  <td width="52">
    ${resCase(contactStore.arrivalNature)}  
  </td>
  <td width="51">
    ${resCase(contactStore.arrivalDiameter.toString())}  
  </td>
</tr>
<tr>
  <td colspan="8" bgcolor="#ffff99" width="470" height="11">
    <p class="western" align="center"><span style="color: #006600;"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;"><strong>Coffret</strong></span></span></span></p>
  </td>
  <td width="52">
    ${titleCaseC("D&eacute;bit:")}
  </td>
  <td width="52">
    ${resCaseC(contactStore.compteurFlow.toString())}  
  </td>
  <td colspan="2" bgcolor="#ffff99" width="111">
    <p class="western" align="center"><span style="color: #007826;"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;"><strong>P&eacute;n&eacute;tration</strong></span></span></span></p>
  </td>
</tr>
<tr>
  <td colspan="4" width="230" height="11">
    <p class="western" align="center"><span style="color: #000099;"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;"><strong>Etat actuel</strong></span></span></span></p>
  </td>
  <td colspan="4" width="231">
    <p class="western" align="center"><span style="color: #000099;"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;"><strong>Projet</strong></span></span></span></p>
  </td>
  <td width="52">
    ${titleCase("Conserv&eacute;:")}
  </td>
  <td width="52">
    ${resCaseC(contactStore.compteurConserv)}
  </td>
  <td width="52">
    ${titleCaseC("Nature")}
  </td>
  <td width="51">
    ${titleCaseC("Diam&egrave;tre")}
  </td>
</tr>
<tr>
  <td width="51" height="11">
    ${titleCase("S/Carter")}
  </td>
  <td width="52">
    ${resCaseC(contactStore.boitierType === "S/CARTER" ? "X" : "")}
  </td>
  <td width="52">
    ${titleCase("Enterr&eacute;")}
  </td>
  <td width="52">
    ${resCaseC(
      contactStore.boitierType === "COFFRET" &&
        contactStore.fixation === "ENTERRE"
        ? "X"
        : "",
    )}
  </td>
  <td width="52">
    ${titleCase("Suppr?")}
  </td>
  <td width="52">
    ${resCaseC(contactStore.action === "SUPPRIMER" ? "X" : "")}
  </td>
  <td width="52">
    ${titleCase("Enterr&eacute;")}
  </td>
  <td width="52">
    ${resCaseC(
      contactStore.action === "POSER" && contactStore._fixation === "ENTERRE"
        ? "X"
        : "",
    )}
  </td>
  <td width="52">
    ${titleCase("Ann&eacute;e:")}
  </td>
  <td width="52">
    ${resCaseC(contactStore.compteurYear.toString())}  
  </td>
  <td width="52">
    ${resCaseC(contactStore.penetrationNature)}  
  </td>
  <td width="51">
    ${resCaseC(contactStore.penetrationDiameter.toString())}  
  </td>
</tr>
<tr>
  <td width="51" height="11">
    ${titleCase("Rob. Fa&ccedil;")}
  </td>
  <td width="52">
    ${resCaseC(contactStore.boitierType === "ROB. FAC." ? "X" : "")}  
  </td>
  <td width="52">
    ${titleCase("Encastr&eacute;")}
  </td>
  <td width="52">
     ${resCaseC(
       contactStore.boitierType === "COFFRET" &&
         contactStore.fixation === "ENCASTRE"
         ? "X"
         : "",
     )}  
  </td>
  <td width="52">
     ${titleCase("Reequip?")}
  </td>
  <td width="52">
    ${resCaseC(contactStore.action === "REEQUIPER" ? "X" : "")} 
  </td>
  <td width="52">
    ${titleCase("Encastr&eacute;")}
  </td>
  <td width="52">
    ${resCaseC(
      contactStore.action === "POSER" && contactStore._fixation === "ENCASTRE"
        ? "X"
        : "",
    )} 
  </td>
  <td width="52">
    ${titleCase("N&deg;:")}
  </td>
  <td width="52">
    ${resCaseC(contactStore.compteurNumber)}
  </td>
  <td colspan="2" width="111">
    ${titleCase("Conserv&eacute;e:")}
  </td>
</tr>
<tr>
  <td width="51" height="11">
    ${titleCase("Coffret")}
  </td>
  <td width="52">
    ${resCaseC(contactStore.boitierType === "COFFRET" ? "X" : "")}
  </td>
  <td width="52">
    ${titleCase("Grillage")}
  </td>
  <td width="52">
    ${resCaseC(
      contactStore.boitierType === "COFFRET" &&
        contactStore.fixation === "GRILLAGE"
        ? "X"
        : "",
    )}
  </td>
  <td width="52">
    ${titleCase("Pose")}
  </td>
  <td width="52">
    ${resCaseC(contactStore.action === "POSER" ? "X" : "")}
  </td>
  <td width="52">
    ${titleCase("Grillage")}
  </td>
  <td width="52">
    ${resCaseC(
      contactStore.action === "POSER" && contactStore._fixation === "GRILLAGE"
        ? "X"
        : "",
    )}
  </td>
  <td colspan="2" bgcolor="#ffff99" width="112">
    <p class="western" align="center"><span style="color: #007826;"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;"><strong>D&eacute;tente</strong></span></span></span></p>
  </td>
  <td colspan="2" width="111">
    ${resCaseC(contactStore.penetrationConserved === "OUI" ? "X" : "")}
  </td>
</tr>
<tr>
  <td colspan="2" width="111" height="11">
     ${titleCase("Type")}
  </td>
  <td width="52">
    ${titleCase("Sur Socle")}
  </td>
  <td width="52">
    ${resCaseC(
      contactStore.boitierType === "COFFRET" &&
        contactStore.fixation === "SUR SOCLE"
        ? "X"
        : "",
    )}
  </td>
  <td colspan="2" width="112">
    ${titleCase("Type")}
  </td>
  <td width="52">
    ${titleCase("Sur Socle")}
  </td>
  <td width="52">
    ${resCaseC(
      contactStore.action === "POSER" && contactStore._fixation === "SUR SOCLE"
        ? "X"
        : "",
    )}
  </td>
  <td width="52">
    ${titleCase("Type")}
  </td>
  <td width="52">
    ${resCaseC(contactStore.detenteType)}
  </td>
  <td colspan="2" bgcolor="#dddddd" width="111">
    <p class="western" align="center"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">Projet&eacute;e</span></span></p>
  </td>
</tr>
<tr>
  <td colspan="2" rowspan="2" width="111" height="11">
     ${resCaseC(
       contactStore.boitierType === "COFFRET" ? contactStore.coffretType : "",
     )}
  </td>
  <td width="52">
    ${titleCase("En saillie")}
  </td>
  <td width="52">
    ${resCaseC(
      contactStore.boitierType === "COFFRET" &&
        contactStore.fixation === "EN SAILLIE"
        ? "X"
        : "",
    )}
  </td>
  <td colspan="2" rowspan="2" width="112">
     ${resCaseC(
       contactStore.action === "POSER" ? contactStore._coffretType : "",
     )}
  </td>
  <td width="52">
    ${titleCase("En saillie")}
  </td>
  <td width="52">
    ${resCaseC(
      contactStore.action === "POSER" && contactStore._fixation === "EN SAILLIE"
        ? "X"
        : "",
    )}
  </td>
  <td width="52">
    ${titleCase("Existante:")}
  </td>
  <td width="52">
    ${resCaseC(contactStore.detentePose === "EXISTANTE" ? "X" : "")}
  </td>
  <td bgcolor="#dddddd" width="52">
    <p class="western" align="center"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">Nature</span></span></p>
  </td>
  <td bgcolor="#dddddd" width="51">
    <p class="western" align="center"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">Diam&egrave;tre</span></span></p>
  </td>
</tr>
<tr>
  <td width="52">
    ${titleCase("Hors limite")}
  </td>
  <td width="52">
    ${resCaseC(
      contactStore.boitierType === "COFFRET" &&
        contactStore.fixation === "HORS LIMITE"
        ? "X"
        : "",
    )}
  </td>
  <td width="52">
    ${titleCase("Hors limite")}
  </td>
  <td width="52">
    ${resCaseC(
      contactStore.action === "POSER" &&
        contactStore._fixation === "HORS LIMITE"
        ? "X"
        : "",
    )}
  </td>
  <td width="52">
    ${titleCase("&Agrave; poser;")}
  </td>
  <td width="52">
    ${resCaseC(contactStore.detentePose === "A POSER" ? "X" : "")}
  </td>
  <td bgcolor="#dddddd" width="52">
    ${resCaseC(contactStore._penetrationNature)}
  </td>
  <td bgcolor="#dddddd" width="51">
    ${resCaseC(contactStore._penetrationDiameter.toString())}
  </td>
</tr>
<tr>
  <td colspan="3" width="171">
    ${titleCase("Pose de d&eacute;tente BP:")}
  </td>
  <td width="52">
    ${resCaseC(contactStore.poseBp)}
  </td>
  <td colspan="3" width="172">
    ${titleCase("Pose de d&eacute;tente BP:")}
  </td>
  <td width="52">
    ${resCaseC(contactStore._poseBp)}
  </td>
  <td width="52">
    ${resCaseC("")}
  </td>
  <td width="52">
    ${resCaseC("")}
  </td>
  <td bgcolor="#dddddd" width="52">
    ${titleCase("Longueur:")}
  </td>
  <td bgcolor="#dddddd" width="51">
    ${resCaseC(contactStore._penetrationLength.toString())}
  </td>
</tr>`;
};
