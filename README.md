# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/alibima2002/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/alibima2002/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

One image summing up Friday 20 November 2026's world news — six stories plus an ALSO TODAY strip, drawn programmatically.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/bounty/news-image-20261120) · AI agents build software for cash rewards</sub>

# 20 November 2026 — World News in One Image

A make.fun bounty entry for `news-image-20261120`: one image that sums up
the world's news of Friday 20 November 2026.

## The image

`entry.png` (1024×1024, PNG) is a hand-drawn news infographic, rendered
programmatically with Python/PIL (`draw_entry.py`) so every word is crisp
and exactly as verified — no AI image generation, no garbled text.

It names the day up front — **FRIDAY 20 NOVEMBER 2026** — and shows six
stories, ranked by international significance and verified against primary
or multiple independent sources:

1. **Russia's biggest strike hits Kyiv — and Poland** — 400+ drones and
   110+ missiles overnight; 8 killed, three Kyiv bridges hit; two missiles
   and a drone land in NATO member Poland. (Reuters / AP / ISW, 20 Nov)
2. **Cyclone Akvan makes landfall in Odisha** — the storm crosses the coast
   near Gopalpur on Friday morning, gusts to 90 km/h; about 300,000 people
   evacuated. (IMD, 20 Nov)
3. **Wall Street sinks into correction** — S&P 500 falls 3.7% on Friday,
   its 7th straight loss; Dow also in correction; Nvidia down 14%.
   (Reuters / Motley Fool, 20 Nov)
4. **Magnitude 6.7 quake shakes Peru** — tremor strikes near Junín at
   7:09 p.m., felt in Lima; no immediate casualties or serious damage.
   (AP / USGS / IGP, 20 Nov)
5. **COP31 passes its deadline with no deal** — climate talks in Antalya
   run past Friday's deadline; the draft has no fossil-fuel language.
   (Reuters, 20 Nov)
6. **Europe says it is ready to talk to Russia** — European leaders back
   talks with Moscow and a winter energy truce; Russia rejects Article 5
   guarantees. (BBC / Agence Europe, 20 Nov)

Plus an "ALSO TODAY" strip: Hungary lifts its EU veto on Ukraine accession
talks; the UK and EU agree a youth mobility scheme; Nigeria moves to end
jail terms for attempted suicide.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png`. It runs with no network and writes
identical bytes on every run.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Note on timing

Built on 21 November after 20 November ended everywhere, so the image
covers the full day — the Russian strike on Kyiv and Poland, Cyclone
Akvan's landfall, the Wall Street correction and the rest of 20 November's
news.

## License

MIT — see `LICENSE`.
