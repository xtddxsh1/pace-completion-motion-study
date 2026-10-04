# Pace completion motion study

An original, fictional sports-interface sample: a two-second vector completion state with editable paths, colours and keyframes. It is not a client case or a production native-app integration.

[Open the existing browser demo](https://pace-motion-study.navy-shark-7411.chatgpt.site/)

## Use the source

- `completion.json`: 240 x 240 Lottie animation, 60 fps, 120 frames, transparent background, no image assets.
- `generate.cjs`: original paths, colours and timing; `node generate.cjs` regenerates the JSON.
- `index.html`: responsive browser preview, replay, frame inspection and reduced-motion support.
- `source.zip`: the original portable source bundle; its README predates this repository's optional service section.
- `vendor/package/build/player/lottie_light.min.js`: unmodified lottie-web 5.13.0.
- `vendor/package/LICENSE.md`: the player's MIT licence.
- `test-result.json`: the recorded checks performed on the existing demo.

With Python installed, run `python -m http.server 8000` in the source directory and open `http://localhost:8000`. Do not rely on `file://` JSON loading. The project has no backend or analytics.

## Verification and limits

The existing preview passed nine browser/JSON checks: SVG loading, distinct first/completed frames, frame seeking, one-shot replay, JSON download equality, a 390px layout, reduced-motion behaviour, absence of JavaScript errors/remote requests, and the two-second vector structure. Desktop and mobile-width screenshots were inspected.

This verifies browser SVG playback with lottie-web 5.13.0. Native iOS/Android players, Figma, PAG, Spine, Rive and customer-app integration have not been verified. Workout values and branding are fictional. The recorded test file states what was checked; it does not represent user testing or customer acceptance.

## Optional adaptation pilot: USD25

Need this existing completion state adjusted for your interface? After reviewing your authorised reference and target player, a USD25 pilot can cover up to three colour changes and one timing adjustment, retaining the existing vector geometry.

Delivery: one editable Lottie JSON, updated generator, browser preview, checks against the agreed lottie-web SVG playback requirement, and one consolidated revision within the agreed scope. Proposed first delivery is two business days after we agree the inputs, scope, acceptance checks, payment method/fees and start date. Payment is proposed after acceptance, within seven calendar days; final terms and a supported receiving route must be confirmed in writing before work starts.

Open an issue with the requested changes and player/version for a fit check. Keep credentials, private files and personal data out of public issues. A larger redesign or native integration needs separate review. There is no checkout on this repository and no payment is requested for the initial fit check. The MIT sample remains free to use and adapt yourself.

## Rights and rollback

Original artwork and application code: MIT, see `LICENSE`. The third-party player retains its own MIT licence. No customer assets or external artwork are included. This work uses Codex for coding and testing and does not claim independent human review.

The source publication snapshot is commit `f00536598a8bf8d0802cb09b338ca6b130dc27ae`. Restore files from that revision for rollback; the preceding automatic repository-initialisation commit contains only a placeholder README.
