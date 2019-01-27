export const reportHead = () => {
  return `<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<title></title>
	
	<style type="text/css">
		@page { margin-left: 1cm; margin-right: 1cm }
		p { direction: ltr; color: #00000a;  orphans: 0; widows: 0 }
		p.western { font-family: "Liberation Serif", Arial; font-size: 12pt; so-language: fr-FR }
		p.cjk { font-family: "Noto Sans CJK SC Regular"; font-size: 12pt; so-language: zh-CN }
		p.ctl { font-family: "FreeSans"; font-size: 12pt; so-language: hi-IN }
		td p { direction: ltr; color: #00000a;  orphans: 0; widows: 0 }
		td p.western { font-family: "Liberation Serif", Arial; font-size: 12pt; so-language: fr-FR }
		td p.cjk { font-family: "Noto Sans CJK SC Regular"; font-size: 12pt; so-language: zh-CN }
		td p.ctl { font-family: "FreeSans"; font-size: 12pt; so-language: hi-IN }
	</style>
</head>`;
};
