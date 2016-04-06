// ==UserScript==
// @name                WME Validator Localization for Kentucky
// @namespace           https://greasyfork.org/en/users/9555
// @version             1.2.1000
// @author              xanderb
// @description         This script localizes WME Validator for Kentucky, USA. You also need main package (WME Validator) installed.
// @match               https://editor-beta.waze.com/*editor/*
// @match               https://www.waze.com/*editor/*
// @grant               none
// @run-at              document-start
// @icon                data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAABK1JREFUWEftln1M1HUcx08xEVQej4fu4XfH8QMMtAtLLcJRyd1BwD1wPJ4EaYioJZh4xx0HeIRNmLL1j6atAZZzy9VfbuiWrtncLP9prVW60dMyjnBLXdqqrfX6Xd/YmLoVc6s/7rO993n8fj7v7/f3/R6oohKVqPxvZdpZuWDKarGCPtAPnhCpOZLrCS0TpmpN63BsZnWgJMXRPZBs9w1p3D31aqffJtL/XGZa6heGny0rCtusbgZbwmW21djFxHJEyaxkuAKrUh3dwRSHr47BuxnoRXsh8F1ilfc3cp/g+0X5nTJtr0gMl9skxZ5paVjAIPNUaemBqdIN19BfgYvgCzANBiARp9RCbDn+IHjreFntKwZ71xjDTqqd3UcZ+Ha6y2/D70lz+QchMwzBd/Dr010BWVk/R5Td0XBgylJ6gobj6FZIZYp0RMJWi0RuDGKXpyyW58mvhczj+L/gH2fNOfTZq2Xl/b3j56t2nbrSu3tichiMgGapMaSBwBiE1oiW8xOIVkLkEno7A1+44q7rPNvZ2+47dbmYQfauicmtoATEZ1QHEtJcgeY9pydjZU8oDgKjSVXeW8SNot38hDuhZscj4PAPVuuWqzabg1N0hCvKzTMe92JRpuI+lHP8x4QbEU5gJfEuLmisCM1fpqvtiyAjMzyHV7NEhGdFVxOM5dtf5E50POjuMUh1fZmrWvbFy42hGIi8xD3RidL7L7yOFIa/ywmMQmBTit3XxM79fIb9utpes762N+PRtuGjovz+ysrmfQt5DQFIZIjQrPD99byEpqyGfjM1eSI8V2BcCHOLcP+1GOr6sv/+xpqaYBw/Tnd8njnCsTzMwHHwpsI+ye4LghGRvqtwvOshmi/cewp9PqLvZuHeXTiSBH61btO0lOJGMMQlUeNvwt7GIBtaQSXooKmV+uvYu6hpQBdlVvc8gA4qO0bXKDYbK+TZ/Zzq7C5mzQA9ZbQvzelPZF0uNTsjBDCaKLxJ8piykMuyHP9zBruInQEniX8Ahol/SsPNxD4s2npwEf6XxJ2RHnbvJfQIuUEGuLH3YH8LkQD6AvoZiN/gHiyh9gSxoQgBjPdodIHgeexRFu5Ef0aTJlhryf1E7EliE+hO9Bm0cjLF5H7kOalp/A2xIfTv7FDzV1/v+8SOUBPmwqlZdxAcIvYUdX+wkXwV7zMO5xZBB2ij+BpFryuFvNsYYv3AybNZrDSHvYaa2zTMpuY1hpzjifkVkhDegf5VWxNMgJzyIxTi0yxl3XX8teS+J7YfnGbdx5Hd49RTcIPCeJgnYd+kUZD4q+gXOTZDpBAh1kHzpegd1GaQX4/dCqlYtPLOTehtEOtj4GNimbKOP9G+WvQWYIOIcjE3RpLKRQGzv0gklFP4mli+QZIekvT6OuAGbTqddrtep3sOuEBTbk5OnCRJG7GfJl9oNBi0rPFoNZp2fKtOq32Z/Ab8ivQSjx5SqyF3BLyxrv3Avf8ecBox/KMRQ7MVpqwsicY6WZbXYeuyTSY5y2gswC7Iy8srMBqNZvAIsWXUZxLPoz4BcmnEjDmynCxnZyfz0uL55iu4LynKDFPD3tTIsKhEJSr/rahUfwKIveLz8v1S/QAAAABJRU5ErkJggg==
// ==/UserScript==
//
/*
var KYVLVersion = "1.2.9481";
var KYVLUpdateMessage = "yes";
var KYVLVersionUpdateNotes = "KY Validator Localization has been updated to " + KYVLVersion;
KYVLVersionUpdateNotes = KYVLVersionUpdateNotes + "\n" + "Please let me know if there are any issues or if you have any suggestions for new checks - xanderb";
if (KYVLUpdateMessage === "yes") {
  //alert the user for version updates
  if (localStorage.getItem('URCommentVersion') === KYVLVersion) {
    urcToConsole("Version - " + KYVLVersion);
  } else {
    alert(KYVLVersionUpdateNotes);
    localStorage.setItem('KYVLVersion', KYVLVersion);
  }
}
*/
/*
  See Settings->About->Available checks for complete list of checks and their params.
  Examples:
  Enable #170 "Lowercase street name" but allow lowercase "exit" and "to":
    "170.enabled": true,
    "170.params": {
        "regexp": "/^((exit|to) )?[a-z]/",
    "},
  Enable #130 "Custom check" to find a dot in street names, but allow dots at Ramps:
    "130.enabled": true,
    "130.params": {
        "titleEN": "Street name with a dot",
        "problemEN": "There is a dot in the street name (excluding Ramps)",
        "solutionEN": "Expand the abbreviation or remove the dot",
        "template": "${type}:${street}",
        "regexp": "D/^[^4][0-9]?:.*\\./",
    },
    *Note: use D at the beginning of RegExp to enable debugging on JS console.
    *Note: do not forget to escape backslashes in strings, i.e. use "\\" instead of "\".
*/

window.WME_Validator_United_States = {
  ".country": "United States",
  ".codeISO": "US",
  ".author": "xanderb",
  ".updated": "2016-4-6",
  ".link": "TODO: ",
  "128.enabled": true,
  "128.params": {
    "titleEN": "Testing Name Suffixes",
    "problemEN": "Street suffix does not follow abbreviation rules",
    "solutionEN": "Rename the suffix Such as Road to Rd Please let me know about false positives",
    "template": "${street}",
    "regexp": "!/(Unknown Name| A(cres?|ly|nx|ve|r(c|tery))| B(ay|ch|end|l?vd|lf|ridge|roadway|nd|yp(ass)?|r(a(e|nch|ook))?|ks?|tm|(ike|us)way|yu)| C(t|lb?|hase|mns?|o(rs|rner)|ONN|p|r(es|se|st|k)?|ir|swy|tr|v|u(rv|toff)|yn)| D(am|l|ell|onws|r)| E(ast|dgeway|n(d|t)|xit|sts?|splanade|x(t|py))| F(airway|or(d|ks?)|wy|all|l[st]|t)| G(ardens?|r|len|rv|r(ee)?n|a(p|te)|twy)| H(br|ills?|ollows?|ts|wy|ospital)| I(l|nlt)| Junctions?| K(eys?|nls?)| L(ocks?|dg|in[ke]|f|gts?|ndg|[np])|oop| M(all|dw|eadows|nr|anors|t(wy|ns?)?|w|ile|ohr|ews|sn)| N(eck|orth)| O(aks|ne|rch|val|pas)| P(a(rk|ss|th)|ike|r(om|ts?)|de|l(ns|z)?|k(e|s)?|kwys?|ts?)| R([id]|e(ach|st)|ow|i(se|v)|amp|ailroad|nch|R|ailway|pds|idge|u(n(way)?|e)|te)| S(h(ls?|rs?)|kwy|mt|outh|p(ur|ngs|ring)|u(permarket|bdivision)|t(a|n|rut)|[qt]s?)| T(er|hwy|rce|pke?|unnel|urn|r(l|fy)|ra(k|il|in))| U(pas|ns|ppr)| V((ie)?ws?|ista|l(ys?|gs?)|dct|st)| W(alk|ays?|ls?|est|oods|ynde?)| X(-ing|rd)| Yard|^$)( [SNEW]{1,2})?$|^([SNEW]{1,2} )?(Old )?(/d{1,4} [SNEW]|Broadway|MBTA|Railroad|Amtrak|I-|IN-|IA-|KY?-|US-|LA?-|M[DNSO]?-|N[VJYCD]?-|S[CDRH]?-|RI?-|TN-|V[AT]-|W(V|IS)-|C[RH]-|Runway|Place |Parkway|Access |Avenue of |Circle of |State |County |The |to |(Left )?E(xit( to:)?|ntry) )/",
  },
  "128.solutionLink": "W:Abbreviations_and_acronyms/USA",
  "129.enabled": true,
  "129.params": {
    "titleEN": "Incorrect Highway Name",
    "problemEN": "Highway names is invalid",
    "solutionEN": "Rename the Street or Alt Street to the current standard",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/Utah:.*(Ut Hwy |State Hwy |I- |U[Tt]-|SH-|State Rd |SR=|State Rte |^Rte |KY-0|U\.?[Ss]\.? [Hh](WY|wy|ighway))/"
  },
  "129.solutionLink": "W:Utah",
  "131.enabled": true,
  "131.params": {
    "titleEN": "Not Utah",
    "problem": "The segment is assigned to another state",
    "solutionEN": "Make sure you are editing in UT and change it",
    "template": "${state}",
    "regexp": "!/Utah/"
  },
  "131.solutionLink": "W:Creating_and_editing_road_segments#Address_Properties",
  "132.enabled": true,
  "132.params": {
    "titleEN": "Wrong name for City or County street",
    "problemEN": "CS and Cs are not read correctly by TTS or County Hwy Name is wrong",
    "solutionEN": "Check sources and change the street's name",
    "template": "${state}:${street}#${altStreet[#]}",
    "regexp": "/Utah:.*(Cs-|CS-|County Hwy |County Rd |Cr-|Co Rd |CH-|Ch-|Co Rte )/"
  },
  "132.solutionLink": "W:Highway_naming/USA",
  "134.enabled": true,
  "134.severity": "warning",
  "134.params": {
    "titleEN": "Alley not PLR",
    "problemEN": "Alleys should be set to the PLR Road Type",
    "solutionEN": "Change Road Type",
    "template": "${street}:${typeRank}",
    "regexp": "/.*(Alley| Aly):[^7]/"
  },
  "134.solutionLink": "W:Road_types/USA#Parking_Lot_Road",
  "136.enabled": true,
  "136.params": {
    "titleEN": "Wrong road type",
    "problemEN": "All US Highways should be at least Major Highway (except BUS, SPUR, LOOP)",
    "solutionEN": "Change the road type to Major Highway",
    "template": "${typeRank}:#${street}@#${altStreet[@#]}@",
    "regexp": "/^[1-9][^245]?:.*#(US Hwy |US-)[0-9]+( ALT| BYP| CONN| TRUCK| Scenic| [NSWE])*@/i"
  },
  "136.solutionLink": "W:Road_types/USA#Major_Highway",
  "138.enabled": true,
  "138.params": {
    "titleEN": "Bad TTS Street name",
    "problemEN": "Streets that start with St and Dr result in TTS reading Street or Drive",
    "solutionEN": "Add a period after Jr, St, Dr, or Rev where required",
    "template": "${street}#${altStreet[#]}",
    "regexp": "/((^| )(St|Dr)(\.$)?(?! ((CONN|Ext|Spur|[NEWS][EW]?)\\b|\/|\\())|(Jr|Rev)) /"
  },
  "138.solutionLink": "W:Abbreviations_and_acronyms/USA#Standard_suffix_abbreviations",
  "139.enabled": true,
  "139.params": {
    "titleEN": "Improper Cardinal Usage",
    "problemEN": "This name contains a cardinal direction (NEWS) which does not match wiki guidelines.",
    "solutionEN": "If this cardinal should be spoken as a direction by TTS, make sure it has space on either side of it. \n\ If this cardinal should be spoken by TTS as a letter, follow it with a period. \n\ All cardinals should be capitalized.",
    "template": "${street} ${altStreet[#]}",
    "regexp": "/(^| )([NEWS]?[news][NEWS]?|[\"']?([NnSs][EeWw]?|[EeWw])['\":-]|[\"']([NnSs][EeWw]?|[EeWw])['\":-]?)(\\b|\\d| |$)/"
  },
  "139.solutionLink": "W:Abbreviations_and_acronyms/USA#Standard_suffix_abbreviations",
  //Freeway lock
  "150.enabled": true,
  "150.params": {
  // {number} minimum lock level
  "n": 5,
  },
  //Major Highway lock
  "151.enabled": true,
  "151.params": {
  // {number} minimum lock level
  "n": 3,
  },
  //Minor Highway lock
  "152.enabled": true,
  "152.params": {
  // {number} minimum lock level
  "n": 2,
  },
  //Ramp lock
  "153.enabled": true,
  "153.params": {
    // {number} minimum lock level
    "n": 3,
  },
  //Primary Street lock
  "154.enabled": true,
  "154.params": {
  // {number} minimum lock level
  "n": 2,
  },
  //Default US checks
  "24.enabled": !0,
  "25.enabled": !0,
  "27.enabled": !0,
  "34.enabled": !0,
  "35.enabled": !0,
  "38.enabled": !0,
  "39.enabled": !0,
  "43.enabled": !0,
  "48.enabled": !0,
  "78.enabled": !0,
  "87.enabled": !0,
  "90.enabled": !0,
  "106.enabled": !0,
  "107.enabled": !0,
  "108.enabled": !0,
  "109.enabled": !0,
  "112.enabled": !1,
  "118.enabled": !0,
  "116.enabled": !0,
  "119.enabled": !0,
  "120.enabled": !0,
  "121.enabled": !0,
  "172.enabled": !0,
  "173.enabled": !0,
  "190.enabled": !0,
  "192.enabled": !0,
  "170.enabled": !0,
  "170.params": {
      "regexp": "/^(?!(to) [^a-z])((S|N|W|E) )?[a-z]/"
  },
  "171.enabled": true,
  "171.solutionLink": "W:Abbreviations_and_acronyms/USA#Standard_suffix_abbreviations",
  "171.params": {
    "regexp": "/((?!(\\bPhila|\\bPenna|.(\\bWash|\\bCmdr|\\bProf|\\bPres)|..(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|...(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|...(#| )[NEWSR])).{5}\\.|((?!(hila|enna|(\\bWash|\\bCmdr|\\bProf|\\bPres)|.(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|..(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|..(#| )[NEWSR])).{4}|(\\bhila|\\benna))\\.|((?!(ila|nna|(ash|mdr|rof|res)|(\\bAdm|\\bSte|\\bCpl|\\bMaj|\\bSgt|\\bRe[vc]|\\bR\\.R|\\bGov|\\bGen|\\bHon|\\bCpl)|.(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|.(#| )[NEWSR])).{3}|\\b(ila|nna|ash|mdr|rof|res))\\.|((?!(la|na|(sh|dr|of|es)|(dm|te|pl|aj|gt|e[vc]|\\.R|ov|en|on|pl)|(\\bSt|\\b[JSD]r|\\bLt|\\bFt)|(#| )[NEWSR])).{2}|\\b(la|na|sh|dr|of|es|dm|te|pl|aj|gt|e[vc]|\\.R|ov|en|on|pl))\\.|(#|^)[^NEWSR]?\\.)|(((?!\\b(D|O|L)).|#|^)\'(?![sl]\\b)|(#|^)\'s|(?!\\b(In|Na)t).{3}\'l|(#|^).{0,2}\'l)|(Dr|St)\\.(#|$)|,|;|\\\\|((?!\\.( |#|$|R))\\..|(?!\\.( .|#.|$|R\\.))\\..{2}|\\.R(#|$|\\.R))|[Ee]x(p|w)y\\b|\\b[Ee]x[dn]\\b|Tunl\\b|Long Is\\b|Brg\\b/",
    "problemEN": "The street name has incorrect abbreviation, or character",
    "solutionEN": "Check upper/lower case, a space before/after the abbreviation and the accordance with the abbreviation table. Remove any comma (,), backslash (\\), or semicolon (;)"
  },
};