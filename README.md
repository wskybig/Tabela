# Formularz testowy

Projekt zawiera prosty formularz (imi, nazwisko, e-mail) dostpny pod https://wskybig.github.io/Tabela/.

## Scenariusze testowe

| Nr | Dane wejciowe | Kroki uytkownika | Oczekiwany wynik |
|----|----------------|------------------|------------------|
| 1  | Puste wszystkie pola | Kliknicie 'Wylij' | Komunikat bdu (formularz nie zostaje wysany) |
| 2  | Wpisane tylko imi | Kliknicie 'Wylij' | Komunikat bdu przy brakujcych polach |
| 3  | Imi i nazwisko, brak e-maila | Kliknicie 'Wylij' | Komunikat bdu przy polu e-mail |
| 4  | E-mail: user@ | Kliknicie 'Wylij' | Komunikat bdu 'niepoprawny e-mail' |
| 5  | Imi: Jan, Nazwisko: Kowalski, E-mail: jan.kowalski@mail.com | Kliknicie 'Wylij' | Formularz zostaje poprawnie wysany |
