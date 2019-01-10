import { eiffageImg } from "./images/eiffage";
import { grdfImg } from "./images/grdf";

export const reportHeader = () => {
  return `
<tr>
  <td colspan="3" align="center">
      ${eiffageImg}
  </td>
  <td colspan="6">
    <p align="center" style="color: #000099; font-size: 14pt; font-family: Cabin, Arial;">FICHE D&rsquo;ENQU&Ecirc;TE CLIENT</p>
  </td>
  <td colspan="3" align="center">
       ${grdfImg}
  </td>
</tr>
  `;
};
