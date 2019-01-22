import { createImage } from "./../app.service";
import reportStore from "../../stores/report";
import { resCaseC } from "./styles";

export const reportPhoto = () => {
  // const opt = {
  //   path: reportStore.signature,
  //   width: 363,
  //   height: 154,
  // };
  // const imgBuffer = createImage(opt);
  return `<tr>
<td colspan="12" valign="top" bgcolor="#ffff99" width="708" height="23">
<p class="western" align="center"><span style="color: #000099;"><span style="font-family: Cabin, serif;"><span style="font-size: large;"><strong>PROJET DE POSE</strong></span></span></span></p>
</td>
</tr>
<tr valign="top">
<td colspan="6" bgcolor="#ffffff" width="350" height="11">
<p class="western" align="center"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">Avant travaux</span></span></p>
</td>
<td colspan="6" bgcolor="#ffffff" width="350">
<p class="western" align="center"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">Apr&egrave;s travaux</span></span></p>
</td>
</tr>
<tr valign="top">
<td colspan="6" bgcolor="#ffffff" width="350" height="272">
<p class="western">
         <img src="${
           reportStore.photoBeforeWork
         }" width="350" height="270" style="display: block; margin-left: auto; margin-right: auto;" alt="#"  />
</p>
</td>
<td colspan="6" bgcolor="#ffffff" width="350">
<p class="western">
         <img src="${
           reportStore.photoAfterWork
         }" width="350" height="270" style="display: block; margin-left: auto; margin-right: auto;" alt="#"  />
</p>
</td>
</tr>`;
};
