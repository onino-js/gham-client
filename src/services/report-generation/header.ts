import { createImage } from "./../app.service";
// import rightLogo from "./../../image/gham-logo-200.png";
import rightLogo from "./../../image/eiffage.png";

export const reportHeader = () => {
  const opt = {
    path: rightLogo,
    width: 363,
    height: 154,
  };
  const imgBuffer = createImage(opt);
  return `
<tr>
  <td colspan="3">
      <img src="${imgBuffer}" width="107" height="45" style="display: block; margin-left: auto; margin-right: auto;" alt="#"  />
  </td>
  <td colspan="6">
    <p align="center" style="color: #000099; font-size: 14pt; font-family: Cabin, serif;">FICHE D&rsquo;ENQU&Ecirc;TE CLIENT</p>
  </td>
  <td colspan="3" valign="top">
    <p>&nbsp;</p>
  </td>
</tr>
  `;
};
