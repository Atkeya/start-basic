# start-basic

A small sign-in page built to practise testing. It uses plain HTML, CSS and JavaScript, so there is nothing to install.

## What it does

- Shows a Sign In form with a username box, a password box and a button.
- Shows a red error message for empty boxes or a wrong login.
- Shows a green success message for the correct login.

## Try it

```
git clone https://github.com/Atkeya/start-basic.git
cd start-basic
```

Then open `index.html` in a browser.

Demo login: `demo` / `Password123`. These are fake details for practice only. A real app must never keep passwords in browser JavaScript.

## Manual test checks

I tested the page by hand with these 9 checks. All 9 pass now. Checks 2 and 3 failed before the fix (see below).

| # | Username | Password | Action | Expected result | Result |
| --- | --- | --- | --- | --- | --- |
| 1 | demo | Password123 | Click Sign In | Success message | Pass |
| 2 | demo | wrong | Click Sign In | Error: invalid username or password | Pass (failed before fix) |
| 3 | nobody | Password123 | Click Sign In | Error: invalid username or password | Pass (failed before fix) |
| 4 | empty | Password123 | Click Sign In | Error: username cannot be empty | Pass |
| 5 | demo | empty | Click Sign In | Error: password cannot be empty | Pass |
| 6 | empty | empty | Click Sign In | Error: both fields needed | Pass |
| 7 | spaces only | spaces only | Click Sign In | Error: both fields needed | Pass |
| 8 | demo | Password123 | Look at the password box | Dots shown, not letters | Pass |
| 9 | demo | Password123 | Press Enter in the password box | Same as clicking the button | Pass |

## Bug found and fixed

**Bug:** the page showed "Signed in Successfully!" for any non-empty username and password. I tried `demo` / `wrong` and `nobody` / `Password123`, and both signed in. Expected: an error message.

**Cause:** the code only checked whether the boxes were empty. It never checked whether the login was correct.

**Fix:** I added two fake credentials and one extra check that shows an error when the login does not match. After the fix I ran all 9 checks again.

## Other observations

- The error messages say "User Name" and "PassCode", but the labels say "Username" and "Password". The wording does not match.
- The code trims spaces from the password. Real systems usually do not, because a space can be part of a password. This is a design question.

## Not tested yet

- Very long input, and special characters.
- Different browsers and phone screens.
- Colour contrast of the red and green text.
- Repeated wrong attempts (there is no lockout).

## Next steps

- Turn the 9 checks into automated Playwright tests (in-progress).

## Author

Practice project by Atkeya Fahmida.
