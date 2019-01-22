import { formatDate } from "../app.service";
import contactStore from "../../stores/contact.store";

export const reportAffaire = () => {
  return `<tr>
<td colspan="9" bgcolor="#ffff99" width="530" height="15">
<p class="western" align="center"><span style="color: #007826;"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;"><strong>Affaire </strong></span></span></span></p>
</td>
<td colspan="3" valign="bottom" bgcolor="#ffff99" width="171">
<p class="western" align="center"><span style="color: #007826;"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;"><strong>Enqu&ecirc;te</strong></span></span></span></p>
</td>
</tr>
<tr>
<td colspan="9" rowspan="2" bgcolor="#ffffff" width="530" height="11">
<p class="western" align="center"><span style="font-family: Cabin, serif;"><span style="font-size: large;"><strong>
  ${contactStore.reference}
</strong></span></span></p>
</td>
<td bgcolor="#ffffff" width="52">
<p class="western"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">Date:</span></span></p>
</td>
<td colspan="2" bgcolor="#ffffff" width="111">
<p class="western"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">
  ${formatDate(contactStore.reportDate.toUTCString())}
</span></span></p>
</td>
</tr>
<tr>
<td bgcolor="#ffffff" width="52">
<p class="western"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">Enqu&ecirc;teur:</span></span></p>
</td>
<td colspan="2" bgcolor="#ffffff" width="111">
<p class="western"><span style="font-family: Cabin, serif;"><span style="font-size: xx-small;">B. Hameury</span></span></p>
</td>
</tr>`;
};
