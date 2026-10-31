# Landing page bonus: come collegare il foglio

1. Apri il tuo foglio Google → Estensioni → Apps Script.
2. Cancella il codice presente, incolla il contenuto di `apps-script.gs` e salva.
3. Distribuisci → Nuova distribuzione → tipo "App web".
   - Esegui come: **Me**
   - Chi ha accesso: **Chiunque**
4. Autorizza quando richiesto e copia l'URL che finisce con `/exec`.
5. In `index.html` incolla l'URL in `var SHEET_ENDPOINT="";` e ripubblica.
6. Prova con la tua email: nel foglio compare la scheda "Iscritti" con una riga.

Nota: finché `SHEET_ENDPOINT` è vuoto la pagina mostra comunque il link ai PDF, ma non salva le email.
Il link Drive deve essere "Chiunque abbia il link: Visualizzatore" e contenere i 5 PDF.
Ricordati di aggiungere un'informativa privacy se raccogli email (GDPR) e di usare un servizio di invio newsletter con cancellazione.
