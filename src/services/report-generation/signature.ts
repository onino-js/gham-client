import { createImage } from "./../app.service";
import reportStore from "../../stores/report";
import { resCaseC } from "./styles";

export const reportSignature = () => {
  const opt = {
    path: reportStore.signature,
    width: 363,
    height: 154,
  };
  const imgBuffer = createImage(opt);
  return `<tr valign="top">
   <td colspan="4" bgcolor="#ffff99" width="230" height="11">
      <p class="western" align="center"><span style="color: #007826;"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;"><strong>Autorisation du propri&eacute;taire</strong></span></span></span></p>
   </td>
   <td bgcolor="#ffff99" width="52">
      <p class="western" align="center">&nbsp;</p>
   </td>
   <td colspan="3" bgcolor="#ffff99" width="172">
      <p class="western" align="center"><span style="color: #007826;"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;"><strong>Coffret pos&eacute;</strong></span></span></span></p>
   </td>
   <td colspan="4" bgcolor="#ffff99" width="230">
      <p class="western" align="center"><span style="color: #007826;"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;"><strong>Observations</strong></span></span></span></p>
   </td>
</tr>
<tr>
   <td colspan="5" rowspan="4" bgcolor="#ffffff" width="290" height="11">
      <p class="western" align="center"><span style="color: #3366ff;"><span style="font-family: Cabin, serif;"><span style="font-size: small;"><strong>AUTORISATION DE TRAVAUX COFFRET REPRISE</strong></span></span></span></p>
      <p class="western" align="center"><span style="color: #3366ff;"><span style="font-family: Cabin, serif;"><span style="font-size: small;">travaux &eacute;x&eacute;cut&eacute;s aux frais de</span></span></span></p>
      <p class="western" align="center"><span style="color: #3366ff;"><span style="font-family: Cabin, serif;"><span style="font-size: small;">GrDF SERVICES</span></span></span></p>
   </td>
   <td colspan="3" rowspan="7" bgcolor="#ffffff" width="172">
      <p class="western" align="center"><span style="color: #cc0000;"><span style="font-family: Cabin, serif;"><span style="font-size: small;"><strong>Pas de pose de coff</strong></span></span></span></p>
      <p class="western" align="center"><span style="color: #cc0000;"><span style="font-family: Cabin, serif;"><span style="font-size: small;"><strong>REEQUIPEMENT COFFRET EXISTANT</strong></span></span></span></p>
   </td>
   <td colspan="3" valign="top" bgcolor="#ffffff" width="172">
      <p class="western"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">Terrassement int&eacute;rieur&nbsp;:</span></span></p>
   </td>
   <td valign="top" bgcolor="#ffffff" width="51">
       ${resCaseC(reportStore.obsTerass)}
   </td>
</tr>
<tr>
   <td colspan="3" valign="top" bgcolor="#ffffff" width="172">
      <p class="western"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">Saign&eacute;e sous coffret&nbsp;:</span></span></p>
   </td>
   <td valign="top" bgcolor="#ffffff" width="51">
      ${resCaseC(reportStore.obsSaignee)}
   </td>
</tr>
<tr>
   <td colspan="3" valign="top" bgcolor="#ffffff" width="172">
      <p class="western"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">Percement de mur&nbsp;:</span></span></p>
   </td>
   <td valign="top" bgcolor="#ffffff" width="51">
      ${resCaseC(reportStore.obsPerc)}
   </td>
</tr>
<tr>
   <td colspan="4" valign="top" bgcolor="#ffffff" width="230">
      <p class="western" align="center"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">Remarques&nbsp;: </span></span></p>
   </td>
</tr>
<tr>
   <td colspan="2" valign="top" bgcolor="#ffffff" width="111" height="11">
      <p class="western"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">Lu et approul&eacute; le&nbsp;:</span></span></p>
   </td>
   <td colspan="3" valign="top" bgcolor="#ffffff" width="172">
      <p class="western">&nbsp;</p>
   </td>
   <td colspan="4" rowspan="3" valign="top" bgcolor="#ffffff" width="230">
      ${resCaseC(reportStore.obsRemarks)}
   </td>
</tr>
<tr>
   <td valign="top" bgcolor="#ffffff" width="51" height="52">
      <p class="western"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">Signature&nbsp;: </span></span></p>
   </td>
   <td colspan="4" valign="top" bgcolor="#ffffff" width="231">
      <p class="western">
         <img src="${
           reportStore.signature
         }" width="107" height="45" style="display: block; margin-left: auto; margin-right: auto;" alt="#"  />
      </p>
   </td>
</tr>
<tr>
   <td colspan="2" valign="top" bgcolor="#ffffff" width="111" height="25">
      <p class="western"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">om&nbsp;:</span></span></p>
   </td>
   <td valign="top" bgcolor="#ffffff" width="52">
      <p class="western">&nbsp;</p>
   </td>
   <td valign="top" bgcolor="#ffffff" width="52">
      <p class="western">&nbsp;</p>
   </td>
   <td valign="top" bgcolor="#ffffff" width="52">
      <p class="western">&nbsp;</p>
   </td>
</tr>`;
};
