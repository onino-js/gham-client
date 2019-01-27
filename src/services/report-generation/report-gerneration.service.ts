import { reportPhoto } from "./photos";
import { reportHeader } from "./header";
import { reportHead } from "./head";
import { reportAffaire } from "./affaire";
import { reportAddress } from "./address";
import { reportFeatures } from "./features";
import { reportSignature } from "./signature";
export const htmlReport = () => {
  return `
<html>
${reportHead()}
<body lang="fr-FR" text="#00000a" dir="ltr">
<center>
<table style="width: 718px; border:1px solid #CCC" width="718" cellspacing="0" cellpadding="4"><colgroup><col width="51" /> <col width="52" /> <col width="52" /> <col width="52" /> <col width="52" /> <col width="52" /> <col width="52" /> <col width="52" /> <col width="52" /> <col width="52" /> <col width="52" /> <col width="51" /> </colgroup>
<tbody  style="font-family: Cabin, Arial;">
${reportHeader()}
${reportAffaire()}
${reportAddress()}
${reportFeatures()}
${reportPhoto()}
${reportSignature()}
</tbody>
</table>
</center>
</body>
</html>
  `;
};
