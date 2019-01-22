import reportStore from "../../stores/report";
import { resCase, titleCase, crossCase } from "./styles";

export const reportAddress = () => {
  return `<tr>
  <td colspan="6" bgcolor="#ffff99" width="350" height="11">
    <p align="center"><span style="color: #007826;"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;"><strong>Information contact</strong></span></span></span></p>
  </td>
  <td colspan="6" bgcolor="#ffff99" width="350">
    <p style="color: #007826; font-family: Cabin, serif; font-size: xx-small" align="center"><strong>Information copropri&eacute;taire</strong></p>
  </td>
</tr>
<tr>
  <td colspan="2" width="111" height="11">
    ${titleCase("Nom complet :")}
  </td>
  <td colspan="4" width="231">
    ${resCase(reportStore.getCompletName())}
  </td>
  <td colspan="2" width="112">
    ${titleCase("Nom complet :")}
  </td>
  <td colspan="4" width="230">
     ${resCase(reportStore.co_getCompletName())}
  </td>
</tr>
<tr>
  <td colspan="2" width="111" height="11">
    ${titleCase("Adresse :")}
  </td>
  <td colspan="4" width="231">
     ${resCase(reportStore.address)}
  </td>
  <td colspan="2" width="112">
    ${titleCase("Adresse :")}
  </td>
  <td colspan="4" width="230">
     ${resCase(reportStore.co_address)}
  </td>
</tr>
<tr>
  <td colspan="2" width="111" height="11">
    ${titleCase("Ville :")}
   </td>
  <td colspan="4" width="231">
    ${resCase(reportStore.city)}
  </td>
  <td colspan="2" width="112">
    ${titleCase("Ville :")}
   </td>
  <td colspan="4" width="230">
     ${resCase(reportStore.co_city)}
  </td>
</tr>
<tr>
  <td colspan="2" width="111" height="11">
    ${titleCase("T&eacute;l&eacute;phone&nbsp;:")}
  </td>
  <td colspan="4" width="231">
    ${resCase(reportStore.phone)}
  </td>
  <td colspan="2" width="112">
    ${titleCase("T&eacute;l&eacute;phone&nbsp;:")}
   </td>
  <td colspan="4" width="230">
    ${resCase(reportStore.co_phone)}
  </td>
</tr>
<tr>
  <td colspan="2" width="111" height="11">
     ${titleCase("Propri&eacute;taire&nbsp;:")}
  </td>
  <td width="52">
    ${crossCase(reportStore.occupation === "PROPRIETAIRE" ? "X" : "")}
  </td>
  <td colspan="2" width="112" height="11">
     ${titleCase("Locataire&nbsp;:")}
  </td>
  <td width="52" height="11">
     ${crossCase(reportStore.occupation === "LOCATAIRE" ? "X" : "")}
  </td>
  <td colspan="6" width="112" height="11">
    <p style="font-size: xx-small;"></p>
  </td>
</tr>`;
};
