import type { Metadata } from "next";
import Link from "next/link";
import ThemeSelect from "../../theme-select";
import ImageGallery, { type GalleryImage } from "./image-gallery";

export const metadata: Metadata = {
  title: "Fresh First · Shaaf Shahzad",
  description:
    "The build story behind Fresh First, a fridge expiry tracker and low-power e-paper display.",
};

const concept: GalleryImage[] = [
  {
    src: "/blog/fresh-first/prototype-paper.jpeg",
    alt: "Fresh First v1 prototype sketch showing the enclosure, expiry-sorted display, power system, and fuel-gauge wiring.",
    width: 3024,
    height: 4032,
  },
];

const fridgeContext: GalleryImage[] = [
  {
    src: "/blog/fresh-first/open-fridge.JPG",
    alt: "Shaaf's open fridge, filled with groceries across its shelves and door compartments.",
    width: 3024,
    height: 4032,
  },
];

const packaging: GalleryImage[] = [
  {
    src: "/blog/fresh-first/cream-cheese-date.jpg",
    alt: "A faint expiry date printed around the curved lid of a cream cheese container.",
    width: 2000,
    height: 1206,
  },
];

const ocrTests: GalleryImage[] = [
  {
    src: "/blog/fresh-first/diagnostic-software.png",
    alt: "Fresh First passive-scanning diagnostic screen showing a juice carton, scan area, OCR confidence, and live transcript.",
    width: 1040,
    height: 680,
  },
  {
    src: "/blog/fresh-first/orange-juice-camera.jpg",
    alt: "Camera input showing the printed date on an orange juice container.",
    width: 2000,
    height: 1125,
  },
  {
    src: "/blog/fresh-first/orange-juice-threshold.jpg",
    alt: "Thresholded OCR diagnostic frame showing the difficulty of isolating the printed date.",
    width: 2000,
    height: 916,
  },
];

const websiteScreens: GalleryImage[] = [
  {
    src: "/blog/fresh-first/website-entry.png",
    alt: "Fresh First website entry screen with voice input and a text field for adding groceries and expiry dates.",
    width: 1171,
    height: 586,
  },
  {
    src: "/blog/fresh-first/website-items.png",
    alt: "Fresh First website showing groceries ordered by expiry date with edit and used actions.",
    width: 1185,
    height: 652,
  },
];

const displayPrototype: GalleryImage[] = [
  {
    src: "/blog/fresh-first/esp32-board.jpg",
    alt: "The ESP32 board used in the first Fresh First hardware prototype.",
    width: 1500,
    height: 2000,
  },
  {
    src: "/blog/fresh-first/epaper-module.jpg",
    alt: "The back of the 4.2-inch Waveshare e-paper display module.",
    width: 2000,
    height: 1500,
  },
  {
    src: "/blog/fresh-first/broken-pairing-layout.jpg",
    alt: "An early pairing code rendered partly outside the e-paper display layout.",
    width: 2000,
    height: 1500,
  },
  {
    src: "/blog/fresh-first/header-overlap-bug.jpg",
    alt: "An early e-paper layout with the header overlapping its divider.",
    width: 2000,
    height: 1500,
  },
];

const workingDisplay: GalleryImage[] = [
  {
    src: "/blog/fresh-first/working-fridge-list.jpg",
    alt: "A working expiry-sorted fridge list displayed on the e-paper prototype.",
    width: 2000,
    height: 1500,
  },
];

const pairedPrototype: GalleryImage[] = [
  {
    src: "/blog/fresh-first/paired-prototype.jpeg",
    alt: "An early Fresh First bench prototype with the live e-paper fridge list wired directly to its controller.",
    width: 5712,
    height: 4284,
  },
];

const portableHardware: GalleryImage[] = [
  {
    src: "/blog/fresh-first/fuel-gauge.jpg",
    alt: "The MAX17043 fuel-gauge board used to measure the prototype battery.",
    width: 920,
    height: 2000,
    cropTop: 135,
  },
  {
    src: "/blog/fresh-first/level-shifter.jpg",
    alt: "The bidirectional level shifter used on the prototype's I2C bus.",
    width: 2000,
    height: 1500,
  },
];

const enclosure: GalleryImage[] = [
  {
    src: "/blog/fresh-first/enclosure-product.png",
    alt: "Exterior render of the revised Fresh First enclosure.",
    width: 2000,
    height: 2000,
  },
  {
    src: "/blog/fresh-first/enclosure-exploded.png",
    alt: "Exploded render showing the revised Fresh First enclosure structure.",
    width: 2000,
    height: 2000,
  },
  {
    src: "/blog/fresh-first/enclosure-internal.png",
    alt: "Internal render showing the component carrier inside the Fresh First enclosure.",
    width: 2000,
    height: 2000,
  },
];

const finishedProduct: GalleryImage[] = [
  {
    src: "/blog/fresh-first/finished-product.png",
    alt: "The finished Fresh First prototype in its enclosure, showing an expiry-sorted grocery list and battery level on the e-paper display.",
    width: 900,
    height: 1200,
  },
];

export default function FreshFirstPost() {
  return (
    <main className="blog-page blog-article">
      <div className="blog-toolbar">
        <Link className="back-link" href="/blog">
          ← back to blog
        </Link>
        <ThemeSelect />
      </div>

      <header className="article-header">
        <h1 className="accent-cycle">fresh first</h1>
        <p className="entry-meta">september 22, 2026</p>
      </header>

      <article className="post" aria-label="Fresh First build story">
        <div className="post-intro">
          <p>
            every time i cleaned my fridge, i found food i meant to eat but
            forgot about until it expired. the date was on the package, but as
            soon as the food went into the fridge, that date basically
            disappeared.
          </p>
          <p>
            i started wondering: what if the fridge itself told me what to use
            next?
          </p>
        </div>

        <ImageGallery images={fridgeContext} />

        <section className="post-section">
          <h2>the first idea</h2>
          <p>
            the first version was simple. i would enter a product and its
            expiry date, then a small screen on the fridge would sort everything
            so the item i should use first was always at the top.
          </p>
          <div className="post-example" aria-label="Example expiry list">
            <span>milk — oct 27</span>
            <span>tortillas — nov 2</span>
            <span>bread — nov 4</span>
          </div>
          <p>
            i wanted the screen to be wireless, low power, and always visible.
            it did not need animation or constant interaction. that led me to
            e-paper: readable at a glance, no backlight, and able to retain an
            image between refreshes.
          </p>
          <ImageGallery images={concept} />
        </section>

        <section className="post-section">
          <h2>the input problem</h2>
          <p>
            the display was not actually the hardest part. the bigger question
            was whether i would consistently enter every grocery item. if adding
            something felt like a chore while unloading bags, the whole system
            would become useless within a week.
          </p>
          <p>
            my first attempt was passive camera scanning. i wanted to leave the
            camera open, move each product into view, and automatically detect
            its name and expiry date without taking individual photos. it
            sounded like the most frictionless approach.
          </p>
          <p>
            then i tested it on real packaging. one container said “26 oc 27.”
            another had faint printing wrapped around a curved lid. others had
            glare, batch numbers, bilingual text, or dates pressed into plastic.
            the camera could see the package, but reliably interpreting it was
            another matter.
          </p>
          <ImageGallery images={packaging} />
          <p>
            i added a diagnostic view to see what the ocr was actually reading.
            instead of clean dates, i saw changing fragments, nutrition-label
            text, and characters that were not present at all. the occasional
            successful scan made the feature feel promising, but not
            trustworthy.
          </p>
          <ImageGallery images={ocrTests} />
        </section>

        <section className="post-section">
          <h2>changing direction</h2>
          <p>
            that was the point where i stopped trying to rescue the camera
            feature. something that works perfectly 60% of the time is worse
            than a simple input that works every time, especially when an
            incorrect expiry date can quietly sit in the fridge list.
          </p>
          <p>
            i moved to continuous voice entry instead. press once, say each
            product and date, pause briefly between them, then review everything
            before saving.
          </p>
          <div className="post-example" aria-label="Example voice entry">
            <span>“orange juice, october 27th 2026.”</span>
            <span>“cream cheese, november 9th 2026.”</span>
            <span>“greek yogurt, september 25th 2026.”</span>
          </div>
          <p>
            voice recognition introduced its own problems. the browser version
            worked on my phone but failed in other browsers and on my laptop.
            that pushed the design toward recorded audio and consistent
            transcription, with manual entry kept as the dependable fallback.
          </p>
          <p>
            as the input flow improved, the app grew around it: accounts,
            private fridge data, editable products and dates, expiry warnings,
            automatic sorting, and a “used” action. the phone became the place
            for interaction while the fridge display stayed calm and glanceable.
          </p>
          <ImageGallery images={websiteScreens} />
        </section>

        <section className="post-section">
          <h2>building the physical display</h2>
          <p>
            next, i assembled the physical prototype: an esp32 connected to a
            4.2-inch e-paper display. the first challenge was getting the
            orientation, layout, and font sizing right. at one point, the
            pairing code was literally rendered halfway off the screen.
          </p>
          <ImageGallery images={displayPrototype} />
          <p>
            once the display worked, i added device pairing. the screen shows a
            short code, the user enters it on their phone, and the display
            becomes linked to their fridge.
          </p>
          <ImageGallery images={pairedPrototype} />
          <p>
            it now checks for changes every 15 seconds. add an item, correct a
            date, or mark something as used, and the list updates automatically.
            if nothing changed, the e-paper does not redraw. items that cannot
            fit are summarized with “+ 8 more — tap nfc.”
          </p>
          <ImageGallery images={workingDisplay} />
        </section>

        <section className="post-section">
          <h2>making it portable</h2>
          <p>
            making it portable meant adding another system around the system: a
            lipo battery, charging and protection board, 5v converter, fuel
            gauge, level shifter, switch, and a lot of wiring.
          </p>
          <p>
            after tracing voltages and fixing polarity issues, the display could
            finally show its own battery percentage.
          </p>
          <ImageGallery images={portableHardware} />
        </section>

        <section className="post-section">
          <h2>designing the enclosure</h2>
          <p>
            the enclosure went through the same process. the first print placed
            the display 5 mm too high. later revisions added magnets, proper
            charging-port alignment, wire clearance, and enough space for the
            new electronics.
          </p>
          <ImageGallery images={enclosure} />
        </section>

        <section className="post-section post-ending">
          <h2>where it is now</h2>
          <p>
            it is not the final product, but the original idea now works: look
            at the fridge and immediately know what to use next.
          </p>
          <ImageGallery images={finishedProduct} />
          <p>
            next, i want to finish the revised enclosure, improve the charging
            architecture, measure real battery life, and live with the prototype
            long enough to learn which parts are genuinely useful.
          </p>
          <p>if this were on your fridge, what would you want it to show?</p>
        </section>
      </article>
    </main>
  );
}
