# Formularz logowania (demo)

Krótki opis: Ten projekt zawiera prosty formularz „logowania”/rejestracji z polami:
- Imię
- Nazwisko
- E-mail
- Przycisk wysyłania

Komponent formularza znajduje się w `src/LoginForm.js`, a przykładowe podłączenie w `src/App.jsx` (możesz zaimportować i wyrenderować `<LoginForm />`).

## Testowanie

Poniżej przykładowa tabela scenariuszy testowych dla formularza.

| ID | Scenariusz | Kroki | Oczekiwany rezultat |
|----|------------|-------|----------------------|
| T1 | Render pól | Otwórz aplikację | Widzisz pola: Imię, Nazwisko, E-mail oraz przycisk „Wyślij”. |
| T2 | Walidacja pustego imienia | Zostaw Imię puste, wypełnij pozostałe pola, kliknij „Wyślij” | Komunikat błędu o wymaganym imieniu. |
| T3 | Walidacja pustego nazwiska | Zostaw Nazwisko puste, wypełnij pozostałe pola, kliknij „Wyślij” | Komunikat błędu o wymaganym nazwisku. |
| T4 | Walidacja e-mail | Wpisz niepoprawny e-mail (bez `@`), kliknij „Wyślij” | Komunikat błędu „Email jest niepoprawny”. |
| T5 | Sukces wysyłki | Wpisz poprawne Imię, Nazwisko i E-mail, kliknij „Wyślij” | Brak błędów; pojawia się potwierdzenie (alert/console) z danymi. |
| T6 | Czyszczenie błędów | Po błędzie popraw dane i kliknij „Wyślij” | Komunikaty błędów znikają. |

## Uruchamianie lokalnie

- `npm install`
- `npm start`

## Publikacja (GitHub Pages)

Repozytorium: `https://github.com/wskybig/Tabela`

- `npm run deploy` (zbuduje i opublikuje do gałęzi `gh-pages`)

