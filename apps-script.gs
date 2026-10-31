// Google Apps Script: salva nome, email e data nel foglio "Iscritti".
function doPost(e) {
  var p = e.parameter || {};
  var email = String(p.email || '').trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return ContentService.createTextOutput('no');
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('Iscritti') || ss.insertSheet('Iscritti');
  if (sh.getLastRow() === 0) sh.appendRow(['Data', 'Nome', 'Email', 'Fonte', 'Consenso']);
  var emails = sh.getRange(2, 3, Math.max(sh.getLastRow() - 1, 1), 1).getValues().flat();
  if (emails.indexOf(email) === -1) {
    sh.appendRow([new Date(), String(p.nome || '').slice(0, 60), email, String(p.fonte || ''), String(p.consenso || '')]);
  }
  return ContentService.createTextOutput('ok');
}
